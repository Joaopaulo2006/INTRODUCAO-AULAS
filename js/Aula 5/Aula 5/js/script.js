function calcular() {
    const x = parseInt(document.getElementById("iptX").value);
    const y = parseInt(document.getElementById("iptY").value);
    var txt = "";
    if (x >= y) {
        txt = "Faixa de texto inválida, tente novamente.";
    }
    var c = "";
    for (let k = x; k <= y; k++) {
        if (k % 2 == 0) {
            c = "Par";
        }
        else {
            c = "Impar";
        }
        txt += "<span class= '" + c + "'>" + k + "&nbsp;" + "</span>";
    }
    console.log(txt);
    document.getElementById("spnRes").innerHTML = txt;
}
function limpar() {
    document.getElementById("iptX").value = document.getElementById("iptY").value =
        document.getElementById("spnRes").innerHTML = document.querySelector("#spnCondNumX").innerHTML =
        document.querySelector("#spnCondNumY").innerHTML = "";
    document.getElementById("iptX").className = document.getElementById("iptY").className = "iptDefault"
}
function procuraX() {
    const iptX = document.getElementById("iptX");
    const x = iptX.value;
    const spnCondNum = document.getElementById("spnCondNumX");

    spnCondNum.textContent = "";
    if (x % 2 == 0) {
        iptX.className = "iptPar";
        spnCondNum.textContent += "PAR";
    }
    else {
        iptX.className = "iptImpar";
        spnCondNum.textContent += "IMPAR";
    }
}
function procuraY() {
    const iptY = document.getElementById("iptY");
    const y = iptY.value;
    const spnCondNum = document.getElementById("spnCondNumY");

    spnCondNum.textContent = "";
    if (y % 2 == 0) {
        iptY.className = " iptPar ";
        spnCondNum.textContent += " PAR ";
    }
    else {
        iptY.className = " iptImpar ";
        spnCondNum.textContent += " IMPAR ";
    }
}
