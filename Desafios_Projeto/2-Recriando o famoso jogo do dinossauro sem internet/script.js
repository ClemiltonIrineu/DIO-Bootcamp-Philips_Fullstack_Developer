const dino = document.querySelector(".dino");
const background = document.querySelector(".background")
let validjump = false;
let position = 0;

      //capturar entrada do teclado "spaco" e chamar funcao pular
function handleKeyUp(event) {
    if (event.keyCode === 32){
        if (!validjump){
        pular();
        }
    }
}

     //fazendo o dino pular
function pular(){
    validjump = true; //sinalizar que o dino esra pulando

    let intervaloPulo = setInterval(() => {
        //parada da subida
        if (position >= 150){
            clearInterval(intervaloPulo);
              descer();
        }else {
        //subindo
        position +=20;
        dino.style.bottom = position + "px";
        } }, 20);
     
    function descer(){
        let intervaloDescida = setInterval( () => {
           //parada da descida
            if (position <= 0){
                clearInterval(intervaloDescida);
                validjump = false;
            } else{
                //descendo 
                position -= 20;
                dino.style.bottom = position + "px";
        
            }}, 20);
    }
}


      //criando os cactos 
function createCactos(){
    const cactos = document.createElement("div");
    let cactosPosition = 1250;
    let radomTime = Math.random() * 6000;  //tempo aleatorio para os cactos surgirem

    cactos.classList.add("cactos");
    cactos.style.left = cactosPosition + 'px'; 
    background.appendChild(cactos);


    let movIntervalo = setInterval( () => {

        cactosPosition -=10;
        cactos.style.left = cactosPosition + 'px';    

            //quando o cacto sair da tela para de se mover(movIntervalo) e remove o filho cactos(removeChild)
        if (cactosPosition < -60){
            clearInterval(movIntervalo);
            background.removeChild(cactos);
                        
            //quando o cacto tocar no dino o cacto para de se mover(movIntervalo) e chama a class game-over
        }else if( cactosPosition > 0 && cactosPosition < 60 && position < 60){
            //game over
            clearInterval(movIntervalo);
            document.body.innerHTML = '<h1 class="game-over"> FIM DE JOGO </h1>';
        } 
        
        else {
            //faz o cacto se mover na tela
            cactosPosition -= 10;
            cactos.style.left = cactosPosition + 'px';   
        }
    }, 30)

        //chama a funcao de tempo em tempo de acordo com o randomTime
    setTimeout(createCactos, radomTime);
}

    createCactos();

document.addEventListener("keyup", handleKeyUp);



 
 
