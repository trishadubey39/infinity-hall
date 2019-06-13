/** Branch off of this scratchpad to enter this challenge.  
  * Have fun!
*********************__Made by sweety dubey**********************/
     /**      There are currently 6 levels      */
//This is my first game!


//////VARIABLES////////////////
var spinoffauthor="";
var title=true;var page="logo";
var x1=[80];var y1=[50];
var x2=[320];var y2=[50];
var x3=[320];var y3=[300];
var x4=[80];var y4=[300];
var wallClr=color(35, 117, 29);
var cellingClr=color(108, 199, 169);
var floorClr=color(179, 95, 11);
var wall2Clr=color(18,56,16);
var plus=0;var levels=6;
var ticks=0;

///////BUTTONS///////////////////
var pos=0;var time = 0;var selected;var buttonAllow=true;
var clicked;
var button = function(x,y,length,height,btext,textsize) {
if(mouseIsPressed){time+=1;} clicked=false;
if(!mouseIsPressed){time=0;} selected=false;
noStroke(); var clr=color(64, 64, 64); var clr2=color(153, 153, 153);
var clr3=color(33, 33, 33);
if (mouseY <= y+height && mouseY >= y && mouseX >= x && mouseX <= x+length) {fill(191, 191, 191);}
else {fill(201, 201, 201 );}
if (mouseY <= y+height && mouseY >= y && mouseX >= x && mouseX <= x+length && mouseIsPressed && mouseButton === LEFT) {
fill(168, 168, 168); clr=color(214, 214, 214);selected=true;
clr2=color(145, 145, 145); clr3=color(0, 0, 0); pos=1;
/*if(time<2){clicked=true;}else{clicked=false;}*/
}
else{pos=0;}
if (mouseY <= y+height && mouseY >= y && mouseX >= x && mouseX <= x+length && mouseIsPressed && mouseButton === LEFT &&buttonAllow) {clicked=true;
}if(time>1&&!selected){buttonAllow=false;}
else{buttonAllow=true;}
rect(x, y, length, height);
stroke(clr);
strokeWeight(2);
line(x+1,y+height,x+length-1,y+height);
line(x+length,y+1,x+length,y+height-1);
stroke(clr2);
line(x,y+1,x,y+height-1);
line(x,y,x+length-1,y);
fill(clr3);
textAlign(CENTER,CENTER);
textSize(textsize);
text(btext,x+length/2,y+height/2.1+pos);
textAlign(LEFT,LEFT);
};

/////////LOGO/////////////////
//DO NOT erase or modify this code in any way.
var logo=function(x,y,size){
strokeWeight(1);
for(var i=0;i<size-(size/20);i+=1){
    stroke(155+i*(100/size), 150+i*(100/size), 212+i*(100/size));
    line(x+(size/40),y+i+(size/40),x+size-(size/40),y+i+(size/40));
}
noStroke();
textAlign(CENTER,CENTER);
textSize(size/1.2);fill(13, 0, 38);
text("d",x+(size/2)+(size/4.7),y+(size/2)+(size/7.3));
textSize(size/1.2);fill(6, 115, 0);
text("s",x+(size/2)-(size/4.7),y+(size/2)-(size/7.1));
textAlign(LEFT,LEFT);
if(mouseX>x&&mouseX<x+size&&mouseY>y&&mouseY<y+size){
    this.cursor(HAND);
    fill(15, 0, 102,80);
    rect(x,y,size,size);
    stroke(56, 56, 156);
}
else{
    cursor();
    stroke(103, 83, 214);
}
strokeWeight(size/20);
noFill();
rect(x,y,size,size);
if(mouseIsPressed&&mouseX>x&&mouseX<x+size&&mouseY>y&&mouseY<y+size&&ticks===0){println("https://www.khanacademy.org/profile/Ben0nator/programs");}
};
var ltick=0;
var introLogo=function(){
    if(ltick<134){
        if(ltick>100){
            //translate((ltick-100)*15,0);
            translate((ltick-100)*6,(ltick-100)*6);
            scale(1-((ltick-100)*0.03),1-((ltick-100)*0.03));
        }
    fill(219, 219, 219);noStroke();
    rect(0,0,400,400);
    fill(5, 125, 43);
    textSize(40);
    text("A program by sweety dubey",18,59);
    textAlign(CENTER,CENTER);
    textSize(30);
    if(spinoffauthor!==""){
        text("Modified by:\n"+spinoffauthor,200,350);
    }
    textAlign(LEFT,LEFT);
    logo(100,100,200);
    ltick+=1;
    resetMatrix();
    if(ltick===133){cursor();page=0;}
    }
};

