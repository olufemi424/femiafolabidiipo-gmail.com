const countdown = document.querySelector(".countdown");

// set launch date
const launchDate = new Date("Nov 9, 2021 23:00:00").getTime();

//update every second
const dateCountDown = function() {
	// get todays day and time in milisec
	const now = new Date().getTime();

	//distance from now to the time
	const distance = launchDate - now;

	//time calculations
	// days
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	// hours
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	//minutes
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	// seconds
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	console.log(distance);

	//output time
	countdown.innerHTML = `<div>${days}<span> Day</span></div>
                        <div>${hours}<span> Hours</span></div>
                        <div>${minutes}<span> Minutes</span></div>
                        <div>${seconds}<span> Seconds</span></div>
                       `;

	if (distance < 0) {
		//stop countdown
		clearInterval(intv1);

		//style output
		countdown.style.color = "#17a2b8";
		countdown.innerHTML = "Launched";
	}
};

// run date countdown every second
const intv1 = setInterval(dateCountDown, 1000);
