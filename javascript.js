// Announce Open/Close based on current day and time
function checkOpenStatus () {
    var d = new Date();
    var date = d.getHours();
    var day = d.getDay();
    if (date > 8.9 && date < 17 && day != 0) {
        y = "<span style=\"color:black\">Come in, we're awesome!</span>";
    } else {
        y = "<span style=\"color:#fc4b1c\">Sorry we're closed.</span>";
    }
    console.log(y);
    document.getElementById("open-close").innerHTML = y;
    setTimeout(checkOpenStatus,15000);
};

checkOpenStatus();

// Live Updating Clock

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// Close Early Button
document.getElementById("button").addEventListener("click", function() {
    var ndate = new Date();
    var nday = ndate.getDay();
    var nh = ndate.getHours();
    var nm = ndate.getMinutes();
    var ns = ndate.getSeconds();
    var current = nh + ":" + nm;
    document.getElementById("open-close").innerHTML = "Sorry, we're closed";
    nh = checkTime(nh);
    nm = checkTime(nm);
    ns =checkTime(ns);
    if ( (nday == 1) && (nh < 17.0) ){
        document.getElementById("1").innerHTML = current;
    } else if( (nday == 2) && (nh < 17.0) ){
        document.getElementById("2").innerHTML = current;
    } else if( (nday == 3) && (nh < 17.0) ){
        document.getElementById("3").innerHTML = current;
    } else if( (nday == 4) && (nh < 17.0) ){
        document.getElementById("4").innerHTML = current;
    } else if ( (nday == 5) && (nh < 17.0) ) 
        document.getElementById("5").innerHTML = current;
})