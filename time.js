var sound, days, d, dayNum, yearStart, weeks, decade, century, timestmp, yearFirstDay, today, dayOfYear;
var daysName = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var angles = [30,30,30,30,30,30,30,30,30,30,30,30];

function preload() {
  sound = loadSound("keplerlightcurvewaves.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  sound.setVolume(0.5);
  sound.loop();
  sound.play();
}

function draw() {
	background(0);
	//piechart guidelines 
	pieChart(3000, angles);
    	//weeks into year
		Date.prototype.getWeekNumber = function(){
  			d = new Date(this.getFullYear(), this.getMonth(), this.getDate());
  			dayNum = d.getDay() || 7;
  			d.setDate(d.getDate() + 4 - dayNum);
  			yearStart = new Date(d.getFullYear(),0,1);
  			return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
			}
    textSize(16);
    var theTime = daysName[days] + " " + month() + "/" + day() + " " + year() + myZero3(hour())+ " " + hour() + ":" + myZero2(minute()) + minute() + ":" + myZero(second())+second() + " week " + new Date().getWeekNumber() + " day " + dayOfYear + "\n" + century + " years into the century";
 	text(theTime,20,30);
 	d = new Date();
	days = d.getDay();
	decade = year()%10;
	weeks =  new Date().getWeekNumber();
	century = year()-2000;
	timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
	yearFirstDay = Math.floor(timestmp / 86400000);
	today = Math.ceil((new Date().getTime()) / 86400000);
	dayOfYear = today - yearFirstDay;

//sun
	fill(255,247,0);
	noStroke();
	ellipse(width/2,height/2,60,60);
	noFill();
	stroke(300);
	ellipse(width/2,height/2,90,90);
	ellipse(width/2,height/2,140,140);
	ellipse(width/2,height/2,202,202);
	ellipse(width/2,height/2,260,260);
	ellipse(width/2,height/2,330,330);
	ellipse(width/2,height/2,440,440);
	ellipse(width/2,height/2,540,540);
	ellipse(width/2,height/2,611,611);
	ellipse(width/2,height/2,660,660);

//mercury //seconds
 	fill(186,255,117);
  noStroke();
 	theta = map(second(),0,60,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+45*cos(theta),height/2+45*sin(theta),12,12);

//venus //minutes
 	fill(255,141,0);
  noStroke();
 	theta = map(minute(),0,60,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+70*cos(theta),height/2+70*sin(theta),20,20);

//earth //hours
 	fill(0,193,255);
  noStroke();
 	theta = map(hour(),0,12,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+100*cos(theta),height/2+100*sin(theta),20,20);

//mars //day of the week
 	fill(145,9,38);
  noStroke();
  theta = map(days,0,7,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+130*cos(theta),height/2+130*sin(theta),15,15);

//jupiter //day of the month
 	fill(0,189,11);
  	noStroke();
 	theta = map(day(),0,31,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+165*cos(theta),height/2+165*sin(theta),30,30);
 
//saturn //month
  	noStroke();
 	theta = map(month(),0,12,-HALF_PI,PI+HALF_PI)
 	fill(131,7,240);
 	ellipse(width/2+220*cos(theta),height/2+220*sin(theta),60,8);
 	 	fill(150);
 	ellipse(width/2+220*cos(theta),height/2+220*sin(theta),45,3);
 	fill(131,7,240);
	ellipse(width/2+220*cos(theta),height/2+220*sin(theta),27,27);

//uranus //how many days into the year
 	fill(72,95,255);
  	noStroke();
  	theta = map(dayOfYear,0,366,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+270*cos(theta),height/2+270*sin(theta),25,25);

//neptune //how many weeks into the year
  	fill(19,255,233);
  	noStroke();
 	 theta = map(weeks,0,52,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+305*cos(theta),height/2+305*sin(theta),25,25);

//pluto //how many years into the century
  	fill(254,129,255);
  	noStroke();
 	theta = map(century,0,366,-HALF_PI,PI+HALF_PI)
 	ellipse(width/2+330*cos(theta),height/2+330*sin(theta),10,10);
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 250);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}

//add zeros to time
function myZero(mySeconds) {
	if (mySeconds < 10)  {
		return "0";
	} else {
		return "";
	}
}

function myZero2(myMinutes) {
	if (myMinutes < 10) {
		return "0";
	} else {
		return "";
	}
}

function myZero3(myHours) {
	if (myHours < 10) {
		return "0";
	} else {
		return "";
	}
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight)
}