function drawGeruud() {
  if (geruud.length != 0 && geruud[0].x < -100) {
    geruud.shift();
  }

  geruud.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(Mongolger, element.x, element.y, element.w, element.h);
    }
  });

  if (geruud.length < 1) {
    let xPos = 600;
    let yPos = 0.6 * parseInt(canvas.height);
    let w = 0.3 * parseInt(canvas.height) * 1;
    let h = 0.2 * parseInt(canvas.height);
    geruud.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawHiids() {
  if (hiids.length != 0 && hiids[0].x < -100) {
    hiids.shift();
  }

  hiids.forEach((element) => {
    // console.log(element);
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(hiid, element.x, element.y, element.w, element.h);
    }
  });

  if (hiids.length < 1) {
    let xPos = 600;
    let yPos = 0.4 * parseInt(canvas.height);
    let w = 0.4 * parseInt(canvas.height) * 1;
    let h = 0.4 * parseInt(canvas.height);
    hiids.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawStatus() {
  if (status.length != 0 && status[0].x < -100) {
    status.shift();
  }

  status.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(imgStatu, element.x, element.y, element.w, element.h);
    }
  });

  if (status.length < 1) {
    let xPos = 600;
    let yPos = 0.45 * parseInt(canvas.height);
    let w = 0.3 * parseInt(canvas.height) * 1;
    let h = 0.35 * parseInt(canvas.height);
    status.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawBlueskys() {
  if (blueskys.length != 0 && blueskys[0].x < -100) {
    blueskys.shift();
  }

  blueskys.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(bluesky, element.x, element.y, element.w, element.h);
    }
  });

  if (blueskys.length < 1) {
    let xPos = 600;
    let yPos = 0.18 * parseInt(canvas.height);
    let w = 0.4 * parseInt(canvas.height) * 1;
    let h = 0.63 * parseInt(canvas.height);
    blueskys.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawLands() {
  if (lands.length != 0 && lands[0].x < -parseInt(canvas.height)) {
    lands.shift();
  }

  lands.forEach((element) => {
    // console.log(element);
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(land, element.x, element.y, element.w, element.h);
    }
  });

  if (
    lands[lands.length - 1].x + lands[lands.length - 1].w - 10 <
    canvas.width
  ) {
    let xPos = parseInt(canvas.width) - 50;
    let yPos = 0.8 * parseInt(canvas.height);
    let w = parseInt(canvas.height);
    let h = 0.2 * parseInt(canvas.height);
    lands.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawClouds() {
  if (clouds.length != 0 && clouds[0].x < -100) {
    clouds.shift();
  }

  clouds.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(cloud, element.x, element.y, element.w, element.h);
    }
  });

  if (clouds.length < 3) {
    let xPos = 600;
    let yPos = 0.1 * parseInt(canvas.height);
    let w = 0.3 * parseInt(canvas.height) * 1;
    let h = 0.2 * parseInt(canvas.height);
    clouds.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawLamps() {
  if (lamps.length != 0 && lamps[0].x < -50) {
    lamps.shift();
  }

  lamps.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(lamppic, element.x, element.y, element.w, element.h);
    }
  });

  if (lamps.length < 5) {
    let xPos = 650;
    let yPos = 0.67 * parseInt(canvas.height);
    let w = 0.07 * parseInt(canvas.height) * 1;
    let h = 0.15 * parseInt(canvas.height);
    lamps.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawBaishins() {
  if (baishins.length != 0 && baishins[0].x < -100) {
    baishins.shift();
  }

  baishins.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(baishinpic, element.x, element.y, element.w, element.h);
    }
  });

  if (baishins.length < 1) {
    let xPos = 600;
    let yPos = 0.5 * parseInt(canvas.height);
    let w = 0.3 * parseInt(canvas.height) * 1;
    let h = 0.3 * parseInt(canvas.height);
    baishins.push({ x: xPos, y: yPos, w: w, h: h });
  }
}
let alhalt = 0;
let hugatsaa = 0;
function drawDogs() {
  if (dogs.length != 0 && dogs[0].x < 0) {
    dogs.shift();
  }

  dogs.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      if (alhalt > 1) {
        alhalt = 0;
      }
      var bulldog = new Image();
      bulldog.src = "./images/nohoi-yvah-1.png";

      if (alhalt == 0) {
        ctx.drawImage(bulldog, element.x, element.y, element.h, element.w);
      }
      var bulldog1 = new Image();
      bulldog1.src = "./images/nohoi-yvah-2.png";

      if (alhalt == 1) {
        ctx.drawImage(bulldog1, element.x, element.y, element.h, element.w);
      }
      if (hugatsaa % 10 == 0) {
        alhalt++;
      }
      hugatsaa++;
    }
  });

  if (dogs.length < 1) {
    let xPos = 950;
    let yPos = 0.8 * parseInt(canvas.height);
    let w = 0.1 * parseInt(canvas.height);
    let h = 0.1 * parseInt(canvas.height);
    dogs.push({ x: xPos, y: yPos, w: w, h: h });
  }
}