///////TITLE MENU//////////////////
var titleMenu=function(){
    fill(255, 255, 255);textSize(30);
    text("Infinity Hall",x1[0]+47,y1[0]+39);
    textSize(11);
    text("Code and concept by sweety dubey",135,288);
    button(142,114,116,20,"Play",18);
    if(selected){page=1;}
    button(142,152,116,20,"Level Select",18);
    if(selected){page=2;}
    button(142,191,116,20,"About",18);
    if(selected){page=3;}
    button(142,233,116,20,"Hints",18);
    if(selected){page=4;}
    logo(364,364,34);
};

//////LEVEL SELECT/////////////////
var level_select=function(){
    button(142,262,116,20,"Back",18);
    if(selected){page=0;}
    if(levels===0){
        fill(255, 255, 255);textSize(20);
        text("Levels will appear here \nas you complete them.",93,80);}
    for(var w=0;w<levels;w+=1){
        var wx=w*46;var wy=0;
        if(w>w%5){
            wy+=46;
            wx-=230;}
        if(w>w%10){
            wy+=46;
            wx-=230;}
        if(w>w%15){
            wy+=46;
            wx-=230;}
        button(96+wx,64+wy,24,21,w+1,18);
        if(selected){page=w+6;}
    }
};

/////ABOUT///////////////////
var about=function(){
    fill(255, 255, 255);textSize(20);
    text("This is my second game...\nand in 3D! Infinity Hall is\ninspired by 'Magimyne,'\n'Find the Way' and the \napp '100 Floors.'\nI figured it's my turn to\nmake a good puzzle\ngame.",93,80);
    button(142,262,116,20,"Back",18);
    if(selected){page=0;}
};

/////SECRET///////////////////
var hints=function(){
    fill(255, 255, 255);textSize(20);
    text("Coming soon.",93,80);
    button(142,262,116,20,"Back",18);
    if(selected){page=0;}
};

////HALL//////////////////////
var hall= function() {
background(148, 148, 148);
//Main
for(var j=0;j<100;j+=1){
    strokeWeight(1);
    //Celling
    stroke(cellingClr);
    line(x1[0]-(j*1.6),y1[0]-j,x2[0]+(j*1.6),y2[0]-j);
    //Walls
    stroke(wallClr);
    line(x1[0]-j,y1[0]-(j*0.61),x4[0]-j,y4[0]+(j*1.26));
    line(x2[0]+j,y2[0]-(j*0.61),x3[0]+j,y3[0]+(j*1.26));
    //Floor
    stroke(floorClr);
    line(x4[0]-(j*0.8),y4[0]+j,x3[0]+(j*0.8),y3[0]+j);
}
//Depth
for(var i=0;i<100;i+=1){
    stroke(0, 0, 0);strokeWeight(1);
    stroke(i*1.8,i*1.8,i*1.8,144);
    line(x1[0]-(i*1.6),y1[0]-i,x2[0]+(i*1.6),y2[0]-i);
    line(x1[0]-i,y1[0]-(i*0.61),x4[0]-i,y4[0]+(i*1.26));
    line(x2[0]+i,y2[0]-(i*0.61),x3[0]+i,y3[0]+(i*1.26));
    line(x4[0]-(i*0.8),y4[0]+i,x3[0]+(i*0.8),y3[0]+i);
}
fill(wall2Clr);noStroke();
quad(x1[0],y1[0],x2[0],y2[0],x3[0],y3[0],x4[0],y4[0]);
};

