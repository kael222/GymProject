// // zaczate storera jakb yco

// let buttons = document.getElementById("rododendron");
// console.log(buttons);
let buttons1 = document.getElementById("rododendron1");
// console.log(buttons1);

// let pp = document.getElementById("licz");
// console.log(pp);

// let stopCount;

// let count = 0;

// buttons.addEventListener("click", function() {
//   stopCount = setInterval(function() {
//     count += 1;
//     pp.textContent = count;
//     console.log(count);
//   }, 1000);
// });

// buttons1.addEventListener("click", function() {
//   clearInterval(stopCount);
// });

// // Próbuję stworzyc listę to do do ćwiczeń

// let addButtons = document.getElementById("addExercise");
// console.log(addButtons);

// let lists = document.getElementById("list");
// console.log(lists); //ul

// addButtons.addEventListener("click", function() {
//   let addInput = document.getElementById("kupa");
//   console.log(addInput);

//   let newli = document.createElement("li"); //tworzę lsitę li
//   let paragrph = document.createElement("p");
//   let b1 = document.createElement("button");
//   let b2 = document.createElement("button");

//   b1.innerText = "completed";
//   b2.innerText = "deleted";
//   paragrph.innerText = addInput.innerHTML;
//   lists.appendChild(newli);
//   newli.appendChild(paragrph);
//   newli.appendChild(b1);
//   newli.appendChild(b2);
// });

let pp = document.getElementById("licz");
var licz = 0;
var sprzątajkuchnię;
let buttons = document.getElementById("rododendron");
buttons.addEventListener("click", function() {
  sprzątajkuchnię = setInterval(function() {
    pp.textContent = licz;
    pp.innerText =
      "sprzątaj kuchnię albo kasa " + licz + " złotych do skarbonki";
    licz += 1;
    console.log("sprzątaj kuchnię albo kasa " + licz + " groszy do skarbonki");
  }, 1000);
});
buttons1.addEventListener(
  "click",
  function() {
    clearInterval(sprzątajkuchnię);
  },
  2000
);
