class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.type = null;
     this.state = 100;
     this.fix = function() {
       this.state *= 1.5;
     };
   }
   set state(num) {
     if (num < 0) {
       this._state = 0;
     } else if (num > 100) {
       this._state = 100;
     } else {
       this._state = num;
     }
   };
   get state() {
     return this._state;
   }
 };

 class Magazine extends PrintEditionItem {
   constructor (name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = "magazine";
   }
 }

 class Book extends PrintEditionItem {
   constructor (author, name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = "book";
     this.author = author;
   }
 }

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let findElem of this.books) {
      if (findElem[type] == value) {
        return findElem;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let findElem of this.books) {
      if (findElem['name'] === bookName) {
        this.books.splice(findElem, 1);
        return findElem;
      }
    }
    return null;
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subjects = {
    };

  }

  addMark(mark, subjectName) {
    if (mark > 5 || mark < 1) {
      throw new Error("Невалидное значение");
    }
    if (!this.subjects.hasOwnProperty(subjectName)) {
          this.subjects[subjectName] = [mark];
    } else {
      this.subjects[subjectName].push(mark)
    }
  }

  getAverageBySubject(subjectName) {
    let totalMark = 0;
    if (this.subjects[subjectName] === undefined) {
      throw new Error("Несуществующий предмет");
    }
    for (let i in this.subjects[subjectName]) {
      totalMark += this.subjects[subjectName][i];
            console.log(this.totalMark)
    }
    return totalMark/this.subjects[subjectName].length;
  }

 getAverage( ) {
    let total = [];
    let sum = 0;
    let average = 0;
    for (let i in this.subjects) {
      sum = (this.subjects[i].reduce((acc, number) => acc + number, 0))/this.subjects[i].length;
      total.push(sum);
           }
           for( let i =0; i < total.length; i++) {
             average += total[i];
           }
           return average/total.length;
    }

}
