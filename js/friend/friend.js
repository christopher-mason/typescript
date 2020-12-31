"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(id, name, email, phoneNum) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNum = phoneNum;
    }
    Friend.prototype.print = function () {
        console.log(this.id + "|" + this.name + "|" + this.email + "|" + this.phoneNum);
    };
    return Friend;
}());
exports.Friend = Friend;
// let friends: Friend[] = [
//     new Friend(1, "Ron", "ron@yahoo.com", "513-123-4567"),
//     new Friend(2, "Chris", "chirs@yahoo.com","513-234-5432"),
//     new Friend(3, "Julie", "julie@yahoo.com", "513-675-4359"),
//     new Friend(4, "Greg", "greg@yahoo.com", "513-543-8970"),
//     new Friend(5, "Sean", "sean@yahoo.com", "513-654-9120")
// ]; 
// for(let friend of friends) {
//     friend.print();
// }
