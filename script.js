const generateButton = document.getElementById("generateButton");
const animeImage = document.getElementById("animeImage");
const downloadLink = document.getElementById("downloadLink");

generateButton.addEventListener("click", () => {
    fetch("https://api.waifu.pics/sfw/neko")
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            animeImage.src = imageUrl;
            animeImage.style.display = "block";
            downloadLink.href = imageUrl;
            downloadLink.style.display = "block";
        })
        .catch(error => console.error("Erro ao carregar a imagem:", error));
});
