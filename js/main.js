/* =========================================
   1. DATASETS (Mock Data)
   ========================================= */
const DESTINATIONS_DB = [
    { name: 'Taj Mahal, Agra', tag: 'Heritage', desc: 'The epitome of love and one of the Seven Wonders.', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600' },
    { name: 'Varanasi Ghats', tag: 'Spiritual', desc: 'The spiritual capital of India on the Ganges.', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600' },
    { name: 'Kerala Backwaters', tag: 'Nature', desc: 'Serene houseboat cruises in Alleppey.', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600' },
    { name: 'Goa Beaches', tag: 'Beaches', desc: 'Golden sands, nightlife, and Portuguese heritage.', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600' },
    { name: 'Ladakh', tag: 'Adventure', desc: 'High passes and stunning lakes.', img: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600' },
    { name: 'Jaipur', tag: 'Heritage', desc: 'The Pink City of forts and palaces.', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600' },
    { name: 'Udaipur', tag: 'Royalty', desc: 'City of Lakes and grand palaces.', img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600' },
    { name: 'Hampi', tag: 'History', desc: 'Ancient ruins of the Vijayanagara Empire.', img: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=600' },
    { name: 'Rishikesh', tag: 'Yoga', desc: 'Yoga capital and white water rafting.', img: 'https://images.unsplash.com/photo-1544211100-349c2f6d2037?q=80&w=600' },
    { name: 'Andaman', tag: 'Beaches', desc: 'Pristine blue waters and coral reefs.', img: 'https://images.unsplash.com/photo-1589982463990-2c77da72967f?q=80&w=600' },
    { name: 'Srinagar', tag: 'Nature', desc: 'Dal Lake and Mughal Gardens.', img: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=600' },
    { name: 'Darjeeling', tag: 'Hills', desc: 'Tea gardens and Kanchenjunga views.', img: 'https://images.unsplash.com/photo-1544634076-a90160ccdca7?q=80&w=600' },
    { name: 'Mysore', tag: 'Heritage', desc: 'The City of Palaces.', img: 'https://images.unsplash.com/photo-1590766940589-544420c919d3?q=80&w=600' },
    { name: 'Jaisalmer', tag: 'Desert', desc: 'The Golden City in the Thar Desert.', img: 'https://images.unsplash.com/photo-1577085785002-3c360a747971?q=80&w=600' },
    { name: 'Coorg', tag: 'Nature', desc: 'Coffee plantations and misty hills.', img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600' }
];

const HOTELS = [
    { id: 1, name: "The Taj Mahal Palace", location: "Mumbai", stars: 5, price: 25000, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", amenities: ["Pool", "Spa", "Sea View"] },
    { id: 2, name: "Oberoi Amarvilas", location: "Agra", stars: 5, price: 32000, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600", amenities: ["Taj View", "Luxury Dining"] },
    { id: 3, name: "Goa Beach Resort", location: "Goa", stars: 4, price: 8500, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600", amenities: ["Private Beach", "Bar"] },
    { id: 4, name: "Jaipur Haveli", location: "Jaipur", stars: 3, price: 4500, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600", amenities: ["Heritage", "Breakfast"] },
    { id: 5, name: "Munnar Tea Stay", location: "Kerala", stars: 4, price: 6200, img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600", amenities: ["Plantation Walk", "Fireplace"] },
    { id: 6, name: "Rishikesh River Raft", location: "Rishikesh", stars: 3, price: 3500, img: "https://images.unsplash.com/photo-1544211100-349c2f6d2037?w=600", amenities: ["River View", "Adventure"] },
    { id: 7, name: "Udaipur Lake Palace", location: "Udaipur", stars: 5, price: 45000, img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600", amenities: ["Lake View", "Royalty"] },
    { id: 8, name: "Ladakh Eco Camp", location: "Leh", stars: 3, price: 5500, img: "https://images.unsplash.com/photo-1518182170546-0766be6f5a56?w=600", amenities: ["Bonfire", "Stargazing"] }
];

const AIRLINES = [
    { name: 'IndiGo', code: '6E', icon: 'ph-paper-plane-tilt', color: '#0052cc' },
    { name: 'Air India', code: 'AI', icon: 'ph-airplane-tilt', color: '#ed1c24' },
    { name: 'Vistara', code: 'UK', icon: 'ph-star', color: '#592c6b' },
    { name: 'SpiceJet', code: 'SG', icon: 'ph-lightning', color: '#f7931e' },
    { name: 'Akasa Air', code: 'QP', icon: 'ph-bird', color: '#ff6600' }
];

const CITIES = [
    { code: 'DEL', name: 'New Delhi' }, { code: 'BOM', name: 'Mumbai' },
    { code: 'BLR', name: 'Bangalore' }, { code: 'MAA', name: 'Chennai' },
    { code: 'GOI', name: 'Goa' }, { code: 'JAI', name: 'Jaipur' },
    { code: 'COK', name: 'Kochi' }, { code: 'IXL', name: 'Leh' },
    { code: 'VNS', name: 'Varanasi' }
];

const OFFERS = { "HDFCSKY": 0.15, "STUDENT2024": 1000, "SKYNEW": 500, "MAHA20": 0.20 };

/* =========================================
   2. APP STATE & UTILS
   ========================================= */
let currentBookingData = null;
let bookingType = null;
let finalPrice = 0;

const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// --- INITIALIZE APP (Runs on every page load) ---
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
    checkLoginStatus();
    initializeDatePickers();
    
    // --- FLIGHTS PAGE LOGIC ---
    const flightContainer = document.getElementById('flight-results-container');
    if (flightContainer) {
        populateCityDropdowns();
        const searchForm = document.getElementById('flight-search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', handleFlightSearch);
        }
    }

    // --- HOTELS PAGE LOGIC ---
    const hotelContainer = document.getElementById('hotel-results-container');
    if (hotelContainer) {
        const hotelForm = document.getElementById('hotel-search-form');
        if (hotelForm) {
            hotelForm.addEventListener('submit', handleHotelSearch);
        }
        renderHotels(HOTELS); // Initial render
    }

    // --- EXPLORE PAGE LOGIC ---
    const exploreGrid = document.getElementById('explore-grid');
    if (exploreGrid) {
        renderDestinations();
    }

    // --- BOOKINGS PAGE LOGIC ---
    const bookingsContainer = document.getElementById('my-bookings-container');
    if (bookingsContainer) {
        loadMyBookings();
    }
});

/* =========================================
   3. NAVIGATION & UI
   ========================================= */
function setActiveLink() {
    const path = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check if href matches end of path
        if (path.indexOf(href) !== -1 && href !== 'index.html') {
            link.classList.add('active');
        } else if ((path.endsWith('/') || path.endsWith('index.html')) && href === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initializeDatePickers() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.min = today;
        if (!input.value) input.value = today;
    });
}

function populateCityDropdowns() {
    const selects = document.querySelectorAll('select.city-dropdown');
    selects.forEach(select => {
        if (select.options.length <= 1) { // Only populate if empty
            CITIES.forEach(city => {
                const opt = document.createElement('option');
                opt.value = city.code;
                opt.innerText = `${city.name} (${city.code})`;
                select.appendChild(opt);
            });
        }
    });
}

/* =========================================
   4. SEARCH FUNCTIONS
   ========================================= */
// --- FLIGHTS ---
function handleFlightSearch(e) {
    e.preventDefault();
    const container = document.getElementById('flight-results-container');
    const fromEl = document.getElementById('from');
    const toEl = document.getElementById('to');
    const dateEl = document.getElementById('date');

    // Validation
    if (fromEl.value === toEl.value) {
        alert("Source and Destination cannot be the same.");
        return;
    }

    container.innerHTML = '<div class="text-center section"><i class="ph ph-spinner ph-spin" style="font-size: 40px; color: var(--primary);"></i><p>Finding best flights...</p></div>';

    setTimeout(() => {
        container.innerHTML = '';
        const from = fromEl.options[fromEl.selectedIndex].text;
        const to = toEl.options[toEl.selectedIndex].text;
        
        // Generate 5 random results
        for(let i=0; i<5; i++) {
            const airline = getRandom(AIRLINES);
            const price = 3000 + Math.floor(Math.random() * 8000);
            const depH = Math.floor(Math.random() * 14) + 5;
            const depM = getRandom(['00', '15', '30']);
            const durationH = Math.floor(Math.random() * 3) + 1;
            
            const card = document.createElement('div');
            card.className = 'flight-card';
            card.innerHTML = `
                <div class="airline-info">
                    <div class="logo-circle" style="color:${airline.color}"><i class="ph-fill ${airline.icon}"></i></div>
                    <div><h4>${airline.name}</h4><small>${airline.code}-${Math.floor(Math.random()*900)+100}</small></div>
                </div>
                <div class="flight-route">
                    <div class="text-center"><h3>${depH}:${depM}</h3><small>${from.split('(')[0]}</small></div>
                    <div class="route-line"><i class="ph-fill ph-airplane"></i></div>
                    <div class="text-center"><h3>${depH+durationH}:${depM}</h3><small>${to.split('(')[0]}</small></div>
                </div>
                <div class="flight-price">
                    <h3>${formatCurrency(price)}</h3>
                    <button class="btn btn-primary btn-sm" onclick="window.initBooking('flight', {airline: '${airline.name}', price: ${price}, from: '${from.split('(')[0]}', to: '${to.split('(')[0]}', date: '${dateEl.value}', time: '${depH}:${depM}'})">Book</button>
                </div>
            `;
            container.appendChild(card);
        }
    }, 1000);
}

// --- HOTELS ---
function handleHotelSearch(e) {
    e.preventDefault();
    const cityInput = document.getElementById('hotel-city').value.toLowerCase();
    const filtered = HOTELS.filter(h => h.location.toLowerCase().includes(cityInput) || cityInput === "");
    renderHotels(filtered);
}

function renderHotels(list) {
    const container = document.getElementById('hotel-results-container');
    container.innerHTML = '';
    
    if (list.length === 0) {
        container.innerHTML = '<p class="text-center">No hotels found. Try "Goa" or "Mumbai".</p>';
        return;
    }

    list.forEach(h => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${h.img}')"><span class="card-badge">⭐ ${h.stars}</span></div>
            <div class="card-body">
                <div class="card-title">${h.name}</div>
                <div class="card-subtitle"><i class="ph-fill ph-map-pin"></i> ${h.location}</div>
                <div class="card-desc">${h.amenities.join(' • ')}</div>
                <div class="card-footer">
                    <div class="price-tag">${formatCurrency(h.price)}</div>
                    <button class="btn btn-primary btn-sm" onclick="window.initBooking('hotel', {name: '${h.name}', price: ${h.price}, location: '${h.location}'})">Book</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- EXPLORE ---
function renderDestinations() {
    const container = document.getElementById('explore-grid');
    container.innerHTML = '';
    DESTINATIONS_DB.forEach(d => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${d.img}')"><span class="card-badge">${d.tag}</span></div>
            <div class="card-body">
                <div class="card-title">${d.name}</div>
                <p class="card-desc">${d.desc}</p>
                <a href="flights.html" class="btn btn-secondary btn-sm btn-block">Plan Trip</a>
            </div>
        `;
        container.appendChild(card);
    });
}

/* =========================================
   5. BOOKING & MODAL LOGIC (Global Scope)
   ========================================= */
window.initBooking = function(type, data) {
    bookingType = type;
    currentBookingData = data;
    finalPrice = data.price;

    const modal = document.getElementById('booking-modal');
    if(!modal) return;

    document.getElementById('booking-form-container').classList.remove('hidden');
    document.getElementById('ticket-view').classList.add('hidden');
    
    // Set Summary
    let summaryHtml = '';
    if(type === 'flight') {
        summaryHtml = `<strong>${data.airline}</strong><br>${data.from} to ${data.to}<br>${data.date} at ${data.time}`;
    } else {
        summaryHtml = `<strong>${data.name}</strong><br>${data.location}<br>1 Night Stay`;
    }
    document.getElementById('booking-details').innerHTML = summaryHtml;
    document.getElementById('total-price').innerText = formatCurrency(finalPrice);
    
    modal.classList.add('active');
};

window.closeBookingModal = function() {
    document.getElementById('booking-modal').classList.remove('active');
};

window.applyCoupon = function() {
    const code = document.getElementById('coupon-input').value.toUpperCase().trim();
    const msg = document.getElementById('coupon-msg');
    
    if(OFFERS[code]) {
        let discount = OFFERS[code] < 1 ? currentBookingData.price * OFFERS[code] : OFFERS[code];
        finalPrice = Math.max(0, currentBookingData.price - discount);
        document.getElementById('total-price').innerText = formatCurrency(finalPrice);
        msg.innerHTML = `Success! Saved ${formatCurrency(discount)}`;
        msg.className = 'coupon-msg success';
    } else {
        msg.innerHTML = 'Invalid Coupon Code';
        msg.className = 'coupon-msg error';
    }
};

window.processBooking = function(e) {
    e.preventDefault();
    const name = document.getElementById('p-name').value;
    const pnr = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // Save to LocalStorage
    const booking = {
        id: pnr,
        type: bookingType,
        details: currentBookingData,
        passenger: name,
        price: finalPrice,
        date: new Date().toLocaleDateString()
    };
    
    const bookings = JSON.parse(localStorage.getItem('skywings_bookings') || '[]');
    bookings.unshift(booking);
    localStorage.setItem('skywings_bookings', JSON.stringify(bookings));
    
    // Show Ticket
    renderTicketView(name, pnr, bookingType, currentBookingData, finalPrice);
};

function renderTicketView(name, pnr, type, data, price) {
    const container = document.getElementById('ticket-view');
    const form = document.getElementById('booking-form-container');
    
    form.classList.add('hidden');
    container.classList.remove('hidden');
    
    let ticketBody = '';
    if(type === 'flight') {
        ticketBody = `
            <div><div class="ticket-label">Passenger</div><div class="ticket-value">${name}</div></div>
            <div><div class="ticket-label">Flight</div><div class="ticket-value">${data.airline}</div></div>
            <div><div class="ticket-label">From</div><div class="ticket-value">${data.from}</div></div>
            <div><div class="ticket-label">To</div><div class="ticket-value">${data.to}</div></div>
            <div><div class="ticket-label">Date</div><div class="ticket-value">${data.date}</div></div>
            <div><div class="ticket-label">PNR</div><div class="ticket-value">${pnr}</div></div>
        `;
    } else {
        ticketBody = `
            <div><div class="ticket-label">Guest</div><div class="ticket-value">${name}</div></div>
            <div><div class="ticket-label">Hotel</div><div class="ticket-value">${data.name}</div></div>
            <div><div class="ticket-label">Location</div><div class="ticket-value">${data.location}</div></div>
            <div><div class="ticket-label">Booking ID</div><div class="ticket-value">${pnr}</div></div>
        `;
    }

    container.innerHTML = `
        <div class="ticket" id="ticket-print-area">
            <div class="ticket-header">
                <div><h2>SKYWINGS</h2><small>OFFICIAL TICKET</small></div>
                <div><h2>CONFIRMED</h2></div>
            </div>
            <div class="ticket-body" style="padding:20px; display:grid; grid-template-columns:1fr 1fr; gap:20px;">
                ${ticketBody}
                <div><div class="ticket-label">Total Paid</div><div class="ticket-value">${formatCurrency(price)}</div></div>
            </div>
        </div>
        <div class="text-center mt-20 no-print">
            <button onclick="window.print()" class="btn btn-primary">Download PDF</button>
            <a href="bookings.html" class="btn btn-secondary" style="margin-left:10px">My Bookings</a>
        </div>
    `;
}

/* =========================================
   6. MY BOOKINGS PAGE LOGIC
   ========================================= */
function loadMyBookings() {
    const container = document.getElementById('my-bookings-container');
    const bookings = JSON.parse(localStorage.getItem('skywings_bookings') || '[]');
    
    container.innerHTML = '';
    
    if (bookings.length === 0) {
        container.innerHTML = '<div class="text-center section"><h3>No bookings found</h3><p>Your history will appear here.</p><a href="index.html" class="btn btn-primary mt-20">Start Booking</a></div>';
        return;
    }

    bookings.forEach(b => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.marginBottom = '20px';
        
        let title = b.type === 'flight' ? `${b.details.from} to ${b.details.to}` : b.details.name;
        
        card.innerHTML = `
            <div class="card-body" style="flex-direction:row; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:20px;">
                <div>
                    <span style="background:#e3f2fd; color:#0052cc; padding:4px 8px; border-radius:4px; font-size:0.8rem; font-weight:bold; text-transform:uppercase;">${b.type}</span>
                    <h3 style="margin-top:5px;">${title}</h3>
                    <small>PNR: ${b.id} | Booked: ${b.date}</small>
                </div>
                <div class="text-center">
                    <div style="font-weight:bold; font-size:1.2rem;">${formatCurrency(b.price)}</div>
                    <button class="btn btn-secondary btn-sm mt-4" onclick="window.viewReceipt('${b.id}')">View Ticket</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.viewReceipt = function(pnr) {
    const bookings = JSON.parse(localStorage.getItem('skywings_bookings') || '[]');
    const booking = bookings.find(b => b.id === pnr);
    if(booking) {
        const modal = document.getElementById('view-ticket-modal');
        if(modal) {
            modal.classList.add('active');
            // Re-use logic to generate HTML, but inject into modal
            const tempDiv = document.createElement('div');
            renderTicketView(booking.passenger, booking.id, booking.type, booking.details, booking.price);
            // Move content from main ticket view (which might be hidden) to modal
            // Or simplified: Just rewrite HTML logic here to keep it simple
            let ticketBody = booking.type === 'flight' 
                ? `<div><strong>Flight:</strong> ${booking.details.airline}</div><div><strong>Route:</strong> ${booking.details.from} - ${booking.details.to}</div>` 
                : `<div><strong>Hotel:</strong> ${booking.details.name}</div><div><strong>Loc:</strong> ${booking.details.location}</div>`;
            
            document.getElementById('view-ticket-content').innerHTML = `
                <div class="ticket" id="ticket-print-area" style="border:1px solid #ddd; padding:0;">
                    <div class="ticket-header" style="background:var(--accent); color:white; padding:20px;"><h2>SKYWINGS</h2></div>
                    <div style="padding:20px;">
                        <h3>${booking.passenger}</h3>
                        <p>PNR: ${booking.id}</p>
                        <hr style="margin:10px 0; border:0; border-top:1px dashed #ddd;">
                        ${ticketBody}
                        <h3 style="margin-top:15px;">Paid: ${formatCurrency(booking.price)}</h3>
                    </div>
                </div>
            `;
        }
    }
};

window.closeViewTicketModal = function() {
    document.getElementById('view-ticket-modal').classList.remove('active');
};

/* =========================================
   7. AUTHENTICATION (Global)
   ========================================= */
function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('skywings_user'));
    const btn = document.getElementById('auth-btn');
    if(btn) {
        if(user && user.isLoggedIn) {
            btn.innerHTML = `<i class="ph-bold ph-user-circle"></i> ${user.name}`;
            btn.onclick = function() {
                if(confirm("Log out?")) {
                    localStorage.removeItem('skywings_user');
                    window.location.reload();
                }
            };
        } else {
            btn.innerHTML = 'Sign In';
            btn.onclick = function() { document.getElementById('signin-modal').classList.add('active'); };
        }
    }
}

window.closeSignInModal = function() {
    document.getElementById('signin-modal').classList.remove('active');
};

window.handleSignIn = function(e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const user = { name: email.split('@')[0], isLoggedIn: true };
    localStorage.setItem('skywings_user', JSON.stringify(user));
    window.closeSignInModal();
    checkLoginStatus();
};