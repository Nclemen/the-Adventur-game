var game = document.getElementById('game-container')
var buttons = document.getElementById('game-buttons')
var rugtas = [];
rugtas["papiertje"] = false;
rugtas["sleutel"] = false;
var description = document.getElementById("description");
var title = document.getElementById("title");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventory;
var invenItem1 = document.getElementById('inventoryItem');
var mainImageDiv = document.createElement("div","mainImageDiv");
var mainImage = document.createElement("img","mainImage")
var itemNum = 0;
var optie = 0;
var myAudio = document.createElement("audio","myAudio");
var key;
var itemCount = 1;

game.appendChild(myAudio);
title.innerHTML = "The game van Narison";
description.innerHTML = "Uitleg";
document.body.style.backgroundImage = "url(images/lyuPn.jpg)";
mainImageDiv.appendChild(mainImage);
mainImageDiv.setAttribute("id","mainImageDiv");
mainImage.setAttribute("id","mainImage");
document.getElementById('button1').innerHTML = "start";
game.removeChild(invenItem1);
button1.addEventListener("click",start, {once: true});
button1.addEventListener("click",bgSound, {once: true});
game.removeChild(buttons);
game.appendChild(mainImageDiv);
game.appendChild(buttons);
removeButton(2);
removeButton(3);
bgSound();
//
function start() {
console.log("Level 1");
document.body.style.backgroundImage = "url(images/smoke-bg.png)"
refreshbtn(1,"click",start);
addButton(2);
addButton(3);
document.getElementById("button3").addEventListener("click", levelEenOptieDrie);
document.getElementById("button3").innerHTML = "pak de rugzak op en kijk wat erin zit";
levelEen();
}
//
function levelEen() {
  button1.removeEventListener("click",levelEen);
  document.getElementById("description").innerHTML = "je wordt wakker in de gymzaal van je school.\nje kijkt rond en ziet dat er niemand anders is.\nvoor de rest zie je een rugtas naast je liggen een deur en een dicht opberghokje.\nwat doe je?";
  document.getElementById('title').innerHTML = "Level 1";
  mainImage.setAttribute("src","images/schoolgym.jpg");
  document.getElementById("button1").addEventListener("click", levelEenOptieEen, {once: true});
  document.getElementById("button1").innerHTML = "loop naar het opberghokje";
  document.getElementById("button2").addEventListener("click", levelEenOptieTwee, {once: true});
  document.getElementById("button2").innerHTML = "loop naar de deur";
  button3.style.display = "";
  button1.removeEventListener("click",kist);
  button1.removeEventListener("click",unlockKist);
  levelEenButtonCheck();
}
function levelEenButtonCheck(){
sleutel();
backpack();
  function sleutel() {

  if (rugtas["sleutel"] === true) {
      button1.style.display = "none";
  }
}
  function backpack() {

  if (rugtas["papiertje"] === true) {
    button3.style.display = "none";
  }
}
}
function levelEenOptieEen() {
  console.log("optie1");
  button3.style.display = "none";
  document.getElementById('title').innerHTML = "Level 1 - opberghokje";
  document.getElementById("description").innerHTML = "In het opberghokje ligt een kist met een letter combinatie slot eraan";
  mainImage.setAttribute("src","images/storage.jpg");
  document.getElementById("button1").addEventListener("click", kist, {once: true});
  document.getElementById("button1").innerHTML = "kijk naar de kist";
  document.getElementById("button2").addEventListener("click", levelEen, {once: true});
  document.getElementById("button2").innerHTML = "ga terug";
  button2.removeEventListener("click",levelEenOptieTwee);
  button1.removeEventListener("click",unlockKist);
}
function kist() {
  mainImage.setAttribute("src","images/chest.jpg")
  document.getElementById("button1").innerHTML = "Open de kist";
  button1.addEventListener("click", unlockKist);
  button2.addEventListener("click", levelEenOptieEen, {once: true});
  button2.removeEventListener("click",levelEen, {once: true});

}
function unlockKist() {
  var keyword = prompt("╔═══╗   ╔═══╗  ╔═══╗   ╔═══╗   ╔══╗\n       ║   ║ ○     ║ ○       ║ ○           ║\n╚═══╝   ╚═       ╚═══╝    ╚═══╝   ╚══╝");
  if (keyword === "droom") {
    rugtas["sleutel"] = true;
    button1.style.display = "none";
    levelEen();
  }else {
    alert("Hij gaat niet open.");
  }
}
function levelEenOptieTwee() {
  console.log("optie2");
  document.getElementById('title').innerHTML = "Level 1 - deur";
  doorCheck();
}
function levelEenOptieDrie() {
  document.getElementById("description").innerHTML = "<p>je pakt de rugtas op en doet hem open. in de rugzak zit een papiertje met wat lijnen circles getallen en letters erop geschreven en niks anders. neem je de rugtas mee?</p>";
  removeButton(3);
  refreshbtn(1,"click",levelEenOptieEen);
  refreshbtn(2,"click",levelEenOptieTwee);
  button1.style.display = ""
  button2.style.display = ""
  mainImage.setAttribute("src","images/backpack.jpg");
  document.getElementById("button1").innerHTML = "Ja";
  document.getElementById("button1").addEventListener("click", rugtasJa);
  document.getElementById("button1").addEventListener("click", levelEen);
  document.getElementById("button2").innerHTML = "Nee";
  document.getElementById("button2").addEventListener("click", rugtasNee);
}
function doorCheck() {
  if (rugtas["sleutel"]!= true) {
    alert("De deur is op slot vind een manier om hem open te krijgen.")
  }
}
function rugtasNee() {
  addButton(3);
  refreshbtn(1,"click",rugtasJa);
  refreshbtn(2,"click",rugtasNee);
  levelEen();
}
function rugtasJa() {
  rugtas["papiertje"] = true;
  alert("je hebt de rugzak opgepakt met het papiertje erin.");
  refreshbtn(1,"click",rugtasJa);
  refreshbtn(2,"click",rugtasNee);
  addButton(3);
  refreshbtn(3,"click",levelEenOptieDrie);
  removeButton(3);
  inventory = document.createElement("div");
  inventory.setAttribute("id","inventory");
  inventory.appendChild(invenItem1);
  game.appendChild(inventory);
  invenItem1.setAttribute("src","images/paper.jpg");
}

