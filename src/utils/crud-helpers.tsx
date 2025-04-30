
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from "@/components/ui/use-toast";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  initialData?: any;
  fields: Array<{
    name: string;
    label: string;
    type?: string;
    options?: string[];
  }>;
  onSave: (data: any) => void;
}

export const FormDialog = ({
  isOpen,
  onClose,
  title,
  description,
  initialData = {},
  fields,
  onSave
}: DialogProps) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    toast({
      title: "Sukses",
      description: "Data berhasil disimpan",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name} className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor={field.name} className="text-right">
                {field.label}
              </Label>
              {field.type === 'select' && field.options ? (
                <select
                  id={field.name}
                  name={field.name}
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                >
                  <option value="">Pilih {field.label}</option>
                  {field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type || 'text'}
                  className="col-span-3"
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button type="submit">Simpan</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const DeleteConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  item
}) => {
  const handleDelete = () => {
    onConfirm();
    onClose();
    toast({
      title: "Sukses",
      description: "Data berhasil dihapus",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Konfirmasi Hapus</DialogTitle>
          <DialogDescription>
            Apakah Anda yakin ingin menghapus data {item}? Tindakan ini tidak dapat dibatalkan.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
