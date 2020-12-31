import { Friend } from './friend';

let friends: Friend[] = [
    new Friend(1, "Ron", "ron@yahoo.com", "513-123-4567"),
    new Friend(2, "Chris", "chirs@yahoo.com","513-234-5432"),
    new Friend(3, "Julie", "julie@yahoo.com", "513-675-4359"),
    new Friend(4, "Greg", "greg@yahoo.com", "513-543-8970"),
    new Friend(5, "Sean", "sean@yahoo.com", "513-654-9120")
]; 

for(let friend of friends) {
    friend.print();
}