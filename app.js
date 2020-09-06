const $climate = document.getElementById("climate");
const $consumption = document.getElementById("consumption");
const $resources = document.getElementById("resources");
const $people = document.getElementById("people");
$climate.onclick = () => {
  document.body.style.backgroundImage =
    "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png ')";
  document.body.style.backgroundSize = "100% 100%";
  $climate.style.backgroundColor = "#2F80ED";
  $consumption.style.backgroundColor = "transparent";
  $resources.style.backgroundColor = "transparent";
  $people.style.backgroundColor = "transparent";
  document.getElementById("amount").innerHTML = "2,911,343,321";
  document.getElementById("cause").innerHTML="Tons of CO2 emitted in atmospere";
  document.getElementById("save").innerHTML="Do your bit! Save trees use renewable resource and preffer to travel green.";

};
$consumption.onclick = () => {
  document.body.style.backgroundImage =
    "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
  document.body.style.backgroundSize = "100% 100%";
  $consumption.style.backgroundColor = "#27AE60";
  $resources.style.backgroundColor = "transparent";
  $people.style.backgroundColor = "transparent";
  $climate.style.backgroundColor = "transparent";
  document.getElementById("amount").innerHTML="878,262,909";
  document.getElementById("cause").innerHTML="Tons of food lost or wasted";
  document.getElementById("save").innerHTML="Do your bit! Shop only what you need, eat only what you need always save left overs"
 
};
$resources.onclick = () => {
  document.body.style.backgroundImage =
    "url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
  document.body.style.backgroundSize = "100% 100%";
  $resources.style.backgroundColor = "#F2994A";
  $consumption.style.backgroundColor = "transparent";
  $people.style.backgroundColor = "transparent";
  $climate.style.backgroundColor = "transparent";
  document.getElementById("amount").innerHTML="347,822,203"
  document.getElementById("cause").innerHTML="Tons of minerals extracted from Earth"
  document.getElementById("save").innerHTML="Do your bit! Grow more trees and believe in 'Reduce, Reuse and Recycle"
};
$people.onclick = () => {
  document.body.style.backgroundImage =
    "url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')";
  document.body.style.backgroundSize = "100% 100%";
  $people.style.backgroundColor = "#EB5757";
  $consumption.style.backgroundColor = "transparent";
  $resources.style.backgroundColor = "transparent";
  $climate.style.backgroundColor = "transparent";
  document.getElementById("amount").innerHTML="822,773,598"
  document.getElementById("cause").innerHTML="Millions of people die from hunger"
  document.getElementById("save").innerHTML="Do your bit! Never waste food and always feed the needy"
};