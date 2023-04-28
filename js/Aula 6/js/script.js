const element = document.getElementById("btn");
element.addEventListener("click", myFunction);

function myFunction(){
    document.getElementById("demo").innerHTML = "Hello World";
    element.innerHTML = "Limpar";

    element.addEventListener("click", limpar);
}

function limpar() {
    document.getElementById("demo").innerHTML = "";
    const element = document.getElementById("btn");
}