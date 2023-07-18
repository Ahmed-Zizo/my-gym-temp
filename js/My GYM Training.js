var click1 = document.querySelector("div.click1"),
    click2 = document.querySelector("div.click2"),
    click3 = document.querySelector("div.click3"),
    click4 = document.querySelector("div.click4"),
    
    show1 = document.querySelector("div.show1"),
    show2 = document.querySelector("div.show2"),
    show3 = document.querySelector("div.show3"),
    show4 = document.querySelector("div.show4"),
    
    span1 = document.querySelector("span.click1span"),
    span2 = document.querySelector("span.click2span"),
    span3 = document.querySelector("span.click3span"),
    span4 = document.querySelector("span.click4span"),
    
    
    //start table vars
    mon = document.querySelector("div.day1"),
    tues = document.querySelector("div.day2"),
    wed = document.querySelector("div.day3"),
    thrus = document.querySelector("div.day4"),
    fri = document.querySelector("div.day5"),
    
    mon1 = document.querySelector("td.mon1"),
    mon2 = document.querySelector("td.mon2"),
    tues1 = document.querySelector("td.tues1"),
    tues2 = document.querySelector("td.tues2"),
    wed1 = document.querySelector("td.wed1"),
    wed2 = document.querySelector("td.wed2"),
    thrus1 = document.querySelector("td.thrus1"),
    thrus2 = document.querySelector("td.thrus2"),
    fri1 = document.querySelector("td.fri1"),
    fri2 = document.querySelector("td.fri2");
    
    

click1.onclick = function () {
    "use strict";
    show1.removeAttribute("style");
    show1.setAttribute("style", "z-index:999;");
    show2.removeAttribute("style");
    show3.removeAttribute("style");
    show4.removeAttribute("style");
    
    span1.removeAttribute("style");
    span1.setAttribute("style", "color:#ed563b;");
    span2.removeAttribute("style");
    span3.removeAttribute("style");
    span4.removeAttribute("style");
};

click2.onclick = function () {
    "use strict";
    show2.removeAttribute("style");
    show2.setAttribute("style", "z-index:999;");
    show1.removeAttribute("style");
    show3.removeAttribute("style");
    show4.removeAttribute("style");
    
    span2.setAttribute("style", "color:#ed563b;");
    span1.removeAttribute("style");
    span3.removeAttribute("style");
    span4.removeAttribute("style");
};

click3.onclick = function () {
    "use strict";
    show3.removeAttribute("style");
    show3.setAttribute("style", "z-index:999;");
    show2.removeAttribute("style");
    show1.removeAttribute("style");
    show4.removeAttribute("style");
    
    span3.setAttribute("style", "color:#ed563b;");
    span1.removeAttribute("style");
    span2.removeAttribute("style");
    span4.removeAttribute("style");
};

click4.onclick = function () {
    "use strict";
    show4.removeAttribute("style");
    show4.setAttribute("style", "z-index:999;");
    show2.removeAttribute("style");
    show3.removeAttribute("style");
    show1.removeAttribute("style");
    
    span4.setAttribute("style", "color:#ed563b;");
    span2.removeAttribute("style");
    span3.removeAttribute("style");
    span1.removeAttribute("style");
};



//start table functions
mon.onclick = function () {
    "use strict";
    mon.removeAttribute("style");
    mon.setAttribute("style", "color:#ed563b;");
    tues.removeAttribute("style");
    wed.removeAttribute("style");
    thrus.removeAttribute("style");
    fri.removeAttribute("style");
    
    mon1.textContent = "";
    mon2.textContent = "";
    mon1.textContent = "10:00AM - 11:30AM";
    mon2.textContent = "2:00PM - 3:30PM";
    tues1.textContent = "";
    tues2.textContent = "";
    wed1.textContent = "";
    wed2.textContent = "";
    thrus1.textContent = "";
    thrus2.textContent = "";
    fri1.textContent = "";
    fri2.textContent = "";
};

tues.onclick = function () {
    "use strict";
    mon.removeAttribute("style");
    tues.setAttribute("style", "color:#ed563b;");
    wed.removeAttribute("style");
    thrus.removeAttribute("style");
    fri.removeAttribute("style");
    
    mon1.textContent = "";
    mon2.textContent = "";
    tues1.textContent = "2:00PM - 3:30PM";
    tues2.textContent = "10:00AM - 11:30AM";
    wed1.textContent = "";
    wed2.textContent = "";
    thrus1.textContent = "";
    thrus2.textContent = "";
    fri1.textContent = "";
    fri2.textContent = "";
};

wed.onclick = function () {
    "use strict";
    mon.removeAttribute("style");
    tues.removeAttribute("style");
    wed.setAttribute("style", "color:#ed563b;");
    thrus.removeAttribute("style");
    fri.removeAttribute("style");
    
    mon1.textContent = "";
    mon2.textContent = "";
    tues1.textContent = "";
    tues2.textContent = "";
    wed1.textContent = "10:00AM - 11:30AM";
    wed2.textContent = "2:00PM - 3:30PM";
    thrus1.textContent = "";
    thrus2.textContent = "";
    fri1.textContent = "";
    fri2.textContent = "";
};

thrus.onclick = function () {
    "use strict";
    mon.removeAttribute("style");
    thrus.setAttribute("style", "color:#ed563b;");
    tues.removeAttribute("style");
    wed.removeAttribute("style");
    fri.removeAttribute("style");
    
    mon1.textContent = "";
    mon2.textContent = "";
    tues1.textContent = "";
    tues2.textContent = "";
    wed1.textContent = "";
    wed2.textContent = "";
    thrus1.textContent = "2:00PM - 3:30PM";
    thrus2.textContent = "10:00AM - 11:30AM";
    fri1.textContent = "";
    fri2.textContent = "";
};

fri.onclick = function () {
    "use strict";
    mon.removeAttribute("style");
    fri.setAttribute("style", "color:#ed563b;");
    tues.removeAttribute("style");
    wed.removeAttribute("style");
    thrus.removeAttribute("style");
    
    mon1.textContent = "";
    mon2.textContent = "";
    mon1.textContent = "";
    mon2.textContent = "";
    tues1.textContent = "";
    tues2.textContent = "";
    wed1.textContent = "";
    wed2.textContent = "";
    thrus1.textContent = "";
    thrus2.textContent = "";
    fri1.textContent = "10:00AM - 11:30AM";
    fri2.textContent = "2:00PM - 3:30PM";
};