var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var totalx=window.innerWidth;
var totaly=window.innerHeight;

console.log(canvas);
var c=canvas.getContext('2d');

var inix=500;
var iniy=30;
var radius=30;

var currx=inix;
var curry=iniy;

c.strokeStyle='red';
c.arc(currx, curry, radius, 0, Math.PI * 2, false);
c.stroke();

c.fillStyle = 'black';
c.fillRect(150, 480, 800, 20);
c.stroke();

var plankx=150;
var planky=480;
var speed=0;
var acc=-0.051;
var maxy=iniy;

function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0,0,1058,669);

    c.fillStyle = 'black';
    c.fillRect(150, 480, 800, 20);
    c.stroke();
        
    
    
    
    c.beginPath();
    c.strokeStyle='red';
    c.arc(currx,curry,radius,0,Math.PI*2,false);
    curry+=(speed);
    speed-=acc;
    // acc=1;
    // if(speed<0) meet=-1;
    if(curry>planky-radius){
    speed=-(0.86*speed);
    // acc=-acc;

    // maxy+=10;    // maxy*=1.2;
    }

    else if(curry<maxy){
    speed=-(speed*0.86);
    // acc=-acc;
    }
    // else
   

}
animate();