async function init() {
    // Fetches list of all cities along with their images and description
    let cities = await fetchCities();

    // Updates the DOM with the cities
    cities.forEach((city) => {
        addCityToDOM(city.id, city.city, city.description, city.image);
    });

    // Add event listeners to city cards
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('click', function() {
            const cityId = this.getAttribute('data-id');
            window.location.href = `adventures/adventures.html?city=${cityId}`; // Adjusted path to adventure page
        });
    });
}

function addCityToDOM(id, city, description, image) {
    // Create the city card
    const cityCard = document.createElement('div');
    cityCard.className = 'col-sm-6 col-lg-3 mb-4';

    // Create the inner HTML of the city card
    cityCard.innerHTML = `
        <a href="adventures/adventures.html?city=${id}" id="${id}" class="city-card">
            <div class="city-card">
                <img src="${image}" class="img-fluid" alt="${city}">
                <div class="city-info">
                    <div class="city-name">${city}</div>
                    <p>${description}</p>
                </div>
            </div>
        </a>
    `;

    // Append the city card to the data div
    document.getElementById('data').appendChild(cityCard);
}


// Mock fetchCities function for demonstration
async function fetchCities() {
    return [
        { id: 'london', city: 'London', description: '58+ places', image: 'https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london-1068x641.jpg' },
        { id: 'amsterdam', city: 'Amsterdam', description: '210+ places', image: 'https://i.pinimg.com/originals/11/12/e3/1112e3e3bed8fa36e75d04cb8cb3f1ec.jpg' },
        { id: 'kerala', city: 'Kerala', description: '150+ places', image: 'https://i.pinimg.com/originals/c9/8f/0e/c98f0e727fa87a1872080608c7a3269e.jpg' },
        { id: 'delhi', city: 'Delhi', description: '185+ places', image: 'https://hips.hearstapps.com/hmg-prod/images/delhi-lotus-temple-1486142341.jpg' },
        { id: 'jodhpur', city: 'Jodhpur', description: '250+ places', image: 'https://live.staticflickr.com/2570/3837577385_390906c68f_z.jpg' },
        { id: 'tokyo', city: 'Tokyo', description: '180+ places', image: 'https://cdn.shopify.com/s/files/1/1083/2612/files/2-shutterstock_1582025065_480x480.jpg?v=1709723405' },
        { id: 'singapore', city: 'Singapore', description: '75+ places', image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?cs=srgb&dl=pexels-kin-pastor-251088-777059.jpg&fm=jpg' },
        { id: 'switzerland', city: 'Switzerland', description: '150+ places', image: 'https://kof.ethz.ch/en/news-and-events/kof-news0/2022/10/Domestic-tourists-guarantee-success-of-Switzerlands-winter-season/_jcr_content/par/lead/imagePanorama.imageformat.carousel.1233128316.jpg' },
    ];
}

// Initialize the script
init();
