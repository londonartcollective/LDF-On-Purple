// Daniel Shiffman


var video;
var vScale = 16;

function setup() {
    var canvas = createCanvas(658, 844);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);
}

function draw() {

  background(134,97,239);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(255);
      ellipseMode(CENTER);
      ellipse((x+0.5) * vScale , (y+0.5) * vScale , w * 1.5 , w * 1.5 );
    }
  }
}
