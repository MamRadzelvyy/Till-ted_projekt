import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js"

const foo = new Enemy("Tomas", 50, 1)
console.log (foo);

const background = new Background();

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

const gameLoop = () => {
//clear
clear();
//update
update();
//render
render();
//fps
fps();
//gameLoop znovu
window.requestAnimationFrame(gameLoop)

}

const clear = () => {
    canvas.width = 1280;
    canvas.height = 720;
    background.draw(ctx);

}

// OOP
// vlastnosti objektu - atributy
const enemy = {
    hp: 100,
    name: "Enemy1",
    dmg: 12,
}


const update = () => {}
const render = () => {}
const fps = () => {}

window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}

























/*
const battleBus = new Image();
battleBus.src = "./res/img/boss/battle_bus.png";

let bossPaths = [
"./res/img/boss/battle_bus.png",
 "./res/img/boss/BOSS.png",
 "./res/img/boss/fnkid.png",
 "./res/img/boss/kevin.png",
 "./res/img/boss/mecha.png",
];

canvas .width = 1280;
canvas .height = 720;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);

ctx.fillStyle = "orange";
ctx.fillRect (100, 200, 100, 200);

ctx.strokeStyle = "red";
ctx.strokeRect (400, 200, 100, 200);
ctx.strokeRect (100, 200, 100, 200);


ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(160, 100);
ctx.lineTo(520, 400);
ctx.lineTo(50, 300);
ctx.lineTo(50, 50);
ctx.lineTo(330, 70);
ctx.lineTo(100, 70);
ctx.stroke()

ctx.beginPath();
ctx.arc(600, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(620, 65, 10, 0, 2 * Math.PI);
ctx.fill()

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(580, 65, 10, 0, 2 * Math.PI);
ctx.fill()

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.lineTo(560, 85);
ctx.lineTo(580, 98);
ctx.lineTo(620, 98);
ctx.lineTo(640, 85);
ctx.stroke()


let bus = {
    x: 200,
    y: 200,
    xVelocity: 1,
    yVelocity: 1,
}



window.onload = () => {
  setInterval(() => {

if (canvas.width <= bus.x + 200){
    bus.xVelocity *= -1;
battleBus.src = bossPaths[1];

}
if (bus.x <= 0){
    bus.xVelocity *= -1;
    battleBus.src = bossPaths[3];
}
if (canvas.height <= bus.y + 200){
    bus.yVelocity *= -1;
    battleBus.src = bossPaths[2];
}
    if (bus.y <= 0){
        bus.yVelocity *= -1;
        battleBus.src = bossPaths[4];
    }


    bus.x += bus.xVelocity;
    bus.y += bus.yVelocity;
    ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1280, 720);
  ctx.drawImage(battleBus, bus.x, bus.y, 200, 200);
  }, 10); 
}
*/
