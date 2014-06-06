var profile = document.getElementById("profile");
var szymon = document.getElementById("name");

szymon.onmouseover= function(){
  console.log(1);
 $('#profile').animate({"opacity": 1}, 800);
};


var smoothScrollTo =  function (target) {
  	var timer;
    var offset = window.pageYOffset,
        delta  = target - window.pageYOffset-8; // Y-offset difference +8px margin
    	duration =  500;             // animation duration
    	start = Date.now();                       // get start time
    	factor = 0;

      function step() {
      var y;
      factor = (Date.now() - start) / duration; // get interpolation factor

      if( factor >= 1 ) {
        clearInterval(timer); // stop animation
        factor = 1;           // clip to max 1.0
      } 
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }
    
    timer = setInterval(step, 10);
    return timer;
  };

var one = document.getElementById('about'); 
	  two = document.getElementById("resume"); 
  	three = document.getElementById("contact");

var link_one = document.getElementById("nav-about");
	  link_two = document.getElementById("nav-resume");
	  link_three = document.getElementById("nav-contact");

 link_one.classList.add('special');

link_one.addEventListener("click", function(){
	smoothScrollTo(0);
	this.classList.add('special');
  this.style.borderBottomLeftRadius ="0rem";
  link_two.classList.remove('special');
  link_three.style.borderBottomRightRadius ="0.5rem";
  link_three.classList.remove('special');
}, false);

link_two.addEventListener("click", function(){
	smoothScrollTo(two.offsetTop);
	this.classList.add('special');
  link_one.style.borderBottomLeftRadius ="0.5rem";
  link_one.classList.remove('special');
  link_three.style.borderBottomRightRadius ="0.5rem";
  link_three.classList.remove('special');
}, false);

link_three.addEventListener("click", function(){
	smoothScrollTo(three.offsetTop);
	this.classList.add('special');
  this.style.borderBottomRightRadius ="0rem";
  link_one.style.borderBottomLeftRadius ="0.5rem";
  link_one.classList.remove('special');
  link_two.classList.remove('special');
}, false);


