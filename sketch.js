let img;

function preload() {
  // 請將 'your-image.jpg' 替換為實際的影像檔案名稱
  img = loadImage('your-image.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ccd5ae');
}

function draw() {
  background('#ccd5ae');
  
  // 計算影像的寬高，讓其為視窗大小的 80%
  let imgWidth = width * 0.8;
  let imgHeight = height * 0.8;

  // 計算影像的顯示位置，讓其置中
  let x = (width - imgWidth) / 2;
  let y = (height - imgHeight) / 2;

  // 繪製影像
  image(img, x, y, imgWidth, imgHeight);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
