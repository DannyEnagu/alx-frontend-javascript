export default function getListStudentIds(studentsList) {
  if (Array.isArray(studentsList)) {
    const studentsIds = studentsList.map(({ id }) => id);
    return studentsIds;
  }

  return [];
}
