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

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();
document.getElementById("defaultOpen2").click();
