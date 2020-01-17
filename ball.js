var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);
// var totalx = window.innerWidth;
// var totaly = window.innerHeight;

// var minx = totalx / 4;
// var miny = totaly / 4;

// var maxx = 3 * totalx / 4;
// var maxy = 3 * totaly / 4;



var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(0,255,0,1.0)';
// c.fillRect(100, 100, 100, 100);

// c.beginPath();
// c.moveTo(50,0);
// c.lineTo(300,100);
// c.strokeStyle='rgb(0,255,0)';
// c.stroke();
var inix = 500;
var iniy = 100;
var radius = 30;

var planky = 700;
var planksz = 500;
c.fillStyle = 'black';

// console.log("qfe");
// c.beginPath();
// c.moveTo(150,500);
// c.lineTo(650,700);
// c.stroke();


c.fillRect(170, 500, 800, 20);
c.stroke();



var totalx = canvas.width;
var totaly = canvas.height;
console.log(totalx);
console.log(totaly);
function playPauseClick() {
    console.log(event.clientX);
    console.log(event.clientY);
}

c.beginPath();
c.arc(inix, iniy, radius, 0, Math.PI * 2, false);
c.strokeStyle = 'red';
c.stroke();

var yline = 480;

canvas.addEventListener("click", playPauseClick);
var currx = inix;
var curry = iniy;
var dy = 3;
var maxy = iniy;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, 1058, 669);

    c.beginPath();
    c.arc(currx, curry, radius, 0, Math.PI * 2, false);
    c.stroke();

    if (maxy < ((yline - radius - radius))) {
var dyy=-dy;
if(dy>0)
dyy=dy;
        curry += (dy*dyy);

        if (curry > yline - radius) {
            dy = -dy;
            maxy *= (1.2);
        }
        if (curry < maxy)
            dy = -dy;


    }
    c.fillStyle = 'black';

    c.fillRect(150, 480, 800, 20);
    c.stroke();


}
animate();


