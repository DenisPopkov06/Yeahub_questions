export default function getPaginationRange(currentPage: number, totalPages: number) {
  const pagination = [];
  pagination.push(1);

  if (totalPages <= 7) {
    for (let i = 2; i < totalPages; i++) {
      pagination.push(i);
    }
    if (totalPages > 1) pagination.push(totalPages);
    return pagination;
  }

  if (currentPage > 4) {
    pagination.push('...');
  }

  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);
  
  for (let i = start; i <= end; i++) {
    pagination.push(i);
  }

  if (currentPage < totalPages - 3) {
    pagination.push('...');
  }

  if (totalPages > 1) {
    pagination.push(totalPages);
  }

  return pagination;
}