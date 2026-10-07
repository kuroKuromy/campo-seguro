function enviarReacao(conteudoId, tipo) {

    fetch(`/api/reacoes/${conteudoId}?tipo=${tipo}`, {
        method: 'POST'
    })
    .then(response => {

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        return response.json();
    })
    .then(dados => {

        document.getElementById("contadorLike").textContent =
            dados.totalLikes;

        document.getElementById("contadorDeslike").textContent =
            dados.totalDislikes;

    })
    .catch(error => {

        console.error("Erro ao salvar voto:", error);
        alert("Não foi possível registrar seu voto.");

    });
}