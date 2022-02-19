function Student(name, gender, age) {
this.name = name;
this.gender = gender;
this.age = age;
}

const student1 = Object.create(Student);
const student2 = Object.create(Student);

Student.prototype.setSubject = function (subjectName) {
this.subject = subjectName;
return this.subject;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
  return this.marks;
}

Student.prototype.addMarks = function (...marks) {
  this.marks = [];
    for (let mark of marks) {
        this.marks.push(mark);
    }
    return this.marks;
}

Student.prototype.getAverage = function () {
    let marks = this.marks;
    this.min = Infinity;
    this.max = -Infinity;
    this.sum = 0;
    this.avg;
    for (let i = 0; i < marks.length; i++) {
      this.sum += marks[i];
      if (marks[i] > this.max) {
        this.max = marks[i];
      }
      if (marks[i] < this.min) {
        this.min = marks[i];
      }
    }
    this.avg = this.sum/marks.length;
        return this.avg;
    }

    Student.prototype.exclude = function (reason) {
        this.reason = reason;
        delete this.subject;
        delete this.marks;
        this.excluded = this.reason;
      }

// ваш код для остальных методов
