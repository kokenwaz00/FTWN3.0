/**
 * ===================================================================
 * Fatawin Static Clone JavaScript
 * Minimal scripts for essential landing page interactions.
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Toggle (For light/dark mode replication)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark');

            // Update icon based on current state
            const icon = themeToggle.querySelector('svg');
            if (icon) {
                icon.setAttribute('d', isDark 
                    ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" // Moon icon path
                    : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"); // Sun icon path
            });
        });
    }

    // 2. Newsletter Form Submission Handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const input = this.querySelector('input[type="email"]');
            const email = input.value;

            alert(`Subscription Attempted with Email: ${email}. (Visual simulation complete)`);
            input.value = ''; // Clear field after submission attempt
        });
    }
});
