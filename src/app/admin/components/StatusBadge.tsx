interface StatusBadgeProps {
  status: string;
}

const statusConfig: Record<string, { label: string; color: string }> = {
  published: { label: 'Đã xuất bản', color: 'bg-green-100 text-green-700' },
  draft: { label: 'Nháp', color: 'bg-gray-100 text-gray-700' },
  pending: { label: 'Chờ xử lý', color: 'bg-yellow-100 text-yellow-700' },
  confirmed: { label: 'Đã xác nhận', color: 'bg-blue-100 text-blue-700' },
  completed: { label: 'Hoàn thành', color: 'bg-green-100 text-green-700' },
  cancelled: { label: 'Đã hủy', color: 'bg-red-100 text-red-700' },
  unread: { label: 'Chưa đọc', color: 'bg-red-100 text-red-700' },
  read: { label: 'Đã đọc', color: 'bg-blue-100 text-blue-700' },
  replied: { label: 'Đã trả lời', color: 'bg-green-100 text-green-700' },
  approved: { label: 'Đã duyệt', color: 'bg-green-100 text-green-700' },
  rejected: { label: 'Từ chối', color: 'bg-red-100 text-red-700' },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] || { label: status, color: 'bg-gray-100 text-gray-700' };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
      {config.label}
    </span>
  );
}