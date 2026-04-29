window.addEventListener("Resize", olhar_largura);
const botao = document.getElementById("botao-ok");
botao.addEventListener("click", exibir_mensagem)
const paragrafo = document.getElementById("paragrafo");
console.log(paragrafo);
botao.addEventListener("click", exibir_mensagem);

function olhar_Largura()

{
    if(innerHeight < 200){
        botao.classList.add("inactivo")
    }else{
        botao.classList.remove("inativo")
        botao.classList.add("inativo")
        botao.classList.add("ativo")
        Console.log(botao)
    }
    
}

function exibir_mensagem()
{
    paragrafo.textContent = "Olá, mundo!";
}
paragrafo.style.backgroundColor = "#ffd000ff";
paragrafo.style.fontSize = "2 rem"
console.log(paragrafo)