function drawShavars() {
  if (shavars.length != 0 && shavars[0].x < 0) {
    shavars.shift();
  }
  shavars.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(shavarpic, element.x, element.y, element.w, element.h);
    }
  });

  if (obs2 == true && nvhs.length == 0) {
    let xPos = Math.round(canvas.width + 0.5 * canvas.width * Math.random());
    let yPos = 0.85 * parseInt(canvas.height);
    let w = 0.12 * parseInt(canvas.height) * 1;
    let h = 0.07 * parseInt(canvas.height);
    shavars.push({ x: xPos, y: yPos, w: w, h: h });
    obs1 = true;
    obs2 = false;
  }
}

function drawNvhs() {
  if (nvhs.length != 0 && nvhs[0].x < 0) {
    nvhs.shift();
  }
  nvhs.forEach((element) => {
    if (!(element.x + element.w < 0 && element.x > canvas.width)) {
      ctx.drawImage(nvhpic, element.x, element.y, element.w, element.h);
    }
  });

  if (obs1 == true && shavars.length == 0) {
    let xPos = Math.round(canvas.width + 0.5 * canvas.width * Math.random());
    let yPos = 0.85 * parseInt(canvas.height);
    let w = 0.12 * parseInt(canvas.height) * 1;
    let h = 0.07 * parseInt(canvas.height);
    nvhs.push({ x: xPos, y: yPos, w: w, h: h });
    obs1 = false;
    obs2 = true;
  }
}

let imgPe1 = new Image();
imgPe1.src = "./images/P_boy.png";
/* cloud */
let cloud = new Image();
cloud.src = "./images/P_cloud.png";
/* nvh */
let nvhpic = new Image();
nvhpic.src = "./images/P_nuh.png";
/* lamp */
let lamppic = new Image();
lamppic.src = "./images/P_Lamp.png";
/* baishin */
let baishinpic = new Image();
baishinpic.src = "./images/P_baishin.png";
/* shavar */
let shavarpic = new Image();
shavarpic.src = "./images/P_shavar.png";
/* dog */
let dogpic = new Image();
dogpic.src = "./images/P_dog.png";
/* shalbaag */
let dirt = new Image();
dirt.src = "./images/P_shavar.png";
/* land */
let land = new Image();
land.src = "./images/P_land.png";
/* mashin zurag */
let imgCar = new Image();
imgCar.src = "./images/P_car.png";
/* nohoi zurag */
let imgDog = new Image();
imgDog.src = "./images/P_dog.png";
/* hushuu zurag */
let imgStatu = new Image();
imgStatu.src = "./images/P_Statu.png";
/* bluesky zurag */
let bluesky = new Image();
bluesky.src = "./images/P_BlueSky.png";
/* mongol ger */
let Mongolger = new Image();
Mongolger.src = "./images/P_Ger.png";
/* svmhiid  */
let hiid = new Image();
hiid.src = "./images/P_SvmHiid.png";
/* nar */
let nara = new Image();
nara.src = "./images/nar.png";

let boyWalk = [];
[0, 1, 2].forEach(function (val) {
  let img = new Image();
  img.src = "./images/boy-walk-" + val + ".png";
  boyWalk.push(img);
});
let girlWalk = [];
[0, 1, 2].forEach(function (vil) {
  let zurg = new Image();
  zurg.src = "./images/girl-walk-" + vil + ".png";
  girlWalk.push(zurg);
});
/*
let dogWalk = [];
[0, 1, 2].forEach(function (vol){
    let nohoi = new Image();
    nohoi.src = "./images/nohoi-yvah-" + vol + ".png";
    dogWalk.push(nohoi);
});*/

