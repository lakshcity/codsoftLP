document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.textContent = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingElement.textContent = 'Good Afternoon!';
    } else {
        greetingElement.textContent = 'Good Evening!';
    }
}

document.addEventListener('DOMContentLoaded', updateGreeting);
