document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    // Toggle mobile navigation visibility
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            // In a real application, you'd add/remove a class to show/hide the menu
            // For this example, we'll just log to the console.
            console.log('Mobile menu button clicked!');
            alert('Mobile menu functionality would be implemented here.');
            
            // Example of how you might toggle a class:
            // mainNav.classList.toggle('is-active');
        });
    }

    // A simple console log to confirm the script is loaded and running
    console.log("Kitchen Warehouse clone script loaded.");

});
// Wait until the entire HTML document has been loaded and parsed.
// This is the most common fix for non-working buttons.
document.addEventListener('DOMContentLoaded', () => {

    // Select the elements from the document
    const carousel = document.querySelector('.product-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Check if all elements were found before adding event listeners
    if (carousel && prevBtn && nextBtn) {

        const scrollAmount = () => {
            // Get the first product card to measure its width
            const firstCard = carousel.querySelector('.product-card');
            if (!firstCard) return 270; // A fallback scroll amount
            
            // Get the computed style to find the gap between cards
            const carouselStyle = window.getComputedStyle(carousel);
            const gap = parseFloat(carouselStyle.gap) || 24; // Default to 24px if gap is not set
            
            // The total distance to scroll is the card's width plus the gap
            return firstCard.offsetWidth + gap;
        };

        // --- THIS IS THE EVENT LISTENER FOR THE RIGHT BUTTON ---
        // When the "next" button is clicked, scroll the carousel to the right.
        nextBtn.addEventListener('click', () => {
            carousel.scrollLeft += scrollAmount();
        });

        // When the "previous" button is clicked, scroll the carousel to the left.
        prevBtn.addEventListener('click', () => {
            carousel.scrollLeft -= scrollAmount();
        });

    } else {
        // If an element is missing, log an error to the console to help debug.
        console.error("Carousel elements not found! Check your HTML IDs and class names.");
    }

});
document.addEventListener('DOMContentLoaded', () => {
            const scrollContainer = document.getElementById('offers-container');
            const scrollLeftButton = document.getElementById('scroll-left');
            const scrollRightButton = document.getElementById('scroll-right');
            const progressBar = document.getElementById('progress-bar');

            // This function updates the UI (buttons and progress bar)
            const updateScrollUI = () => {
                const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                
                // Update button states
                scrollLeftButton.disabled = scrollContainer.scrollLeft < 1;
                scrollRightButton.disabled = scrollContainer.scrollLeft >= maxScrollLeft - 1;

                // Update progress bar
                const scrollPercentage = maxScrollLeft > 0 ? (scrollContainer.scrollLeft / maxScrollLeft) * 100 : 0;
                progressBar.style.width = `${scrollPercentage}%`;
            };

            // Attach event listeners
            scrollContainer.addEventListener('scroll', updateScrollUI);
            
            scrollRightButton.addEventListener('click', () => {
                const scrollAmount = scrollContainer.clientWidth * 0.8; // Scroll by 80% of visible width
                scrollContainer.scrollLeft += scrollAmount;
            });

            scrollLeftButton.addEventListener('click', () => {
                const scrollAmount = scrollContainer.clientWidth * 0.8;
                scrollContainer.scrollLeft -= scrollAmount;
            });

            // Update on window resize to handle responsive changes
            window.addEventListener('resize', updateScrollUI);

            // Initial UI update on load
            updateScrollUI();
        });

document.addEventListener('DOMContentLoaded', () => {
            const scrollContainer = document.getElementById('product-container');
            const scrollLeftButton = document.getElementById('scroll-left');
            const scrollRightButton = document.getElementById('scroll-right');
            const progressBar = document.getElementById('progress-bar');

            const updateScrollUI = () => {
                if (!scrollContainer) return;
                const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                scrollLeftButton.disabled = scrollContainer.scrollLeft < 1;
                scrollRightButton.disabled = scrollContainer.scrollLeft >= maxScrollLeft - 1;
                const scrollPercentage = maxScrollLeft > 0 ? (scrollContainer.scrollLeft / maxScrollLeft) * 100 : 0;
                progressBar.style.width = `${scrollPercentage}%`;
            };

            const debounce = (func, delay) => {
                let timeout;
                return (...args) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(this, args), delay);
                };
            };

            const debouncedUpdate = debounce(updateScrollUI, 100);

            scrollContainer.addEventListener('scroll', () => window.requestAnimationFrame(updateScrollUI));
            
            scrollRightButton.addEventListener('click', () => {
                const scrollAmount = 220 + 16; // card width + space-x-4
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            scrollLeftButton.addEventListener('click', () => {
                const scrollAmount = 220 + 16;
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            window.addEventListener('resize', debouncedUpdate);
            setTimeout(updateScrollUI, 100);
        });
        const productScroller = document.getElementById('product-scroller');
        const scrollLeftBtn = document.getElementById('scroll-left');
        const scrollRightBtn = document.getElementById('scroll-right');

        const updateScrollButtons = () => {
            const { scrollWidth, scrollLeft, clientWidth } = productScroller;
            scrollLeftBtn.disabled = scrollLeft === 0;
            scrollRightBtn.disabled = scrollLeft + clientWidth >= scrollWidth;
        };

        scrollLeftBtn.addEventListener('click', () => {
            productScroller.scrollBy({
                left: -288,
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            productScroller.scrollBy({
                left: 288,
                behavior: 'smooth'
            });
        });

        productScroller.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);
        window.onload = updateScrollButtons;
 document.addEventListener('DOMContentLoaded', function() {
            // Get references to the DOM elements
            const container = document.getElementById('brands-container');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');

            // Function to calculate the scroll amount
            // It scrolls by about 3/4 of the container's visible width
            const getScrollAmount = () => container.clientWidth * 0.75;

            // Function to update the state of the navigation buttons
            const updateButtonState = () => {
                const scrollLeft = container.scrollLeft;
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                
                // Disable the 'prev' button if at the beginning
                prevBtn.disabled = scrollLeft < 1;
                
                // Disable the 'next' button if at the end
                // A small tolerance (1px) is added for precision issues
                nextBtn.disabled = scrollLeft >= maxScrollLeft - 1;
            };

            // Event listener for the 'next' button
            nextBtn.addEventListener('click', () => {
                container.scrollBy({
                    left: getScrollAmount(),
                    behavior: 'smooth'
                });
            });

            // Event listener for the 'previous' button
            prevBtn.addEventListener('click', () => {
                container.scrollBy({
                    left: -getScrollAmount(),
                    behavior: 'smooth'
                });
            });

            // Update button states whenever the container is scrolled
            container.addEventListener('scroll', updateButtonState);

            // Initial check of the button states when the page loads
            updateButtonState();
        });
document.addEventListener('DOMContentLoaded', function() {
            // Get references to the DOM elements
            const container = document.getElementById('wonders-container');
            const prevBtn = document.getElementById('prev-btn-winter');
            const nextBtn = document.getElementById('next-btn-winter');

            // Function to calculate the scroll amount
            // It scrolls by the width of one card plus the gap between them
            const getScrollAmount = () => {
                const firstCard = container.querySelector('article');
                if (!firstCard) return container.clientWidth * 0.75; // Fallback
                
                const cardStyle = window.getComputedStyle(firstCard);
                const cardMarginRight = parseFloat(cardStyle.marginRight); // In case you use margin instead of space-x
                const gap = parseFloat(window.getComputedStyle(firstCard.parentElement).gap) || 32; // 32px is space-x-8
                
                return firstCard.offsetWidth + gap;
            };

            // Function to update the state of the navigation buttons
            const updateButtonState = () => {
                const scrollLeft = container.scrollLeft;
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                
                // Disable the 'prev' button if at the beginning
                prevBtn.disabled = scrollLeft < 1;
                
                // Disable the 'next' button if at the end
                // A small tolerance (5px) is added for precision issues with different screen sizes
                nextBtn.disabled = scrollLeft >= maxScrollLeft - 5;
            };

            // Event listener for the 'next' button
            nextBtn.addEventListener('click', () => {
                container.scrollBy({
                    left: getScrollAmount(),
                    behavior: 'smooth'
                });
            });

            // Event listener for the 'previous' button
            prevBtn.addEventListener('click', () => {
                container.scrollBy({
                    left: -getScrollAmount(),
                    behavior: 'smooth'
                });
            });

            // Update button states whenever the container is scrolled
            container.addEventListener('scroll', updateButtonState);

            // Update button states on window resize
            window.addEventListener('resize', updateButtonState);

            // Initial check of the button states when the page loads
            updateButtonState();
        });
        
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Functionality ---
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mainNav = document.getElementById('main-nav'); // Assuming nav-links are inside this

        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mainNav.classList.toggle('active'); // This will show/hide the menu
            });
        }
    }

    // --- 2. "Last Chance" Product Carousel ---
    function initLastChanceCarousel() {
        const carousel = document.querySelector('.product-carousel'); // Using a class is more flexible
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (carousel && prevBtn && nextBtn) {
            const scrollAmount = () => {
                const firstCard = carousel.querySelector('.product-card');
                if (!firstCard) return 270; 
                const carouselStyle = window.getComputedStyle(carousel);
                const gap = parseFloat(carouselStyle.gap) || 24;
                return firstCard.offsetWidth + gap;
            };
            nextBtn.addEventListener('click', () => carousel.scrollLeft += scrollAmount());
            prevBtn.addEventListener('click', () => carousel.scrollLeft -= scrollAmount());
        }
    }

    // --- 3. "Offers" Carousel ---
    function initOffersCarousel() {
        const scrollContainer = document.getElementById('offers-container');
        const scrollLeftButton = document.getElementById('scroll-left-offers'); // Renamed ID
        const scrollRightButton = document.getElementById('scroll-right-offers'); // Renamed ID
        const progressBar = document.getElementById('progress-bar-offers'); // Renamed ID

        if (scrollContainer && scrollLeftButton && scrollRightButton && progressBar) {
            const updateScrollUI = () => {
                const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                scrollLeftButton.disabled = scrollContainer.scrollLeft < 1;
                scrollRightButton.disabled = scrollContainer.scrollLeft >= maxScrollLeft - 1;
                const scrollPercentage = maxScrollLeft > 0 ? (scrollContainer.scrollLeft / maxScrollLeft) * 100 : 0;
                progressBar.style.width = `${scrollPercentage}%`;
            };
            scrollContainer.addEventListener('scroll', updateScrollUI);
            scrollRightButton.addEventListener('click', () => scrollContainer.scrollLeft += scrollContainer.clientWidth * 0.8);
            scrollLeftButton.addEventListener('click', () => scrollContainer.scrollLeft -= scrollContainer.clientWidth * 0.8);
            window.addEventListener('resize', updateScrollUI);
            updateScrollUI();
        }
    }

    // --- 4. "Featured Brands" Carousel ---
    function initBrandsCarousel() {
        const container = document.getElementById('brands-container');
        const prevBtn = document.getElementById('prev-btn-brands'); // Renamed ID
        const nextBtn = document.getElementById('next-btn-brands'); // Renamed ID
        if (container && prevBtn && nextBtn) {
            const getScrollAmount = () => container.clientWidth * 0.75;
            const updateButtonState = () => {
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                prevBtn.disabled = container.scrollLeft < 1;
                nextBtn.disabled = container.scrollLeft >= maxScrollLeft - 1;
            };
            nextBtn.addEventListener('click', () => container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }));
            prevBtn.addEventListener('click', () => container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }));
            container.addEventListener('scroll', updateButtonState);
            updateButtonState();
        }
    }

    // --- 5. "Winter Wonders" Carousel ---
    function initWondersCarousel() {
        const container = document.getElementById('wonders-container');
        const prevBtn = document.getElementById('prev-btn-winter');
        const nextBtn = document.getElementById('next-btn-winter');
        if(container && prevBtn && nextBtn) {
            const getScrollAmount = () => {
                const firstCard = container.querySelector('article');
                if (!firstCard) return container.clientWidth * 0.75;
                const gap = parseFloat(window.getComputedStyle(firstCard.parentElement).gap) || 32;
                return firstCard.offsetWidth + gap;
            };
            const updateButtonState = () => {
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                prevBtn.disabled = container.scrollLeft < 1;
                nextBtn.disabled = container.scrollLeft >= maxScrollLeft - 5;
            };
            nextBtn.addEventListener('click', () => container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }));
            prevBtn.addEventListener('click', () => container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }));
            container.addEventListener('scroll', updateButtonState);
            window.addEventListener('resize', updateButtonState);
            updateButtonState();
        }
    }

    // --- Call all initialization functions ---
    initMobileMenu();
    initLastChanceCarousel();
    initOffersCarousel();
    initBrandsCarousel();
    initWondersCarousel();
    
    console.log("All scripts loaded and initialized.");
});