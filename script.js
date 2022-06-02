document.body.addEventListener('keyup', (event)=>{ // Selecionei todos os elementos do HTML através do document.body e adicionei um observador de eventos.

    playSound(event.code.toLocaleLowerCase()) // Coloquei o código do evento "keyup" para letras minusculas

});

document.querySelector('.composer button').addEventListener('click', ()=>{ // Adicionado um evento de clique npo input
    let song = document.querySelector('#input').value

    if (song != '') {

        let songArray = song.split(''); 
        playComposition(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`) // criei uma template string para realizar uma concatenação do ID com a função 'sound' onde será reproduzido todos os sons dentro desse ID.

    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) { // Se for encontrado um elemento de áudio, será executada a função 'play()' ou seja, tocar
        audioElement.currentTime = 0 // Adicionei essa propriedade para toda vez que for tocado mais de uma tecla de forma simultanea o que foi clicado anteriormente irá voltar para o começo "0"
        audioElement.play()
    }

    if(keyElement) {  // Adicionei uma class do CSS para a exibição da cor ao pressionar e em seguida o tempo de remoção dessa class após clicar.
        keyElement.classList.add('active')
    
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)   
    }
}

function playComposition(songArray) {

    let wait = 0 // variável para zerar o tempo

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`) // no loop criei um timeout para ocorrer um intervalo de 250ms após o clique de uma tecla para sair o som, e não sair todoos ao mesmo tempo.
        }, wait)

        wait +=250  
    }
}