function calcular() {
    const x = parseInt(document.getElementById("iptX").value);
    const y = parseInt(document.getElementById("iptY").value);

    var txt = "";


    if (x >= y) {
        txt = "Faixa de valores inválida. Tente novamente.";
    }
    var c = "";
    for(let k = x; k <= y; k++) {
        if(k % 2 == 0) {
            c = "Par";
        }
        else {
            c = "Impar";
        }
        txt += "<span class='" + c + "'>" + k + "&nbsp;" + "</span>";
    }
    console.log(txt);
    document.getElementById("spnRes").innerHTML = txt;
}
function limpar() {
    document.getElementById("iptX").value = document.getElementById("iptY").value = 
    document.getElementById("spnRes").textContent = document.getElementById("spnCondNumX").textContent = 
    document.getElementById("spnCondNumY").textContent = "";
    document.getElementById("iptX").className = document.getElementById("iptY").className = 
    "iptDefault";
}
function validaX(){
    const iptX = document.getElementById("iptX");
    const x = parseInt(iptX.value);
    const spnCondNumX = document.getElementById("spnCondNumX");

    if (x % 2 == 0) {

        iptX.className = "iptPar";
        spnCondNumX.innerHTML = "PAR";
    }
    else {

        iptX.className = "iptImpar";
        spnCondNumX.innerHTML = "IMPAR";
    }

}
function validaY(){
    const iptY = document.getElementById("iptY");
    const y = parseInt(iptY.value);
    const spnCondNumY = document.getElementById("spnCondNumY");

    if (y % 2 == 0) {

        iptY.className = "iptPar";
        spnCondNumY.innerHTML = "PAR";
    }
    else {

        iptY.className = "iptImpar";
        spnCondNumY.innerHTML = "IMPAR";
    }

}