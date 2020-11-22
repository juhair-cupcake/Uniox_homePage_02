//Make the Schedule Dynamic
function openSchedule(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Make the Sponsors Section Dynamic
//Sponsors tab for
function showSponsors(evt, name) {
  //Make All link and logo inactive
  let tablinks = document.getElementsByClassName("sponsorsLink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  let tabInactive = document.getElementsByClassName("sponsorslogo");
  for (let i = 0; i < tabInactive.length; i++) {
    tabInactive[i].className = tabInactive[i].className.replace(" active", "");
  }

  //Make the selected logo active
  let tabcontent = document.getElementsByClassName(name);
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className += " active";
  }

  evt.currentTarget.className += " active";
}

//Slider
$(".testimonialSection-quote").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});

//Maiking A Counter
setInterval(secondUpdate, 1000);
let timeId = document.getElementById("fixedTime");
let timeString = timeId.getAttribute("data-count");
let fixedDate = new Date(timeString).getTime();
function secondUpdate() {
  let nowDate = new Date().getTime();
  var distance = fixedDate - nowDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("Days").innerHTML = days;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("Hours").innerHTML = hours;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("Minutes").innerHTML = minutes;

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("Seconds").innerHTML = seconds;

  console.log("lol");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();
document.getElementById("defaultOpen2").click();
