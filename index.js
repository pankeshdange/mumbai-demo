// SPA Navigation
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
}

// Ticket Database (Dynamic)
let tickets = {
    "Free Darshan": 50,
    "₹300 Special Entry": 40,
    "₹500 VIP Darshan": 20
};

// Display Tickets
function loadTickets() {
    let ticketList = document.getElementById("ticketList");
    ticketList.innerHTML = "";

    for (let type in tickets) {
        let card = document.createElement("div");
        card.className = "ticketCard";
        card.innerHTML = `
            <h3>${type}</h3>
            <p>Available Slots: <b>${tickets[type]}</b></p>
        `;
        ticketList.appendChild(card);
    }
}

loadTickets();

// Booking Logic
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let persons = parseInt(document.getElementById("persons").value);
    let type = document.getElementById("ticketType").value;
    let date = document.getElementById("date").value;

    if (tickets[type] >= persons) {
        tickets[type] -= persons;

        document.getElementById("confirmation").innerText =
            `Booking Confirmed 🙏\n
             Name: ${name}
             Ticket: ${type}
             Persons: ${persons}
             Date: ${date}`;

        loadTickets();
        document.getElementById("bookingForm").reset();
    } else {
        document.getElementById("confirmation").innerText =
            "❌ Not enough tickets available!";
    }
});