/////////DOOR/////////////////
//Door
var openDoor=false;var varx=0;var vary=0;
var door=function(x,y,length,height,c){
    noStroke();
    fill(255, 255, 255);
    rect(x+4,y+4,62,116);
    fill(82, 72, 43);
    rect(x,y,4,121);
    rect(x,y,70,4);
    rect(x+66,y,4,121);
    fill(122, 107, 42);
    quad(x+4+varx,y+4+vary,x+66,y+4,x+66,y+121,x+4+varx,y+121+vary);
    /*noFill();
    stroke(82, 72, 43);
    quad(x+14,y+13,x+26,y+13,x+26,y+78,x+14,y+78);
    quad(x+42,y+13,x+56,y+13,x+56,y+78,x+42,y+78);
    quad(x+14,y+90,x+56,y+90,x+56,y+102,x+14,y+102);*/
    fill(148, 123, 10);
    var handle=x+16+varx;
    if(handle>x+66){handle-=20;}
    if(abs((x+66)-handle)>10){
    ellipse(handle,y+71+vary,((x+66)-handle)/3,10);}
    fill(255, 255, 255);
    if(varx<63){
    rect(x+4,y+65,varx,20);}
    if(openDoor){
        if(varx<100){
        varx+=1;
        vary=((varx*varx)-(4*varx))/515;}
    }
    if(!openDoor){varx=0;vary=0;}
};
//Door2
var openDoor2=false;var varx2=0;var doorOpenTime=0;
var door2=function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+4,y+4,62,116);
    fill(51, 51, 51);
    rect(x,y,4,121);
    rect(x,y,70,4);
    rect(x+66,y,4,121);
    fill(173, 173, 173);
    quad(x+4,y+4,x+35-varx2,y+4,x+35-varx2,y+121,x+4,y+121);
    quad(x+66,y+4,x+35+varx2,y+4,x+35+varx2,y+121,x+66,y+121);
    stroke(36, 36, 36);
    strokeWeight(2);
    line(x+35-varx2,y+4,x+35-varx2,y+119);
    line(x+35+varx2,y+4,x+35+varx2,y+119);
    if(openDoor2){
        if(varx2<30){
        varx2+=doorOpenTime*doorOpenTime;
        doorOpenTime+=0.02;
        }
    }
    if(!openDoor2){doorOpenTime=0;varx2=0;}
};

///////////GAME START//////////////////
var darkOut=0;var introTime=0;
var gameStart=function(){
    //door(x1[0]+80,y1[0]+130);//164,180
    fill(255, 255, 255);
    quad(x1[0]+80,y1[0]+130,x2[0]-80,y2[0]+130,x3[0]-80,y3[0],x4[0]+80,y4[0]);
    if(introTime>50){
    y1[0]-=1;x1[0]-=1.6;
    y2[0]-=1;x2[0]+=1.6;
    y3[0]+=1;x3[0]+=0.8;
    y4[0]+=1;x4[0]-=0.8;}
    if(introTime>60){
        fill(255, 255, 255,(introTime-60)*2);
        rect(0,0,400,400);
    }
    if(introTime>80){
        fill(0, 0, 0,(introTime-80)*4);
        rect(0,0,400,400);
    }
    if(introTime===160){page=5;}
    introTime+=1;
};

///////TUTORIAL////////////////
var tutPg=0;
var tutorial=function(){
    background(0, 0, 0);
    if(tutPg<4){
        if(tutPg>0){
    button(21,357,63,26,"<Back",19);
    if(clicked){tutPg-=1;}
        }
    button(211,357,63,26,"Next>",19);
    if(clicked){tutPg+=1;}
    button(303,357,63,26,"Skip>>",19);
    if(selected){page=6;
x1=[80];y1=[50];
x2=[320];y2=[50];
x3=[320];y3=[300];darkOut=254;
x4=[80];y4=[300];openDoor=false;
    }}
    fill(255, 255, 255);
    textSize(30);
    text("Tutorial",145,49);
    textSize(20);
    if(tutPg===0){
        text("Welcome to Infinity Hall.\nIf you would not like to view this tutorial,\ngo ahead and hit 'Skip.'\n\nHit 'Next' to start the tutorial.",31,92);openDoor=false;
    }
    if(tutPg===1){
        text("The goal of the game is to get past\neach level by unlocking the door.\n\n\n\n\n\n\n\nYou will have to find clues throughout\nthe current room you are in to do this.\n",31,92);
        door(161,137);
        if(mouseIsPressed&&mouseButton===LEFT&&mouseX>159&&mouseX<236&&mouseY>135&&mouseY<255){
            openDoor=true;}
    }
    if(tutPg===2){
        text("Explore using the mouse. The answer\nto unlocking a door could be anything-\na key, a code, etc.",31,92);
        image(getImage("cute/Key"),149,143);
    }
    if(tutPg>=3){
        text("The puzzles will get harder\nas you continue and the solution may\nnot always be clear.\n\nAll I can say is-\nGood luck.\n\nNow travel into infinity.",31,92);

    }
    if(tutPg===4){
    fill(0, 0, 0,darkOut);
    rect(0,0,400,400);
    darkOut+=2;
    if(darkOut===254){page=6;}
x1=[80];y1=[50];
x2=[320];y2=[50];
x3=[320];y3=[300];
x4=[80];y4=[300];openDoor=false;
    }
};

