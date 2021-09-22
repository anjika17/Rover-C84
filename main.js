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
function up(){
if (rover_y >= 0){
   rover_y = rover_y - 5 ; 
   console.log("when up arrow is pressed , X = " + rover_x + " Y = " + rover_y);
   uploadbg();
   uploadrover();
}
}

function down(){
    if (rover_y <= 410){
        rover_y = rover_y + 5 ; 
        console.log("when down arrow is pressed , X = " + rover_x + " Y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

 function left(){
     if (rover_x >= 0){
       rover_x = rover_x - 5 ; 
       console.log("when left arrow is pressed , X = " + rover_x + " Y = " + rover_y);
       uploadbg();
       uploadrover();  
     }
 }
  
 function right(){
     if (rover_x <= 600){
         rover_x = rover_x + 5 ; 
         console.log("when right arrow is pressed  , X = " + rover_x + "Y = " + rover_y);
         uploadbg();
         uploadrover();
     }
 } 