import React from "react";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, I am ${this.name}.`;
  }

  role() {
    return "Person";
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  introduce() {
    return `Hello, I am ${this.name} and I study ${this.course}.`;
  }

  role() {
    return "Student";
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, I am ${this.name} and I teach ${this.subject}.`;
  }

  role() {
    return "Teacher";
  }
}

function App() {
  const people = [
    new Person("Arjun Mehta", 40),
    new Student("Riya Sharma", 20, "Computer Science"),
    new Teacher("Dr. Kavita Rao", 45, "Mathematics"),
    new Student("Vikram Singh", 22, "Electronics"),
    new Teacher("Prof. Anil Kumar", 50, "Physics")
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
          <h3>{person.name} ({person.role()})</h3>
          <p>Age: {person.age}</p>
          <p>{person.introduce()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