//////////PROPS AND THINGS/////////////////
//Light
var light=function(x,y,lightOn){
    noStroke();
    var lightClr=color(200,200,0,random(100,150));
    fill(145, 145, 145);
    ellipse(x,y,58,12);
    if(lightOn){
    for(var q=0;q<26;q+=1){
        lightClr=color(200,200,0,random(100,150)-(q*6));
        strokeWeight(1);
        stroke(lightClr);
        line(x-21-q,y+q,x+21+q,y+q);
    }
    fill(255, 255, 59);}
    else{
    fill(135, 135, 124);}
    ellipse(x,y,42,7);
};
//Cabinet
var cabinet=function(x,y){
    fill(87, 67, 16);
    rect(x,y,62,42);
    rect(x,y+41,9,34);
    rect(x+53,y+41,9,34);
    rect(x+12,y+41,8,27);
    rect(x+59,y+36,8,32);
    fill(71, 52, 11);
    quad(x,y+1,x+8,y+-8,x+70,y+-8,x+63,y+1);
    quad(x+70,y+-8,x+62,y+1,x+62,y+44,x+70,y+34);
    fill(46, 38, 7);
    quad(x+62,y+44,x+62,y+75,x+65,y+72,x+65,y+33);
    quad(x+9,y+42,x+9,y+75,x+12,y+72,x+12,y+42);
    quad(x+20,y+42,x+20,y+68,x+23,y+65,x+23,y+42);
    quad(x+70,y+30,x+70,y+63,x+67,y+68,x+67,y+37);
    stroke(46,38,7);
    line(x+9,y+43,x+53,y+42);
};
//Table
var table=function(x,y){
    fill(87, 67, 16);noStroke();
    rect(x,y+32,62,10);
    rect(x,y+41,9,34);
    rect(x+53,y+41,9,34);
    rect(x+12,y+41,8,27);
    rect(x+59,y+36,8,32);
    fill(71, 52, 11);
    quad(x,y+32,x+8,y+23,x+70,y+23,x+63,y+32);
    quad(x+70,y+23,x+62,y+32,x+62,y+44,x+70,y+34);
    fill(46, 38, 7);
    quad(x+62,y+44,x+62,y+75,x+65,y+72,x+65,y+37);
    quad(x+9,y+42,x+9,y+75,x+12,y+72,x+12,y+42);
    quad(x+20,y+42,x+20,y+68,x+23,y+65,x+23,y+42);
    quad(x+70,y+30,x+70,y+63,x+67,y+68,x+67,y+37);
    stroke(46,38,7);
    line(x+9,y+43,x+53,y+42);
    line(x+64,y+44,x+69,y+35);
};
//Table 2
var table2=function(x,y){
    fill(87, 67, 16);noStroke();
    rect(x,y+32,-62,10);
    rect(x,y+41,-9,34);
    rect(x-53,y+41,-9,34);
    rect(x-12,y+41,-8,27);
    rect(x-59,y+36,-8,32);
    fill(71, 52, 11);
    quad(x,y+32,x-8,y+23,x-70,y+23,x-63,y+32);
    quad(x-70,y+23,x-62,y+32,x-62,y+44,x-70,y+34);
    fill(46, 38, 7);
    quad(x-62,y+44,x-62,y+75,x-65,y+72,x-65,y+37);
    quad(x-9,y+42,x-9,y+75,x-12,y+72,x-12,y+42);
    quad(x-20,y+42,x-20,y+68,x-23,y+65,x-23,y+42);
    quad(x-70,y+30,x-70,y+63,x-67,y+68,x-67,y+37);
    stroke(46,38,7);
    line(x-9,y+43,x-53,y+42);
    line(x-64,y+44,x-69,y+35);
};
//Drawer
var drawer=function(x,y){
    noStroke();
    fill(71, 52, 11);/////TODO: Make openable.
    rect(x,y,50,20);
};
//Key
var keyGrabbed=false;var keyAllow=true;
var dkey=function(x,y){
    if(keyAllow){
    if(!mouseIsPressed){introTime=0;}
    if(mouseIsPressed&&introTime===0&&mouseX>x&&mouseY>y&&mouseX<x+24&&mouseY<y+38){
        keyGrabbed^=true;introTime+=1;}
    if(keyGrabbed){
        x=mouseX-8;y=mouseY-14;
        image(getImage("cute/Key"),x,y,24,38);
    }
    if(!keyGrabbed){
        translate(x,y);
        rotate(90);
        image(getImage("cute/Key"),16,-33,24,38);
        resetMatrix();
    }}
};
//Light Switch
var switch_on=false;
var light_switch=function(x,y){
    noStroke();
    fill(138, 138, 138);
    quad(x,y,x+14,y+-5,x+14,y+39,x,y+50);
    fill(122, 122, 122);
    ellipse(x+11,y+2,3,6);
    ellipse(x+3,y+5,3,6);
    ellipse(x+3,y+41,3,6);
    ellipse(x+11,y+36,3,6);
    rect(x+5,y+11,2,17);
    fill(105, 105, 105);
    if(!switch_on){  
        quad(x+5,y+25,x+5,y+14,x+12,y+23,x+10,y+26);}
    if(switch_on){
        quad(x+5,y+25,x+5,y+14,x+11,y+10,x+10,y+17);}
        if(mouseIsPressed&&mouseButton===LEFT&&mouseX>x+1&&mouseX<x+13&&mouseY>y+8&&mouseY<y+34&&ticks===0){
            switch_on^=true;
        }
};
//Code panel
var codeDis=false;var codeImput="";var correctCode=false;
var codePanel=function(x,y,code,param,lengthAllow){
    if(!lengthAllow){lengthAllow=10;}
    if(lengthAllow<6){lengthAllow=6;}
    fill(112, 112, 112);
    rect(x,y,17,25,2);
    fill(135, 198, 199);
    rect(x+2,y+2,12,5);
    fill(77, 77, 77);
    rect(x+2,y+9,4,4,2);
    rect(x+8,y+9,4,4,2);
    rect(x+2,y+14,4,4,2);
    rect(x+8,y+14,4,4,2);
    rect(x+2,y+19,4,4,2);
    rect(x+8,y+19,4,4,2);
    rect(x+14,y+9,2,13);
    if(mouseIsPressed&&mouseButton===LEFT&&mouseX>x&&mouseY>y&&mouseX<x+17&&mouseY<y+25&&ticks===0){
        codeDis=true;
    }
    if(codeDis){
        fill(117, 117, 117);stroke(79, 79, 79);strokeWeight(3);
        rect(82,35,239,287,5);
        fill(135, 198, 199);noStroke();
        rect(106,50,188,36,4);
        fill(0, 161, 161);
        rect(106,82,188,4,4);
        rect(290,50,4,35,4);
        fill(79, 79, 79);
        rect(291,107,12,197);
        if(!param){
        button(117,108,60,60,"_",40);
        if(clicked&&codeImput.length<10){codeImput+="_";}
        button(207,108,60,60,".",50);
        if(clicked&&codeImput.length<10){codeImput+=".";}
        }
        if(param){
        for(var k2=0;k2<21;k2+=7){
        for(var k=k2;k<k2+7;k+=1){
            if(param[k]){
            button(117+(k*22)-(k2*22),108+(k2*3.4),19,19,param[k],19);
            time-=1;
            if(clicked&&codeImput.length<lengthAllow){codeImput+=param[k];}
            }
        }
        }
        }
        button(117,185,150,32,"Clear",29);
        if(selected){codeImput="";}
        button(117,232,150,32,"Enter",29);
        if(selected&&codeImput===code){correctCode=true;}
        if(selected&&codeImput!==code){codeImput="Access Denied";}
        button(117,278,150,32,"Close",29);
        if(selected){codeDis=false;}
        if(correctCode){
        textSize(20);fill(34, 201, 0);
        text("Access Granted",124,73);
        codeImput="";}
        if(codeImput==="Access Denied"){
        fill(219, 0, 0);textSize(25);translate(0,7);}
        else{fill(0, 0, 0);textSize(240/lengthAllow);if(param){translate(0,9);}}  
        text(codeImput,113,68);resetMatrix();
    }
};
//Sparks
var t = 0;
var particles=[];
var sparks = function(x,y) {
    for(var s=0;s<1;s+=1){
        var spark={
            speed:random(-5,5),
            sparkY:0
        };
        particles.push(spark);
    }
    for(var l=0;l<particles.length;l+=1){
    
    noStroke();
    particles[l].sparkY = (400-y)-(-0.20*t*t + 3.5*t);
    fill(255, 255, 64,255-t*6.2);
    ellipse(x, particles[l].sparkY, random(5), random(5));
    t += 0.5;
    x += particles[l].speed;
    }
};
//Shatter
var shards = [];
var shatterTime=0;
var shatterOpacity=255;
var shatter = function(x,y) {
    noStroke();
    for(var z=0;z<50;z+=1){
    var shard = {
        x: x,
        y: y,
        xSpeed: random(0.01) - 0,
        ySpeed: random(0.01) - 0,
        yDir:random(100,300),
        xDir:random(-100,100),
        color: random(200,255),
        a1:random(0,20),
        a2:random(0,20),
        a3:random(0,20),
        a4:random(0,20),
        a5:random(0,20),
        a6:random(0,20),
        t:0
    };
    if(shards.length<50){
    shards.push(shard);}
    }
    if(shards.length===50){
    for (var j = 0; j < shards.length; j += 1) { 
        shards[j].t+=0.5;
        if(shards[j].xDir<0){
            shards[j].xDir+=400;
        }
        shards[j].x = shards[j].x + shards[j].xSpeed +
                         ((shards[j].xDir - 200) / 15)/(shards[j].t*shards[j].t);
        shards[j].y = shards[j].y + shards[j].ySpeed +
                         ((shards[j].yDir - 200) / 15)/(shards[j].t*shards[j].t);
        
        fill(shards[j].color,shards[j].color,shards[j].color,shatterOpacity);
        //ellipse(particles[j].x, particles[j].y, 3, 3); 
        triangle(shards[j].x+shards[j].a1,shards[j].y+shards[j].a2,shards[j].x+shards[j].a3,shards[j].y+shards[j].a4,shards[j].x+shards[j].a5,shards[j].y+shards[j].a6);
    }    shatterTime+=1;
    }

    if(shatterTime>60){
        shatterOpacity-=15;
    }
};
//Vase
var alwaysPickup=[false];
var vaseHeld=[false];
var vaseDropped=[false];
var vaseTime=0;
var vaseX=[];var vaseY=[];
var t2=[0];
var vaseHit=[false];
var vaseAllow=[true,true];
var vase=function(x,y,c,breakable,num){
    if(vaseAllow[num]){
    if(breakable){
    if(vaseHeld[num]&&!vaseDropped[num]){
        x=mouseX;
        y=mouseY;
    }
    if(vaseHeld[num]&&mouseIsPressed&&mouseX>150&&mouseX<300&&mouseY<250){
        vaseX[num]=mouseX;vaseY[num]=mouseY;vaseDropped[num]=true;vaseHeld[num]=false;
    }
    if(vaseDropped[num]){
        y = vaseY[num]+t2[num]*t2[num];
        x=vaseX[num];
        t2[num]+=0.9;
        if(y>324){
            y=324;
            vaseY[num]=324;
            vaseHit[num]=true;
        }
    }
    }
    fill(c);stroke(c);
    bezier(x,y,x+-3,y+12,x+-19,y+35,x+10,y+36);
    bezier(x+12,y,x+15,y+12,x+30,y+33,x+9,y+36);
    triangle(x+9,y+33,x+12,y+3,x+1,y+0);
    fill(31, 31, 31);
    stroke(c-60);
    ellipse(x+6,y+1,12,3);
    for(var f=0;f<15;f+=1){
        fill(c-209,c-209,c-209,f*0.3);noStroke();
        ellipse(x+6,y+28,f+8,f);
    }
    }
};
//Rug
var rug=function(x,y){
    fill(71, 86, 97,150);
    ellipse(x,y,118,44);
    fill(153, 125, 125,200);
    ellipse(x,y,100,34);
    fill(71, 171, 62,150);
    ellipse(x,y,78,23);
};
//Flower
var flowerAllow=true;
var flowers2=[];
var flowers=[];
var flowerPickup=true;
var flower=function(x,y,num,x2,y2){
    if(flowerAllow){
    if(flowerPickup){
    if(!mouseIsPressed){introTime=0;}
    if(mouseIsPressed&&introTime===0&&mouseX>x-5&&mouseY>y-16&&mouseX<x+6&&mouseY<y+25){
        flowers[num]^=true;introTime+=1;}
    if(mouseIsPressed&&introTime===0&&mouseX>x2-5&&mouseY>y2-16&&mouseX<x2+6&&mouseY<y2+25&&flowers[num]){
        flowers2[num]^=true;flowers[num]^=true;introTime+=1;}
    if(mouseIsPressed&&introTime===0&&mouseX>x2-5&&mouseY>y2-16&&mouseX<x2+6&&mouseY<y2+25&&flowers2[num]){
        flowers2[num]^=true;flowers[num]^=true;introTime+=1;}
    }
    if(flowers[num]){
        x=mouseX;
        y=mouseY;}

    if(flowers2[num]){
        x=x2;
        y=y2;
    }
        stroke(19, 168, 5);noFill();strokeWeight(2);
        bezier(x,y,x+4,y+10,x+-4,y+2,x+2,y+28);
        noStroke();fill(247, 69, 211);
        ellipse(x+1,y+-4,5,10);
        ellipse(x+1,y+-13,7,12);
        ellipse(x+3,y+-11,9,8);
        ellipse(x+-2,y+-10,9,8);
        ellipse(x+3,y+-7,10,7);
        ellipse(x+-2,y+-6,6,5);
        fill(255, 245, 61);
        ellipse(x+1,y+-9,4,4);
    }
};
//Shelf
var shelf=function(x,y){
    
};
//Invetory
var slotY=[];
var slotX=[];
var showInventory=true;
var inventory=function(){
    noStroke();
};

