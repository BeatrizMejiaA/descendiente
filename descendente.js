var num1 =0;
var num2 = 0;
var num3 = 0;
var numeros = [];

numeros[0] = parseInt(prompt("ingrese primer numero"));
numeros[1] = parseInt(prompt("ingrese segundo numero"));
numeros[2] = parseInt(prompt("ingrese tercer numero"));

num1=numeros[0];
num2=numeros[1];
num3=numeros[2];

if ( !(numeros[0] > numeros[1]) ) {
  numeros[0] = num2;
  numeros[1] = num1;
}

num1=numeros[0];
num2=numeros[1];
num3=numeros[2];

if ( !(numeros[0] > numeros[2]) ) {
  numeros[0] = num3;
  numeros[2] = num1;
}
num1=numeros[0];
num2=numeros[1];
num3=numeros[2];

if ( !(numeros[1] > numeros[2]) ) {
  numeros[1] = num3;
  numeros[2] = num2;

}

alert(numeros);
