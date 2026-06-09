import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  render?: (value: any, item: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  onView?: (item: any) => void;
  loading?: boolean;
}

export default function DataTable({ columns, data, onEdit, onDelete, onView, loading }: DataTableProps) {
  if (loading) {
    return <div className="text-center py-10 text-gray-500">Đang tải dữ liệu...</div>;
  }

  if (data.length === 0) {
    return <div className="text-center py-10 text-gray-500">Không có dữ liệu</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="text-left p-4 font-semibold text-gray-600">
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete || onView) && (
              <th className="text-left p-4 font-semibold text-gray-600">Thao tác</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="p-4">
                  {col.render ? col.render(item[col.key], item) : item[col.key]}
                </td>
              ))}
              {(onEdit || onDelete || onView) && (
                <td className="p-4">
                  <div className="flex gap-2">
                    {onView && (
                      <button onClick={() => onView(item)} className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                        👁️
                      </button>
                    )}
                    {onEdit && (
                      <button onClick={() => onEdit(item)} className="p-1 text-yellow-500 hover:bg-yellow-50 rounded">
                        ✏️
                      </button>
                    )}
                    {onDelete && (
                      <button onClick={() => onDelete(item)} className="p-1 text-red-500 hover:bg-red-50 rounded">
                        🗑️
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}