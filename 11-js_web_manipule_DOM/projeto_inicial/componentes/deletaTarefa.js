const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    console.log(botaoDeleta)

    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()
    console.log(tarefaCompleta)

    return botaoDeleta
}

export default BotaoDeleta