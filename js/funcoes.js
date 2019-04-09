function botao(num){
	var salvo = document.calc.visor.value;
	document.calc.visor.value = salvo + num;
}
function reset(){
	//Limpar visor//
	document.getElementById("visor").value = "";
	
}
function calcule(){
	//Calcular o visor//
	
	var resultado = 0;
	resultado = document.getElementById("visor").value;
	document.getElementById("visor").value = ""
	document.getElementById("visor").value = eval(resultado);
}