/*let boyJump = [];
[1, 2, 3].forEach(function(vel){
    let zurag = new Image();
    zurag.src = "./images/boy-jump-" + vel + ".png";

    boyJump.push(zurag);
})*/

let status = [
  {
    x: 350,
    y: 0.45 * parseInt(canvas.height),
    h: 0.35 * parseInt(canvas.height),
    w: 0.3 * parseInt(canvas.height) * 1,
  },
];
let baishins = [
  {
    x: 50,
    y: 0.5 * parseInt(canvas.height),
    h: 0.3 * parseInt(canvas.height),
    w: 0.3 * parseInt(canvas.height) * 1,
  },
];
let clouds = [
  {
    x: 80,
    y: 0.1 * parseInt(canvas.height),
    h: 0.15 * parseInt(canvas.height),
    w: 0.3 * parseInt(canvas.height) * 1,
  },
  {
    x: 300,
    y: 0.1 * parseInt(canvas.height),
    h: 0.25 * parseInt(canvas.height),
    w: 0.4 * parseInt(canvas.height) * 1,
  },
  {
    x: 550,
    y: 0.1 * parseInt(canvas.height),
    h: 0.2 * parseInt(canvas.height),
    w: 0.35 * parseInt(canvas.height) * 1,
  },
];
let boy = {
  x: 100,
  y: 0.65 * parseInt(canvas.height),
  height: 0.15 * parseInt(canvas.height),
  width: 0.25 * parseInt(canvas.height) * 1,
};
let lands = [
  {
    x: 0,
    y: 0.8 * parseInt(canvas.height),
    h: 0.2 * parseInt(canvas.height),
    w: 0.5 * parseInt(canvas.width) * 1,
  },
  {
    x: 0.5 * parseInt(canvas.width),
    y: 0.8 * parseInt(canvas.height),
    h: 0.2 * parseInt(canvas.height),
    w: 0.5 * parseInt(canvas.width) * 1,
  },
];
let blueskys = [
  {
    x: 190,
    y: 0.18 * parseInt(canvas.height),
    h: 0.63 * parseInt(canvas.height),
    w: 0.4 * parseInt(canvas.height) * 1,
  },
];
let geruud = [
  {
    x: 600,
    y: 0.6 * parseInt(canvas.height),
    h: 0.2 * parseInt(canvas.height),
    w: 0.3 * parseInt(canvas.height) * 1,
  },
];
let dogs = [
  {
    x: 1550,
    y: 0.8 * parseInt(canvas.height),
    h: 0.1 * parseInt(canvas.height),
    w: 0.1 * parseInt(canvas.height) * 1,
  },
];
//let nvhs = [{ x: Math.round(1.5 * canvas.width + 0.5 * canvas.width * Math.random()), y: 0.86 * parseInt(canvas.height), h: 0.05 * parseInt(canvas.height), w: 0.1 * parseInt(canvas.height) * 1 }];
let nvhs = [];
let shavars = [
  {
    x: Math.round(0.5 * canvas.width + 0.5 * canvas.width * Math.random()),
    y: 0.85 * parseInt(canvas.height),
    h: 0.07 * parseInt(canvas.height),
    w: 0.12 * parseInt(canvas.height) * 1,
  },
];
let lamps = [
  {
    x: 20,
    y: 0.67 * parseInt(canvas.height),
    h: 0.15 * parseInt(canvas.height),
    w: 0.07 * parseInt(canvas.height) * 1,
  },
  {
    x: 165,
    y: 0.67 * parseInt(canvas.height),
    h: 0.15 * parseInt(canvas.height),
    w: 0.07 * parseInt(canvas.height) * 1,
  },
  {
    x: 330,
    y: 0.67 * parseInt(canvas.height),
    h: 0.15 * parseInt(canvas.height),
    w: 0.07 * parseInt(canvas.height) * 1,
  },
  {
    x: 440,
    y: 0.67 * parseInt(canvas.height),
    h: 0.15 * parseInt(canvas.height),
    w: 0.07 * parseInt(canvas.height) * 1,
  },
  {
    x: 580,
    y: 0.67 * parseInt(canvas.height),
    h: 0.15 * parseInt(canvas.height),
    w: 0.07 * parseInt(canvas.height) * 1,
  },
];
let hiids = [
  {
    x: 450,
    y: 0.4 * parseInt(canvas.height),
    h: 0.4 * parseInt(canvas.height),
    w: 0.4 * parseInt(canvas.height) * 1,
  },
];
let obs1 = true;
let obs2 = false;