function order() {
  game.removeChild(buttons);
  game.removeChild(inventory);
  game.appendChild(inventory);
  game.appendChild(buttons);
}

function death() {
  game.removeChild(title);
  game.removeChild(buttons);
  game.removeChild(description);
  document.body.style.backgroundImage = "url('images/lemlem.gif')";
}



function itemSize(item) {

}




function newItem() {
  var nieuw = document.createElement("img");
  nieuw.setAttribute("id","invenItem"+(itemCount+1));
  inventory.appendChild(nieuw);
  itemCount++;
}
















function displayButton(nummer,display) {
  if (nummer==="button1") {
    button1.style.display = display;
  } else if (nummer==="button2") {
    button2.style.display = display;
  } else if (nummer==="button3") {
    button3.style.display = display;
  }
}


function check(item) {
  if (item=true) {
    displayButton("button1","none")
  }
}
















function bgSound() {
  myAudio.setAttribute("src","mp3/Light-rain-and-thunder-sounds.mp3");
  myAudio.autoplay = true;
  myAudio.loop = true;
  myAudio.load();
}

function removeButton (nummer){
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
    buttons.appendChild(button1);
  }else if (nummer === 2) {
    buttons.appendChild(button2);
  }else if (nummer === 3) {
    buttons.appendChild(button3);

  }
}
//function addButton1(nummer) {
//  if (nummer === 1) {
//    var button = document.createElement("button");
//    button.setAttribute("id","button1");
//    buttons.appendChild(button);
//  }else if (nummer === 2) {
//    var button = document.createElement("button");
//    button.setAttribute("id","button2");
//    buttons.appendChild(button);
//  }else if (nummer === 3) {
//    var button = document.createElement("button");
//    button.setAttribute("id","button3");
//    buttons.appendChild(button);
//  }
//}
function refreshbtn(butt,event,eventName) {
  if (butt === 1) {
  button1.removeEventListener(event,eventName);
}else if (butt === 2) {
  button2.removeEventListener(event,eventName);
}else if (butt === 3) {
  button3.removeEventListener(event,eventName);
  }
}
function createEl(type,id) {
  var nieuw = document.createElement(type);
  nieuw.setAttribute("id",id);
}
function addItem(type,id, src = "") {
  var nieuw = document.createElement(type);
  nieuw.setAttribute("id",id);
  nieuw.setAttribute("src",src);
  inventory = document.getElementById('inventory');
  inventory.appendChild(nieuw);
}
