import { useState, useMemo } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
  MoreHorizontal,
  Edit,
  Copy,
  Eye,
  Trash2,
  Globe,
  GlobeLock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
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

  const headers = useMemo(() => ({ "x-blog-admin-token": token }), [token]);

  const categoriesQuery = trpc.blog.categories.list.useQuery(undefined, {
    trpc: { context: { headers } },
  });

  const postsQuery = trpc.blog.admin.list.useQuery(
    {
      keyword: keyword || undefined,
      categoryId: categoryFilter !== "all" ? parseInt(categoryFilter) : undefined,
      status: statusFilter !== "all" ? (statusFilter as any) : undefined,
      limit,
      offset: page * limit,
    },
    { trpc: { context: { headers } } }
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

  const statusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800";
      case "draft": return "bg-yellow-100 text-yellow-800";
      case "unpublished": return "bg-gray-100 text-gray-600";
      case "scheduled": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-600";
    }
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
        { ids: selectedIds, action: action as any },
        { trpc: { context: { headers } } } as any
      );
    }
  };

  const confirmBulkDelete = () => {
    bulkMutation.mutate(
      { ids: selectedIds, action: "delete" },
      { trpc: { context: { headers } } } as any
    );
    setBulkAction(null);
  };

  const handleDelete = (id: number) => {
    if (deleteConfirmText === "DELETE") {
      deleteMutation.mutate({ id }, { trpc: { context: { headers } } } as any);
      setDeleteConfirmId(null);
      setDeleteConfirmText("");
    }
  };

  const handleTogglePublish = (post: any) => {
    const newStatus = post.status === "published" ? "unpublished" : "published";
    updateMutation.mutate(
      { id: post.id, status: newStatus },
      { trpc: { context: { headers } } } as any
    );
    toast.success(newStatus === "published" ? "Post published" : "Post unpublished");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-500 text-sm mt-1">{total} total posts</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate("~/admin/blog/wizard")}
            variant="outline"
            className="border-[#386758] text-[#386758] hover:bg-[#e8f5e9]"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI Wizard
          </Button>
          <Button
            onClick={() => navigate("~/admin/blog/new")}
            className="bg-[#386758] hover:bg-[#2d5446] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-lg border">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search posts..."
            value={keyword}
            onChange={(e) => { setKeyword(e.target.value); setPage(0); }}
            className="pl-10 bg-white"
          />
        </div>
        <Select value={categoryFilter} onValueChange={(v) => { setCategoryFilter(v); setPage(0); }}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={String(cat.id)}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(0); }}>
          <SelectTrigger className="w-[160px] bg-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="unpublished">Unpublished</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-200">
          <span className="text-sm text-blue-800 font-medium">
            {selectedIds.length} selected
          </span>
          <Button size="sm" variant="outline" onClick={() => handleBulkAction("publish")}>
            Publish
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleBulkAction("unpublish")}>
            Unpublish
          </Button>
          <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => handleBulkAction("delete")}>
            Delete
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setSelectedIds([])}>
            Clear
          </Button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-10">
                <Checkbox
                  checked={posts.length > 0 && selectedIds.length === posts.length}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden lg:table-cell">Updated</TableHead>
              <TableHead className="hidden lg:table-cell">Published</TableHead>
              <TableHead className="hidden xl:table-cell">Read Time</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-12 text-gray-400">
                  {postsQuery.isLoading ? "Loading..." : "No posts found. Create your first post!"}
                </TableCell>
              </TableRow>
            ) : (
              posts.map((post) => (
                <TableRow key={post.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`~/admin/blog/edit/${post.id}`)}>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selectedIds.includes(post.id)}
                      onCheckedChange={() => toggleSelect(post.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900 line-clamp-1">{post.title}</div>
                      <div className="text-xs text-gray-400 mt-0.5">/blog/{post.slug}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline" className="font-normal">
                      {getCategoryName(post.categoryId)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColor(post.status)}`}>
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-sm text-gray-500">
                    {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-sm text-gray-500">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="hidden xl:table-cell text-sm text-gray-500">
                    {post.readTimeMinutes} min
                  </TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => navigate(`~/admin/blog/edit/${post.id}`)}>
                          <Edit className="w-4 h-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => duplicateMutation.mutate({ id: post.id }, { trpc: { context: { headers } } } as any)}>
                          <Copy className="w-4 h-4 mr-2" /> Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/blog/${post.slug}`, "_blank")}>
                          <Eye className="w-4 h-4 mr-2" /> Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleTogglePublish(post)}>
                          {post.status === "published" ? (
                            <><GlobeLock className="w-4 h-4 mr-2" /> Unpublish</>
                          ) : (
                            <><Globe className="w-4 h-4 mr-2" /> Publish</>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => setDeleteConfirmId(post.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
            <span className="text-sm text-gray-500">
              Page {page + 1} of {totalPages}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 0}
                onClick={() => setPage((p) => p - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages - 1}
                onClick={() => setPage((p) => p + 1)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteConfirmId !== null} onOpenChange={() => { setDeleteConfirmId(null); setDeleteConfirmText(""); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Type <strong>DELETE</strong> to confirm.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Input
            value={deleteConfirmText}
            onChange={(e) => setDeleteConfirmText(e.target.value)}
            placeholder='Type "DELETE" to confirm'
            className="bg-white"
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={deleteConfirmText !== "DELETE"}
              onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Delete Confirmation */}
      <AlertDialog open={bulkAction === "delete"} onOpenChange={() => setBulkAction(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {selectedIds.length} Posts</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the selected posts. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmBulkDelete} className="bg-red-600 hover:bg-red-700">
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
