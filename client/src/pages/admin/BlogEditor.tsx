import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  ArrowLeft,
  Save,
  Eye,
  Globe,
  GlobeLock,
  Sparkles,
  Loader2,
  X,
  Upload,
  Monitor,
  Smartphone,
} from "lucide-react";
import { toast } from "sonner";

interface BlogEditorProps {
  token: string;
  postId?: number;
}

export default function BlogEditor({ token, postId }: BlogEditorProps) {
  const [, navigate] = useLocation();
  const headers = useMemo(() => ({ "x-blog-admin-token": token }), [token]);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [status, setStatus] = useState<"draft" | "published" | "unpublished" | "scheduled">("draft");
  const [excerpt, setExcerpt] = useState("");
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [heroImageAlt, setHeroImageAlt] = useState("");
  const [heroImageCaption, setHeroImageCaption] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [contentJson, setContentJson] = useState<any>(null);
  const [authorName, setAuthorName] = useState("MySentry Editorial Team");

  // SEO state
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogImageUrl, setOgImageUrl] = useState("");
  const [isIndexed, setIsIndexed] = useState(true);
  const [isFollowed, setIsFollowed] = useState(true);
  const [geoRegion, setGeoRegion] = useState("");
  const [geoAudience, setGeoAudience] = useState("");

  // UI state
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [showUnpublishConfirm, setShowUnpublishConfirm] = useState(false);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile" | null>(null);
  const [newKeyword, setNewKeyword] = useState("");
  const [newTag, setNewTag] = useState("");
  const [isGeneratingHeroImage, setIsGeneratingHeroImage] = useState(false);
  const [isGeneratingSEO, setIsGeneratingSEO] = useState(false);
  const autosaveTimerRef = useRef<any>(null);

  const categoriesQuery = trpc.blog.categories.list.useQuery(undefined, {
    trpc: { context: { headers } },
  });

  const postQuery = trpc.blog.admin.get.useQuery(
    { id: postId! },
    {
      enabled: !!postId,
      trpc: { context: { headers } },
    }
  );

  const createMutation = trpc.blog.admin.create.useMutation();
  const updateMutation = trpc.blog.admin.update.useMutation();
  const uploadImageMutation = trpc.blog.admin.uploadImage.useMutation();
  const generateSEOMutation = trpc.blog.ai.generateSEO.useMutation();
  const generateImageMutation = trpc.blog.ai.generateImage.useMutation();

  // Load post data
  useEffect(() => {
    if (postQuery.data) {
      const p = postQuery.data;
      setTitle(p.title);
      setSlug(p.slug);
      setCategoryId(p.categoryId);
      setStatus(p.status);
      setExcerpt(p.excerpt || "");
      setHeroImageUrl(p.heroImageUrl || "");
      setHeroImageAlt(p.heroImageAlt || "");
      setHeroImageCaption(p.heroImageCaption || "");
      setContentHtml(p.contentHtml || "");
      setContentJson(p.contentJson);
      setAuthorName(p.authorName);
      setMetaTitle(p.metaTitle || "");
      setMetaDescription(p.metaDescription || "");
      setFocusKeyword(p.focusKeyword || "");
      setSecondaryKeywords((p.secondaryKeywords as string[]) || []);
      setTags((p.tags as string[]) || []);
      setCanonicalUrl(p.canonicalUrl || "");
      setOgTitle(p.ogTitle || "");
      setOgDescription(p.ogDescription || "");
      setOgImageUrl(p.ogImageUrl || "");
      setIsIndexed(p.isIndexed);
      setIsFollowed(p.isFollowed);
      setGeoRegion(p.geoRegion || "");
      setGeoAudience(p.geoAudience || "");
    }
  }, [postQuery.data]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!postId && title && !slug) {
      const generated = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .slice(0, 100);
      setSlug(generated);
    }
  }, [title, postId, slug]);

  // Mark dirty on changes
  useEffect(() => {
    if (postQuery.data) {
      setIsDirty(true);
    }
  }, [title, slug, categoryId, excerpt, contentHtml, metaTitle, metaDescription, focusKeyword, heroImageUrl]);

  // Autosave every 15 seconds
  useEffect(() => {
    if (!postId || !isDirty) return;
    autosaveTimerRef.current = setInterval(() => {
      if (isDirty && postId) {
        handleSave(true);
      }
    }, 15000);
    return () => clearInterval(autosaveTimerRef.current);
  }, [postId, isDirty]);

  const getFormData = () => ({
    title,
    slug,
    categoryId,
    excerpt,
    heroImageUrl: heroImageUrl || null,
    heroImageAlt: heroImageAlt || null,
    heroImageCaption: heroImageCaption || null,
    contentHtml,
    contentJson,
    metaTitle: metaTitle || null,
    metaDescription: metaDescription || null,
    focusKeyword: focusKeyword || null,
    secondaryKeywords: secondaryKeywords.length > 0 ? secondaryKeywords : null,
    tags: tags.length > 0 ? tags : null,
    canonicalUrl: canonicalUrl || null,
    ogTitle: ogTitle || null,
    ogDescription: ogDescription || null,
    ogImageUrl: ogImageUrl || null,
    isIndexed,
    isFollowed,
    geoRegion: geoRegion || null,
    geoAudience: geoAudience || null,
    authorName,
  });

  const handleSave = async (silent = false) => {
    if (!title || !slug) {
      if (!silent) toast.error("Title and slug are required");
      return;
    }
    setIsSaving(true);
    try {
      if (postId) {
        await updateMutation.mutateAsync(
          { id: postId, ...getFormData(), status } as any,
          { trpc: { context: { headers } } } as any
        );
      } else {
        const result = await createMutation.mutateAsync(
          { ...getFormData(), status } as any,
          { trpc: { context: { headers } } } as any
        );
        navigate(`~/admin/blog/edit/${result.id}`, { replace: true });
      }
      setIsDirty(false);
      setLastSaved(new Date());
      if (!silent) toast.success("Saved");
    } catch (err: any) {
      if (!silent) toast.error(err.message || "Save failed");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    setStatus("published");
    setIsSaving(true);
    try {
      if (postId) {
        await updateMutation.mutateAsync(
          { id: postId, ...getFormData(), status: "published" } as any,
          { trpc: { context: { headers } } } as any
        );
      } else {
        const result = await createMutation.mutateAsync(
          { ...getFormData(), status: "published" } as any,
          { trpc: { context: { headers } } } as any
        );
        navigate(`~/admin/blog/edit/${result.id}`, { replace: true });
      }
      setIsDirty(false);
      setLastSaved(new Date());
      toast.success("Published!");
    } catch (err: any) {
      toast.error(err.message || "Publish failed");
    } finally {
      setIsSaving(false);
    }
  };

  const handleUnpublish = async () => {
    if (!postId) return;
    try {
      await updateMutation.mutateAsync(
        { id: postId, status: "unpublished" } as any,
        { trpc: { context: { headers } } } as any
      );
      setStatus("unpublished");
      toast.success("Unpublished");
    } catch (err: any) {
      toast.error(err.message || "Failed");
    }
    setShowUnpublishConfirm(false);
  };

  const handleImageUpload = useCallback(
    async (file: File): Promise<string> => {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onload = async () => {
          try {
            const base64 = (reader.result as string).split(",")[1];
            const result = await uploadImageMutation.mutateAsync(
              { base64, filename: file.name, contentType: file.type },
              { trpc: { context: { headers } } } as any
            );
            resolve(result.url);
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    [uploadImageMutation, headers]
  );

  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await handleImageUpload(file);
      setHeroImageUrl(url);
      toast.success("Hero image uploaded");
    } catch {
      toast.error("Upload failed");
    }
  };

  const handleGenerateHeroImage = async () => {
    if (!title) {
      toast.error("Add a title first");
      return;
    }
    setIsGeneratingHeroImage(true);
    try {
      const catName = categoriesQuery.data?.find((c) => c.id === categoryId)?.name || "General";
      const result = await generateImageMutation.mutateAsync(
        {
          title,
          icp: "safety-conscious individuals and families",
          category: catName,
          imageType: "hero",
          concept: `Hero image for blog post: ${title}`,
        },
        { trpc: { context: { headers } } } as any
      );
      if (result.url) {
        setHeroImageUrl(result.url);
        setHeroImageAlt(result.altText || "");
        toast.success("Hero image generated");
      }
    } catch (err: any) {
      toast.error(err.message || "Image generation failed");
    } finally {
      setIsGeneratingHeroImage(false);
    }
  };

  const handleGenerateSEO = async () => {
    if (!title || !contentHtml) {
      toast.error("Add title and content first");
      return;
    }
    setIsGeneratingSEO(true);
    try {
      const catName = categoriesQuery.data?.find((c) => c.id === categoryId)?.name || "General";
      const result = await generateSEOMutation.mutateAsync(
        { title, content: contentHtml, category: catName },
        { trpc: { context: { headers } } } as any
      );
      if (result.meta_title) setMetaTitle(result.meta_title);
      if (result.meta_description) setMetaDescription(result.meta_description);
      if (result.focus_keyword) setFocusKeyword(result.focus_keyword);
      if (result.secondary_keywords) setSecondaryKeywords(result.secondary_keywords);
      if (result.tags) setTags(result.tags);
      if (result.slug_suggestions?.[0] && !postId) {
        setSlug(result.slug_suggestions[0]);
      }
      toast.success("SEO pack generated");
    } catch (err: any) {
      toast.error(err.message || "SEO generation failed");
    } finally {
      setIsGeneratingSEO(false);
    }
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !secondaryKeywords.includes(newKeyword.trim())) {
      setSecondaryKeywords([...secondaryKeywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const categories = categoriesQuery.data || [];

  const statusStyles: Record<string, string> = {
    published: "bg-[#e8f5e9] text-[#2e7d32]",
    draft: "bg-[#FFF8E1] text-[#F57F17]",
    unpublished: "bg-[#F5F7F7] text-[#5C5C5C]",
    scheduled: "bg-[#E3F2FD] text-[#1565C0]",
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between px-5 py-3 max-w-[1800px] mx-auto">
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
            <span className="text-sm text-[#5C5C5C]">
              {postId ? "Edit Post" : "New Post"}
            </span>
            {isDirty && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-[#FFF8E1] text-[#F57F17]">
                Unsaved
              </span>
            )}
            {lastSaved && (
              <span className="text-xs text-[#9CA3AF]">
                Saved {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreviewMode(previewMode ? null : "desktop")}
              className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
            >
              <Eye className="w-4 h-4 mr-1.5" /> Preview
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSave(false)}
              disabled={isSaving}
              className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
            >
              {isSaving ? <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> : <Save className="w-4 h-4 mr-1.5" />}
              Save
            </Button>
            {status === "published" ? (
              <Button
                variant="outline"
                size="sm"
                className="border-orange-200 text-orange-600 hover:bg-orange-50 rounded-lg"
                onClick={() => setShowUnpublishConfirm(true)}
              >
                <GlobeLock className="w-4 h-4 mr-1.5" /> Unpublish
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
                onClick={handlePublish}
                disabled={isSaving}
              >
                <Globe className="w-4 h-4 mr-1.5" /> Publish
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="max-w-[1800px] mx-auto flex gap-0">
        {/* Left: Editor */}
        <div className="flex-1 min-w-0 p-6">
          {/* Title */}
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            className="text-2xl font-bold border-0 border-b border-[#E5E7EB] rounded-none px-0 py-3 bg-transparent text-[#232020] focus-visible:ring-0 focus-visible:border-[#6AD990] placeholder:text-[#D2D9D9]"
          />

          {/* Hero Image */}
          <div className="mt-4 mb-6">
            {heroImageUrl ? (
              <div className="relative group rounded-xl overflow-hidden">
                <img
                  src={heroImageUrl}
                  alt={heroImageAlt || "Hero image"}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <label className="cursor-pointer">
                    <Button size="sm" className="bg-white text-[#232020] hover:bg-[#F5F7F7] rounded-lg shadow-none">
                      <Upload className="w-4 h-4 mr-1.5" /> Replace
                    </Button>
                    <input type="file" accept="image/*" className="hidden" onChange={handleHeroImageUpload} />
                  </label>
                  <Button size="sm" className="bg-white text-[#232020] hover:bg-[#F5F7F7] rounded-lg shadow-none" onClick={() => setHeroImageUrl("")}>
                    <X className="w-4 h-4 mr-1.5" /> Remove
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-[#D2D9D9] rounded-xl p-8 text-center hover:border-[#6AD990]/50 transition-colors bg-white">
                <div className="flex items-center justify-center gap-4">
                  <label className="cursor-pointer">
                    <Button variant="outline" size="sm" asChild className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                      <span>
                        <Upload className="w-4 h-4 mr-2" /> Upload Image
                      </span>
                    </Button>
                    <input type="file" accept="image/*" className="hidden" onChange={handleHeroImageUpload} />
                  </label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateHeroImage}
                    disabled={isGeneratingHeroImage}
                    className="border-[#6AD990] text-[#232020] hover:bg-[#e8f5e9] rounded-lg"
                  >
                    {isGeneratingHeroImage ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2 text-[#6AD990]" />
                    )}
                    AI Generate
                  </Button>
                </div>
                <p className="text-sm text-[#9CA3AF] mt-3">Recommended: 1200 x 630px</p>
              </div>
            )}
            {heroImageUrl && (
              <div className="mt-2 flex gap-2">
                <Input
                  value={heroImageAlt}
                  onChange={(e) => setHeroImageAlt(e.target.value)}
                  placeholder="Alt text..."
                  className="text-sm bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] rounded-lg"
                />
                <Input
                  value={heroImageCaption}
                  onChange={(e) => setHeroImageCaption(e.target.value)}
                  placeholder="Caption (optional)..."
                  className="text-sm bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] rounded-lg"
                />
              </div>
            )}
          </div>

          {/* WYSIWYG Editor */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
            <TipTapEditor
              content={contentHtml}
              onChange={(html, json) => {
                setContentHtml(html);
                setContentJson(json);
                setIsDirty(true);
              }}
              onImageUpload={handleImageUpload}
            />
          </div>
        </div>

        {/* Right: Settings Panel */}
        <div className="w-[360px] shrink-0 border-l border-[#E5E7EB] bg-white overflow-y-auto" style={{ maxHeight: "calc(100vh - 57px)", position: "sticky", top: "57px" }}>
          <Tabs defaultValue="settings" className="w-full">
            <TabsList className="w-full rounded-none border-b border-[#E5E7EB] bg-[#F8FAF9] p-0 h-auto">
              <TabsTrigger
                value="settings"
                className="flex-1 rounded-none py-3 text-sm text-[#5C5C5C] data-[state=active]:text-[#232020] data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-[#6AD990] data-[state=active]:shadow-none data-[state=active]:bg-white"
              >
                Settings
              </TabsTrigger>
              <TabsTrigger
                value="seo"
                className="flex-1 rounded-none py-3 text-sm text-[#5C5C5C] data-[state=active]:text-[#232020] data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-[#6AD990] data-[state=active]:shadow-none data-[state=active]:bg-white"
              >
                SEO
              </TabsTrigger>
            </TabsList>

            {/* Settings Tab */}
            <TabsContent value="settings" className="p-5 space-y-5 mt-0">
              <FieldGroup label="Slug">
                <Input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="post-slug"
                  className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">/blog/{slug || "..."}</p>
              </FieldGroup>

              <FieldGroup label="Category">
                <Select
                  value={categoryId ? String(categoryId) : "none"}
                  onValueChange={(v) => setCategoryId(v === "none" ? null : parseInt(v))}
                >
                  <SelectTrigger className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#E5E7EB]">
                    <SelectItem value="none">Uncategorized</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={String(cat.id)}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldGroup>

              <FieldGroup label="Excerpt">
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary for blog listing..."
                  className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                  rows={3}
                />
                <p className="text-xs text-[#9CA3AF] mt-1">{excerpt.length}/180 characters</p>
              </FieldGroup>

              <FieldGroup label="Author">
                <Input
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                />
              </FieldGroup>

              <FieldGroup label="Status">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${statusStyles[status] || statusStyles.unpublished}`}>
                    {status}
                  </span>
                </div>
              </FieldGroup>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo" className="p-5 space-y-5 mt-0">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">SEO & Discoverability</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGenerateSEO}
                  disabled={isGeneratingSEO}
                  className="text-xs border-[#6AD990] text-[#232020] hover:bg-[#e8f5e9] rounded-lg"
                >
                  {isGeneratingSEO ? <Loader2 className="w-3 h-3 mr-1 animate-spin" /> : <Sparkles className="w-3 h-3 mr-1 text-[#6AD990]" />}
                  AI Generate
                </Button>
              </div>

              <FieldGroup label="Meta Title">
                <Input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="50-60 characters"
                  className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">{metaTitle.length}/60</p>
              </FieldGroup>

              <FieldGroup label="Meta Description">
                <Textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="150-160 characters"
                  className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                  rows={3}
                />
                <p className="text-xs text-[#9CA3AF] mt-1">{metaDescription.length}/160</p>
              </FieldGroup>

              <FieldGroup label="Focus Keyword">
                <Input
                  value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="Primary keyword"
                  className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                />
              </FieldGroup>

              <FieldGroup label="Secondary Keywords">
                <div className="flex gap-1.5">
                  <Input
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="Add keyword"
                    className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
                  />
                  <Button size="sm" variant="outline" onClick={addKeyword} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg px-3">+</Button>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {secondaryKeywords.map((kw, i) => (
                    <Badge key={i} className="text-xs cursor-pointer bg-[#e8f5e9] text-[#232020] border-0 hover:bg-[#d0ebd6] rounded-md" onClick={() => setSecondaryKeywords(secondaryKeywords.filter((_, j) => j !== i))}>
                      {kw} <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup label="Tags">
                <div className="flex gap-1.5">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag"
                    className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button size="sm" variant="outline" onClick={addTag} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg px-3">+</Button>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs cursor-pointer text-[#5C5C5C] border-[#E5E7EB] hover:bg-[#F5F7F7] rounded-md" onClick={() => setTags(tags.filter((_, j) => j !== i))}>
                      {tag} <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup label="Canonical URL">
                <Input
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder="Leave blank for default"
                  className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                />
              </FieldGroup>

              <div className="space-y-4 pt-4 border-t border-[#E5E7EB]">
                <span className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Open Graph</span>
                <FieldGroup label="OG Title">
                  <Input
                    value={ogTitle}
                    onChange={(e) => setOgTitle(e.target.value)}
                    placeholder="Defaults to meta title"
                    className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                  />
                </FieldGroup>
                <FieldGroup label="OG Description">
                  <Textarea
                    value={ogDescription}
                    onChange={(e) => setOgDescription(e.target.value)}
                    placeholder="Defaults to meta description"
                    className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                    rows={2}
                  />
                </FieldGroup>
                <FieldGroup label="OG Image URL">
                  <Input
                    value={ogImageUrl}
                    onChange={(e) => setOgImageUrl(e.target.value)}
                    placeholder="Defaults to hero image"
                    className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                  />
                </FieldGroup>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <span className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">Indexing</span>
                <div className="flex items-center justify-between py-1">
                  <Label className="text-sm text-[#232020]">Allow indexing</Label>
                  <Switch checked={isIndexed} onCheckedChange={setIsIndexed} />
                </div>
                <div className="flex items-center justify-between py-1">
                  <Label className="text-sm text-[#232020]">Allow link following</Label>
                  <Switch checked={isFollowed} onCheckedChange={setIsFollowed} />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5E7EB]">
                <span className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider">GEO Targeting</span>
                <FieldGroup label="Region">
                  <Input
                    value={geoRegion}
                    onChange={(e) => setGeoRegion(e.target.value)}
                    placeholder="e.g., US"
                    className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                  />
                </FieldGroup>
                <FieldGroup label="Audience">
                  <Input
                    value={geoAudience}
                    onChange={(e) => setGeoAudience(e.target.value)}
                    placeholder="e.g., North America"
                    className="bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] text-sm rounded-lg"
                  />
                </FieldGroup>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Preview Modal */}
      {previewMode && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col" style={{ width: previewMode === "mobile" ? "390px" : "90vw", height: "90vh" }}>
            <div className="flex items-center justify-between px-4 py-3 bg-[#F8FAF9] border-b border-[#E5E7EB]">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={previewMode === "desktop" ? "default" : "outline"}
                  onClick={() => setPreviewMode("desktop")}
                  className={previewMode === "desktop" ? "bg-[#6AD990] text-[#232020] shadow-none rounded-lg" : "border-[#E5E7EB] text-[#232020] rounded-lg"}
                >
                  <Monitor className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={previewMode === "mobile" ? "default" : "outline"}
                  onClick={() => setPreviewMode("mobile")}
                  className={previewMode === "mobile" ? "bg-[#6AD990] text-[#232020] shadow-none rounded-lg" : "border-[#E5E7EB] text-[#232020] rounded-lg"}
                >
                  <Smartphone className="w-4 h-4" />
                </Button>
              </div>
              <Button size="sm" variant="ghost" onClick={() => setPreviewMode(null)} className="text-[#5C5C5C] hover:text-[#232020] rounded-lg">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-white">
              <article className="max-w-3xl mx-auto">
                {heroImageUrl && (
                  <img src={heroImageUrl} alt={heroImageAlt} className="w-full h-64 object-cover rounded-xl mb-6" />
                )}
                <h1 className="text-4xl font-bold text-[#232020] mb-4">{title || "Untitled Post"}</h1>
                {excerpt && <p className="text-lg text-[#5C5C5C] mb-6">{excerpt}</p>}
                <div
                  className="prose prose-lg max-w-none text-[#232020]"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </article>
            </div>
          </div>
        </div>
      )}

      {/* Unpublish Confirmation */}
      <AlertDialog open={showUnpublishConfirm} onOpenChange={setShowUnpublishConfirm}>
        <AlertDialogContent className="bg-white border-[#E5E7EB] rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#232020]">Unpublish Post</AlertDialogTitle>
            <AlertDialogDescription className="text-[#5C5C5C]">
              This will remove the post from the public blog. It will remain as a draft in the admin console.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleUnpublish} className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg">
              Unpublish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider mb-1.5 block">{label}</Label>
      {children}
    </div>
  );
}
