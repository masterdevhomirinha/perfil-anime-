const animeImage = document.getElementById("anime-image");
const generateButton = document.getElementById("generate-button");
const genderSelect = document.getElementById("gender-select");

const maleAnimeUrls = [
    "https://example.com/male_anime_1.jpg",
    "https://example.com/male_anime_2.jpg",
    // Adicione mais URLs de imagens de anime masculino aqui
];

const femaleAnimeUrls = [
    "https://example.com/female_anime_1.jpg",
    "https://example.com/female_anime_2.jpg",
    // Adicione mais URLs de imagens de anime feminino aqui
];

generateButton.addEventListener("click", generateImage);

function generateImage() {
    const selectedGender = genderSelect.value;

    let animeUrls = [];
    if (selectedGender === "male") {
        animeUrls = maleAnimeUrls;
    } else if (selectedGender === "female") {
        animeUrls = femaleAnimeUrls;
    } else {
        // Se a opção "Aleatório" for selecionada, misture as URLs de meninos e meninas
        animeUrls = maleAnimeUrls.concat(femaleAnimeUrls);
    }

    if (animeUrls.length > 0) {
        const randomIndex = Math.floor(Math.random() * animeUrls.length);
        const randomImage = animeUrls[randomIndex];
        animeImage.src = randomImage;
    }
}

// Chame generateImage() uma vez para mostrar uma imagem aleatória quando a página carregar
generateImage();
