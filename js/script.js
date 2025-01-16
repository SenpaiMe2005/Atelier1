// Openingsuren data
const arrOpeningsurenMogelijkheid2 = [
    { dag: "maandag", deuren: [{ open: "08:00", sluit: "12:00" }, { open: "13:00", sluit: "18:00" }] },
    { dag: "dinsdag", deuren: [{ open: "08:00", sluit: "12:00" }, { open: "13:00", sluit: "18:00" }] },
    { dag: "woensdag", deuren: [{ open: "08:00", sluit: "12:00" }] },
    { dag: "donderdag", deuren: [{ open: "08:00", sluit: "12:00" }, { open: "13:00", sluit: "18:00" }] },
    { dag: "vrijdag", deuren: [{ open: "08:00", sluit: "12:00" }, { open: "13:00", sluit: "22:00" }] },
    { dag: "zaterdag", deuren: [] },
    { dag: "zondag", deuren: [] },
];

// Functie om openingsuren te genereren
function renderOpeningsuren() {
    const container = document.querySelector(".js-openingsuren"); // Selecteer de container
    const row = document.createElement("div"); // Maak een rij
    row.className = "row gy-3"; // Voeg Bootstrap-klassen toe

    // Itereer door de openingsuren array
    arrOpeningsurenMogelijkheid2.forEach((dagInfo) => {
        const col = document.createElement("div"); // Maak een kolom
        col.className = "col-md-4"; // Voeg Bootstrap-klassen toe

        // Genereer de inhoud voor elke dag
        const html = `
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${dagInfo.dag.charAt(0).toUpperCase() + dagInfo.dag.slice(1)}</h3>
                    ${
                        dagInfo.deuren.length > 0
                            ? dagInfo.deuren
                                  .map(
                                      (deur) =>
                                          `<p class="card-text">Open: ${deur.open} - ${deur.sluit}</p>`
                                  )
                                  .join("")
                            : "<p class='card-text text-muted'>Gesloten</p>"
                    }
                </div>
            </div>
        `;

        col.innerHTML = html; // Voeg de gegenereerde HTML toe aan de kolom
        row.appendChild(col); // Voeg de kolom toe aan de rij
    });

    container.appendChild(row); // Voeg de rij toe aan de container
}

// Openingsuren genereren bij pagina laden
document.addEventListener("DOMContentLoaded", renderOpeningsuren);


function rotateSVG(button) {
    const svgIcon = button.querySelector('.rotate-icon');
    svgIcon.classList.toggle('rotate-45');
}