//////////NEXT LEVEL//////////////
var lvlTime=0;var transition=false;
var nextLvl=function(){
    noStroke();
    if(lvlTime>80){
        if(lvlTime<208){
        fill(255, 255, 255,(lvlTime-80)*4);
        }
        if(lvlTime===150){page+=1;openDoor=false;openDoor2=false;keyAllow=true;keyGrabbed=false;vaseTime=0;codeDis=false;codeImput="";correctCode=false;for(var k=0;k<10;k+=1){
            vaseAllow[k]=true;
            vaseHeld[k]=false;
            vaseDropped[k]=false;
            vaseX=[];var vaseY=[];
            t2[k]=0;
            vaseHit[k]=false;
            vaseAllow[k]=true;
        }lvlTime=208;
        }
        if(lvlTime>=208){
        fill(255, 255, 255,255-((lvlTime-208)*4));
        }
        rect(0,0,400,400);
        if(lvlTime>=208){
        fill(30,30,30,255-((lvlTime-208)*4));
        textAlign(CENTER,CENTER);
        textSize(50);
        text("Level:",200,50);
        textSize(217);
        text(page-5,200,200);
        textAlign(LEFT,LEFT);
        }
        if(lvlTime>272){transition=false;}
    }
    lvlTime+=1;
};

