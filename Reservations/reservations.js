document.addEventListener('DOMContentLoaded', function() {
    const reservationsTable = document.getElementById('reservations');

    // Fetch reservations from local storage
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];

    reservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.transactionId}</td>
            <td>${reservation.bookingName}</td>
            <td>${reservation.adventure}</td>
            <td>${reservation.persons}</td>
            <td>${reservation.date}</td>
            <td>${reservation.price}</td>
            <td>${reservation.bookingTime}</td>
            <td class="table-action">
                <button onclick="visitAdventure('${reservation.transactionId}')">Visit Adventure</button>
            </td>
        `;
        reservationsTable.appendChild(row);
    });
});

function visitAdventure(transactionId) {
    // For this example, simply alert the transaction ID
    alert(`Visit adventure for transaction ID: ${transactionId}`);
}
