function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const Lowercase_s1 = s1.toLowerCase();
	const Lowercase_s2 = s2.toLowerCase(); 

	return Lowercase_s1.indexOf(Lowercase_s2);  
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
