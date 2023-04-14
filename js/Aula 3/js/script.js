function calcular(){
    const x = parseInt(document.getElementById("iptX").value);
    const y = parseInt(document.getElementById("iptY").value);

    const op = parseInt(document.getElementById("ipTop").value);

    console.log("x: " + x);
    console.log("y: " + y);
    console.log("Operação: " + op);
    
    var res;
    
    if (op == 1){
        res = x + y;
    }else if(op == 2){
        res = x - y;
    }else if(op == 3){
        res = x * y;
    }else if(op == 4){
        res = x / y;
    }else if(op == 5){
        if (x % y == 0){
            res = "x é divisivel por y";
        }else {
            res = "x não é divisivel por y";
        }
    }else{
        res = "Operação invalida";
    }

    document.getElementById("spRes").textContent = "Resultado: "+res;

    console.log(res);
}