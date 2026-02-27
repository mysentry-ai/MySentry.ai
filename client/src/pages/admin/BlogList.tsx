import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  Search,
  Plus,
  MoreVertical,
  Edit,
  Copy,
  Eye,
  Trash2,
  Globe,
  GlobeLock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "wouter";

interface BlogListProps {
  token: string;
}

export default function BlogList({ token }: BlogListProps) {
  const [, navigate] = useLocation();
  const [keyword, setKeyword] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [bulkAction, setBulkAction] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const limit = 20;

  const categoriesQuery = trpc.blog.categories.list.useQuery();

  const postsQuery = trpc.blog.admin.list.useQuery(
    {
      keyword: keyword || undefined,
      categoryId: categoryFilter !== "all" ? parseInt(categoryFilter) : undefined,
      status: statusFilter !== "all" ? (statusFilter as any) : undefined,
      limit,
      offset: page * limit,
    },
  );

  const deleteMutation = trpc.blog.admin.delete.useMutation({
    onSuccess: () => {
      toast.success("Post deleted");
      postsQuery.refetch();
    },
    onError: (err) => toast.error(err.message),
  });

  const duplicateMutation = trpc.blog.admin.duplicate.useMutation({
    onSuccess: (data) => {
      toast.success("Post duplicated");
      postsQuery.refetch();
      navigate(`~/admin/blog/edit/${data.id}`);
    },
    onError: (err) => toast.error(err.message),
  });

  const bulkMutation = trpc.blog.admin.bulkAction.useMutation({
    onSuccess: () => {
      toast.success("Bulk action completed");
      setSelectedIds([]);
      postsQuery.refetch();
    },
    onError: (err) => toast.error(err.message),
  });

  const updateMutation = trpc.blog.admin.update.useMutation({
    onSuccess: () => {
      postsQuery.refetch();
    },
    onError: (err) => toast.error(err.message),
  });

  const posts = postsQuery.data?.posts || [];
  const total = postsQuery.data?.total || 0;
  const totalPages = Math.ceil(total / limit);
  const categories = categoriesQuery.data || [];

  const getCategoryName = (catId: number | null) => {
    if (!catId) return "Uncategorized";
    const cat = categories.find((c) => c.id === catId);
    return cat?.name || "Unknown";
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === posts.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(posts.map((p) => p.id));
    }
  };

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBulkAction = (action: string) => {
    if (selectedIds.length === 0) {
      toast.error("Select posts first");
      return;
    }
    if (action === "delete") {
      setBulkAction("delete");
    } else {
      bulkMutation.mutate(
        { ids: selectedIds, action: action as any }
      );
    }
  };

  const confirmBulkDelete = () => {
    bulkMutation.mutate(
      { ids: selectedIds, action: "delete" }
    );
    setBulkAction(null);
  };

  const handleDelete = (id: number) => {
    if (deleteConfirmText === "DELETE") {
      deleteMutation.mutate({ id });
      setDeleteConfirmId(null);
      setDeleteConfirmText("");
    }
  };

  const handleTogglePublish = (post: any) => {
    const newStatus = post.status === "published" ? "unpublished" : "published";
    updateMutation.mutate(
      { id: post.id, status: newStatus }
    );
    toast.success(newStatus === "published" ? "Post published" : "Post unpublished");
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#232020]">Blog Posts</h1>
          <p className="text-[#5C5C5C] text-sm mt-1">{total} total posts</p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() => navigate("~/admin/blog/wizard")}
            variant="outline"
            className="border-[#6AD990] text-[#232020] hover:bg-[#e8f5e9] rounded-lg"
          >
            <Sparkles className="w-4 h-4 mr-2 text-[#6AD990]" />
            AI Wizard
          </Button>
          <Button
            onClick={() => navigate("~/admin/blog/new")}
            className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
          <Input
            placeholder="Search posts..."
            value={keyword}
            onChange={(e) => { setKeyword(e.target.value); setPage(0); }}
            className="pl-10 h-10 bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] focus:border-[#6AD990] rounded-lg"
          />
        </div>
        <Select value={categoryFilter} onValueChange={(v) => { setCategoryFilter(v); setPage(0); }}>
          <SelectTrigger className="w-[180px] h-10 bg-white border-[#E5E7EB] text-[#232020] rounded-lg">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="bg-white border-[#E5E7EB]">
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={String(cat.id)}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(0); }}>
          <SelectTrigger className="w-[160px] h-10 bg-white border-[#E5E7EB] text-[#232020] rounded-lg">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-white border-[#E5E7EB]">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="unpublished">Unpublished</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div className="flex items-center gap-3 bg-[#e8f5e9] p-3 rounded-lg border border-[#6AD990]/30">
          <span className="text-sm text-[#232020] font-medium">
            {selectedIds.length} selected
          </span>
          <div className="flex gap-2 ml-auto">
            <Button size="sm" variant="outline" className="bg-white text-[#232020] border-[#E5E7EB] hover:bg-[#F5F7F7] rounded-lg" onClick={() => handleBulkAction("publish")}>
              Publish
            </Button>
            <Button size="sm" variant="outline" className="bg-white text-[#232020] border-[#E5E7EB] hover:bg-[#F5F7F7] rounded-lg" onClick={() => handleBulkAction("unpublish")}>
              Unpublish
            </Button>
            <Button size="sm" variant="outline" className="bg-white text-red-600 border-red-200 hover:bg-red-50 rounded-lg" onClick={() => handleBulkAction("delete")}>
              Delete
            </Button>
            <Button size="sm" variant="ghost" className="text-[#5C5C5C] hover:text-[#232020]" onClick={() => setSelectedIds([])}>
              Clear
            </Button>
          </div>
        </div>
      )}

      {/* Posts list */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[40px_1fr_140px_100px_100px_80px_40px] gap-3 px-4 py-3 border-b border-[#E5E7EB] bg-[#F8FAF9] text-xs font-semibold text-[#5C5C5C] uppercase tracking-wider items-center">
          <div>
            <Checkbox
              checked={posts.length > 0 && selectedIds.length === posts.length}
              onCheckedChange={toggleSelectAll}
            />
          </div>
          <div>Title</div>
          <div className="hidden md:block">Category</div>
          <div>Status</div>
          <div className="hidden lg:block">Published</div>
          <div className="hidden lg:block">Read</div>
          <div></div>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="py-16 text-center">
            <FileText className="w-12 h-12 text-[#D2D9D9] mx-auto mb-3" />
            <p className="text-[#5C5C5C] font-medium">
              {postsQuery.isLoading ? "Loading posts..." : "No posts found"}
            </p>
            {!postsQuery.isLoading && (
              <p className="text-[#9CA3AF] text-sm mt-1">Create your first post to get started</p>
            )}
          </div>
        ) : (
          posts.map((post, idx) => (
            <div
              key={post.id}
              className={`grid grid-cols-[40px_1fr_140px_100px_100px_80px_40px] gap-3 px-4 py-3.5 items-center cursor-pointer transition-colors hover:bg-[#F8FAF9] ${
                idx < posts.length - 1 ? "border-b border-[#F0F0F0]" : ""
              }`}
              onClick={() => navigate(`~/admin/blog/edit/${post.id}`)}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  checked={selectedIds.includes(post.id)}
                  onCheckedChange={() => toggleSelect(post.id)}
                />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-[#232020] text-sm truncate">{post.title}</div>
                <div className="text-xs text-[#9CA3AF] mt-0.5 truncate">/blog/{post.slug}</div>
              </div>
              <div className="hidden md:block">
                <Badge variant="outline" className="font-normal text-[#5C5C5C] border-[#E5E7EB] bg-[#F5F7F7] rounded-md text-xs">
                  {getCategoryName(post.categoryId)}
                </Badge>
              </div>
              <div>
                <StatusBadge status={post.status} />
              </div>
              <div className="hidden lg:block text-xs text-[#5C5C5C]">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "-"}
              </div>
              <div className="hidden lg:flex items-center gap-1 text-xs text-[#5C5C5C]">
                <Clock className="w-3 h-3" />
                {post.readTimeMinutes}m
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-[#9CA3AF] hover:text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border-[#E5E7EB] rounded-lg shadow-lg">
                    <DropdownMenuItem className="text-[#232020] cursor-pointer" onClick={() => navigate(`~/admin/blog/edit/${post.id}`)}>
                      <Edit className="w-4 h-4 mr-2 text-[#5C5C5C]" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[#232020] cursor-pointer" onClick={() => duplicateMutation.mutate({ id: post.id })}>
                      <Copy className="w-4 h-4 mr-2 text-[#5C5C5C]" /> Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[#232020] cursor-pointer" onClick={() => window.open(`/blog/${post.slug}`, "_blank")}>
                      <Eye className="w-4 h-4 mr-2 text-[#5C5C5C]" /> Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[#232020] cursor-pointer" onClick={() => handleTogglePublish(post)}>
                      {post.status === "published" ? (
                        <><GlobeLock className="w-4 h-4 mr-2 text-[#5C5C5C]" /> Unpublish</>
                      ) : (
                        <><Globe className="w-4 h-4 mr-2 text-[#5C5C5C]" /> Publish</>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-600 cursor-pointer"
                      onClick={() => setDeleteConfirmId(post.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#E5E7EB] bg-[#F8FAF9]">
            <span className="text-sm text-[#5C5C5C]">
              Page {page + 1} of {totalPages}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 0}
                onClick={() => setPage((p) => p - 1)}
                className="bg-white border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages - 1}
                onClick={() => setPage((p) => p + 1)}
                className="bg-white border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteConfirmId !== null} onOpenChange={() => { setDeleteConfirmId(null); setDeleteConfirmText(""); }}>
        <AlertDialogContent className="bg-white border-[#E5E7EB] rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#232020]">Delete Post</AlertDialogTitle>
            <AlertDialogDescription className="text-[#5C5C5C]">
              This action cannot be undone. Type <strong className="text-[#232020]">DELETE</strong> to confirm.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Input
            value={deleteConfirmText}
            onChange={(e) => setDeleteConfirmText(e.target.value)}
            placeholder='Type "DELETE" to confirm'
            className="!bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] rounded-lg"
          />
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={deleteConfirmText !== "DELETE"}
              onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Delete Confirmation */}
      <AlertDialog open={bulkAction === "delete"} onOpenChange={() => setBulkAction(null)}>
        <AlertDialogContent className="bg-white border-[#E5E7EB] rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#232020]">Delete {selectedIds.length} Posts</AlertDialogTitle>
            <AlertDialogDescription className="text-[#5C5C5C]">
              This will permanently delete the selected posts. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmBulkDelete} className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    published: "bg-[#e8f5e9] text-[#2e7d32]",
    draft: "bg-[#FFF8E1] text-[#F57F17]",
    unpublished: "bg-[#F5F7F7] text-[#5C5C5C]",
    scheduled: "bg-[#E3F2FD] text-[#1565C0]",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${styles[status] || styles.unpublished}`}>
      {status}
    </span>
  );
}
