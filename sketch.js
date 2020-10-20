let input, button;

function setup() {

  // create canvas
  createCanvas(710, 400);
  background(128,128,128);

  yPeak = createInput("Projectile Peak Height (in)");
  yPeak.position(50, 95);

  shtrHt = createInput("Shooter Height (in)");
  shtrHt.position(50, yPeak.y + 40);

  distance = createInput("Distance from target (in)");
  distance.position(50,shtrHt.y + 40);

  button = createButton('submit');
  button.position(100, distance.y + 40, 65);
  button.mousePressed(Calculate);

  title = createElement('h1', 'Caclulate projetiles!');
  title.position(250, 0);


  textAlign(CENTER);
  textSize(50);

}

//unit in inches
function Calculate() {

     let peakY = yPeak.value();
     let hightOfShooter = float (shtrHt.value());
  //hight
   const h = peakY - hightOfShooter;
   const dis = distance.value();

   const g = 9.81 *3.28084 *12;
  //diameter of the wheels
   const dia = 4.0;
  //cicumpherence of the wheels
   const cir = dia * PI;
  //starting y velocity
   let Vynot = sqrt(2 * float(h) * g);
  //starting x velocity
   let Vxnot = ((dis * g) / Vynot);
   let atanconst = Vynot/Vxnot;
   let theta = atan(atanconst);
   let Vnot = sqrt(sq(Vxnot) + sq(Vynot));
   let rpm = 2 * (Vnot / cir) * 60;

  let t = Vynot/g + sqrt(sq(Vynot)/sq(g) - 2 * (-hightOfShooter)/g);
  let xDist = Vxnot * t;
  
  velocity = createElement('h3', "Starting velocity is " + Vnot.toFixed(2));
   velocity.position(350, 75);

   rotpm = createElement('h3', "Rpm is " + rpm.toFixed(2));
   rotpm.position(350,velocity.y + 30);

   angle = createElement('h3', 'Angle is ' + ((180/ PI) * theta).toFixed(2) );
   angle.position(350, rotpm.y + 30);

  time = createElement('h3', 'Time is ' + t.toFixed(2));
  time.position(350, angle.y + 30);

  xD = createElement('h3', 'X distance is ' + xDist.toFixed(2) + " " + (xDist/12).toFixed(2));
  xD.position(350, time.y + 30);

  v0xv0y = createElement('h3', 'Vx0 ' + Vxnot.toFixed(2) + " Vy0 " + Vynot.toFixed(2));
  v0xv0y.position(350, xD.y + 30);

  //foo = createElement('h3', 'a=' + Vynot/g + " " + sq(Vynot)/sq(g) + " " + (-2*(-h)/g));

}