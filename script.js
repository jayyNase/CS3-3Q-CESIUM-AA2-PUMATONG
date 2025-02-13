function popGrowth(){
	let inPop = prompt('Enter your value for initial population growth:');
	let growRate = prompt('Enter the value for growth rate (between (0-1):');
	let time = prompt('Enter your time (in hours):');
	
	let finPop = Math.round(inPop * Math.exp(growRate * time));
	
	 
	let monsterLoc = prompt('Where is the monsters located?');
	let monsName = prompt('What is the monsters names?');
	
document.getElementById('result').innerHTML = ('After ' + time + ' hours, the population of ' + monsName.toUpperCase() + ', in ,' + monsterLoc.toUpperCase() + ' increased to ' + finPop  + '!!');

} 