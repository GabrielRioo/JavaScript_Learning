// isso é um objeto
var pessoa = {
  nome: {
    primeiro: "Gabriel",
    ultimo: "Rio",
  },
  idade: 23,
  sexo: "masculino",
  interesses: ["jogos", "musica"],
  bio: function () {
    alert(
      this.nome.primeiro +
        " " +
        this.nome.ultimo +
        " tem " +
        this.idade +
        " anos de idade. Ele gosta de " +
        this.interesses[0] +
        " e " +
        this.interesses[1] +
        "."
    );
  },
  saudacao: function () {
    alert("Oi! Eu sou " + this.nome.primeiro + ".");
  },
};

pessoa["olhos"] = "castanho";
pessoa.despedida = function () {
  alert("Adeus a todos!");
};

// ================ PARTE 2 ===================

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    var string = `${this.name.first} ${this.name.last} is ${this.age} years old. ${pronoun} ${this.interests[0]} and ${this.interests[1]}.`
    var pronoun;
    console.log(pronoun);

    if (this.gender === "male" || this.gender === "Male" || this.gender === "m" || this.gender === "M") {
        pronoun = "He likes ";
    } else if (this.gender === "female" || this.gender === "Female" || this.gender === "f" || this.gender === "F") {
        pronoun = "She likes ";
    } else {
        pronoun = "They like ";
    }

    string += pronoun;

    console.log(pronoun);
    console.log(string);
    if (this.interests.length === 1) {
        string += this.interests[0] + ".";
    } 
    else if (this.interests.length === 2) {
        string += this.interests[0] + " and " + this.interests[1] + ".";
    } 
    else {
        for (let i = 0; i < this.interests.length; i++) {
            if (i === this.interests.length - 1) {
                string += "and " + this.interests[i] + ".";
            } else {
                string += this.interests[i] + ", ";
            }
        }
    }

    alert(string);
    };
    this.greeting = function () {
        alert(`Hi I'm ${this.name.first}.`);
    };
};

var person1 = new Person('Gabriel', 'Rio', 23, 'male', ['music', 'games', 'programming']);
