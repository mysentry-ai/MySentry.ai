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
  ImagePlus,
  Sparkles,
  Loader2,
  Check,
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-2 max-w-[1800px] mx-auto">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("~/admin/blog")}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
            <span className="text-sm text-gray-400">
              {postId ? "Edit Post" : "New Post"}
            </span>
            {isDirty && (
              <Badge variant="outline" className="text-yellow-600 border-yellow-300 bg-yellow-50 text-xs">
                Unsaved
              </Badge>
            )}
            {lastSaved && (
              <span className="text-xs text-gray-400">
                Last saved {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreviewMode(previewMode ? null : "desktop")}
            >
              <Eye className="w-4 h-4 mr-1" /> Preview
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSave(false)}
              disabled={isSaving}
            >
              {isSaving ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Save className="w-4 h-4 mr-1" />}
              Save Draft
            </Button>
            {status === "published" ? (
              <Button
                variant="outline"
                size="sm"
                className="text-orange-600 border-orange-200"
                onClick={() => setShowUnpublishConfirm(true)}
              >
                <GlobeLock className="w-4 h-4 mr-1" /> Unpublish
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-[#386758] hover:bg-[#2d5446] text-white"
                onClick={handlePublish}
                disabled={isSaving}
              >
                <Globe className="w-4 h-4 mr-1" /> Publish
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
            className="text-3xl font-bold border-0 border-b rounded-none px-0 py-3 bg-transparent focus-visible:ring-0 focus-visible:border-[#386758] placeholder:text-gray-300"
          />

          {/* Hero Image */}
          <div className="mt-4 mb-6">
            {heroImageUrl ? (
              <div className="relative group rounded-lg overflow-hidden">
                <img
                  src={heroImageUrl}
                  alt={heroImageAlt || "Hero image"}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <label className="cursor-pointer">
                    <Button size="sm" variant="secondary">
                      <Upload className="w-4 h-4 mr-1" /> Replace
                    </Button>
                    <input type="file" accept="image/*" className="hidden" onChange={handleHeroImageUpload} />
                  </label>
                  <Button size="sm" variant="secondary" onClick={() => setHeroImageUrl("")}>
                    <X className="w-4 h-4 mr-1" /> Remove
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-[#386758]/30 transition-colors">
                <div className="flex items-center justify-center gap-4">
                  <label className="cursor-pointer">
                    <Button variant="outline" size="sm" asChild>
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
                  >
                    {isGeneratingHeroImage ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    AI Generate
                  </Button>
                </div>
                <p className="text-sm text-gray-400 mt-2">Recommended: 1200x630px</p>
              </div>
            )}
            {heroImageUrl && (
              <div className="mt-2 flex gap-2">
                <Input
                  value={heroImageAlt}
                  onChange={(e) => setHeroImageAlt(e.target.value)}
                  placeholder="Alt text..."
                  className="text-sm bg-white"
                />
                <Input
                  value={heroImageCaption}
                  onChange={(e) => setHeroImageCaption(e.target.value)}
                  placeholder="Caption (optional)..."
                  className="text-sm bg-white"
                />
              </div>
            )}
          </div>

          {/* WYSIWYG Editor */}
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

        {/* Right: Settings Panel */}
        <div className="w-[380px] shrink-0 border-l bg-white overflow-y-auto" style={{ maxHeight: "calc(100vh - 53px)", position: "sticky", top: "53px" }}>
          <Tabs defaultValue="settings" className="w-full">
            <TabsList className="w-full rounded-none border-b bg-gray-50 p-0 h-auto">
              <TabsTrigger value="settings" className="flex-1 rounded-none py-3 text-sm data-[state=active]:border-b-2 data-[state=active]:border-[#386758] data-[state=active]:shadow-none">
                Settings
              </TabsTrigger>
              <TabsTrigger value="seo" className="flex-1 rounded-none py-3 text-sm data-[state=active]:border-b-2 data-[state=active]:border-[#386758] data-[state=active]:shadow-none">
                SEO
              </TabsTrigger>
            </TabsList>

            {/* Settings Tab */}
            <TabsContent value="settings" className="p-4 space-y-5 mt-0">
              <div>
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Slug</Label>
                <Input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="post-slug"
                  className="mt-1 bg-white text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">/blog/{slug || "..."}</p>
              </div>

              <div>
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</Label>
                <Select
                  value={categoryId ? String(categoryId) : "none"}
                  onValueChange={(v) => setCategoryId(v === "none" ? null : parseInt(v))}
                >
                  <SelectTrigger className="mt-1 bg-white text-sm">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Uncategorized</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={String(cat.id)}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Excerpt</Label>
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary for blog listing..."
                  className="mt-1 bg-white text-sm"
                  rows={3}
                />
                <p className="text-xs text-gray-400 mt-1">{excerpt.length}/180 characters</p>
              </div>

              <div>
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Author</Label>
                <Input
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="mt-1 bg-white text-sm"
                />
              </div>

              <div>
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Status</Label>
                <div className="mt-1 flex items-center gap-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    status === "published" ? "bg-green-100 text-green-800" :
                    status === "draft" ? "bg-yellow-100 text-yellow-800" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {status}
                  </span>
                </div>
              </div>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo" className="p-4 space-y-5 mt-0">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">SEO & Discoverability</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGenerateSEO}
                  disabled={isGeneratingSEO}
                  className="text-xs"
                >
                  {isGeneratingSEO ? <Loader2 className="w-3 h-3 mr-1 animate-spin" /> : <Sparkles className="w-3 h-3 mr-1" />}
                  AI Generate
                </Button>
              </div>

              <div>
                <Label className="text-xs text-gray-500">Meta Title</Label>
                <Input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="50-60 characters"
                  className="mt-1 bg-white text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">{metaTitle.length}/60</p>
              </div>

              <div>
                <Label className="text-xs text-gray-500">Meta Description</Label>
                <Textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="150-160 characters"
                  className="mt-1 bg-white text-sm"
                  rows={3}
                />
                <p className="text-xs text-gray-400 mt-1">{metaDescription.length}/160</p>
              </div>

              <div>
                <Label className="text-xs text-gray-500">Focus Keyword</Label>
                <Input
                  value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="Primary keyword"
                  className="mt-1 bg-white text-sm"
                />
              </div>

              <div>
                <Label className="text-xs text-gray-500">Secondary Keywords</Label>
                <div className="flex gap-1 mt-1">
                  <Input
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="Add keyword"
                    className="bg-white text-sm"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
                  />
                  <Button size="sm" variant="outline" onClick={addKeyword}>+</Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {secondaryKeywords.map((kw, i) => (
                    <Badge key={i} variant="secondary" className="text-xs cursor-pointer" onClick={() => setSecondaryKeywords(secondaryKeywords.filter((_, j) => j !== i))}>
                      {kw} <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-xs text-gray-500">Tags</Label>
                <div className="flex gap-1 mt-1">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag"
                    className="bg-white text-sm"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button size="sm" variant="outline" onClick={addTag}>+</Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs cursor-pointer" onClick={() => setTags(tags.filter((_, j) => j !== i))}>
                      {tag} <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-xs text-gray-500">Canonical URL</Label>
                <Input
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder="Leave blank for default"
                  className="mt-1 bg-white text-sm"
                />
              </div>

              <div className="space-y-3 pt-2 border-t">
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Open Graph</Label>
                <div>
                  <Label className="text-xs text-gray-500">OG Title</Label>
                  <Input
                    value={ogTitle}
                    onChange={(e) => setOgTitle(e.target.value)}
                    placeholder="Defaults to meta title"
                    className="mt-1 bg-white text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-gray-500">OG Description</Label>
                  <Textarea
                    value={ogDescription}
                    onChange={(e) => setOgDescription(e.target.value)}
                    placeholder="Defaults to meta description"
                    className="mt-1 bg-white text-sm"
                    rows={2}
                  />
                </div>
                <div>
                  <Label className="text-xs text-gray-500">OG Image URL</Label>
                  <Input
                    value={ogImageUrl}
                    onChange={(e) => setOgImageUrl(e.target.value)}
                    placeholder="Defaults to hero image"
                    className="mt-1 bg-white text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t">
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Indexing</Label>
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-gray-600">Allow indexing</Label>
                  <Switch checked={isIndexed} onCheckedChange={setIsIndexed} />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-gray-600">Allow link following</Label>
                  <Switch checked={isFollowed} onCheckedChange={setIsFollowed} />
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t">
                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">GEO Targeting</Label>
                <div>
                  <Label className="text-xs text-gray-500">Region</Label>
                  <Input
                    value={geoRegion}
                    onChange={(e) => setGeoRegion(e.target.value)}
                    placeholder="e.g., US"
                    className="mt-1 bg-white text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-gray-500">Audience</Label>
                  <Input
                    value={geoAudience}
                    onChange={(e) => setGeoAudience(e.target.value)}
                    placeholder="e.g., North America"
                    className="mt-1 bg-white text-sm"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Preview Modal */}
      {previewMode && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col" style={{ width: previewMode === "mobile" ? "390px" : "90vw", height: "90vh" }}>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={previewMode === "desktop" ? "default" : "outline"}
                  onClick={() => setPreviewMode("desktop")}
                  className={previewMode === "desktop" ? "bg-[#386758] text-white" : ""}
                >
                  <Monitor className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={previewMode === "mobile" ? "default" : "outline"}
                  onClick={() => setPreviewMode("mobile")}
                  className={previewMode === "mobile" ? "bg-[#386758] text-white" : ""}
                >
                  <Smartphone className="w-4 h-4" />
                </Button>
              </div>
              <Button size="sm" variant="ghost" onClick={() => setPreviewMode(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <article className="max-w-3xl mx-auto">
                {heroImageUrl && (
                  <img src={heroImageUrl} alt={heroImageAlt} className="w-full h-64 object-cover rounded-xl mb-6" />
                )}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title || "Untitled Post"}</h1>
                {excerpt && <p className="text-lg text-gray-500 mb-6">{excerpt}</p>}
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </article>
            </div>
          </div>
        </div>
      )}

      {/* Unpublish Confirmation */}
      <AlertDialog open={showUnpublishConfirm} onOpenChange={setShowUnpublishConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unpublish Post</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the post from the public blog. It will remain as a draft in the admin console.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleUnpublish} className="bg-orange-600 hover:bg-orange-700">
              Unpublish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
