async function write(s){
	const writeable = document.getElementById("writeable");
	writeable.innerHTML = "$ ";
	const write_letter = async (c,wa) => {
		wa.innerHTML += c;
	}
	for (let i = 0; i < s.length; i++){
		let c = s.charAt(i);
		await mySleepFunction(100);
		write_letter(c, writeable);
	}
	writeable.innerHTML += " <span class='blinking-cursor'>|</span>"
		
}

async function write_append(s){
	const writeable = document.getElementById("writeable");
	writeable.innerHTML = writeable.innerHTML.split("<")[0];
	const write_letter = async (c,wa) => {
		wa.innerHTML += c;
	}
	for (let i = 0; i < s.length; i++){
		let c = s.charAt(i);
		await mySleepFunction(100);
		write_letter(c, writeable);
	}
	writeable.innerHTML += " <span class='blinking-cursor'>|</span>"
		
}

function mySleepFunction(delayTime) {
	return new Promise(resolve => setTimeout(resolve, delayTime + Math.floor(Math.random()*100)));
}

