const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 45, 15, 100);
ctx.fillRect(350 - 40, 200 - 45, 15, 100);
ctx.fillRect(260 - 40, 200 - 45, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260 + 10, 90, 7, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 90, 7, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(250, 120, 15, 0, Math.PI);
ctx.fill();
