var level = 1;
var time = 60000; //倒數60秒
var levelCount = "";
document
  .querySelector("#gamestart")
  .addEventListener("click", function MyCounter() {
    if (time <= -1) {
      //不懂為什麼要到-1
      //倒數完成
    } else {
      document.querySelector(".time>span").innerHTML = time / 1000;
      setTimeout(MyCounter, 1000);
    }
    time -= 1000;

    if (time / 1000 < 10) {
      document
        .querySelector(".time>span")
        .setAttribute("style", "color:rgb(194, 24, 91)");
    }

    document.querySelector("#gamestart").setAttribute("hidden", "hidden");
    //點選完後消失
    levelCount = document.querySelector(".level>span");
    levelCount.innerHTML = level;
    if (document.querySelector(".time>span").innerHTML== 0) {
      alert("Time's up! Your score is " + (level-1) +".");
      // answerColorBox.setAttribute("onclick", "hahaha()");
    }
  });

// document.querySelector(".gamestart").addEventListener("click", function reciprocal(){
//     var time = 60;
//     document.querySelector(".time>span").innerHTML = time;
//     setTimeout(reciprocal, 1000);
//     time -= 1;
// });
function appendChild() {
  var boxRowAmount = "";
  if (level < 4) {
    boxRowAmount = 2;
  } else if (level < 7) {
    boxRowAmount = 3;
  } else if (level < 9) {
    boxRowAmount = 4;
  } else if (level < 11) {
    boxRowAmount = 5;
  } else {
    boxRowAmount = 6;
  }
  document.querySelector("#color-palette").innerHTML = ""; //殺小孩 清空所有div
  for (var i = 0; i < boxRowAmount ** 2; i++) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("class", "color-box");
    createDiv.style.width = 100 / boxRowAmount + "%";
    createDiv.style.height = 100 / boxRowAmount + "%";
    if (boxRowAmount < 5) {
      createDiv.style.border = "5px solid rgb(221,221,221)";
    } else {
      createDiv.style.border = "3px solid rgb(221,221,221)";
    }
    document.querySelector("#color-palette").appendChild(createDiv);
  }
}

//變數先放裡面 有需要才提出來
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var normalColor = "rgb(" + red + "," + green + "," + blue + ")";

  var colorDistinguish = "";
  if (level < 4) {
    colorDistinguish = 105;
  } else if (level < 7) {
    colorDistinguish = 90;
  } else if (level < 9) {
    colorDistinguish = 75;
  } else if (level < 11) {
    colorDistinguish = 60;
  } else if (level < 22) {
    colorDistinguish = 45;
  } else if (level < 41) {
    colorDistinguish = 10;
  } else if (level < 52) {
    colorDistinguish = 8;
  } else {
    colorDistinguish = 5;
  }
  var answerColor =
    "rgb(" +
    (red + colorDistinguish) +
    "," +
    (green + colorDistinguish) +
    "," +
    (blue + colorDistinguish) +
    ")";
  var normalColorBox = document.querySelectorAll(".color-box");
  for (var i = 0; i < normalColorBox.length; i++) {
    normalColorBox[i].style.backgroundColor = normalColor;
    normalColorBox[i].setAttribute("onclick", "hahaha()"); //目的：將上一次的answerColorBox的屬性清空
  }

  var randomNum = Math.floor(Math.random() * normalColorBox.length); //以colorbox陣列裡的個數(長度)為依據取一亂數
  var answerColorBox = normalColorBox[randomNum];
  answerColorBox.style.backgroundColor = answerColor;
  answerColorBox.setAttribute("onclick", "again()");
  //取answerColorBox 並用again()取代掉hahaha() 請注意setAttribute的用法
}

//把function集中放在一起 較容易識讀
// function reciprocal(){
//     var time = 60;
//     document.querySelector(".time>span").innerHTML = time;
//     setTimeout(reciprocal, 1000);
//     time -= 1;
// };

function again() {
  level++;
  appendChild();
  randomColor();
  levelCount.innerHTML = level;
}
function hahaha() {
  console.log("hahaha"); //放空集合 可能會出問題 console.log 一些東西
}
appendChild();
randomColor();
