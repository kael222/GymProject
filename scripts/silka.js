// zaczate storera jakb y co

let buttons = document.getElementById("btn1");
console.log(buttons);
let buttons1 = document.getElementById("btn2");
console.log(buttons1);

let pp = document.getElementById("licz");
console.log(pp);

let stopCount;

let count = 0;

buttons.addEventListener("click", function() {
  stopCount = setInterval(function() {
    count += 1;
    pp.textContent = count;
    console.log(count);
  }, 1000);
});

buttons1.addEventListener("click", function() {
  clearInterval(stopCount);
});

// Próbuję stworzyc listę to do do ćwiczeń
const addButtons = document.getElementById("addExercise"); //znajduję button

addButtons.addEventListener("click", function() {
  const lists = document.getElementById("list"); //znajduję listę do której bedę dodawał ćwiczenia
  const addInput = document.getElementById("choose").value; //value by pokazało tekst nie obiekt html

  const newlist = document.createElement("li"); //tworzę tworę nowy element listy
  const lI = document.createTextNode(addInput); //
  const b1 = document.createElement("button");
  const b2 = document.createElement("button");

  lists.appendChild(newlist);
  newlist.appendChild(lI);
  newlist.appendChild(b1);
  newlist.appendChild(b2);

  b1.innerText = "completed";
  b2.innerText = "deleted";

  b2.addEventListener("click", function() {
    console.log("delete");

    this.previousSibling.previousSibling.remove(this.previousSibling);
  });
});
