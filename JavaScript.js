
let string = "1";
let number = 1;
if (parseInt(string) === number){
  	// STRING AND NUMBER MATCHES
}
if (string == number){
  // STRING AND NUMBER MATCHES ALSO BECAUSE == instead of ===, means it won't compare datasets, only the content
}
function haveSameType(a,b) {
  return (a instanceof Array && b instanceof Array) ||
    (a === null && b === null) ||
    (typeof a === typeof b && 
     b !== null && 
     a !== null &&
     ! (a instanceof Array) &&
     ! (b instanceof Array)
    );
}
function Enviar() { 
    var nome = document.getElementById("nomeid"); 

    if (nome.value != "") { 
    alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso'); 
    }
    else if(nome.value == Int){
        alert('Inválido. NOME NÃO PODE SER NÚMEROS');
    }
}