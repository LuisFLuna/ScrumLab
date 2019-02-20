export function stones(cuantity, stoneString){

	var cuantos = cuantity; 
	var cadena = stoneString;
	var contador = 0;
	var auxiliar = cadena.charAt(0);

	for (var i = 1 ; i < cuantity; i++){


		if( auxiliar == cadena.charAt(i)){

			contador++;

		}else{

			auxiliar = cadena.charAt(i);

		}
	}

	

	return contador;
		
}