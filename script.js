const animeImage = document.getElementById("anime-image");
const generateButton = document.getElementById("generate-button");
const genderSelect = document.getElementById("gender-select");

const randomAnimeUrls = [
    "https://via.placeholder.com/300?text=Random",
    "https://via.placeholder.com/300?text=Random",
    "https://via.placeholder.com/300?text=Random"
    // Adicione mais URLs de imagens aleatórias aqui
];

const maleAnimeUrls = [
    "https://via.placeholder.com/300?text=Male",
    "https://via.placeholder.com/300?text=Male",
    "https://via.placeholder.com/300?text=Male"
    // Adicione mais URLs de imagens de homens aqui
];

const femaleAnimeUrls = [
    "https://via.placeholder.com/300?text=Female",
    "https://via.placeholder.com/300?text=Female",
    "https://via.placeholder.com/300?text=Female"
    // Adicione mais URLs de imagens de mulheres aqui
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
        animeUrls = randomAnimeUrls;
    }

    if (animeUrls.length > 0) {
        const randomIndex = Math.floor(Math.random() * animeUrls.length);
        const randomImage = animeUrls[randomIndex];
        animeImage.src = randomImage;
    }
}

// Chame generateImage() uma vez para mostrar uma imagem aleatória quando a página carregar
generateImage();
