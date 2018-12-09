var game = document.getElementById('game-container')
var buttons = document.getElementById('game-buttons')
var rugzak = [];
var description = document.getElementById("description");
var title = document.getElementById("title");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventory;
var div = document.createElement("div")
var mainImage;

title.innerHTML = "The game van Narison";
description.innerHTML = "Uitleg";
document.getElementById('button1').innerHTML = "start";
button1.addEventListener("click",start);
removeButton(2);
removeButton(3);
function start() {
console.log("Level 1");
refreshbtn(1);
addButton(2);
addButton(3);
levelEen();
}
function levelEen() {
  document.getElementById("description").innerHTML = "je wordt wakker in de gymzaal van je school.\nje kijkt rond en ziet dat er niemand anders is.\nvoor de rest zie je een rugtas naast je liggen een deur en een dicht opberghokje.\nwat doe je?";
  document.getElementById('title').innerHTML = "Level 1";
  document.getElementById("button1").addEventListener("click", levelEenOptieEen);
  document.getElementById("button1").innerHTML = "loop naar het opberghokje";
  document.getElementById("button2").addEventListener("click", levelEenOptieTwee);
  document.getElementById("button2").innerHTML = "loop naar de deur";
  document.getElementById("button3").addEventListener("click", levelEenOptieDrie);
  document.getElementById("button3").innerHTML = "pak de rugzak op en kijk wat erin zit";
}
function levelEenOptieEen() {

}
function levelEenOptieTwee() {

}
function levelEenOptieDrie() {
  var invenItem1 = document.getElementById('inventoryItem');
  document.getElementById("description").innerHTML = "<p>pakt de rugzak op en doet hem open. in de rugzak zit een papiertje met wat lijnen circles getallen en letters erop geschreven en niks anders.</p>";
  rugzak[0] = "papiertje";
  alert("je hebt de rugzak opgepakt");
  removeButton(3);
  createEl("div","inventory");
  inventory = document.getElementById("inventory");
  inventory.appendChild(invenItem1);
  game.appendChild(inventory);
  invenItem1.setAttribute("src","images/paper.jpg")
}
function removeButton (nummer){
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  if (nummer === 1) {
    buttons.removeChild(button1);
  }else if (nummer === 2) {
    buttons.removeChild(button2);
  }else if (nummer === 3) {
    buttons.removeChild(button3);
  }
}
function addButton(nummer) {
  if (nummer === 1) {
    var button = document.createElement("button");
    button.setAttribute("id","button1");
    buttons.appendChild(button);
  }else if (nummer === 2) {
    var button = document.createElement("button");
    button.setAttribute("id","button2");
    buttons.appendChild(button);
  }else if (nummer === 3) {
    var button = document.createElement("button");
    button.setAttribute("id","button3");
    buttons.appendChild(button);
  }
}
function refreshbtn(nummer) {
  removeButton(nummer);
  addButton(nummer);
}
function createEl(type,id) {
  var nieuw = document.createElement(type);
  nieuw.setAttribute("id",id)
}
