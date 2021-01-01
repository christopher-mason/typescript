export class Friend {
    id: number;
    name: string;
    email: string;
    phoneNum: string;

    constructor(id: number, name: string, email: string, phoneNum: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNum = phoneNum;
    }

    print(): void {
        console.log(`${this.id}|${this.name}|${this.email}|${this.phoneNum}`);
    }
}



// let friends: Friend[] = [
//     new Friend(1, "Ron", "ron@yahoo.com", "513-123-4567"),
//     new Friend(2, "Chris", "chirs@yahoo.com","513-234-5432"),
//     new Friend(3, "Julie", "julie@yahoo.com", "513-675-4359"),
//     new Friend(4, "Greg", "greg@yahoo.com", "513-543-8970"),
//     new Friend(5, "Sean", "sean@yahoo.com", "513-654-9120")
// ]; 