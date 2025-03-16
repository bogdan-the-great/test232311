const texts = [
    "O JA JEBIE...", "BRAK PRAWKA", "CEESIK?", "DARII SIE KOMPUTER PIERDOLI", "DEAD SERVER",
    "EMZO RAZ NA 43 DNI ROBOCZE", "INWAZJA PLEBSU", "JESTEŚ SYNEM", "KARKAC \"GRAMY W LETHALA?\"", "KARKAC KOCHA LOLI",
    "KOPCIUSZEK \"PEŻOT\" (CHODZI ŻE DUŻO KOPCI, GŁÓWNIE OLEJ)", "LIMAK PRÓBUJE MÓWIĆ PO ANGIELSKU", "LIMAK 14H",
    "LIMAK DOSTAJE TURETA", "LIMAK X PJOTUR", "MARCEL SIEDZI NA VC I SIE NIE ODZYWA",
    "MARCEL MA ZW", "MARCEL WYCHODZI Z PSEM", "MAZDA (NIE) DZIAŁA", "MEMY NA OGÓRNYM", "NIE MA W CO GRAĆ", "HAZARD",
    "NOWA GRA ZAGRANA RAZ", "PJOTER PRZYCHODZI SIE POŻEGNAĆ", "PÓŁ WYPŁATY NA *TĄ RZECZ*", "PSY KARKACA", "RADZYŃ KEBAB",
    "ROBAL", "SCHIZOFRENIA", "STACHU FEJK INFO", "SZEREGOWY KRĘTACZ", "TFT", "PIWKO", "WIERTARA", "WSZYSCY AFK"
];

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

    // Load saved state from localStorage
    const savedState = JSON.parse(localStorage.getItem('gridState')) || Array(25).fill({ text: "", clicked: false });

    // Check if we need to generate new random tiles
    if (!localStorage.getItem('randomTiles')) {
        // Shuffle the texts array and select 24 random texts
        const shuffledTexts = [...texts];
        shuffleArray(shuffledTexts);
        const randomTiles = shuffledTexts.slice(0, 24); // Get the first 24 texts

        // Save the random tiles to localStorage
        localStorage.setItem('randomTiles', JSON.stringify(randomTiles));
    }

    // Retrieve the random tiles from localStorage
    const randomTiles = JSON.parse(localStorage.getItem('randomTiles'));

    for (let i = 0; i < 25; i++) {
        // Create a tile
        const tile = document.createElement('div');
        tile.className = 'tile';

        // Assign "WYZWISKA" to the tile at index 12, otherwise use random text
        const randomText = (i === 12) ? "WYZWISKA" : randomTiles[i < 12 ? i : i - 1];
        tile.textContent = randomText;

        // Set the tile's clicked state based on saved state
        if (savedState[i].clicked) {
            tile.classList.add('clicked');
        }

        // Set the text in the saved state
        savedState[i].text = randomText;

        // Add click event listener to the tile
        tile.addEventListener('click', function() {
            tile.classList.toggle('clicked'); // Toggle the 'clicked' class

            // Update the saved state
            savedState[i].clicked = tile.classList.contains('clicked');
            localStorage.setItem('gridState', JSON.stringify(savedState));
        });

        // Append the tile to the grid container
        gridContainer.appendChild(tile);
    }
}

// Call the function to create the grid
createGrid();