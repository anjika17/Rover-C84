canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_img="rover.png";
mars_bg_img="mars.jpg";
function add(){
bg_imgTag=new Image();
bg_imgTag.onload=uploadbg;
bg_imgTag.src=mars_bg_img;

rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_img;
}

function uploadbg(){
 ctx.drawImage(bg_imgTag , 0 , 0 , 700 , 500);   
}
function uploadrover(){
    ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
 key_pressed=e.keyCode;
 if (key_pressed == '38')  {
   up();
   console.log("up"); 
 } 
 if (key_pressed == '40'){
     down();
     console.log("down");
 }
 if (key_pressed == '37'){
     left();
     console.log("left");
 }
 if (key_pressed == '39'){
     right();
     console.log("right");
 }
}