////////LEVEL ONE///////////////////////
var lvl1=function(){
    door(164,179);
    light(200,28,true);
    cabinet(76,255);
    drawer(82,261);
    dkey(98,218);
    if(mouseIsPressed&&mouseX>170&&mouseY>239&&mouseX<191&&mouseY<261&&keyGrabbed){
        openDoor=true;transition=true;keyAllow=false;
    }
    if(darkOut>0){
    fill(0, 0, 0,darkOut);
    rect(0,0,400,400);
    darkOut-=3;
    fill(100,100,100,darkOut);
    textAlign(CENTER,CENTER);
    textSize(50);
    text("Level:",200,50);
    textSize(217);
    text("1",200,200);
    textAlign(LEFT,LEFT);
    }
};

////////LEVEL TWO////////////////////
var light1=false;
var lvl2=function(){
    door(164,179);
    light_switch(12,200);
    light(200,25,light1);
    codePanel(273,205,"_.._.");
    if(correctCode&&!codeDis){
        openDoor=true;transition=true;}
    if(!light1){
    fill(0, 0, 0,175);
    rect(0,0,400,400);}
    if(switch_on){
        if(introTime<20){
            light1=1;}
        else if(introTime<23){
            light1=0;}
        else if(introTime<27){
            light1=1;}
        else if(introTime<30){
            light1=0;}
        else if(introTime<34){
            light1=1;}
        else if(introTime<37){
            light1=0;}
        else if(introTime<57){
            light1=1;}
        else if(introTime<60){
            light1=0;}
        else if(introTime<64){
            light1=1;}
        else if(introTime>=64){
            light1=0;switch_on=0;}
        introTime+=1;t=0;particles=[];
    }
    else{light1=0;introTime=0;sparks(200,375);}
};

