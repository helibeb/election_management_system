document.addEventListener("DOMContentLoaded", function () {
    const pollingTableBody = document.querySelector("#pollingTable tbody");
    const pollingForm = document.querySelector("#pollingForm");

    // Sample polling station data (Replace this with actual data from a database/API)
    let pollingStations = [
        { id: 1, name: "Downtown Center", address: "456 Elm St", capacity: 500 },
        { id: 2, name: "Northside Hall", address: "789 Maple St", capacity: 350 }
    ];

    // Function to render polling stations
    function renderPollingStations() {
        pollingTableBody.innerHTML = ""; // Clear table before rendering

        pollingStations.forEach(station => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${station.id}</td>
                <td>${station.name}</td>
                <td>${station.address}</td>
                <td>${station.capacity}</td>
            `;
            pollingTableBody.appendChild(row);
        });
    }

    // Handle form submission to add new polling station
    pollingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const id = document.querySelector("#pollingId").value;
        const name = document.querySelector("#pollingName").value;
        const address = document.querySelector("#pollingAddress").value;
        const capacity = document.querySelector("#pollingCapacity").value;

        if (id && name && address && capacity) {
            pollingStations.push({
                id: parseInt(id),
                name,
                address,
                capacity: parseInt(capacity)
            });

            renderPollingStations(); // Refresh table
            pollingForm.reset(); // Clear form fields
        }
    });

    // Initial render
    renderPollingStations();
});
