let likes = 0;
let deslikes = 0;

function darLike() {

    likes++;

    document.getElementById("contadorLike").textContent = likes;

}

function darDeslike() {

    deslikes++;

    document.getElementById("contadorDeslike").textContent = deslikes;
}