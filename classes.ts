interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface{
  name: string;
  email: string;
  age: number;
  // cant access it from outside the class but we can access it from any class that inherits User

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User created: ' + this.name);
    
  }

  register() {
    console.log(this.name + ' is now registered');
  }

  payInvoice() {
    console.log(this.name + ' paid invoice.');
    
  }
}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let nikki = new Member(1, 'Nikki', 'abarcanikki@gmail.com', 22)

// console.log(nikki);
// console.log(nikki.age);

nikki.payInvoice()
