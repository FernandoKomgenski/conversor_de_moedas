function ConverterE() {
  var element2 = document.getElementById("valor");
  var valor = element2.value;
  var valorbit = parseFloat(valor);
  var valordol = 0.00004682 * valorbit;
  console.log(valordol);
  var final = document.getElementById("valorConvertido");
  var convertido = "o resultado em bitcoin é BTC " + valordol;
  final.innerHTML = convertido;
}
function Converter() {
  var element = document.getElementById("valor");
  var valor = element.value;
  var valordol = parseFloat(valor);
  var valorEmReal = valordol * 5.25;
  console.log(valorEmReal);
  var valorfinal = document.getElementById("valorConvertido");
  var valorConvertido = "o resultado em real é R$  " + valorEmReal;
  valorfinal.innerHTML = valorConvertido;
}
