function weryfikacja()
{
	let poprawnosc = false;

	let pesel = document.getElementById("pesel").value;

	if( ( pesel < 10000000000 ) || ( pesel > 99999999999 ) )
		document.getElementById('error').style.visibility = "visible";
	else 
	{
		let tab = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];	
		//console.log(pesel[1]);
	
		let suma = 0, m, r = 0;
    	for (let i = 0; i < 10; i++){
        	suma += pesel[i] * tab[i];
		}

		//console.log(suma);
   		m = suma % 10;
    	if (m > 0)
        	r = 10 - m;

    	if (r == pesel[10])// poprawnosc = true;
		{
			document.getElementById('sukces').style.visibility = "visible";
			setTimeout("lag()", 1000);
		}
		else 
			document.getElementById('error').style.visibility = "visible";
	}


    return poprawnosc;
}
function lag()
{
	//while(true) 
		console.log(1);	
}
function tak()
{
	document.getElementById('error').style.visibility = "hidden";
	
}