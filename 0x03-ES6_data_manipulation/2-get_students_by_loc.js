export default function getStudentsByLocation(studentsList, city) {
  if (Array.isArray(studentsList)) {
    const studentsByLocation = studentsList
      .filter(({ location }) => location === city);
    return studentsByLocation;
  }

  return [];
}
