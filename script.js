
// Array to store safety alerts
let alerts = [
    {
        id: 1,
        title: "Broken Streetlight near Gate 2",
        category: "Infrastructure Issue",
        description: "The street light near Gate 2 is flickering and completely shuts off at night. Please take care when walking.",
        date: "18 Oct 2026"
    },
    {
        id: 2,
        title: "Night Patrol Frequency Increased",
        category: "Security Alert",
        description: "Local security guard rounds have been increased between 11 PM and 5 AM.",
        date: "19 Oct 2026"
    }
];

// Function to render alerts to the HTML page
function renderAlerts(alertsToDisplay) {
    const alertsList = document.getElementById("alertsList");
    alertsList.innerHTML = ""; // Clear existing contents

    if (alertsToDisplay.length === 0) {
        alertsList.innerHTML = "<p>No alerts found for this category.</p>";
        return;
    }

    alertsToDisplay.forEach(alert => {
        const card = document.createElement("div");
        card.classList.add("alert-card");

        card.innerHTML = `
            <span class="alert-tag">${alert.category}</span>
            <h3>${alert.title}</h3>
            <p>${alert.description}</p>
            <div class="alert-date">Posted on: ${alert.date}</div>
        `;

        alertsList.appendChild(card);
    });
}

// Function to handle form submission for new incident reports
document.getElementById("incidentForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const newAlert = {
        id: Date.now(),
        title: title,
        category: category,
        description: description,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    alerts.unshift(newAlert); // Add new alert to top of array
    renderAlerts(alerts);     // Refresh displayed alerts

    // Reset Form fields
    document.getElementById("incidentForm").reset();
    alert("Incident reported successfully on the board!");
});

// Function to filter alerts by category
function filterAlerts() {
    const selectedCategory = document.getElementById("filterCategory").value;

    if (selectedCategory === "All") {
        renderAlerts(alerts);
    } else {
        const filtered = alerts.filter(alert => alert.category === selectedCategory);
        renderAlerts(filtered);
    }
}

// Initial display when page loads
renderAlerts(alerts);