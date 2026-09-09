function desenharLinhas() {

    const container =
        document.getElementById("mapa_mental");


    const linhas =
        container.querySelectorAll(".mm-line");


    linhas.forEach(function(linha) {

        linha.remove();

    });


    const centro =
        container.querySelector(".centro");


    const centroRect =
        centro.getBoundingClientRect();


    const containerRect =
        container.getBoundingClientRect();


    const centroX =
        centroRect.left -
        containerRect.left +
        centroRect.width / 2;


    const centroY =
        centroRect.top -
        containerRect.top +
        centroRect.height / 2;


    const nodes =
        container.querySelectorAll(".mapa_mental");


    nodes.forEach(function(node) {


        const nodeRect =
            node.getBoundingClientRect();


        let nodeX;


        if (nodeRect.left < centroRect.left) {

            nodeX =
                nodeRect.left -
                containerRect.left +
                nodeRect.width;

        } else {

            nodeX =
                nodeRect.left -
                containerRect.left;

        }


        const nodeY =
            nodeRect.top -
            containerRect.top +
            nodeRect.height / 2;


        const diferencaX =
            nodeX - centroX;


        const diferencaY =
            nodeY - centroY;


        const comprimento =
            Math.sqrt(
                diferencaX * diferencaX +
                diferencaY * diferencaY
            );


        const angulo =
            Math.atan2(
                diferencaY,
                diferencaX
            ) *
            180 /
            Math.PI;


        const linha =
            document.createElement("div");


        linha.className =
            "mm-line";


        linha.style.width =
            comprimento + "px";


        linha.style.left =
            centroX + "px";


        linha.style.top =
            centroY + "px";


        linha.style.transform =
            "rotate(" +
            angulo +
            "deg)";


        container.appendChild(linha);


    });

}


window.addEventListener(
    "load",
    desenharLinhas
);


window.addEventListener(
    "resize",
    desenharLinhas
);