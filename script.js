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
function createGrid() {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < 25; i++) {
        // Create a tile
        const tile = document.createElement('div');
        tile.className = 'tile';

        // Get a random text from the array
        const randomText = texts[Math.floor(Math.random() * texts.length)];
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