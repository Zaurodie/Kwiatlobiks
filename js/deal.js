function peselCheck(pesel)
{
	if( ( pesel < 10000000000 ) || ( pesel > 99999999999 ) )
		return false;
	else 
	{
		let tab = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];	
	
		let suma = 0, m, r = 0;
    	for (let i = 0; i < 10; i++){
        	suma += pesel[i] * tab[i];
		}

   		m = suma % 10;
    	if (m > 0)
        	r = 10 - m;

		if (r == pesel[10])
			return true;
		else
			return false;
	}
}

function weryfikacjaZgloszenia()
{
	let pesel = document.getElementById("pesel").value;

	let poprawnosc = peselCheck(pesel);
	
	if(poprawnosc)
		document.getElementById('sukces').style.visibility = "visible";
	else 
		document.getElementById('error').style.visibility = "visible";
}

function fix()
{
	document.getElementById("shaker").classList.add("shake");
	document.getElementById("hm").classList.add("I_forgot", "noticeMe");

	//document.getElementById("I_forgot").classList.add("noticeMe");



	document.getElementById("troll").style.display = 'block';
	document.getElementById("sender_button").style.display = 'none';
	document.getElementById("sender_submit").style.display = 'inline-block';
	
	document.getElementById("troll").classList.add("visibility_anim");
	document.getElementById("hm").style.display = 'block';}

function tak()
{
	document.getElementById('error').style.visibility = "hidden";
}