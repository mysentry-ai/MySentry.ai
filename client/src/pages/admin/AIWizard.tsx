import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Loader2,
  Check,
  Lightbulb,
  FileText,
  PenTool,
  Search,
  ImagePlus,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { toast } from "sonner";

interface AIWizardProps {
  token: string;
}

const STEPS = [
  { id: 1, title: "Topic Setup", icon: Lightbulb, description: "Define your topic and audience" },
  { id: 2, title: "AI Topics", icon: Sparkles, description: "Choose from AI-suggested topics" },
  { id: 3, title: "Outline", icon: FileText, description: "Review and edit the outline" },
  { id: 4, title: "Draft", icon: PenTool, description: "Generate the full article" },
  { id: 5, title: "SEO Pack", icon: Search, description: "Auto-generate SEO metadata" },
  { id: 6, title: "Images", icon: ImagePlus, description: "Generate hero and inline images" },
  { id: 7, title: "Review", icon: ShieldCheck, description: "Compliance check and publish" },
];

const ICP_OPTIONS = [
  "Seniors living independently",
  "Adult children caring for aging parents",
  "Families with elderly members",
  "Solo hikers, runners, and outdoor enthusiasts",
  "Women concerned about personal safety",
  "Lone workers in remote or hazardous environments",
  "Employers managing remote workforce safety",
  "Healthcare providers and home health agencies",
  "Safety-conscious individuals",
];

const GOAL_OPTIONS = [
  "Drive trial signups",
  "Build brand awareness",
  "Educate on safety technology",
  "SEO traffic growth",
  "Thought leadership",
  "Product feature highlight",
  "Customer success story",
];

