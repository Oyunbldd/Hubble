let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width);
console.log(canvas.height);
let i = 0,
  j = 0;

let x = 200;
let y = 500;
let dx = 5;
let dy = 3;
let imgw = 50;
let imageName = new Image();
imageName.src = "./qw.webp";
c.clearRect(0, 0, innerWidth, innerHeight);

// const a = animate();
function animate() {
  i++;
  canvas.onclick = function () {
    if (y < 100) {
      dy = 7;
    }

    console.log(i);
    if (i == 0) {
      animate();
    }
  };
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.drawImage(imageName, x, y, imgw, 50);
  c.stroke();
  if (y - imgw < 100) {
    console.log(y);
    dy = -dy;
  }
  y -= dy;
  if (y - imgw < 500) {
    console.log(y - imgw);
    requestAnimationFrame(animate);
  } else {
    x = 200;
    y = 500;
    dy = 3;
    hehe = 50;
    i = 0;
    return;
  }
}

let anim = () => {
  if (i == 0) {
    animate();
  } else {
    console.log("asdsad");
  }
};
const draw = () => {
  c.drawImage(imageName, x, y, imgw, 50);
  c.stroke();
};