//////////LEVEL THREE///////////
var lvl3=function(){
        if(mouseIsPressed&&mouseX>170&&mouseY>239&&mouseX<191&&mouseY<261&&keyGrabbed){
        openDoor=true;transition=true;keyAllow=false;
    }
    var flicker=random(0,8);
    if(round(flicker)===0){light1=0;}
    else{light1=1;}
    light(130,25,true);
    light(260,25,light1);
    rug(200,355);
    door(164,179);
    if(vaseHit[0]){shatter(vaseX[0],vaseY[0]);vaseAllow[0]=false;
    dkey(vaseX[0],vaseY[0]);
    }
    table(84,247); 
    table2(314,247);
    flower(114,239,1,277,239);
    flower(120,233,2,270,233);
    if(!mouseIsPressed){vaseTime=0;}
    if(mouseIsPressed&&flowers2[2]&&flowers2[1]&&mouseX>106&&mouseY>238&&mouseX<132&&mouseY<275&&vaseTime===0){
        vaseHeld[0]^=true;vaseTime+=1;
    }
    if(vaseHeld[0]){flowerPickup=false;}
    vase(270,239,119,false,1);
    vase(112,239,209,true,0);

};

/////////LEVEL FOUR///////////////
var lvl4=function(){
    wallClr=color(143, 143, 143);
    cellingClr=color(255, 255, 255);
    floorClr=color(0, 0, 0);
    wall2Clr=color(74, 74, 74);
    door2(164,179);
    fill(255, 255, 255);textSize(20);
    text("More levels coming soon!",90,116);
    light(200,25,1);
    codePanel(252,205,"next level","ntxelv ");
    if(!codeDis&&correctCode){openDoor2=true;transition=true;fill(255,255,255);text("I told you so.",140,149);}
};

