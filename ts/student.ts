class Student {
    id: number;
    fname: string;
    favNumber: number;
    favColor: string;

    constructor(id: number, fname: string, favNumber: number, favColor: string) {
        this.id = id;
        this.fname = fname;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }

    print(): void {
        console.log(`${this.id}|${this.fname}|${this.favNumber}|${this.favColor}`);
    }
}



let students: Student[] = [
    new Student(1, "Ron", 7, "Pea Green"),
    new Student(2, "Chris", 43,"Red"),
    new Student(3, "Julie", 15, "Pink"),
    new Student(4, "Greg", 8, "Green"),
    new Student(5, "Sean", 3, "Black")
]; 

for(let student of students) {
    student.print();
}