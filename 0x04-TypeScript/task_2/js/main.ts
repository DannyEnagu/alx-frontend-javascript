// DirectorInterface Interface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface Interface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implemets DirectorInterface interface
class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

// Teacher class implemets TeacherInterface interface
class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

// Return either a Director or a Teacher instance
// depending on the salary amount.
function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary <= 500) {
    return new Teacher();
  }

  return new Director();
}

// Testing
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: Director | Teacher): boolean {
  return (employee instanceof Director);
}

function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

//  String literal types
type Subjects = 'Math' | 'History';

function teachClass(teachClass: Subjects): string {
  if (teachClass === 'Math') {
    return 'Teaching Math';
  }

  if (teachClass === 'History') {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

