import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { Plus, Edit, Trash2, FolderOpen } from "lucide-react";
import { toast } from "sonner";

interface CategoryManagerProps {
  token: string;
}

export default function CategoryManager({ token }: CategoryManagerProps) {
  const headers = useMemo(() => ({ "x-blog-admin-token": token }), [token]);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const categoriesQuery = trpc.blog.categories.list.useQuery(undefined, {
    trpc: { context: { headers } },
  });

  const createMutation = trpc.blog.categories.create.useMutation({
    onSuccess: () => {
      toast.success("Category created");
      categoriesQuery.refetch();
      closeDialog();
    },
    onError: (err) => toast.error(err.message),
  });

  const updateMutation = trpc.blog.categories.update.useMutation({
    onSuccess: () => {
      toast.success("Category updated");
      categoriesQuery.refetch();
      closeDialog();
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteMutation = trpc.blog.categories.delete.useMutation({
    onSuccess: () => {
      toast.success("Category deleted");
      categoriesQuery.refetch();
      setDeleteId(null);
    },
    onError: (err) => toast.error(err.message),
  });

  const categories = categoriesQuery.data || [];

  const closeDialog = () => {
    setEditDialog(false);
    setEditId(null);
    setName("");
    setSlug("");
    setDescription("");
  };

  const openCreate = () => {
    setEditId(null);
    setName("");
    setSlug("");
    setDescription("");
    setEditDialog(true);
  };

  const openEdit = (cat: any) => {
    setEditId(cat.id);
    setName(cat.name);
    setSlug(cat.slug);
    setDescription(cat.description || "");
    setEditDialog(true);
  };

  const handleSave = () => {
    if (!name || !slug) {
      toast.error("Name and slug are required");
      return;
    }
    if (editId) {
      updateMutation.mutate(
        { id: editId, name, slug, description },
        { trpc: { context: { headers } } } as any
      );
    } else {
      createMutation.mutate(
        { name, slug, description },
        { trpc: { context: { headers } } } as any
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-[#232020]">Categories</h1>
          <p className="text-sm text-[#5C5C5C] mt-1">{categories.length} categories</p>
        </div>
        <Button
          onClick={openCreate}
          className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none"
        >
          <Plus className="w-4 h-4 mr-1.5" /> New Category
        </Button>
      </div>

      {categories.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-12 text-center">
          <FolderOpen className="w-10 h-10 text-[#D2D9D9] mx-auto mb-3" />
          <p className="text-[#5C5C5C] font-medium">No categories yet</p>
          <p className="text-sm text-[#9CA3AF] mt-1">Create your first category to organize blog posts.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-[#E5E7EB] p-4 flex items-center justify-between hover:border-[#6AD990]/40 transition-colors"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#e8f5e9] flex items-center justify-center shrink-0">
                  <FolderOpen className="w-5 h-5 text-[#6AD990]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#232020] text-sm">{cat.name}</h3>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">/{cat.slug}</p>
                  {cat.description && (
                    <p className="text-xs text-[#5C5C5C] mt-1 truncate max-w-md">{cat.description}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openEdit(cat)}
                  className="text-[#5C5C5C] hover:text-[#232020] hover:bg-[#F5F7F7] rounded-lg"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#5C5C5C] hover:text-red-600 hover:bg-red-50 rounded-lg"
                  onClick={() => setDeleteId(cat.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={editDialog} onOpenChange={closeDialog}>
        <DialogContent className="bg-white border-[#E5E7EB] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-[#232020]">{editId ? "Edit Category" : "New Category"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-semibold text-[#232020]">Name</Label>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (!editId) {
                    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
                  }
                }}
                placeholder="e.g., Safety Tips"
                className="mt-1.5 !bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] rounded-lg"
              />
            </div>
            <div>
              <Label className="text-sm font-semibold text-[#232020]">Slug</Label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="e.g., safety-tips"
                className="mt-1.5 !bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] rounded-lg"
              />
            </div>
            <div>
              <Label className="text-sm font-semibold text-[#232020]">Description (optional)</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description..."
                className="mt-1.5 !bg-white border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] rounded-lg"
                rows={2}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog} className="border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none">
              {editId ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent className="bg-white border-[#E5E7EB] rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#232020]">Delete Category</AlertDialogTitle>
            <AlertDialogDescription className="text-[#5C5C5C]">
              Posts in this category will become uncategorized. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white border-[#E5E7EB] text-[#232020] hover:bg-[#F5F7F7] rounded-lg">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteMutation.mutate({ id: deleteId }, { trpc: { context: { headers } } } as any)}
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
