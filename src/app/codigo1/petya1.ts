export function petya1(string1, string2){

	var cadenaUno = string1.toLowerCase();
	var cadenaDos = string2.toLowerCase();
	var compara = cadenaUno.localeCompare(cadenaDos);

	return compara;
		
}