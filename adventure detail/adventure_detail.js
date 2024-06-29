// adventure_detail.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch adventure details from API or server
    fetchAdventureDetails();

    // Calculate total cost on persons input change
    document.getElementById('persons').addEventListener('input', calculateTotalCost);
});

function fetchAdventureDetails() {
    // Extract adventure id from URL
    const urlParams = new URLSearchParams(window.location.search);
    const adventureId = urlParams.get('id');

    // Mock data for demonstration
    const adventureDetails = {
        id: '1',
        name: "Niaboytown",
        subtitle: "This is a mind-blowing adventure!",
        description: "The Himalayas, known for their majestic peaks and serene beauty, offer one of the most exhilarating adventure experiences for trekking enthusiasts. Embarking on a trek through these awe-inspiring mountains is not just a journey through breathtaking landscapes but also a voyage of self-discovery and endurance. The adventure begins at the bustling town of Rishikesh, a gateway to the Garhwal Himalayas. After a brief acclimatization, trekkers set off towards the village of Gaurikund, the starting point of many Himalayan treks. As the journey progresses, the urban chaos gradually fades, replaced by the pristine beauty of nature. One of the most popular trekking routes is the Kedarnath trek, a challenging yet rewarding trail. The path winds through dense forests, crossing bubbling brooks and cascading waterfalls. The sound of chirping birds and rustling leaves provides a soothing soundtrack to the trek. As the altitude increases, the forest gives way to lush meadows adorned with a riot of wildflowers, a sight that is truly a feast for the eyes. At higher altitudes, the air becomes thinner and the temperatures drop, adding to the adventure. Trekkers often encounter patches of snow, even in the summer months, and the majestic peaks of the Himalayas loom ever closer, their snow-capped summits gleaming in the sunlight. The sense of achievement upon reaching the higher camps is immense, as the panoramic views of the surrounding mountains and valleys unfold. The trek to Kedarnath also offers a spiritual dimension. The Kedarnath Temple, nestled amidst the mountains, is one of the holiest shrines in Hinduism. Many trekkers undertake this journey not just for the adventure but also for the spiritual solace it provides. The ancient temple, with its intricate architecture and rich history, adds a sense of mysticism to the trek. Camping under the starlit Himalayan sky is an experience in itself. The clear, unpolluted skies offer a spectacular view of the Milky Way, a sight rarely seen in urban areas. The camaraderie around the campfire, sharing stories and experiences, creates bonds that last a lifetime. The simplicity of life in the mountains, away from the trappings of modern civilization, brings a profound sense of peace and contentment. This trek is a testament to the beauty and grandeur of nature, and an invitation to explore the wonders that lie beyond the ordinary.",
        pricePerHead: 4003,
        images: [
            "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_22/635354/301320.jpg",
            "https://www.cogwild.com/wp-content/uploads/2022/12/Camping_Cog_4000p-95.jpg.webp",
            "https://www.adventurush.com/wp-content/uploads/2022/07/4-16.jpg"
        ]
    };

    // Update DOM with adventure details
    document.getElementById('adventure-name').textContent = adventureDetails.name;
    document.getElementById('adventure-subtitle').textContent = adventureDetails.subtitle;
    document.getElementById('adventure-description').textContent = adventureDetails.description;
    document.getElementById('price-per-head').textContent = adventureDetails.pricePerHead;

    // Update carousel images
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';
    adventureDetails.images.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="...">`;
        carouselInner.appendChild(carouselItem);
    });

    calculateTotalCost();
}

function calculateTotalCost() {
    const pricePerHead = parseInt(document.getElementById('price-per-head').textContent, 10);
    const persons = parseInt(document.getElementById('persons').value, 10);
    const totalCost = pricePerHead * persons;
    document.getElementById('total-cost').textContent = totalCost;
}



document.addEventListener('DOMContentLoaded', function() {
    const reserveButton = document.getElementById('reserve-button');
    const form = document.getElementById('reservation-form');
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const personsInput = document.getElementById('persons');
    const totalPriceElement = document.getElementById('total');

    // Calculate the total price based on the number of persons
    personsInput.addEventListener('input', function() {
        const pricePerHead = 4003;
        const total = pricePerHead * parseInt(personsInput.value);
        totalPriceElement.textContent = total;
    });

    // Handle the reserve button click
    reserveButton.addEventListener('click', function() {
        const name = nameInput.value;
        const date = dateInput.value;
        const persons = personsInput.value;

        if (name && date && persons) {
            // Save reservation data (this could be to a server or local storage)
            const reservation = {
                transactionId: Math.random().toString(36).substr(2, 9), // Random ID for the example
                bookingName: name,
                adventure: "Niaboytown", // Example adventure name
                persons: persons,
                date: date,
                price: 4003 * persons, // Example price calculation
                bookingTime: new Date().toLocaleString()
            };

            // For this example, we'll use localStorage
            let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
            reservations.push(reservation);
            localStorage.setItem('reservations', JSON.stringify(reservations));

            // Redirect to the reservations page
            window.location.href = '../Reservations/reservations.html';
        } else {
            alert("Please fill in all the fields.");
        }
    });
});




