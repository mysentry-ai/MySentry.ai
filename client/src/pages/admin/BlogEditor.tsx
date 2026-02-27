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
  Plus,
  ImageIcon,
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
  const [activeTab, setActiveTab] = useState<"settings" | "seo">("settings");
  const autosaveTimerRef = useRef<any>(null);
  const heroReplaceInputRef = useRef<HTMLInputElement>(null);

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
      if (!silent) toast.success("Saved successfully");
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
    <div className="min-h-screen bg-white">
      {/* ===== Sticky Top Bar ===== */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3 max-w-[1800px] mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("~/admin/blog")}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm font-medium text-gray-900">
              {postId ? "Edit Post" : "New Post"}
            </span>
            {isDirty && (
              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                Unsaved
              </span>
            )}
            {lastSaved && (
              <span className="text-xs text-gray-400">
                Saved {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreviewMode(previewMode ? null : "desktop")}
              className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg h-9"
            >
              <Eye className="w-4 h-4 mr-1.5" /> Preview
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSave(false)}
              disabled={isSaving}
              className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg h-9"
            >
              {isSaving ? <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> : <Save className="w-4 h-4 mr-1.5" />}
              Save
            </Button>
            {status === "published" ? (
              <Button
                variant="outline"
                size="sm"
                className="border-amber-200 text-amber-700 hover:bg-amber-50 rounded-lg h-9"
                onClick={() => setShowUnpublishConfirm(true)}
              >
                <GlobeLock className="w-4 h-4 mr-1.5" /> Unpublish
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-[#004F7B] hover:bg-[#003d5f] text-white font-medium rounded-lg h-9 shadow-none"
                onClick={handlePublish}
                disabled={isSaving}
              >
                <Globe className="w-4 h-4 mr-1.5" /> Publish
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* ===== Main Content - Split Layout ===== */}
      <div className="max-w-[1800px] mx-auto flex">
        {/* Left: Editor Area */}
        <div className="flex-1 min-w-0 p-6 pr-8">
          {/* Title Input */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            className="w-full text-3xl font-bold text-gray-900 placeholder:text-gray-300 border-0 border-b-2 border-gray-100 focus:border-[#6AD990] focus:outline-none pb-3 mb-5 bg-transparent transition-colors"
          />

          {/* Hero Image Section */}
          <div className="mb-6">
            {heroImageUrl ? (
              <div className="relative group">
                <img
                  src={heroImageUrl}
                  alt={heroImageAlt || "Hero image"}
                  className="w-full h-72 object-cover rounded-xl border border-gray-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-3">
                  <input type="file" accept="image/*" className="hidden" ref={heroReplaceInputRef} onChange={handleHeroImageUpload} />
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-lg shadow-sm" onClick={() => heroReplaceInputRef.current?.click()}>
                    <Upload className="w-4 h-4 mr-1.5" /> Replace
                  </Button>
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-lg shadow-sm" onClick={() => setHeroImageUrl("")}>
                    <X className="w-4 h-4 mr-1.5" /> Remove
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-[#6AD990] transition-colors bg-gray-50/50">
                <ImageIcon className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500 mb-4">Add a hero image for your blog post</p>
                <div className="flex items-center justify-center gap-3">
                  <label className="cursor-pointer">
                    <Button variant="outline" size="sm" asChild className="border-gray-300 text-gray-700 hover:bg-white rounded-lg">
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
                    className="border-[#004F7B] text-[#004F7B] hover:bg-blue-50 rounded-lg"
                  >
                    {isGeneratingHeroImage ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    AI Generate
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-3">Recommended: 1200 x 630px</p>
              </div>
            )}
            {heroImageUrl && (
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">Alt Text</label>
                  <input
                    value={heroImageAlt}
                    onChange={(e) => setHeroImageAlt(e.target.value)}
                    placeholder="Describe the image..."
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">Caption</label>
                  <input
                    value={heroImageCaption}
                    onChange={(e) => setHeroImageCaption(e.target.value)}
                    placeholder="Optional caption..."
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                  />
                </div>
              </div>
            )}
          </div>

          {/* WYSIWYG Editor */}
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
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

        {/* ===== Right: Settings Panel ===== */}
        <div className="w-[380px] shrink-0 border-l border-gray-200 bg-gray-50/50 overflow-y-auto" style={{ maxHeight: "calc(100vh - 57px)", position: "sticky", top: "57px" }}>
          {/* Tab Switcher */}
          <div className="flex border-b border-gray-200 bg-white">
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex-1 py-3.5 text-sm font-medium transition-colors ${
                activeTab === "settings"
                  ? "text-[#004F7B] border-b-2 border-[#004F7B]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 py-3.5 text-sm font-medium transition-colors ${
                activeTab === "seo"
                  ? "text-[#004F7B] border-b-2 border-[#004F7B]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              SEO
            </button>
          </div>

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="p-5 space-y-6">
              <FieldGroup label="Slug">
                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="post-slug"
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                />
                <p className="text-xs text-gray-400 mt-1.5">/blog/{slug || "..."}</p>
              </FieldGroup>

              <FieldGroup label="Category">
                <select
                  value={categoryId ? String(categoryId) : "none"}
                  onChange={(e) => setCategoryId(e.target.value === "none" ? null : parseInt(e.target.value))}
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M3 5l3 3 3-3'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                >
                  <option value="none">Uncategorized</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={String(cat.id)}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </FieldGroup>

              <FieldGroup label="Excerpt">
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary for blog listing..."
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400 resize-none"
                  rows={3}
                />
                <p className="text-xs text-gray-400 mt-1">{excerpt.length}/180 characters</p>
              </FieldGroup>

              <FieldGroup label="Author">
                <input
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                />
              </FieldGroup>

              <FieldGroup label="Status">
                <div className="flex items-center gap-2">
                  <StatusBadge status={status} />
                </div>
              </FieldGroup>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === "seo" && (
            <div className="p-5 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SEO & Discoverability</span>
                <button
                  onClick={handleGenerateSEO}
                  disabled={isGeneratingSEO}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#004F7B] hover:text-[#003d5f] transition-colors disabled:opacity-50"
                >
                  {isGeneratingSEO ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                  AI Generate
                </button>
              </div>

              <FieldGroup label="Meta Title">
                <input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="50-60 characters recommended"
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                />
                <CharCount current={metaTitle.length} max={60} />
              </FieldGroup>

              <FieldGroup label="Meta Description">
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="150-160 characters recommended"
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400 resize-none"
                  rows={3}
                />
                <CharCount current={metaDescription.length} max={160} />
              </FieldGroup>

              <FieldGroup label="Focus Keyword">
                <input
                  value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="Primary keyword"
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                />
              </FieldGroup>

              <FieldGroup label="Secondary Keywords">
                <div className="flex gap-2">
                  <input
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="Add keyword"
                    className="flex-1 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
                  />
                  <button onClick={addKeyword} className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {secondaryKeywords.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {secondaryKeywords.map((kw, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs font-medium bg-[#e8f5e9] text-[#2e7d32] px-2.5 py-1 rounded-md cursor-pointer hover:bg-[#c8e6c9] transition-colors" onClick={() => setSecondaryKeywords(secondaryKeywords.filter((_, j) => j !== i))}>
                        {kw} <X className="w-3 h-3" />
                      </span>
                    ))}
                  </div>
                )}
              </FieldGroup>

              <FieldGroup label="Tags">
                <div className="flex gap-2">
                  <input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag"
                    className="flex-1 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <button onClick={addTag} className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => setTags(tags.filter((_, j) => j !== i))}>
                        {tag} <X className="w-3 h-3" />
                      </span>
                    ))}
                  </div>
                )}
              </FieldGroup>

              <FieldGroup label="Canonical URL">
                <input
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder="Leave blank for default"
                  className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                />
              </FieldGroup>

              {/* Open Graph Section */}
              <div className="pt-4 border-t border-gray-200 space-y-5">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Open Graph</span>
                <FieldGroup label="OG Title">
                  <input
                    value={ogTitle}
                    onChange={(e) => setOgTitle(e.target.value)}
                    placeholder="Defaults to meta title"
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                  />
                </FieldGroup>
                <FieldGroup label="OG Description">
                  <textarea
                    value={ogDescription}
                    onChange={(e) => setOgDescription(e.target.value)}
                    placeholder="Defaults to meta description"
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400 resize-none"
                    rows={2}
                  />
                </FieldGroup>
                <FieldGroup label="OG Image URL">
                  <input
                    value={ogImageUrl}
                    onChange={(e) => setOgImageUrl(e.target.value)}
                    placeholder="Defaults to hero image"
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                  />
                </FieldGroup>
              </div>

              {/* Indexing Section */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Indexing</span>
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm text-gray-700">Allow indexing</span>
                  <Switch checked={isIndexed} onCheckedChange={setIsIndexed} />
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm text-gray-700">Allow link following</span>
                  <Switch checked={isFollowed} onCheckedChange={setIsFollowed} />
                </div>
              </div>

              {/* Geo Targeting Section */}
              <div className="pt-4 border-t border-gray-200 space-y-5">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Geo Targeting</span>
                <FieldGroup label="Region">
                  <input
                    value={geoRegion}
                    onChange={(e) => setGeoRegion(e.target.value)}
                    placeholder="e.g., US"
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                  />
                </FieldGroup>
                <FieldGroup label="Audience">
                  <input
                    value={geoAudience}
                    onChange={(e) => setGeoAudience(e.target.value)}
                    placeholder="e.g., North America"
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#6AD990] focus:ring-1 focus:ring-[#6AD990]/20 placeholder:text-gray-400"
                  />
                </FieldGroup>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== Preview Modal ===== */}
      {previewMode && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col" style={{ width: previewMode === "mobile" ? "390px" : "90vw", height: "90vh" }}>
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewMode("desktop")}
                  className={`p-2 rounded-lg transition-colors ${previewMode === "desktop" ? "bg-[#004F7B] text-white" : "text-gray-500 hover:bg-gray-100"}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPreviewMode("mobile")}
                  className={`p-2 rounded-lg transition-colors ${previewMode === "mobile" ? "bg-[#004F7B] text-white" : "text-gray-500 hover:bg-gray-100"}`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
              <button onClick={() => setPreviewMode(null)} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-white">
              <article className="max-w-3xl mx-auto">
                {heroImageUrl && (
                  <img src={heroImageUrl} alt={heroImageAlt} className="w-full h-72 object-cover rounded-xl mb-6" />
                )}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title || "Untitled Post"}</h1>
                {excerpt && <p className="text-lg text-gray-500 mb-6">{excerpt}</p>}
                <div
                  className="prose prose-lg max-w-none text-gray-900"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </article>
            </div>
          </div>
        </div>
      )}

      {/* ===== Unpublish Confirmation ===== */}
      <AlertDialog open={showUnpublishConfirm} onOpenChange={setShowUnpublishConfirm}>
        <AlertDialogContent className="bg-white border-gray-200 rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-900">Unpublish Post</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-500">
              This will remove the post from the public blog. It will remain as a draft in the admin console.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleUnpublish} className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg">
              Unpublish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

/* ===== Helper Components ===== */

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">{label}</label>
      {children}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    published: "bg-emerald-50 text-emerald-700 border-emerald-200",
    draft: "bg-amber-50 text-amber-700 border-amber-200",
    unpublished: "bg-gray-50 text-gray-500 border-gray-200",
    scheduled: "bg-blue-50 text-blue-700 border-blue-200",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border ${styles[status] || styles.draft}`}>
      {status}
    </span>
  );
}

function CharCount({ current, max }: { current: number; max: number }) {
  const isOver = current > max;
  return (
    <p className={`text-xs mt-1 ${isOver ? "text-red-500" : "text-gray-400"}`}>
      {current}/{max}
    </p>
  );
}
