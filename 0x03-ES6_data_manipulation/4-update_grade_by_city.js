export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (Array.isArray(studentsList)) {
    const updatedStudentList = studentsList
      .filter(({ location }) => location === city)
      .map((student) => {
        Object.assign(student, { grade: 'N/A' });
        for (const grade of newGrades) {
          if (grade.studentId === student.id) {
            Object.assign(student, { grade: grade.grade });
          }
        }
        return student;
      });

    return updatedStudentList;
  }

  return [];
}
