const input = document.getElementById("commentInput");

const button = document.getElementById("commentButton");

const commentList = document.getElementById("commentList");


function adicionarComentario() {

    const texto = input.value.trim();


    if (texto === "") {
        return;
    }


    const comentario = document.createElement("div");

    comentario.className = "comment";


    comentario.innerHTML = `

        <div class="avatar">
            EU
        </div>

        <div class="comment-body">

            <div class="name">
                Você
            </div>

            <div class="text">
                ${texto}
            </div>

        </div>

    `;


    commentList.appendChild(comentario);


    input.value = "";

}


button.addEventListener(
    "click",
    adicionarComentario
);


input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            adicionarComentario();

        }

    }
);