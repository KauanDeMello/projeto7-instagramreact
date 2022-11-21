import { useState } from "react"

export default function Usuario({imagem, username, nome}) {
    const [nomeDoUsuario, setNomeDoUsuario] = useState(nome)
    const [fotoAtual, setFotoAtual] = useState(imagem)

    function mudaNome(){
        const novoNome = prompt("Insira o novo nome")
        if(!novoNome){
            alert("Escreva um nome válido")
        } else {
            setNomeDoUsuario(novoNome)
        }
    }

    function mudaFoto(){
        const novaFoto = prompt("Insira o link da sua foto")
        if(!novaFoto){
            alert("Escreva um link válido")
        } else {
            setFotoAtual(novaFoto)
        }

    }

    return (
        <div class="usuario">
            <img onClick={mudaFoto} src={fotoAtual} />
            <div class="texto">
                <strong>{username}</strong>
                <span>
                    {nomeDoUsuario}
                    <ion-icon onClick={mudaNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}