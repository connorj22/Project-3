let url = "https://api.imgflip.com/get_memes";
let nextButton = document.querySelector(".nextButton");
let backButton = document.querySelector(".backButton");
let randomButton = document.querySelector(".randomButton")
let memeImg = document.querySelector(".memeImg");
let memenum = document.querySelector(".memenum")

let j = -1

nextButton.addEventListener("click", () => {
  j++
  if (j > 99) {
    j = 0
  }
  document.getElementById("counter").innerHTML = `${j + 1}/100`
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let imgArr = [];
      for (let i in res.data.memes) {
        imgArr.push(res.data.memes[i].url);
      }
      memeImg.src = imgArr[j];
    });
});

backButton.addEventListener("click", () => {
  j--
  if (j < 0) {
    j = 99
  }
  document.getElementById("counter").innerHTML = `${j + 1}/100`
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let imgArr = [];
      for (let i in res.data.memes) {
        imgArr.push(res.data.memes[i].url);
      }
      memeImg.src = imgArr[j];
    });
});

randomButton.addEventListener("click", () => {
  j = Math.floor(Math.random() * 99)
  document.getElementById("counter").innerHTML = `${j + 1}/100`
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let imgArr = [];
      for (let i in res.data.memes) {
        imgArr.push(res.data.memes[i].url);
      }
      memeImg.src = imgArr[j];
    });
});

