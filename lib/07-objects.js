const student = {
  firstName: 'sally',
  lastName: 'jones',
  subject: 'physics'
};

console.log(typeof student);
console.log(student);

// C-reate
student.city = 'Istanbul';
student['city'] = 'Paris';
console.log(student);

// R-ead
console.log(student.subject);
console.log(student['subject']);

// U-pdate
student["city"] = "Lyon"
student.city = "Ankara"
console.log(student)

// D-elete
delete student.subject;
console.log(student);
