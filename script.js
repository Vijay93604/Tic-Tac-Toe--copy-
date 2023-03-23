var box1 = 0;
var box2 = 0;
var box3 = 0;
var box4 = 0;
var box5 = 0;
var box6 = 0;
var box7 = 0;
var box8 = 0;
var box9 = 0;

var box1_1 = 0;
var box2_2 = 0;
var box3_3 = 0;
var box4_4 = 0;
var box5_5 = 0;
var box6_6 = 0;
var box7_7 = 0;
var box8_8 = 0;
var box9_9 = 0;

var turnIndicator = document.getElementById("turnIndicator");

var firstTurn = 1;
function showimg(id){

   
    if(firstTurn == 1){
       document.getElementById(id).className="Ximg";
       document.getElementById(id).removeAttribute("onclick");
       document.getElementById(id).removeAttribute("onmouseover");
       document.getElementById(id).removeAttribute("onmouseout");
       turnIndicator.innerText="O TURN"
       firstTurn = 2;
       hoverCount = 2;
       if(id == "box1"){
        box1 = 1;
       }
       if(id == "box2"){
        box2 = 1;
       }
       if(id == "box3"){
        box3 = 1;
       }
       if(id == "box4"){
        box4 = 1;
       }
       if(id == "box5"){
        box5 = 1;
       }
       if(id == "box6"){
        box6 = 1;
       }
       if(id == "box7"){
        box7 = 1;
       }
       if(id == "box8"){
        box8 = 1;
       }
       if(id == "box9"){
        box9 = 1;
       }
       if((box1+box2+box3 == 3) || (box1+box4+box7 == 3) || (box1+box5+box9 == 3) || (box2+box5+box8 == 3) || (box3+box6+box9 == 3) || (box7+box8+box9 == 3) || (box7+box5+box3 == 3) || (box4+box5+box6 == 3)){
        alert("X WINS....");
        location.reload();
       }
       if(box1+box2+box3+box4+box5+box6+box7+box8+box9 == 5){
        alert("THE MATCH IS DRAW");
        location.reload();
       }
    }
    else if(firstTurn == 2){
       document.getElementById(id).className="Oimg";
       document.getElementById(id).removeAttribute("onclick");
       document.getElementById(id).removeAttribute("onmouseover");
       document.getElementById(id).removeAttribute("onmouseout");
       turnIndicator.innerText="X TURN"
       firstTurn = 1;
       hoverCount = 1;
       if(id == "box1"){
        box1_1 = 2;
       }
       if(id == "box2"){
        box2_2 = 2;
       }
       if(id == "box3"){
        box3_3 = 2;
       }
       if(id == "box4"){
        box4_4 = 2;
       }
       if(id == "box5"){
        box5_5 = 2;
       }
       if(id == "box6"){
        box6_6 = 2;
       }
       if(id == "box7"){
        box7_7 = 2;
       }
       if(id == "box8"){
        box8_8 = 2;
       }
       if(id == "box9"){
        box9_9 = 2;
       }
       if((box1_1+box2_2+box3_3 == 6) || (box1_1+box4_4+box7_7 == 6) || (box1_1+box5_5+box9_9 == 6) || (box2_2+box5_5+box8_8 == 6) || (box3_3+box6_6+box9_9 == 6) || (box7_7+box8_8+box9_9 == 6) || (box7_7+box5_5+box3_3 == 6) || (box4_4+box5_5+box6_6 == 6)){
        alert("O WINS....");
        location.reload();
       }
       
    }

}
var u=0;
var hoverCount = 1;
function hoverImg(id){
    
    if(hoverCount == 1){
        document.getElementById(id).className="xHover";

    }
    else if(hoverCount == 2){
        document.getElementById(id).className="oHover";     
        
    }

 }

 function hoverOut(id){
    document.getElementById(id).className=(".wholeContainer > div");
 }

function refresh(){
    location.reload();
}


