const events = [
    {
        title: 'Hackathon',
        description: '24-hour coding marathon to build innovative solutions. Team up, code hard, and win amazing prizes!',
        icon: ''
    },
    {
        title: 'Tech Talks',
        description: 'Inspiring sessions from industry experts sharing insights on AI, blockchain, and emerging technologies.',
        icon: ''
    },
    {
        title: 'Robotics Challenge',
        description: 'Design and build autonomous robots to compete in exciting challenges and obstacle courses.',
        icon: ''
    },
    {
        title: 'Web Development',
        description: 'Showcase your frontend and backend skills in our web development competition.',
        icon: ''
    },
    {
        title: 'AI/ML Workshop',
        description: 'Hands-on workshop on machine learning and artificial intelligence fundamentals.',
        icon: ''
    },
    {
        title: 'Gaming Arena',
        description: 'Compete in esports tournaments featuring popular games with cash prizes.',
        icon: ''
    },
    {
        title: 'Cybersecurity CTF',
        description: 'Capture the flag competition testing your ethical hacking and security skills.',
        icon: ''
    },
    {
        title: 'Design Sprint',
        description: 'UI/UX design competition where creativity meets functionality in 48 hours.',
        icon: ''
    }
];


function renderEvents(filteredEvents) {
    const eventsGrid = document.getElementById('eventsGrid');
    const noResults = document.getElementById('noResults');
    if (filteredEvents.length === 0) {
        eventsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';
    eventsGrid.innerHTML = filteredEvents.map(event => `
                <div class="event-card">
                    <div class="event-image">${event.icon}</div>
                    <div class="event-content">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <button class="enroll-btn" onclick="enrollEvent('${event.title}')">ENROLL NOW</button>
                    </div>
                </div>
            `).join('');
}


document.getElementById('searchBox').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm)
    );
    renderEvents(filtered);
});


function enrollEvent(eventName) {
    alert(`Enrollment for ${eventName} is coming soon! Stay tuned.`);
}

renderEvents(events);
const bgContainer = document.getElementById('bgContainer');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


function createFloatingLogo() {
    const logo = document.createElement('img');
    logo.src = '/assets/splash-icon.webp';
    logo.className = 'floating-logo';

    const size = Math.random() * 40 + 40;
    logo.style.width = size + 'px';
    logo.style.height = 'auto';
    const startX = Math.random() * window.innerWidth;
    logo.style.left = startX + 'px';
    logo.style.bottom = '-150px';

    const duration = Math.random() * 15 + 20;
    logo.style.animationDuration = duration + 's';
    const driftX = (Math.random() - 0.5) * 200;
    const rotation = (Math.random() - 0.5) * 360;
    logo.style.setProperty('--drift-x', driftX + 'px');
    logo.style.setProperty('--rotation', rotation + 'deg');
    const delay = Math.random() * 2;
    logo.style.animationDelay = delay + 's';
    const maxOpacity = Math.random() * 0.2 + 0.15;
    logo.style.setProperty('--max-opacity', maxOpacity);
    bgContainer.appendChild(logo);

    setTimeout(() => {
        logo.remove();
    }, (duration + delay) * 1000);
}


function createSpark() {
    const spark = document.createElement('div');
    spark.className = 'spark';
    const startX = Math.random() * window.innerWidth;
    spark.style.left = startX + 'px';
    spark.style.bottom = '-10px';
    const duration = Math.random() * 8 + 6;
    spark.style.animationDuration = duration + 's';
    const sparkDrift = (Math.random() - 0.5) * 100;
    spark.style.setProperty('--spark-drift', sparkDrift + 'px');
    bgContainer.appendChild(spark);
    setTimeout(() => {
        spark.remove();
    }, duration * 1000);
}


function initFloatingBackground() {

    for (let i = 0; i < 8; i++) {
        setTimeout(() => createFloatingLogo(), i * 2000);
    }

    for (let i = 0; i < 20; i++) {
        setTimeout(() => createSpark(), i * 300);
    }

    setInterval(() => createFloatingLogo(), 3000);
    setInterval(() => createSpark(), 400);
}


document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;



    // Parallax effect for hero elements
    const hero = document.querySelector('.hero');
    if (hero.getBoundingClientRect().top < window.innerHeight && hero.getBoundingClientRect().bottom > 0) {
        const heroTitle = document.getElementById('heroTitle');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        heroTitle.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
    }
});


initFloatingBackground();


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});

// Countdown Timer
const eventDate = new Date('2026-02-25T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));


        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });


        this.classList.add('active');

        // Close mobile
        document.getElementById('navLinks').classList.remove('active');
        document.getElementById('menuToggle').classList.remove('active');

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// menu toggle
document.getElementById('menuToggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navLinks').classList.toggle('active');
});
