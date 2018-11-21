class Student {

      fullname: string;

      constructor(public firstname: string, public middleInitial: string, public lastname: string) {

                  this.fullname = firstname + " "+ middleInitial + " "+ lastname;
      }     
}

interface Person {

          firstname: string;

          lastname: string;
}

function greeter(person: Person) {

         return "Hello, " + person.firstname + " " + person.lastname;
}

let user = {firstname: "Scott", lastname: "Jurek"};

let another_user = new Student("Kilian", "J", "Burgada");

document.getElementById("flex").innerHTML = greeter(user);

document.getElementById("flex2").innerHTML = greeter(another_user);