////////LEVEL FIVE///////////
var lvl5=function(){
    wallClr=color(143, 143, 143);
    cellingClr=color(255, 255, 255);
    floorClr=color(0, 0, 0);
    wall2Clr=color(74, 74, 74);
    fill(255, 255, 255);
    textSize(10);
    text("We ran\nout of code\npanels.",242,220);
    text("There's probably\na light down\nthere in the\nbasement.",85,260);
    light(197,20,1);
    door2(165,179);
    fill(156, 156, 156);
    quad(87,310,127,310,114,340,65,340);
    quad(87,334,98,334,105,335,82,335);
    if(mouseIsPressed&&mouseX>75&&mouseX<125&&mouseY>310&&mouseY<339){
        transition=true;
    }
};

////////LEVEL SIX/////////////
var lvl6=function(){
    wallClr=color(84, 70, 47);
    cellingClr=color(122, 122, 122);
    floorClr=color(102, 102, 102);
    wall2Clr=color(43, 39, 32);
    fill(255, 255, 255);textSize(12);
    text("Oops, I lied about the light.",127,73);
    cabinet(88,252);
    door(201,179);
    vase(114,212,126,0,0);
    rug(200,354);
    stroke(0, 0, 0,120);strokeWeight(1000);
    fill(38, 37, 14, 50);
    ellipse(mouseX,mouseY,1200,1200);
    if(mouseIsPressed&&mouseX>200&&mouseX<230&&mouseY>233&&mouseY<264){
        transition=true;openDoor=true;
    }
};

/////////LEVEL SEVEN/////////////
var lvl7=function(){
    fill(255, 255, 255);textSize(20);
    text("More levels coming soon!",90,175);
        stroke(0, 0, 0,120);strokeWeight(1000);
    fill(38, 37, 14, 50);
    ellipse(mouseX,mouseY,1200,1200);
};

/////////LEVEL EIGHT/////////////
var lvl8=function(){
    
};

//////DRAW LOOP/////////////////////////
draw= function() {
    hall();
    if(page==="logo"){introLogo();}
    if(page===0){titleMenu();}  
    if(page===1){gameStart();}
    if(page===2){level_select();}
    if(page===3){about();}
    if(page===4){hints();}
    if(page===5){tutorial();}
    if(page===6){lvl1();}
    if(page===7){lvl2();}
    if(page===8){lvl3();}
    if(page===9){lvl4();}
    if(page===10){lvl5();}
    if(page===11){lvl6();}
    if(page===12){lvl7();}
    if(page===13){lvl8();}
    if(page===14){}
    if(page===15){}
    
    if(transition){nextLvl();}
    if(levels<page-6){levels=page-6;}
    if(levels<0){levels=0;}
    if(mouseIsPressed){ticks+=1;}
    if(!mouseIsPressed){ticks=0;}
    if(!transition){lvlTime=0;}
};
