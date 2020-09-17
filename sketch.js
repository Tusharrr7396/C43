var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze10 ;
var maze11, maze12, maze13, maze14, maze15, maze16, maze17, maze18, maze19, maze20;
var maze21, maze22, maze23, mze24, maze25;
var pacman,pacmanImage;
var ghost1,ghostImage1;
var ghost2,ghostImage2;
var ghost6,ghostImage6;
var ghost4,ghostImage4;
var score=0;

 function preload () {
pacmanImage=loadImage("pacman/download2.png");
ghostImage1=loadImage("pacman/ghost1.png");
ghostImage2=loadImage("pacman/ghost2.png");
ghostImage6=loadImage("pacman/ghost6.jfif");
ghostImage4=loadImage("pacman/ghost4.png");
dotImage=loadImage("pacman/smoke.png");
 }

function setup() {
  createCanvas(400,400);

maze1=createSprite(153,380 , 100, 10);
maze1.shapeColor="blue"
maze2=createSprite(198,320,10,110);
maze2.shapeColor="blue"
maze3=createSprite(150,200,10,50);
maze3.shapeColor="blue"
maze4=createSprite(158,305,10,80);
maze4.shapeColor="blue"
maze5=createSprite(133,345,60,10);
maze5.shapeColor="blue"
maze6=createSprite(290,200,10,50);
maze6.shapeColor="blue"
maze7=createSprite(291,380,188,10);
maze7.shapeColor="blue"
maze8=createSprite(246,305,10,80);
maze8.shapeColor="blue"
//maze9=createSprite(310,340,60,10);
//maze9.shapeColor="blue"
maze10=createSprite(285,305,10,80);
maze10.shapeColor="blue"
maze11=createSprite(220,220,140,10);
maze11.shapeColor="blue"
maze12=createSprite(20,345,10,80);
maze12.shapeColor="blue"
maze13=createSprite(120,380,200,10);
maze13.shapeColor="blue"
maze14=createSprite(70,235,10,230);
maze14.shapeColor="blue"
mazeA=createSprite(70,180,10,230)
mazeA.visible=false
maze15=createSprite(220,180,140,10);
maze15.shapeColor="blue"
maze16=createSprite(380,195,10,360);
maze16.shapeColor="blue"
maze17=createSprite(20,230,10,300);
maze17.shapeColor="blue"
maze18=createSprite(220,130,150,10);
maze18.shapeColor="blue"
maze19=createSprite(200,70,270,10);
//maze19.shapeColor="blue"
maze20=createSprite(120,20,200,10);
maze20.shapeColor="blue"
maze21=createSprite(20,111,10,191);
maze21.shapeColor="blue"
maze22=createSprite(85,380,40,10);
maze22.shapeColor="blue"
maze23=createSprite(294,20,180,10);
maze23.shapeColor="blue"
maze24=createSprite(110,210,10,180);
maze24.shapeColor="blue"
maze25=createSprite(330,235,10,220);
maze25.shapeColor="blue"

pacman=createSprite(224,335,10,10);
pacman.addImage("right",pacmanImage);
pacman.scale=0.02
ghost1=createSprite(172,200,10,10);
ghost1.addImage("1",ghostImage1);
ghost1.scale=0.03
ghost2=createSprite(200,200,10,10);
ghost2.addImage("2",ghostImage2);
ghost2.scale=0.03;
ghost6=createSprite(228,200,10,10);
ghost6.addImage("6",ghostImage6);
ghost6.scale=0.09;
ghost4=createSprite(256,200,10,10);
ghost4.addImage("4",ghostImage4);
ghost4.scale=0.03;

//adding dots
dot1= createSprite(45,345,10,10)
dot1.addImage("1",dotImage);

dot2= createSprite(45,325,10,10)
dot2.addImage("1",dotImage);

dot3= createSprite(45,305,10,10)
dot3.addImage("1",dotImage);

dot4= createSprite(45,285,10,10)
dot4.addImage("1",dotImage);

dot5= createSprite(45,265,10,10)
dot5.addImage("1",dotImage);

dot6= createSprite(45,245,10,10)
dot6.addImage("1",dotImage);

dot7= createSprite(45,225,10,10)
dot7.addImage("1",dotImage);

dot8= createSprite(45,205,10,10)
dot8.addImage("1",dotImage);

dot9= createSprite(45,185,10,10)
dot9.addImage("1",dotImage);

dot10= createSprite(45,165,10,10)
dot10.addImage("1",dotImage);

dot11= createSprite(45,145,10,10)
dot11.addImage("1",dotImage);

dot12= createSprite(45,125,10,10)
dot12.addImage("1",dotImage);

dot13= createSprite(45,105,10,10)
dot13.addImage("1",dotImage);

dot14= createSprite(45,85,10,10)
dot14.addImage("1",dotImage);

dot15= createSprite(45,65,10,10)
dot15.addImage("1",dotImage);

dot16= createSprite(65,365,10,10)
dot16.addImage("1",dotImage);

dot17= createSprite(45,365,10,10)
dot17.addImage("1",dotImage);

dot18= createSprite(65,365,10,10)
dot18.addImage("1",dotImage);

dot19= createSprite(85,365,10,10)
dot19.addImage("1",dotImage);

dot20= createSprite(105,365,10,10)
dot20.addImage("1",dotImage);

dot21= createSprite(125,365,10,10)
dot21.addImage("1",dotImage);

dot22= createSprite(145,365,10,10)
dot22.addImage("1",dotImage);

dot23= createSprite(165,365,10,10)
dot23.addImage("1",dotImage);

dot24= createSprite(185,365,10,10)
dot24.addImage("1",dotImage);

dot25= createSprite(215,365,10,10)
dot25.addImage("1",dotImage);

dot26= createSprite(235,365,10,10)
dot26.addImage("1",dotImage);

dot27= createSprite(255,365,10,10)
dot27.addImage("1",dotImage);

dot28= createSprite(275,365,10,10)
dot28.addImage("1",dotImage);

dot29= createSprite(295,365,10,10)
dot29.addImage("1",dotImage);

dot30= createSprite(315,365,10,10)
dot30.addImage("1",dotImage);

dot31= createSprite(335,365,10,10)
dot31.addImage("1",dotImage);

dot32= createSprite(360,365,10,10)
dot32.addImage("1",dotImage);

dot34= createSprite(45,45,10,10)
dot34.addImage("1",dotImage);

dot35= createSprite(65,45,10,10)
dot35.addImage("1",dotImage);

dot36= createSprite(85,45,10,10)
dot36.addImage("1",dotImage);

dot37= createSprite(105,45,10,10)
dot37.addImage("1",dotImage);

dot38= createSprite(125,45,10,10)
dot38.addImage("1",dotImage);

dot39= createSprite(145,45,10,10)
dot39.addImage("1",dotImage);

dot40= createSprite(165,45,10,10)
dot40.addImage("1",dotImage);

dot41= createSprite(185,45,10,10)
dot41.addImage("1",dotImage);

dot42= createSprite(205,45,10,10)
dot42.addImage("1",dotImage);

dot43= createSprite(225,45,10,10)
dot43.addImage("1",dotImage);

dot44= createSprite(245,45,10,10)
dot44.addImage("1",dotImage);

dot45= createSprite(265,45,10,10)
dot45.addImage("1",dotImage);

dot46= createSprite(285,45,10,10)
dot46.addImage("1",dotImage);

dot47= createSprite(305,45,10,10)
dot47.addImage("1",dotImage);

dot48= createSprite(325,45,10,10)
dot48.addImage("1",dotImage);

dot49= createSprite(345,45,10,10)
dot49.addImage("1",dotImage);

dot50= createSprite(360,45,10,10)
dot50.addImage("1",dotImage);

dot51= createSprite(360,65,10,10)
dot51.addImage("1",dotImage);

dot52= createSprite(360,85,10,10)
dot52.addImage("1",dotImage);

dot53= createSprite(360,105,10,10)
dot53.addImage("1",dotImage);

dot54= createSprite(360,125,10,10)
dot54.addImage("1",dotImage);

dot55= createSprite(360,145,10,10)
dot55.addImage("1",dotImage);

dot56= createSprite(360,165,10,10)
dot56.addImage("1",dotImage);

dot57= createSprite(360,185,10,10)
dot57.addImage("1",dotImage);

dot58= createSprite(360,205,10,10)
dot58.addImage("1",dotImage);

dot59= createSprite(360,225,10,10)
dot59.addImage("1",dotImage);

dot60= createSprite(360,245,10,10)
dot60.addImage("1",dotImage);

dot61= createSprite(360,265,10,10)
dot61.addImage("1",dotImage);

dot62= createSprite(360,285,10,10)
dot62.addImage("1",dotImage);

dot63= createSprite(360,305,10,10)
dot63.addImage("1",dotImage);

dot64= createSprite(360,325,10,10)
dot64.addImage("1",dotImage);

dot65= createSprite(360,345,10,10)
dot65.addImage("1",dotImage);

dot66= createSprite(65,95,10,10)
dot66.addImage("1",dotImage);

dot67= createSprite(85,95,10,10)
dot67.addImage("1",dotImage);

dot68= createSprite(105,95,10,10)
dot68.addImage("1",dotImage);

dot69= createSprite(125,95,10,10)
dot69.addImage("1",dotImage);

dot70= createSprite(145,95,10,10)
dot70.addImage("1",dotImage);

dot71= createSprite(165,95,10,10)
dot71.addImage("1",dotImage);

dot72= createSprite(185,95,10,10)
dot72.addImage("1",dotImage);

dot73= createSprite(205,95,10,10)
dot73.addImage("1",dotImage);

dot74= createSprite(225,95,10,10)
dot74.addImage("1",dotImage);

dot75= createSprite(245,95,10,10)
dot75.addImage("1",dotImage);

dot77= createSprite(265,95,10,10)
dot77.addImage("1",dotImage);

dot78= createSprite(285,95,10,10)
dot78.addImage("1",dotImage);

dot79= createSprite(305,95,10,10)
dot79.addImage("1",dotImage);

dot80= createSprite(325,95,10,10)
dot80.addImage("1",dotImage);

dot81= createSprite(345,95,10,10)
dot81.addImage("1",dotImage);

dot82= createSprite(85,345,10,10)
dot82.addImage("1",dotImage);

dot83= createSprite(85,325,10,10)
dot83.addImage("1",dotImage);

dot84= createSprite(85,305,10,10)
dot84.addImage("1",dotImage);

dot85= createSprite(85,285,10,10)
dot85.addImage("1",dotImage);

dot86= createSprite(85,265,10,10)
dot86.addImage("1",dotImage);

dot87= createSprite(85,245,10,10)
dot87.addImage("1",dotImage);

dot88= createSprite(85,225,10,10)
dot88.addImage("1",dotImage);

dot89= createSprite(85,205,10,10)
dot89.addImage("1",dotImage);

dot90= createSprite(85,185,10,10)
dot90.addImage("1",dotImage);

dot91= createSprite(85,165,10,10)
dot91.addImage("1",dotImage);

dot92= createSprite(85,145,10,10)
dot92.addImage("1",dotImage);

dot93= createSprite(85,125,10,10)
dot93.addImage("1",dotImage);

dot94= createSprite(105,325,10,10)
dot94.addImage("1",dotImage);

dot95= createSprite(125,325,10,10)
dot95.addImage("1",dotImage);

dot96= createSprite(125,305,10,10)
dot96.addImage("1",dotImage);

dot97= createSprite(125,285,10,10)
dot97.addImage("1",dotImage);

dot98= createSprite(125,265,10,10)
dot98.addImage("1",dotImage);

dot99= createSprite(125,245,10,10)
dot99.addImage("1",dotImage);

dot100= createSprite(125,225,10,10)
dot100.addImage("1",dotImage);

dot101= createSprite(125,205,10,10)
dot101.addImage("1",dotImage);

dot102= createSprite(125,185,10,10)
dot102.addImage("1",dotImage);

dot103= createSprite(125,165,10,10)
dot103.addImage("1",dotImage);

dot104= createSprite(125,145,10,10)
dot104.addImage("1",dotImage);

dot105= createSprite(125,125,10,10)
dot105.addImage("1",dotImage);

dot105= createSprite(305,125,10,10)
dot105.addImage("1",dotImage);

dot106= createSprite(305,145,10,10)
dot106.addImage("1",dotImage);

dot107= createSprite(305,165,10,10)
dot107.addImage("1",dotImage);

dot108= createSprite(305,185,10,10)
dot108.addImage("1",dotImage);

dot109= createSprite(305,205,10,10)
dot109.addImage("1",dotImage);

dot110= createSprite(305,225,10,10)
dot110.addImage("1",dotImage);

dot111= createSprite(305,245,10,10)
dot111.addImage("1",dotImage);

dot112= createSprite(305,265,10,10)
dot112.addImage("1",dotImage);

dot113= createSprite(305,285,10,10)
dot113.addImage("1",dotImage);

dot114= createSprite(305,305,10,10)
dot114.addImage("1",dotImage);

dot115= createSprite(305,325,10,10)
dot115.addImage("1",dotImage);

dot116= createSprite(305,345,10,10)
dot116.addImage("1",dotImage);

dot117= createSprite(285,155,10,10)
dot117.addImage("1",dotImage);

dot118= createSprite(265,155,10,10)
dot118.addImage("1",dotImage);

dot119= createSprite(245,155,10,10)
dot119.addImage("1",dotImage);

dot120= createSprite(225,155,10,10)
dot120.addImage("1",dotImage);

dot121= createSprite(205,155,10,10)
dot121.addImage("1",dotImage);

dot122= createSprite(185,155,10,10)
dot122.addImage("1",dotImage);

dot123= createSprite(165,155,10,10)
dot123.addImage("1",dotImage);

dot124= createSprite(145,155,10,10)
dot124.addImage("1",dotImage);

dot125= createSprite(265,345,10,10)
dot125.addImage("1",dotImage);

dot126= createSprite(265,325,10,10)
dot126.addImage("1",dotImage);

dot127= createSprite(265,305,10,10)
dot127.addImage("1",dotImage);

dot128= createSprite(265,285,10,10)
dot128.addImage("1",dotImage);

dot129= createSprite(265,265,10,10)
dot129.addImage("1",dotImage);

dot130= createSprite(265,245,10,10)
dot130.addImage("1",dotImage);

dot131= createSprite(285,245,10,10)
dot131.addImage("1",dotImage);

dot132= createSprite(245,245,10,10)
dot132.addImage("1",dotImage);

dot133= createSprite(225,245,10,10)
dot133.addImage("1",dotImage);

dot134= createSprite(205,245,10,10)
dot134.addImage("1",dotImage);

dot135= createSprite(185,245,10,10)
dot135.addImage("1",dotImage);

dot136= createSprite(165,245,10,10)
dot136.addImage("1",dotImage);

dot137= createSprite(145,245,10,10)
dot137.addImage("1",dotImage);

dot138= createSprite(225,265,10,10)
dot138.addImage("1",dotImage);

dot139= createSprite(225,285,10,10)
dot139.addImage("1",dotImage);

dot140= createSprite(225,305,10,10)
dot140.addImage("1",dotImage);

dot141= createSprite(180,305,10,10)
dot141.addImage("1",dotImage);

dot142= createSprite(180,285,10,10)
dot142.addImage("1",dotImage);

dot143= createSprite(180,265,10,10)
dot143.addImage("1",dotImage);

dot144= createSprite(180,325,10,10)
dot144.addImage("1",dotImage);

dot145= createSprite(180,345,10,10)
dot145.addImage("1",dotImage);


}

