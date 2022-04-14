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

function mySleepFunction(delayTime) {
	return new Promise(resolve => setTimeout(resolve, delayTime + Math.floor(Math.random()*100)));
}

async function get_modify(){
	const modify = Math.floor(Math.random()*50);
	console.log(100 + modify)
}
