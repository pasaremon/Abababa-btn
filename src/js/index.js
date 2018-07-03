//画像ファイル名を配列で保持
let imgArr = [];
for (i = 0; i < 10; i++) {
  if (i < 10) imgArr[i] = "kaos0" + i + ".jpg";
  else imgArr[i] = "kaos" + i + ".jpg";
  console.log(i);
}

let audioArr = [];
for (i = 0; i < 12; i++) {
  if (i < 10) audioArr[i] = "kaos0" + i + ".mp3";
  else audioArr[i] = "kaos" + i + ".mp3";
  console.log(i);
}

let lastNum = 0;

function GetRandNum(arr) {
  // 乱数を生成
  let randomNum = Math.floor(Math.random() * arr.length);

  // 乱数が被らないようチェック
  while (randomNum == lastNum) {
    randomNum = Math.floor(Math.random() * arr.length);
    console.log("被ってる");
  }

  // 生成した数字を保存
  lastNum = randomNum;

  return randomNum;
}

//ランダムで画像ファイルを取得して表示する
function ShowImage(num) {
  let elem = document.getElementById("kaos-img");
  // 画像表示
  elem.src = "./img/" + imgArr[num];
}

function PlaySound(num) {
  let audioElem = new Audio();
  audioElem.src = "./audio/" + audioArr[num];
  audioElem.play();
}

function DoAbaAba() {
  ShowImage(GetRandNum(imgArr));
  PlaySound(GetRandNum(audioArr));
}

let btn = document.getElementById("ababa-btn");
btn.addEventListener('click', DoAbaAba);

window.onload = function() {
  ShowImage(GetRandNum(imgArr));
}