function draw() {
  background("black"); 
  text (mouseX+","+mouseY,200,20) 
  text("Score: "+score,340,15)
  if (keyDown(UP_ARROW)){
    pacman.y=pacman.y-5;

  }
  if (keyDown(DOWN_ARROW)){
    pacman.y=pacman.y+5
  }
  if (keyDown(RIGHT_ARROW)){
    pacman.x=pacman.x+5
  }
  if (keyDown(LEFT_ARROW)){
    pacman.x=pacman.x-5
  }
  pacman.collide(maze1);
  pacman.collide(maze2);
  pacman.collide(maze3);
  pacman.collide(maze4);
  pacman.collide(maze5);
  pacman.collide(maze6);
  pacman.collide(maze7);
  pacman.collide(maze8);
 // pacman.collide(maze9);
  pacman.collide(maze10);
  pacman.collide(maze11);
  pacman.collide(maze12);
  pacman.collide(maze13);
  pacman.collide(maze14);
  pacman.collide(maze15);
  pacman.collide(maze16);
  pacman.collide(maze17);
  pacman.collide(maze18);
  pacman.collide(maze19);
  pacman.collide(maze20);
  pacman.collide(maze21);
  pacman.collide(maze22);
  pacman.collide(maze23);
  pacman.collide(maze24);
  pacman.collide(maze25);
  pacmancollide();
  moveGhost1();
  drawSprites();
}
function pacmancollide(){
  if(pacman.isTouching(dot1)){
    dot1.x=2000;
    score=score+1
  }

  if(pacman.isTouching(dot2)){
    dot2.destroy();
  }

  if(pacman.isTouching(dot3)){
    dot3.destroy();
  }

  if(pacman.isTouching(dot4)){
    dot4.destroy();
  }

  if(pacman.isTouching(dot5)){
    dot5.destroy();
  }

  if(pacman.isTouching(dot6)){
    dot6.destroy();
  }

  if(pacman.isTouching(dot7)){
    dot7.destroy();
  }

  if(pacman.isTouching(dot8)){
    dot8.destroy();
  }

  if(pacman.isTouching(dot9)){
    dot9.destroy();
  }

  if(pacman.isTouching(dot10)){
    dot10.destroy();
  }

  if(pacman.isTouching(dot11)){
    dot11.destroy();
  }

  if(pacman.isTouching(dot12)){
    dot12.destroy();
  }

  if(pacman.isTouching(dot13)){
    dot13.destroy();
  }

 if(pacman.isTouching(dot14)){
    dot14.destroy();
  }

  if(pacman.isTouching(dot15)){
    dot15.destroy();
  }

  if(pacman.isTouching(dot16)){
    dot16.destroy();
  }

  if(pacman.isTouching(dot17)){
    dot17.destroy();
  }

  if(pacman.isTouching(dot18)){
    dot18.destroy();
  }

  if(pacman.isTouching(dot19)){
    dot19.destroy();
  }

  if(pacman.isTouching(dot20)){
    dot20.destroy();
  }

  if(pacman.isTouching(dot21)){
    dot21.destroy();
  }

  if(pacman.isTouching(dot22)){
    dot22.destroy();
  }

  if(pacman.isTouching(dot23)){
    dot23.destroy();
  }

  if(pacman.isTouching(dot24)){
    dot24.destroy();
  }

  if(pacman.isTouching(dot25)){
    dot25.destroy();
  }

  if(pacman.isTouching(dot26)){
    dot26.destroy();
  }

  if(pacman.isTouching(dot27)){
    dot27.destroy();
  }


  if(pacman.isTouching(dot28)){
    dot28.destroy();
  }

  if(pacman.isTouching(dot29)){
    dot29.destroy();
  }

  if(pacman.isTouching(dot30)){
    dot30.destroy();
  }

  if(pacman.isTouching(dot31)){
    dot31.destroy();
  }

  if(pacman.isTouching(dot32)){
    dot32.destroy();
  }

  if(pacman.isTouching(dot34)){
    dot34.destroy();
  }

  if(pacman.isTouching(dot35)){
    dot35.destroy();
  }

  if(pacman.isTouching(dot36)){
    dot36.destroy();
  }

  if(pacman.isTouching(dot37)){
    dot37.destroy();
  }

  if(pacman.isTouching(dot38)){
    dot38.destroy();
  }

  if(pacman.isTouching(dot39)){
    dot39.destroy();
  }

  if(pacman.isTouching(dot40)){
    dot40.destroy();
  }

  if(pacman.isTouching(dot41)){
    dot41.destroy();
  }

  if(pacman.isTouching(dot42)){
    dot42.destroy();
  }

  if(pacman.isTouching(dot43)){
    dot43.destroy();
  }

  if(pacman.isTouching(dot44)){
    dot44.destroy();
  }
  if(pacman.isTouching(dot45)){
    dot45.destroy();
  }

  if(pacman.isTouching(dot46)){
    dot46.destroy();
  }

  if(pacman.isTouching(dot47)){
    dot47.destroy();
  }

  if(pacman.isTouching(dot48)){
    dot48.destroy();
  }

  if(pacman.isTouching(dot49)){
    dot49.destroy();
  }

  if(pacman.isTouching(dot50)){
    dot50.destroy();
  }

  if(pacman.isTouching(dot51)){
    dot51.destroy();
  }

  if(pacman.isTouching(dot52)){
    dot52.destroy();
  }

  if(pacman.isTouching(dot53)){
    dot53.destroy();
  }

  if(pacman.isTouching(dot54)){
    dot54.destroy();
  }

  if(pacman.isTouching(dot55)){
    dot55.destroy();
  }

  if(pacman.isTouching(dot56)){
    dot56.destroy();
  }

  if(pacman.isTouching(dot57)){
    dot57.destroy();
  }

  if(pacman.isTouching(dot58)){
    dot58.destroy();
  }

  if(pacman.isTouching(dot59)){
    dot59.destroy();
  }

  if(pacman.isTouching(dot60)){
    dot60.destroy();
  }

  if(pacman.isTouching(dot61)){
    dot61.destroy();
  }

  if(pacman.isTouching(dot62)){
    dot62.destroy();
  }

  if(pacman.isTouching(dot63)){
    dot63.destroy();
  }

  if(pacman.isTouching(dot64)){
    dot64.destroy();
  }

  if(pacman.isTouching(dot65)){
    dot65.destroy();
  }

  if(pacman.isTouching(dot66)){
    dot66.destroy();
  }
  if(pacman.isTouching(dot67)){
    dot67.destroy();
  }

  if(pacman.isTouching(dot68)){
    dot68.destroy();
  }

  if(pacman.isTouching(dot69)){
    dot69.destroy();
  }

  if(pacman.isTouching(dot70)){
    dot70.destroy();
  }

  if(pacman.isTouching(dot71)){
    dot71.destroy();
  }

  if(pacman.isTouching(dot72)){
    dot72.destroy();
  }

  if(pacman.isTouching(dot73)){
    dot73.destroy();
  }

  if(pacman.isTouching(dot74)){
    dot74.destroy();
  }

  if(pacman.isTouching(dot75)){
    dot75.destroy();
  }

  if(pacman.isTouching(dot77)){
    dot77.destroy();
  }

  if(pacman.isTouching(dot78)){
    dot78.destroy();
  }

  if(pacman.isTouching(dot79)){
    dot79.destroy();
  }

  if(pacman.isTouching(dot80)){
    dot80.destroy();
  }

  if(pacman.isTouching(dot81)){
    dot81.destroy();
  }

  if(pacman.isTouching(dot82)){
    dot82.destroy();
  }

  if(pacman.isTouching(dot83)){
    dot83.destroy();
  }

  if(pacman.isTouching(dot84)){
    dot84.destroy();
  }

  if(pacman.isTouching(dot85)){
    dot85.destroy();
  }

  if(pacman.isTouching(dot86)){
    dot86.destroy();
  }

  if(pacman.isTouching(dot87)){
    dot87.destroy();
  }

  if(pacman.isTouching(dot88)){
    dot88.destroy();
  }

  if(pacman.isTouching(dot89)){
    dot89.destroy();
  }

  if(pacman.isTouching(dot90)){
    dot90.destroy();
  }

  if(pacman.isTouching(dot91)){
    dot91.destroy();
  }

  if(pacman.isTouching(dot92)){
    dot92.destroy();
  }

  if(pacman.isTouching(dot93)){
    dot93.destroy();
  }

  if(pacman.isTouching(dot94)){
    dot94.destroy();
  }

  if(pacman.isTouching(dot95)){
    dot95.destroy();
  }

  if(pacman.isTouching(dot96)){
    dot96.destroy();
  }

  if(pacman.isTouching(dot97)){
    dot97.destroy();
  }

  if(pacman.isTouching(dot98)){
    dot98.destroy();
  }

  if(pacman.isTouching(dot99)){
    dot99.destroy();
  }

  if(pacman.isTouching(dot100)){
    dot100.destroy();
  }

  if(pacman.isTouching(dot101)){
    dot101.destroy();
  }

  if(pacman.isTouching(dot102)){
    dot102.destroy();
  }

  if(pacman.isTouching(dot103)){
    dot103.destroy();
  }

  if(pacman.isTouching(dot104)){
    dot104.destroy();
  }

  if(pacman.isTouching(dot105)){
    dot106.destroy();
  }

  if(pacman.isTouching(dot106)){
    dot106.destroy();
  }

  if(pacman.isTouching(dot107)){
    dot107.destroy();
  }

  if(pacman.isTouching(dot108)){
    dot108.destroy();
  }

  if(pacman.isTouching(dot109)){
    dot109.destroy();
  }

  if(pacman.isTouching(dot110)){
    dot110.destroy();
  }

  if(pacman.isTouching(dot111)){
    dot111.destroy();
  }

  if(pacman.isTouching(dot112)){
    dot112.destroy();
  }

  if(pacman.isTouching(dot113)){
    dot113.destroy();
  }

  if(pacman.isTouching(dot114)){
    dot114.destroy();
  }

  if(pacman.isTouching(dot115)){
    dot115.destroy();
  }

  if(pacman.isTouching(dot116)){
    dot116.destroy();
  }

  if(pacman.isTouching(dot117)){
    dot117.destroy();
  }

  if(pacman.isTouching(dot118)){
    dot118.destroy();
  }

  if(pacman.isTouching(dot119)){
    dot119.destroy();
  }

  if(pacman.isTouching(dot120)){
    dot120.destroy();
  }

  if(pacman.isTouching(dot121)){
    dot121.destroy();
  }

  if(pacman.isTouching(dot122)){
    dot122.destroy();
  }

  if(pacman.isTouching(dot123)){
    dot123.destroy();
  }

  if(pacman.isTouching(dot124)){
    dot124.destroy();
  }

  if(pacman.isTouching(dot125)){
    dot125.destroy();
  }

  if(pacman.isTouching(dot126)){
    dot126.destroy();
  }

  if(pacman.isTouching(dot127)){
    dot127.destroy();
  }

  if(pacman.isTouching(dot128)){
    dot128.destroy();
  }

  if(pacman.isTouching(dot129)){
    dot129.destroy();
  }

  if(pacman.isTouching(dot130)){
    dot130.destroy();
  }

  if(pacman.isTouching(dot131)){
    dot131.destroy();
  }

  if(pacman.isTouching(dot132)){
    dot132.destroy();
  }

  if(pacman.isTouching(dot133)){
    dot133.destroy();
  }

  if(pacman.isTouching(dot134)){
    dot134.destroy();
  }

  if(pacman.isTouching(dot135)){
    dot135.destroy();
  }

  if(pacman.isTouching(dot136)){
    dot136.destroy();
  }

  if(pacman.isTouching(dot137)){
    dot137.destroy();
  }

  if(pacman.isTouching(dot138)){
    dot138.destroy();
  }

  if(pacman.isTouching(dot139)){
    dot139.destroy();
  }

  if(pacman.isTouching(dot140)){
    dot140.destroy();
  }

  if(pacman.isTouching(dot141)){
    dot141.destroy();
  }

  if(pacman.isTouching(dot142)){
    dot142.destroy();
  }

  if(pacman.isTouching(dot143)){
    dot143.destroy();
  }

  if(pacman.isTouching(dot144)){
    dot144.destroy();
  }

  if(pacman.isTouching(dot145)){
    dot145.destroy();
  }
}
function moveGhost1 (){
ghost1.velocityY=-3
ghost1.velocityX=0
if (ghost1.collide(maze18)){
  ghost1.velocityX=3
  ghost1.velocityY=0
}
if (ghost1.collide(maze19)){
  ghost1.velocityX=-3
  ghost1.velocityY=0
}
if (ghost1.y<=82&&ghost1.x<=86){
  ghost1.velocityX=0
  ghost1.velocityY=-3
 // console.log("hello")
 //ghost1.bounceOff(mazeA)
}
}