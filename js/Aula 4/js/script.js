function Rest(){

    const mensagem = document.getElementById("msg").value ;
    const n = document.getElementById("nmsg").value ;
    const containerMsg = document.getElementById("rspmsg");
    
    var txt = "";

    for(let k = 0; k<n; k++){
        console.log(mensagem);
        txt = txt + mensagem + "<br>";
    }
    containerMsg.innerHTML = txt;
    

}