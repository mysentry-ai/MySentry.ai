import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
  { id: 1, title: "Setup", icon: Lightbulb },
  { id: 2, title: "Topics", icon: Sparkles },
  { id: 3, title: "Outline", icon: FileText },
  { id: 4, title: "Draft", icon: PenTool },
  { id: 5, title: "SEO", icon: Search },
  { id: 6, title: "Images", icon: ImagePlus },
  { id: 7, title: "Publish", icon: ShieldCheck },
];

// Category-specific ICP options
const ICP_BY_CATEGORY: Record<string, string[]> = {
  "Senior Care": [
    "Seniors living independently",
    "Adult children caring for aging parents",
    "Families with elderly members",
    "Home health aides and caregivers",
    "Assisted living facility managers",
  ],
  "Women's Safety": [
    "Women living alone",
    "Women who commute or travel solo",
    "College-age women",
    "Women in urban environments",
    "Parents of young women",
  ],
  "Workplace Safety": [
    "Lone workers in remote or hazardous environments",
    "Employers managing remote workforce safety",
    "Construction and field workers",
    "Healthcare workers on home visits",
    "Warehouse and logistics workers",
  ],
  "Outdoor & Active": [
    "Solo hikers and trail runners",
    "Outdoor adventure enthusiasts",
    "Cyclists and mountain bikers",
    "Runners training alone",
    "Backcountry skiers and climbers",
  ],
  General: [
    "Safety-conscious individuals",
    "Families wanting peace of mind",
    "People with chronic health conditions",
    "First responders and their families",
    "Frequent travelers",
  ],
};

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

  const categoriesQuery = trpc.blog.categories.list.useQuery();

  const suggestTopicsMutation = trpc.blog.ai.suggestTopics.useMutation();
  const generateOutlineMutation = trpc.blog.ai.generateOutline.useMutation();
  const generateDraftMutation = trpc.blog.ai.generateDraft.useMutation();
  const generateImageMutation = trpc.blog.ai.generateImage.useMutation();
  const complianceCheckMutation = trpc.blog.ai.complianceCheck.useMutation();
  const createPostMutation = trpc.blog.admin.create.useMutation();

  const categories = categoriesQuery.data || [];
  const progress = (step / STEPS.length) * 100;

  // Get ICP options based on selected category
  const icpOptions = useMemo(() => {
    if (!category) return ICP_BY_CATEGORY["General"];
    return ICP_BY_CATEGORY[category] || ICP_BY_CATEGORY["General"];
  }, [category]);

  // Reset ICP when category changes
  const handleCategoryChange = (val: string) => {
    setCategory(val);
    setIcp(""); // Reset ICP when category changes
  };

  const handleSuggestTopics = async () => {
    if (!category || !icp || !goal) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const result = await suggestTopicsMutation.mutateAsync(
        { category, icp, goal }
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
        { topic, category, icp, goal }
      );
      setOutline(result.outline || []);
      setOutlineText(
        (result.outline || [])
          .map((item: any) => `${item.level === "H3" ? "  " : ""}${item.heading} - ${item.notes}`)
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
        { topic, category, icp, goal, outline: outlineText, wordCount: 1800 }
      );
      setDraft(result);
      setStep(4);
    } catch (err: any) {
      toast.error(err.message || "Failed to generate draft");
    }
  };

  const handleGenerateSEO = async () => {
    if (!draft) return;
    setSeo(draft.seo);
    setStep(5);
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
        }
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
        { content: draft.content_html }
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
        }
      );
      toast.success(publishNow ? "Post published!" : "Draft saved!");
      navigate(`~/admin/blog/edit/${result.id}`);
    } catch (err: any) {
      toast.error(err.message || "Failed to create post");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("~/admin/blog")}
              className="text-[#5C5C5C] hover:text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
            </Button>
            <div className="h-5 w-px bg-[#E5E7EB]" />
            <div>
              <h1 className="text-lg font-bold text-[#232020] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#6AD990]" />
                AI Blog Wizard
              </h1>
            </div>
          </div>
          <span className="text-sm text-[#5C5C5C]">Step {step} of {STEPS.length}</span>
        </div>
      </div>

      {/* Step Progress Bar */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-1">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1">
                <button
                  onClick={() => s.id <= step && setStep(s.id)}
                  disabled={s.id > step}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all w-full justify-center ${
                    s.id === step
                      ? "bg-[#6AD990] text-[#232020]"
                      : s.id < step
                      ? "bg-[#e8f5e9] text-[#232020] cursor-pointer hover:bg-[#d0ebd6]"
                      : "bg-[#F5F7F7] text-[#9CA3AF] cursor-not-allowed"
                  }`}
                >
                  {s.id < step ? <Check className="w-3.5 h-3.5" /> : <s.icon className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{s.title}</span>
                </button>
                {i < STEPS.length - 1 && (
                  <div className={`w-4 h-0.5 mx-0.5 shrink-0 ${s.id < step ? "bg-[#6AD990]" : "bg-[#E5E7EB]"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto p-6">
        {/* Step 1: Topic Setup */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#232020]">Define Your Topic</h2>
              <p className="text-sm text-[#5C5C5C] mt-1">Set the category, audience, and goal to generate relevant topic ideas.</p>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-5">
              <div>
                <Label className="text-sm font-semibold text-[#232020]">Category</Label>
                <Select value={category} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="mt-1.5 !bg-white border-[#E5E7EB] text-[#232020] rounded-lg">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#E5E7EB]">
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
                <Label className="text-sm font-semibold text-[#232020]">Target Audience (ICP)</Label>
                <Select value={icp} onValueChange={setIcp}>
                  <SelectTrigger className="mt-1.5 !bg-white border-[#E5E7EB] text-[#232020] rounded-lg">
                    <SelectValue placeholder="Who is this for?" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#E5E7EB]">
                    {icpOptions.map((opt: string) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {category && (
                  <p className="text-xs text-[#9CA3AF] mt-1.5">Showing audience options for {category}</p>
                )}
              </div>

              <div>
                <Label className="text-sm font-semibold text-[#232020]">Primary Goal</Label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger className="mt-1.5 !bg-white border-[#E5E7EB] text-[#232020] rounded-lg">
                    <SelectValue placeholder="What's the goal?" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#E5E7EB]">
                    {GOAL_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-2 border-t border-[#E5E7EB]">
                <Label className="text-sm font-semibold text-[#232020]">Or enter a specific topic</Label>
                <Input
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="e.g., How Fall Detection Saves Lives for Solo Hikers"
                  className="mt-1.5 !bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleSuggestTopics}
                disabled={suggestTopicsMutation.isPending}
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
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
                  onClick={() => { setSelectedTopic(customTopic); handleGenerateOutline(); }}
                  className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
                >
                  Skip to Outline <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Topic Selection */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-[#232020]">Choose a Topic</h2>
              <p className="text-sm text-[#5C5C5C] mt-1">Select one of the AI-suggested topics or use your own.</p>
            </div>
            <div className="grid gap-3">
              {suggestedTopics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTopic(topic.title)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedTopic === topic.title
                      ? "border-[#6AD990] bg-[#e8f5e9]/40"
                      : "border-[#E5E7EB] bg-white hover:border-[#6AD990]/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                      selectedTopic === topic.title ? "border-[#6AD990] bg-[#6AD990]" : "border-[#D2D9D9]"
                    }`}>
                      {selectedTopic === topic.title && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#232020] text-sm">{topic.title}</h3>
                      <p className="text-xs text-[#5C5C5C] mt-1">{topic.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setStep(1)} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateOutline}
                disabled={!selectedTopic || generateOutlineMutation.isPending}
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
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
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-[#232020]">Review Outline</h2>
              <p className="text-sm text-[#5C5C5C] mt-1">Edit the outline before generating the full draft.</p>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
              {outline.map((item, i) => (
                <div key={i} className={`py-2.5 ${item.level === "H3" ? "pl-6" : ""} ${i > 0 ? "border-t border-[#F5F7F7]" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#9CA3AF] bg-[#F5F7F7] px-1.5 py-0.5 rounded">{item.level}</span>
                    <span className="font-semibold text-[#232020] text-sm">{item.heading}</span>
                  </div>
                  <p className="text-xs text-[#5C5C5C] mt-1 ml-10">{item.notes}</p>
                </div>
              ))}
            </div>
            <div>
              <Label className="text-sm font-semibold text-[#232020]">Edit outline (plain text)</Label>
              <Textarea
                value={outlineText}
                onChange={(e) => setOutlineText(e.target.value)}
                className="mt-1.5 bg-white border-[#E5E7EB] text-[#232020] font-mono text-sm rounded-lg"
                rows={10}
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setStep(2)} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateDraft}
                disabled={generateDraftMutation.isPending}
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
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
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-[#232020]">Review Draft</h2>
              <p className="text-sm text-[#5C5C5C] mt-1">Review the generated article before proceeding.</p>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <h3 className="text-2xl font-bold text-[#232020] mb-2">{draft.title}</h3>
              <p className="text-[#5C5C5C] italic mb-4 text-sm">{draft.excerpt}</p>
              <div
                className="prose prose-lg max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: draft.content_html }}
              />
            </div>
            {draft.internal_links?.length > 0 && (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <h4 className="font-semibold text-[#232020] text-sm mb-3">Suggested Internal Links</h4>
                {draft.internal_links.map((link: any, i: number) => (
                  <div key={i} className="text-sm py-1.5 flex items-center gap-2">
                    <span className="text-[#6AD990] font-medium">{link.anchor_text}</span>
                    <span className="text-[#9CA3AF]">{link.url}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setStep(3)} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateSEO}
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Continue to SEO
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: SEO Pack */}
        {step === 5 && seo && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-[#232020]">SEO Pack</h2>
              <p className="text-sm text-[#5C5C5C] mt-1">Auto-generated SEO metadata for your post.</p>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-5">
              <div>
                <Label className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Meta Title</Label>
                <p className="font-semibold text-[#232020] mt-1">{seo.meta_title}</p>
              </div>
              <div>
                <Label className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Meta Description</Label>
                <p className="text-sm text-[#232020] mt-1">{seo.meta_description}</p>
              </div>
              <div>
                <Label className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Focus Keyword</Label>
                <div className="mt-1">
                  <Badge className="bg-[#e8f5e9] text-[#232020] border-0 rounded-md">{seo.focus_keyword}</Badge>
                </div>
              </div>
              <div>
                <Label className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Secondary Keywords</Label>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {seo.secondary_keywords?.map((kw: string, i: number) => (
                    <Badge key={i} variant="outline" className="text-xs text-[#5C5C5C] border-[#E5E7EB] rounded-md">{kw}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Tags</Label>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {seo.tags?.map((tag: string, i: number) => (
                    <Badge key={i} className="text-xs bg-[#F5F7F7] text-[#232020] border-0 rounded-md">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Slug Suggestions</Label>
                <div className="space-y-1 mt-1.5">
                  {seo.slug_suggestions?.map((slug: string, i: number) => (
                    <p key={i} className="text-sm text-[#232020] font-mono bg-[#F5F7F7] px-3 py-1.5 rounded-lg">/blog/{slug}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setStep(4)} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleGenerateHeroImage}
                disabled={generateImageMutation.isPending}
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
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
                className="border-[#E5E7EB] text-[#5C5C5C] hover:bg-[#F5F7F7] rounded-lg"
              >
                Skip Image <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Images */}
        {step === 6 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-[#232020]">Hero Image</h2>
              <p className="text-sm text-[#5C5C5C] mt-1">Review the generated hero image for your post.</p>
            </div>
            {heroImage ? (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <img src={heroImage.url} alt={heroImage.altText} className="w-full h-64 object-cover rounded-xl" />
                <p className="text-xs text-[#5C5C5C] mt-3">Alt text: {heroImage.altText}</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-10 text-center">
                <p className="text-[#9CA3AF]">No hero image generated. You can add one later in the editor.</p>
              </div>
            )}
            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setStep(5)} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleComplianceCheck}
                disabled={complianceCheckMutation.isPending}
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
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
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-[#232020]">Final Review</h2>
              <p className="text-sm text-[#5C5C5C] mt-1">Review compliance results and publish your post.</p>
            </div>

            {complianceResult && (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-3">
                <h3 className="font-semibold text-[#232020] text-sm">Compliance Checks</h3>
                {complianceResult.checks?.map((check: any, i: number) => (
                  <div key={i} className="flex items-center gap-3 py-1.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      check.passed ? "bg-[#e8f5e9] text-[#2e7d32]" : "bg-[#FFF8E1] text-[#F57F17]"
                    }`}>
                      {check.passed ? <Check className="w-3 h-3" /> : "!"}
                    </div>
                    <div>
                      <span className="font-medium text-sm text-[#232020]">{check.name}</span>
                      <p className="text-xs text-[#5C5C5C]">{check.message}</p>
                    </div>
                  </div>
                ))}
                <div className={`p-3 rounded-lg text-sm font-medium ${
                  complianceResult.allPassed ? "bg-[#e8f5e9] text-[#2e7d32]" : "bg-[#FFF8E1] text-[#F57F17]"
                }`}>
                  {complianceResult.allPassed ? "All checks passed!" : "Some checks need attention. You can still publish."}
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <h3 className="text-lg font-bold text-[#232020] mb-1">{draft?.title}</h3>
              <p className="text-sm text-[#5C5C5C]">{draft?.excerpt}</p>
              {heroImage && (
                <img src={heroImage.url} alt={heroImage.altText} className="w-full h-48 object-cover rounded-xl mt-4" />
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setStep(6)} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                variant="outline"
                onClick={() => handleCreatePost(false)}
                disabled={createPostMutation.isPending}
                className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
              >
                Save as Draft
              </Button>
              <Button
                onClick={() => handleCreatePost(true)}
                disabled={createPostMutation.isPending}
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
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