export default function AIWizard({ token }: AIWizardProps) {
  const [, navigate] = useLocation();
  const headers = useMemo(() => ({ "x-blog-admin-token": token }), [token]);

  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [icp, setIcp] = useState("");
  const [goal, setGoal] = useState("");
  const [customTopic, setCustomTopic] = useState("");

  const [suggestedTopics, setSuggestedTopics] = useState<{ title: string; description: string }[]>([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const [outline, setOutline] = useState<{ heading: string; level: string; notes: string }[]>([]);
  const [outlineText, setOutlineText] = useState("");

  const [draft, setDraft] = useState<any>(null);

  const [seo, setSeo] = useState<any>(null);

  const [heroImage, setHeroImage] = useState<{ url: string; altText: string } | null>(null);

  const [complianceResult, setComplianceResult] = useState<any>(null);

  const categoriesQuery = trpc.blog.categories.list.useQuery(undefined, {
    trpc: { context: { headers } },
  });

  const suggestTopicsMutation = trpc.blog.ai.suggestTopics.useMutation();
  const generateOutlineMutation = trpc.blog.ai.generateOutline.useMutation();
  const generateDraftMutation = trpc.blog.ai.generateDraft.useMutation();
  const generateSEOMutation = trpc.blog.ai.generateSEO.useMutation();
  const generateImageMutation = trpc.blog.ai.generateImage.useMutation();
  const complianceCheckMutation = trpc.blog.ai.complianceCheck.useMutation();
  const createPostMutation = trpc.blog.admin.create.useMutation();

  const categories = categoriesQuery.data || [];
  const progress = (step / STEPS.length) * 100;

  const handleSuggestTopics = async () => {
    if (!category || !icp || !goal) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const result = await suggestTopicsMutation.mutateAsync(
        { category, icp, goal },
        { trpc: { context: { headers } } } as any
      );
      setSuggestedTopics(result.topics || []);
      setStep(2);
    } catch (err: any) {
      toast.error(err.message || "Failed to suggest topics");
    }
  };

  const handleGenerateOutline = async () => {
    const topic = selectedTopic || customTopic;
    if (!topic) {
      toast.error("Select or enter a topic");
      return;
    }
    try {
      const result = await generateOutlineMutation.mutateAsync(
        { topic, category, icp, goal },
        { trpc: { context: { headers } } } as any
      );
      setOutline(result.outline || []);
      setOutlineText(
        (result.outline || [])
          .map((item: any) => `${item.level === "H3" ? "  " : ""}${item.heading} — ${item.notes}`)
          .join("\n")
      );
      setStep(3);
    } catch (err: any) {
      toast.error(err.message || "Failed to generate outline");
    }
  };

  const handleGenerateDraft = async () => {
    const topic = selectedTopic || customTopic;
    try {
      const result = await generateDraftMutation.mutateAsync(
        { topic, category, icp, goal, outline: outlineText, wordCount: 1800 },
        { trpc: { context: { headers } } } as any
      );
      setDraft(result);
      setStep(4);
    } catch (err: any) {
      toast.error(err.message || "Failed to generate draft");
    }
  };

  const handleGenerateSEO = async () => {
    if (!draft) return;
    try {
      setSeo(draft.seo);
      setStep(5);
    } catch (err: any) {
      toast.error(err.message || "Failed");
    }
  };

  const handleGenerateHeroImage = async () => {
    if (!draft) return;
    try {
      const result = await generateImageMutation.mutateAsync(
        {
          title: draft.title,
          icp,
          category,
          imageType: "hero",
          concept: draft.image_plan?.hero?.concept || `Hero image for: ${draft.title}`,
        },
        { trpc: { context: { headers } } } as any
      );
      setHeroImage({ url: result.url || "", altText: result.altText || "" });
      setStep(6);
    } catch (err: any) {
      toast.error(err.message || "Image generation failed");
    }
  };

  const handleComplianceCheck = async () => {
    if (!draft) return;
    try {
      const result = await complianceCheckMutation.mutateAsync(
        { content: draft.content_html },
        { trpc: { context: { headers } } } as any
      );
      setComplianceResult(result);
      setStep(7);
    } catch (err: any) {
      toast.error(err.message || "Compliance check failed");
    }
  };

  const handleCreatePost = async (publishNow: boolean) => {
    if (!draft || !seo) return;
    const slug = seo.slug_suggestions?.[0] || draft.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 100);
    const catId = categories.find((c) => c.name.toLowerCase() === category.toLowerCase())?.id || null;

    try {
      const result = await createPostMutation.mutateAsync(
        {
          title: draft.title,
          slug,
          categoryId: catId,
          status: publishNow ? "published" : "draft",
          excerpt: draft.excerpt,
          heroImageUrl: heroImage?.url || undefined,
          heroImageAlt: heroImage?.altText || undefined,
          heroImageSource: heroImage ? "ai" : undefined,
          contentHtml: draft.content_html,
          metaTitle: seo.meta_title,
          metaDescription: seo.meta_description,
          focusKeyword: seo.focus_keyword,
          secondaryKeywords: seo.secondary_keywords,
          tags: seo.tags,
        },
        { trpc: { context: { headers } } } as any
      );
      toast.success(publishNow ? "Post published!" : "Draft saved!");
      navigate(`~/admin/blog/edit/${result.id}`);
    } catch (err: any) {
      toast.error(err.message || "Failed to create post");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("~/admin/blog")}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
            <div>
              <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#4CAF50]" />
                AI Blog Wizard
              </h1>
              <p className="text-sm text-gray-500">Step {step} of {STEPS.length}: {STEPS[step - 1].title}</p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-3">
          <Progress value={progress} className="h-1.5" />
        </div>
      </div>

      {/* Step indicators */}
      <div className="bg-white border-b px-6 py-3 overflow-x-auto">
        <div className="max-w-5xl mx-auto flex gap-1">
          {STEPS.map((s) => (
            <button
              key={s.id}
              onClick={() => s.id <= step && setStep(s.id)}
              disabled={s.id > step}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                s.id === step
                  ? "bg-[#386758] text-white"
                  : s.id < step
                  ? "bg-[#e8f5e9] text-[#386758] cursor-pointer hover:bg-[#c8e6c9]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {s.id < step ? <Check className="w-3 h-3" /> : <s.icon className="w-3 h-3" />}
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto p-6">
        {/* Step 1: Topic Setup */}
        {step === 1 && (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-5">
                <div>
                  <Label className="font-medium">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="mt-1 bg-white">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="General">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="font-medium">Target Audience (ICP)</Label>
                  <Select value={icp} onValueChange={setIcp}>
                    <SelectTrigger className="mt-1 bg-white">
                      <SelectValue placeholder="Who is this for?" />
                    </SelectTrigger>
                    <SelectContent>
                      {ICP_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="font-medium">Primary Goal</Label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger className="mt-1 bg-white">
                      <SelectValue placeholder="What's the goal?" />
                    </SelectTrigger>
                    <SelectContent>
                      {GOAL_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="font-medium">Or enter a specific topic</Label>
                  <Input
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    placeholder="e.g., How Fall Detection Saves Lives for Solo Hikers"
                    className="mt-1 bg-white"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={handleSuggestTopics}
                    disabled={suggestTopicsMutation.isPending}
                    className="bg-[#386758] hover:bg-[#2d5446] text-white"
                  >
                    {suggestTopicsMutation.isPending ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    Suggest 10 Topics
                  </Button>
                  {customTopic && (
                    <Button
                      variant="outline"
                      onClick={() => { setSelectedTopic(customTopic); setStep(2); handleGenerateOutline(); }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Skip to Outline
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Topic Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Choose a Topic</h2>
            <p className="text-gray-500">Select one of the AI-suggested topics or use your own.</p>
            <div className="grid gap-3">
              {suggestedTopics.map((topic, i) => (
                <Card
                  key={i}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedTopic === topic.title ? "ring-2 ring-[#386758] bg-[#e8f5e9]/30" : ""
                  }`}
                  onClick={() => setSelectedTopic(topic.title)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                        selectedTopic === topic.title ? "border-[#386758] bg-[#386758]" : "border-gray-300"
                      }`}>
                        {selectedTopic === topic.title && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{topic.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{topic.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateOutline}
                disabled={!selectedTopic || generateOutlineMutation.isPending}
                className="bg-[#386758] hover:bg-[#2d5446] text-white"
              >
                {generateOutlineMutation.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4 mr-2" />
                )}
                Generate Outline
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Outline */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Review Outline</h2>
            <p className="text-gray-500">Edit the outline before generating the full draft.</p>
            <Card>
              <CardContent className="p-4">
                {outline.map((item, i) => (
                  <div key={i} className={`py-2 ${item.level === "H3" ? "pl-6" : ""}`}>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{item.level}</Badge>
                      <span className="font-medium text-gray-900">{item.heading}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 ml-12">{item.notes}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <div>
              <Label className="font-medium">Edit outline (plain text)</Label>
              <Textarea
                value={outlineText}
                onChange={(e) => setOutlineText(e.target.value)}
                className="mt-1 bg-white font-mono text-sm"
                rows={10}
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateDraft}
                disabled={generateDraftMutation.isPending}
                className="bg-[#386758] hover:bg-[#2d5446] text-white"
              >
                {generateDraftMutation.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <PenTool className="w-4 h-4 mr-2" />
                )}
                Generate Full Draft
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Draft Review */}
        {step === 4 && draft && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Review Draft</h2>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{draft.title}</h3>
                <p className="text-gray-500 italic mb-4">{draft.excerpt}</p>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: draft.content_html }}
                />
              </CardContent>
            </Card>
            {draft.internal_links?.length > 0 && (
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Suggested Internal Links</h4>
                  {draft.internal_links.map((link: any, i: number) => (
                    <div key={i} className="text-sm py-1">
                      <span className="text-[#4CAF50] font-medium">{link.anchor_text}</span>
                      <span className="text-gray-400 ml-2">{link.url}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(3)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateSEO}
                className="bg-[#386758] hover:bg-[#2d5446] text-white"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Continue to SEO
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: SEO Pack */}
        {step === 5 && seo && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">SEO Pack</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label className="text-sm text-gray-500">Meta Title</Label>
                  <p className="font-medium">{seo.meta_title}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Meta Description</Label>
                  <p className="text-sm text-gray-700">{seo.meta_description}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Focus Keyword</Label>
                  <Badge className="bg-[#e8f5e9] text-[#386758]">{seo.focus_keyword}</Badge>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Secondary Keywords</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {seo.secondary_keywords?.map((kw: string, i: number) => (
                      <Badge key={i} variant="outline" className="text-xs">{kw}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Tags</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {seo.tags?.map((tag: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Slug Suggestions</Label>
                  <div className="space-y-1 mt-1">
                    {seo.slug_suggestions?.map((slug: string, i: number) => (
                      <p key={i} className="text-sm font-mono text-gray-600">/blog/{slug}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(4)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateHeroImage}
                disabled={generateImageMutation.isPending}
                className="bg-[#386758] hover:bg-[#2d5446] text-white"
              >
                {generateImageMutation.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <ImagePlus className="w-4 h-4 mr-2" />
                )}
                Generate Hero Image
              </Button>
              <Button
                variant="outline"
                onClick={() => { setStep(6); handleComplianceCheck(); }}
              >
                Skip Image <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Images */}
        {step === 6 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Hero Image</h2>
            {heroImage ? (
              <Card>
                <CardContent className="p-4">
                  <img src={heroImage.url} alt={heroImage.altText} className="w-full h-64 object-cover rounded-lg" />
                  <p className="text-sm text-gray-500 mt-2">Alt: {heroImage.altText}</p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-400">No hero image generated. You can add one later in the editor.</p>
                </CardContent>
              </Card>
            )}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(5)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleComplianceCheck}
                disabled={complianceCheckMutation.isPending}
                className="bg-[#386758] hover:bg-[#2d5446] text-white"
              >
                {complianceCheckMutation.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <ShieldCheck className="w-4 h-4 mr-2" />
                )}
                Run Compliance Check
              </Button>
            </div>
          </div>
        )}

        {/* Step 7: Review & Publish */}
        {step === 7 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Final Review</h2>

            {complianceResult && (
              <Card>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-medium text-gray-900">Compliance Checks</h3>
                  {complianceResult.checks?.map((check: any, i: number) => (
                    <div key={i} className="flex items-center gap-3 py-1">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        check.passed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}>
                        {check.passed ? <Check className="w-3 h-3" /> : "!"}
                      </div>
                      <div>
                        <span className="font-medium text-sm">{check.name}</span>
                        <p className="text-xs text-gray-500">{check.message}</p>
                      </div>
                    </div>
                  ))}
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    complianceResult.allPassed ? "bg-green-50 text-green-800" : "bg-yellow-50 text-yellow-800"
                  }`}>
                    {complianceResult.allPassed ? "All checks passed!" : "Some checks need attention. You can still publish."}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{draft?.title}</h3>
                <p className="text-sm text-gray-500">{draft?.excerpt}</p>
                {heroImage && (
                  <img src={heroImage.url} alt={heroImage.altText} className="w-full h-48 object-cover rounded-lg mt-3" />
                )}
              </CardContent>
            </Card>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(6)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                variant="outline"
                onClick={() => handleCreatePost(false)}
                disabled={createPostMutation.isPending}
              >
                Save as Draft
              </Button>
              <Button
                onClick={() => handleCreatePost(true)}
                disabled={createPostMutation.isPending}
                className="bg-[#386758] hover:bg-[#2d5446] text-white"
              >
                {createPostMutation.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Rocket className="w-4 h-4 mr-2" />
                )}
                Publish Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
