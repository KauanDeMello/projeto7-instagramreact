import { useState } from "react"

function Post(props) {
    const {
            userName,
            userImage,
            contentImage,
            likedByImage,
            likedByText,
            initialLikesAmount,
            isSaved,
            isLiked,
    } = props

    // const isSaved = props.isSaved


    const [foiSalvo, setFoiSalvo] = useState(isSaved)
    const [recebeuLike, setRecebeuLike] = useState(isLiked)
    const [contador, setContador] = useState(initialLikesAmount)

    function mudaSalvo() {
        setFoiSalvo(!foiSalvo)
    }

    function mudaLike() {
        if (!recebeuLike) {
            setContador(contador + 1)
        } else {
            setContador(contador - 1)
        }
        setRecebeuLike(!recebeuLike)
    }

    function mudaLikeImagem() {
        if (!recebeuLike) {
            setRecebeuLike(true)
            setContador(contador + 1)
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={userImage} />
                    {userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onClick={mudaLikeImagem}>
                <img src={contentImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {recebeuLike ? (
                            <ion-icon onClick={mudaLike} class="liked" name="heart"></ion-icon>
                        ) : (
                            <ion-icon onClick={mudaLike} name="heart-outline"></ion-icon>
                        )}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {foiSalvo ? (
                            <ion-icon onClick={mudaSalvo} name="bookmark"></ion-icon>
                        ) : (
                            <ion-icon onClick={mudaSalvo} name="bookmark-outline"></ion-icon>
                        )}
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likedByImage} />
                    <div class="texto">
                        Curtido por <strong>{likedByText}</strong> e <strong>outras {contador} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        {
            userName: "meowed",
            userImage: "assets/img/meowed.svg",
            contentImage: "assets/img/gato-telefone.svg",
            likedByImage: "assets/img/respondeai.svg",
            likedByText: "respondeai",
            initialLikesAmount: 101523,
            isSaved: false,
            isLiked: false
        },
        {
            userName: "barked",
            userImage: "assets/img/barked.svg",
            contentImage: "assets/img/dog.svg",
            likedByImage: "assets/img/adorable_animals.svg",
            likedByText: "adorable_animals",
            initialLikesAmount: 200541,
            isSaved: true,
            isLiked: true
        }
    ]

    return (
        <div class="posts">
            {posts.map((p) => (
                <Post
                    userName={p.userName}
                    userImage={p.userImage}
                    contentImage={p.contentImage}
                    likedByImage={p.likedByImage}
                    likedByText={p.likedByText}
                    initialLikesAmount={p.initialLikesAmount}
                    isSaved={p.isSaved}
                    isLiked={p.isLiked}
                />
            ))}
        </div>
    )
}