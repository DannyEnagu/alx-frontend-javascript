export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const employees in report.allEmployees) {
    if (employees) {
      report.allEmployees[employees].forEach((element) => {
        allEmployees.push(element);
      });
    }
  }

  return allEmployees;
}
