"use:strict";

// Get elements
const startBtn = document.querySelector(".start-btn");
const messageBox = document.querySelector(".message");
const imgContainerEl = document.querySelector(".img-container");
messageBox.innerText = "Click on the box to start";

//Init when start button clicked
startBtn.addEventListener("click", function () {
  location.reload();
  return false;
});

//Define some vaiables
let clickCnt = 0;
let imgFlag = [];
let isSameImg;
let tryCounter = 1;

// Function random arrangement to generate a random array
function randomArr(arr) {
  let newarr = [];
  while (arr.length > 0) {
    let id = Math.floor(Math.random() * arr.length);
    let [j] = arr.splice(id, 1);
    newarr.push(j);
  }
  return newarr;
}

//generate  imgArr to create image elemnts
// and container and loc and img classes
const imgArr = randomArr([1, 2, 3, 4, 5, 6]);
for (let i = 0; i < 6; i++) {
  //
  const flipBox = document.createElement("div");
  flipBox.classList.add("flip-box");
  imgContainerEl.appendChild(flipBox);

  //
  const flipBoxFront = document.createElement("div");
  flipBoxFront.classList.add("flip-box-front");
  flipBox.appendChild(flipBoxFront);

  const flipBoxBack = document.createElement("div");
  flipBoxBack.classList.add("flip-box-back");
  flipBox.appendChild(flipBoxBack);

  //
  const imgEl = document.createElement("img");
  flipBoxFront.appendChild(imgEl);
  imgEl.src = `/img/${imgArr[i]}.jpg`;
  imgEl.classList.add(`loc${i}`);
  imgEl.classList.add(`img${imgArr[i]}`);
  imgEl.classList.add("img");
}

//  Get image elemnts
let arrImgEl = [];
for (let i = 0; i < 6; i++) {
  arrImgEl[i] = document.querySelector(`.loc${i}`);
}

// Check if the images are same in two consequitive click
// also decide what should happen in first click and the second click
for (let i = 0; i < 6; i++) {
  arrImgEl[i].addEventListener("click", function (e) {
    const item = e.target;
    clickCnt = clickCnt + 1;
    let firstImg = item.classList[1];
    imgFlag.push(firstImg);

    // Check if the clicked images are the same
    if (
      (imgFlag[0] === "img1" && imgFlag[1] === "img4") ||
      (imgFlag[0] === "img4" && imgFlag[1] === "img1") ||
      (imgFlag[0] === "img2" && imgFlag[1] === "img5") ||
      (imgFlag[0] === "img5" && imgFlag[1] === "img2") ||
      (imgFlag[0] === "img3" && imgFlag[1] === "img6") ||
      (imgFlag[0] === "img6" && imgFlag[1] === "img3")
    ) {
      isSameImg = true;
    }

    // show images if first or second click
    if (clickCnt <= 2) {
      messageBox.innerText = "";
      setTimeout(function () {
        visImg(arrImgEl[i]);
      }, 50);
    }
    // when two images are not same
    if ((clickCnt === 2) & !isSameImg) {
      imgFlag = [];
      hidAll();
      isSameImg = false;
      clickCnt = 0;
      messageBox.innerText = `😒😒😒😒 No of tries:${tryCounter}`;
      messageBox.style.cssText = "background-color:tomato";
      tryCounter = tryCounter + 1;
      console.log(tryCounter);
    }
    // when images are the same
    if (clickCnt === 2 && isSameImg) {
      setTimeout(function () {
        isSameImg = true;
        messageBox.style.cssText = " background-color:#b8ff47ce";
        messageBox.innerText = `✌✌✌✌ You won in ${tryCounter} tries!!! Start again`;
        visImg(arrImgEl[i]);
      }, 50);
    }
    // change messege box style after first click
    if (clickCnt === 1) {
      messageBox.innerText = `Next image!!! No of tries:${tryCounter}`;
      messageBox.style.cssText = "background-color:#ffe347ce";
    }
  });
}

// function to make image visible by setting the opacity to 1
const visImg = (el) => {
  el.style.cssText = "opacity:1";
};

// function to make image unvisible by setting the opacity to 0
const hidImg = (el) => {
  el.style.cssText = "opacity:0";
};

// function to hide all images
const hidAll = () => {
  for (let i = 0; i < 6; i++) {
    setTimeout(function () {
      hidImg(arrImgEl[i]);
    }, 500);
  }
};
