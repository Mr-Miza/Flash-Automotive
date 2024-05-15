function startCounting() {
    const targets = [15514, 1201, 2150, 3800]; // Final values for each counter
    const duration = 300000; // Duration of the counting animation in milliseconds
    
    const counters = document.querySelectorAll('.stats h1');

    counters.forEach((counter, index) => {
        const increment = targets[index] / (duration / 1000); // Calculate increment per millisecond
        let currentCount = 0;

        const updateCount = () => {
            currentCount += increment;
            if (currentCount >= targets[index]) {
                currentCount = targets[index];
                clearInterval(interval);
            }
            counter.textContent = Math.floor(currentCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        };

        const interval = setInterval(updateCount, 1);
        updateCount();
    });
}

// Call the function when the element with class 'stats' comes into view
const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        startCounting();
        observer.unobserve(statsSection);
    }
});
observer.observe(statsSection);



function fadeAnimation() {
    const stats = document.querySelector('.stats');
    let opacity = 0;

    const fadeIn = setInterval(() => {
        opacity += 0.005;
        stats.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
    }, 10);
}

fadeAnimation();