export default function yearFormat(startDate: string, endDate: string): string {
  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
  const years = `${startYear} - ${endYear}`;
  return years;
}
