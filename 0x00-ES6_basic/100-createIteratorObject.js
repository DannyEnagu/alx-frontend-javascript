export default function createIteratorObject(report) {
  return [
    ...report.allEmployees.engineering,
    ...report.allEmployees.marketing,
  ];
}
