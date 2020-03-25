// function break chain
function breakChain() {
  let chain = document.getElementById("chain");
  chain.innerHTML = "&#xf0c1;";

  //   function to break chain
  setTimeout(() => {
    chain.innerHTML = "&#xf127;";
  }, 1000);
}

// call animation
breakChain();

//call function every two seconds
setInterval(breakChain, 2000);

//battery charge animation
function chargeBattery() {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244";

  setTimeout(() => {
    battery.innerHTML = "&#xf243;";
  }, 1000);

  setTimeout(() => {
    battery.innerHTML = "&#xf242;";
  }, 2000);

  setTimeout(() => {
    battery.innerHTML = "&#xf241;";
  }, 3000);

  setTimeout(() => {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}
//call function chargebattery
chargeBattery();

//set interval
setInterval(chargeBattery, 5000);

//hourglass tip animation

function hourglassTip() {
  let hourglass = document.getElementById("hourglass");
  hourglass.innerHTML = "&#xf251;";

  setTimeout(() => {
    hourglass.innerHTML = "&#xf252;";
  }, 1000);

  setTimeout(() => {
    hourglass.innerHTML = "&#xf253;";
  }, 2000);
}
// call function
hourglassTip();
//set interval
setInterval(hourglassTip, 3000);
