// define a new student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Daniel',
  lastName: 'Enagu',
  age: 20,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

// Using Vanilla Javascript, render a table and for
// each elements in the array,

// Page Heading
const h1 = document.createElement('h1');
const heading = document.createTextNode('Intro To TypeScript');
h1.appendChild(heading);

//  Create Students Table
const table =  document.createElement('table');
const thead =  document.createElement('thead');
const tbody =  document.createElement('tbody');
const th =  document.createElement('th');
thead.innerHTML = '<th>First Name</th> <th>Location</th>';

// Append each fist name and location student to student table body
studentsList.forEach((student) => {
  tbody.innerHTML += `<td>${student.firstName}</td> <td>${student.location}</td>`;
});

// Append table header and table body to student table.
table.appendChild(thead);
table.appendChild(tbody);
table.setAttribute('rules', 'all');
table.style.border = '1px solid black';

// Append heading and Table to body. 
document.body.appendChild(h1);
document.body.appendChild(table);