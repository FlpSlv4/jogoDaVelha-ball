document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })


})

function handleClick(event){

        

    let square = event.target
    let position = square.id;
    let jog1 = playerTime[0];
    let jog2 = playerTime[1];

    if(handleMove(position)){
        updateSquares();

        setTimeout(() => {

             alert("O Jogo Acabou - O vencedor foi o jogador " + playerTime)

        }, 30);

        
    };
    
    updateSquares();

}


function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
       let symbol = board[position]

       if(symbol != ""){
           square.innerHTML = `<div class='${symbol}'><div>`
       }
    })

}