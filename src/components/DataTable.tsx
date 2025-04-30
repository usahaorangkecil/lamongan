
import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash, Plus } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { FormDialog, DeleteConfirmDialog } from '@/utils/crud-helpers';

interface Column {
  header: string;
  accessorKey: string;
  cell?: (value: any) => React.ReactNode;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
  title?: string;
  formFields: Array<{
    name: string;
    label: string;
    type?: string;
    options?: string[];
  }>;
  onCreate: (data: any) => void;
  onUpdate: (id: string | number, data: any) => void;
  onDelete: (id: string | number) => void;
}

const DataTable = ({
  data,
  columns,
  title = "Data",
  formFields,
  onCreate,
  onUpdate,
  onDelete,
}: DataTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  
  const pageSize = 5;
  const pageCount = Math.ceil(data.length / pageSize);
  const currentData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
  const handleAdd = (newData: any) => {
    onCreate({
      id: Date.now().toString(), // Generate temporary ID
      ...newData
    });
  };

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditOpen(true);
  };

  const handleUpdate = (updatedData: any) => {
    onUpdate(selectedRow.id, updatedData);
  };

  const handleDelete = (row: any) => {
    setSelectedRow(row);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    onDelete(selectedRow.id);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Button onClick={() => setIsAddOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Data
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.accessorKey}>{column.header}</TableHead>
              ))}
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="text-center p-4">
                  Tidak ada data
                </TableCell>
              </TableRow>
            ) : (
              currentData.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={`${row.id}-${column.accessorKey}`}>
                      {column.cell ? column.cell(row[column.accessorKey]) : row[column.accessorKey]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(row)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(row)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {pageCount > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            {[...Array(pageCount)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(p => Math.min(p + 1, pageCount))}
                className={currentPage >= pageCount ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
      
      {/* Add Form Dialog */}
      <FormDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title={`Tambah ${title} Baru`}
        description={`Silakan masukkan informasi ${title} baru di bawah ini.`}
        fields={formFields}
        onSave={handleAdd}
      />
      
      {/* Edit Form Dialog */}
      {selectedRow && (
        <FormDialog
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          title={`Edit ${title}`}
          description={`Ubah informasi ${title} berikut.`}
          fields={formFields}
          initialData={selectedRow}
          onSave={handleUpdate}
        />
      )}
      
      {/* Delete Confirmation Dialog */}
      {selectedRow && (
        <DeleteConfirmDialog
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={confirmDelete}
          item={title}
        />
      )}
    </div>
  );
};

export default DataTable;
