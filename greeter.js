var Student = /** @class */ (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Scott", lastname: "Jurek" };
var another_user = new Student("Kilian", "J", "Burgada");
document.getElementById("flex").innerHTML = greeter(user);
document.getElementById("flex2").innerHTML = greeter(another_user);
