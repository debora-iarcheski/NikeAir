let body = document.querySelector("body")
let imagemTenis = document.querySelector(".tenis")


function clicado(cor, imagem) {
    imagemTenis.classList.add("troca-efeito")

    body.style.backgroundColor = cor


    //contador de tempo
    setTimeout(() => {
        imagemTenis.src = imagem
        imagemTenis.classList.remove("troca-efeito")
    }, 500);

    // 1000 milisegundos = 1 segundo



}