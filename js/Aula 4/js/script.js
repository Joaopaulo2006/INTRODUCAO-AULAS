function Rest(){

    const mensagem = document.getElementById("msg").value ;
    const n = document.getElementById("nmsg").value ;
    const containerMsg = document.getElementById("rspmsg");

    var txt = "";

    for(let i = 0; i<n; i++){
        console.log(mensagem);
        txt = txt + mensagem + "<br>";
    }
    containerMsg.innerHTML = txt;


}