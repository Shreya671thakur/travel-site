let allAdventures = [];

async function init() {
    // Extract city id from URL
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    // Fetches list of all adventures for the given city
    allAdventures = await fetchAdventures(city);

    // Updates the DOM with the adventures
    renderAdventures(allAdventures);

    // Event listeners for filters
    document.getElementById('durationFilter').addEventListener('change', filterAdventures);
    document.getElementById('categoryFilter').addEventListener('change', filterAdventures);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
}

function renderAdventures(adventures) {
    // Clear existing adventures
    const adventuresContainer = document.getElementById('adventures');
    adventuresContainer.innerHTML = '';

    // Add adventures to the DOM
    adventures.forEach((adventure) => {
        addAdventureToDOM(adventure.id, adventure.name, adventure.costPerHead, adventure.duration, adventure.category, adventure.image);
    });
}

function addAdventureToDOM(id, name, cost, duration, category, image) {
    // Create the adventure card
    const adventureCard = document.createElement('div');
    adventureCard.className = 'col-sm-6 col-lg-3 mb-4';

    // Create the inner HTML of the adventure card
    adventureCard.innerHTML = `<a href="../adventure detail/adventure_detail.html?id=${id}" id="${id}">
        <div class="adventure-card">
            <div class="adventure-category">${category}</div>
            <img src="${image}" class="img-fluid" alt="${name}">
            <div class="adventure-info">
                <div class="adventure-name">${name}</div>
                <p>₹${cost}</p>
                <p>Duration: ${duration} Hours</p>
            </div>
        </div>
    </a>`;

    // Append the adventure card to the adventures div
    document.getElementById('adventures').appendChild(adventureCard);
}


// Mock fetchAdventures function for demonstration
async function fetchAdventures(city) {
    return [
        { id: '1', name: 'Niaboytown', costPerHead: 4003, duration: 6, category: 'Party', image: 'https://i.pinimg.com/originals/81/ba/06/81ba063483382d675804b5ddacc39843.png' },
        { id: '2', name: 'Fort Sionnann', costPerHead: 2686, duration: 9, category: 'Cycling', image: 'https://s3.india.com/travel/wp-content/uploads/2015/08/Road-to-Leh-in-winter.jpg' },
        { id: '3', name: 'Wooddaux', costPerHead: 3715, duration: 8, category: 'Beaches', image: 'https://iowareview.org/sites/iowareview.org/files/styles/large/public/10.png?itok=q5IC5eyo' },
        { id: '4', name: 'Bageorge With Nonshi Harbour', costPerHead: 3184, duration: 3, category: 'Cycling', image: 'https://mercuryautotransport.com/wp-content/uploads/2020/12/travel-72870_1280-1024x678.jpg' },
        { id: '5', name: 'Stonelumhawk', costPerHead: 4143, duration: 17, category: 'Hillside', image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/89/1a/9d/cliff-lake.jpg' },
        { id: '6', name: 'La Annrcast', costPerHead: 3712, duration: 7, category: 'Beaches', image: 'https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2021/7/12/maldives-1.jpg' },
        { id: '7', name: 'Fort Shibluff', costPerHead: 795, duration: 19, category: 'Hillside', image: 'https://www.themandagies.com/wp-content/uploads/2022/03/Hoh-Rainforest-Olympic-National-Park-The-Mandagies-62-1001x1500.jpg' },
        { id: '8', name: 'Shiwood', costPerHead: 1352, duration: 17, category: 'Cycling', image: 'https://static.toiimg.com/thumb/67160903/ladakh-travel.jpg?width=1200&height=900' },
    ];
}

function filterAdventures() {
    const durationFilter = document.getElementById('durationFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;

    let filteredAdventures = allAdventures;

    // Filter by duration
    if (durationFilter) {
        const [min, max] = durationFilter.split('-').map(Number);
        filteredAdventures = filteredAdventures.filter(adventure => {
            if (max) {
                return adventure.duration >= min && adventure.duration <= max;
            } else {
                return adventure.duration >= min;
            }
        });
    }

    // Filter by category
    if (categoryFilter) {
        filteredAdventures = filteredAdventures.filter(adventure => adventure.category === categoryFilter);
    }

    // Render filtered adventures
    renderAdventures(filteredAdventures);
}

function clearFilters() {
    document.getElementById('durationFilter').value = '';
    document.getElementById('categoryFilter').value = '';
    renderAdventures(allAdventures);
}


// Initialize the page
init();
