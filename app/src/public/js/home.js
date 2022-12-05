const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = ["#ff3838", "#ffb8b8", "c56cf0", "#ff9f1a", "7d5fff"];

function onClick(e) {
  console.log(e);
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
}

canvas.addEventListener("mousemove", onClick);