let audioPlay = false;

let isRunning = true;
let isJumping = false;
let time = 0;
let step = 0;
let speed, goingUp;
let gravity = 0.1;

// let gameSpeed = 8.5;
let gameSpeed = 10;

window.addEventListener("resize", resizeCanvas, false);

resizeCanvas();

function resizeCanvas() {
  let canvas = document.getElementById("cvs");
  canvas.width = Math.max(window.innerWidth, window.innerHeight);
  canvas.height = Math.min(window.innerWidth, window.innerHeight);
}

let canvas = document.getElementById("cvs"),
  ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function init() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

init();

function checkCollision() {
  let vp = Math.max(canvas.width, canvas.height) / 100;
  console.log(vp);

  if (dogs.length != 0) {
    if (boy.x < dogs[0].x && dogs[0].x < boy.x + boy.height - boy.height / 3) {
      if (boy.y < dogs[0].y && dogs[0].y < boy.y + boy.width) {
        console.log("1TRUE");
        return true;
      }
    }
    if (
      boy.x + boy.height / 10 < dogs[0].x + dogs[0].w - dogs[0].w / 3 &&
      dogs[0].x + dogs[0].w - dogs[0].w / 3 <
        boy.x + boy.height - boy.height / 3
    ) {
      if (boy.y < dogs[0].y && dogs[0].y < boy.y + boy.width) {
        console.log("2TRUE");
        return true;
      }
    }
  }

  if (shavars.length != 0) {
    if (
      boy.x < shavars[0].x &&
      shavars[0].x < boy.x + boy.height - boy.height / 3
    ) {
      if (boy.y < shavars[0].y && shavars[0].y < boy.y + boy.width) {
        console.log("COLL SHAVAR1");
        return true;
      }
    }
    if (
      boy.x + boy.height / 10 < shavars[0].x + shavars[0].w &&
      shavars[0].x + shavars[0].w < boy.x + boy.height - boy.height / 3
    ) {
      if (boy.y < shavars[0].y && shavars[0].y < boy.y + boy.width) {
        console.log("COLL SHAVAR2");
        return true;
      }
    }
  }

  if (nvhs.length != 0) {
    if (boy.x < nvhs[0].x && nvhs[0].x < boy.x + boy.height - boy.height / 3) {
      if (boy.y < nvhs[0].y && nvhs[0].y < boy.y + boy.width) {
        console.log("COLL NUH");
        return true;
      }
    }

    if (
      boy.x + boy.height / 10 < nvhs[0].x + nvhs[0].w - vp &&
      nvhs[0].x + nvhs[0].w - vp < boy.x + boy.height - boy.height / 3
    ) {
      if (boy.y < nvhs[0].y && nvhs[0].y < boy.y + boy.width) {
        console.log("COLL NUH");
        return true;
      }
    }
  }
  return false;
}
let random = 0;
var drawInterval = setInterval(() => {
  // cloud movements
  clouds.forEach((element) => {
    element.x -= 1;
  });

  lands.forEach((element) => {
    element.x -= 3;
  });

  baishins.forEach((element) => {
    element.x -= 1;
  });

  status.forEach((element) => {
    element.x -= 1;
  });

  blueskys.forEach((element) => {
    element.x -= 1;
  });

  geruud.forEach((element) => {
    element.x -= 1;
  });

  nvhs.forEach((element) => {
    element.x -= 3;
  });

  dogs.forEach((element) => {
    element.x -= 4;
  });

  lamps.forEach((element) => {
    element.x -= 1;
  });

  shavars.forEach((element) => {
    element.x -= 3;
  });

  hiids.forEach((element) => {
    element.x -= 1;
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /* baishin2 oruulsan hseg */
  //ctx.drawImage(imgBaishin2, xbaishin2, ybaishin2, imgBaishin2.width, imgBaishin2.height);

  /* baishin oruulsan heseg */
  //ctx.drawImage(imgBaishin, xbaishin, ybaishin, imgBaishin.width, imgBaishin.height)

  drawLands();
  drawStatus();
  drawGeruud();
  drawBlueskys();
  drawBaishins();

  drawClouds();
  drawHiids();
  drawLamps();
  drawBoy();

  drawDogs();
  drawNvhs();
  drawShavars();

  if (isRunning == false) {
    if (goingUp) {
      speed = Math.max(0, speed - gravity);
      if (speed == 0) goingUp = false;
      else boy.y = Math.max(0.1 * parseInt(canvas.height), boy.y - speed);
    } else {
      speed = speed + gravity;
      boy.y = Math.min(0.65 * parseInt(canvas.height), boy.y + speed);
    }

    if (boy.y == 0.65 * parseInt(canvas.height)) {
      setTimeout(function () {
        isRunning = true;
      }, 0.01);
    }
    // console.log(speed, goingUp);
  }
}, gameSpeed);

function drawBoy() {
  if (checkCollision()) {
    stopGame();
    return true;
  }
  if (isRunning) {
    if (step > 2) {
      step = 0;
    }

    if (localStorage.getItem("gender") == "boy") {
      ctx.drawImage(boyWalk[step], boy.x, boy.y, boy.height, boy.width);
    } else ctx.drawImage(girlWalk[step], boy.x, boy.y, boy.height, boy.width);

    if (time % 16 == 0) step++;
    time++;
  } else {
    if (step > 2) {
    }

    if (step > 3) {
      // isRunning = true;
      step = 0;
    }
    var zurag = new Image();
    if (localStorage.getItem("gender") == "boy")
      zurag.src = "./images/boy-jump-1.png";
    else zurag.src = "./images/girl-jump-1.png";

    if (step == 0) {
      ctx.drawImage(zurag, boy.x, boy.y, boy.height - 9, boy.width);
    }

    var zurag1 = new Image();
    if (localStorage.getItem("gender") == "boy")
      zurag1.src = "./images/boy-jump-2.png";
    else zurag1.src = "./images/girl-jump-2.png";

    if (step == 1) {
      ctx.drawImage(zurag1, boy.x, boy.y, boy.height - 9, boy.width);
    }

    var zurag2 = new Image();
    if (localStorage.getItem("gender") == "boy")
      zurag2.src = "./images/boy-jump-3.png";
    else zurag2.src = "./images/girl-jump-3.png";

    if (step == 2) {
      ctx.drawImage(zurag2, boy.x, boy.y, boy.height + 13, boy.width);
    }

    var zurag3 = new Image();
    if (localStorage.getItem("gender") == "boy")
      zurag3.src = "./images/boy-jump-4.png";
    else zurag3.src = "./images/girl-jump-4.png";

    if (step == 3) {
      ctx.drawImage(zurag3, boy.x, boy.y, boy.height + 50, boy.width);
    }
    if (time % 32 == 0) {
      step++;
    }
    time++;
  }
}
document.getElementById("cvs").addEventListener("click", usreh);
function usreh() {
  if (isRunning == true) {
    console.log("JUMP");
    // isRunning = false;
    // isJumping = true;
    time = 0;
    step = 0;
    isRunning = false;
    speed = 0.01 * canvas.height;
    gravity = 0.0003 * canvas.height;
    goingUp = true;
  }

  if (audioPlay == false) {
    const duu = new Audio();
    duu.src = "gametheme.mp3";
    duu.play();

    audioPlay = true;
  }
}

let onoo = 0;
var scoreInterval = setInterval(() => {
  onoo++;
  document.getElementById("onoo").innerHTML = onoo;
  localStorage.setItem("Onoo", onoo);
}, 200);

function stopGame() {
  if (onoo >= 100) {
    if (localStorage.getItem("gender") == "boy")
      location.replace("ending.html");
    else location.replace("ending1.html");
  } else {
    location.replace("gameover.html");
  }
}

// function jumpBoy(){
//     clearInterval(drawBoy);
//     if(isJumping){
//         if(step > 2){
//             isRunning = true;
//             drawBoy();
//         }
//         ctx.drawImage(boyJump[step], boy.x, boy.y-(step+1)*50, boy.height-20, boy.width);
//         if(time % 1000 == 0){
//             step++;
//         }
//         time++;

//     }

// }
