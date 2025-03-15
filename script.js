// Array of 35 random texts
const texts = [
    "O JA JEBIE...", "BRAK PRAWKA", "CEESIK?", "DARII SIE KOMPUTER PIERDOLI", "DEAD SERVER",
    "EMZO RAZ NA 43 DNI ROBOCZE", "INWAZJA PLEBSU", "JESTEŚ SYN/SYNEM", "KARKAC \"GRAMY W LETHALA?\"", "KARKAC PEDOFIL",
    "KOPCIUSZEK \"PEŻOT\"", "LIMAK (PRÓBUJE) MÓWI PO ANGIELSKU", "LIMAK 14H", "LIMAK DOSTAJE TURETA", "MARCEL GREMLIN",
    "MARCEL MA ZW", "MARCEL WYCHODZI Z PSEM", "MAZDA (NIE) DZIAŁA", "MEMY NA OGÓRNYM", "NIE MA W CO GRAĆ",
    "NOWA GRA ZAGRANA RAZ", "PJOTER PRZYCHODZI SIE POŻEGNAĆ", "PÓŁ WYPŁATY NA POKEMONY", "PSY KARKACA", "RADZYN KEBAB",
    "ROBAL", "SCHIZOFRENIA", "STACHU FEJK INFO", "SZEREGOWY KRĘTACZ", "TFT",
    "VIKTOR O KOLANOWSKIM", "VIKTOR PIWKO", "WIERTARA"
];

// Function to create the grid
// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Function to create the grid
function createGrid() {
    const gridContainer = document.getElementById('grid-container');

    // Shuffle the texts array
    const shuffledTexts = [...texts]; // Create a copy of the texts array
    shuffleArray(shuffledTexts);

    for (let i = 0; i < 25; i++) {
        // Create a tile
        const tile = document.createElement('div');
        tile.className = 'tile';

        // Assign "WYZWISKA" to the tile at index 13, otherwise use shuffled text
        const randomText = (i === 12) ? "WYZWISKA" : shuffledTexts[i < 12 ? i : i - 1];

        tile.textContent = randomText;

        // Add click event listener to the tile
        tile.addEventListener('click', function() {
            tile.classList.toggle('clicked'); // Toggle the 'clicked' class
        });

        // Append the tile to the grid container
        gridContainer.appendChild(tile);
    }
}

// Call the function to create the grid
createGrid();