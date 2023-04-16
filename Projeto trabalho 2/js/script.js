// function nome() {
//     const nom = document.getElementById("jogador").value;
//     var n = nom
//     document.getElementById("jogador").textContent = "Jogador: "+ n;
// }
// function pegaLetra(){
//     var ID = $(this).attr('data-id');
// likeBtn.addEventListener('click', () => {
//     console.log(dataId);
// })}
//     console.log(ID);
// const likeBtn = document.querySelector('.botaolike')
// document.getElementById("bancoLetras").textContent = banco + dataId;
// let banco = $('#bancoLetras').val();
// $("#bancoLetras").html(banco + dataId);
function handleClick(button) {
    let dataId = button.getAttribute('data-id');
    $("#pegaLetra").html(dataId);
    var pegaLetra = document.getElementById("pegaLetra");
    $("#bancoLetra").html(dataId + pegaLetra);
    var banco = document.getElementById("bancoLetra");
    let junta = banco + pegaLetra;
    const texto = pegaLetra.textContent;
    // $("#bancoLetra").val(banco + pegaLetra);

    junta.innerHTML = ("Letras: " + pegaLetra);

    // var txt = "";
    // for(let k = 0; k < banco ; k++){
    //     txt = txt + banco;
    // }
    console.log(banco);
}