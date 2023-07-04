export default function getStudentIdsSum(studentsList) {
  if (Array.isArray(studentsList)) {
    const initialValue = 0;
    const studentsIdsSum = studentsList
      .reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue);

    return studentsIdsSum;
  }

  return 0;
}
