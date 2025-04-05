document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // WhatsApp Order Button with Enhanced Message
    const orderBtn = document.getElementById('orderBtn');
    
    orderBtn.addEventListener('click', function() {
        // Show a modal with product details before sending to WhatsApp
        showOrderModal();
    });
    
    // Function to show order modal
    function showOrderModal() {
        // Create modal elements
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        // Add product details to modal
        modalContent.innerHTML = `
            <div class="modal-header">
                <h3>Complete Your Order</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-product">
                    <img src="AirPods_Pro_2nd-Gen-1.png" alt="AirPods Pro" class="modal-product-image">
                    <div class="modal-product-details">
                        <h4>AirPods Pro</h4>
                        <p class="modal-product-price">$199.99</p>
                        <ul class="modal-product-features">
                            <li>Active Noise Cancellation</li>
                            <li>Transparency Mode</li>
                            <li>Spatial Audio</li>
                            <li>Water Resistant</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-form">
                    <div class="form-group">
                        <label for="customerName">Your Name</label>
                        <input type="text" id="customerName" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label for="customerPhone">Phone Number (optional)</label>
                        <input type="tel" id="customerPhone" placeholder="Enter your phone number">
                    </div>
                    <div class="form-group">
                        <label for="customerMessage">Additional Message (optional)</label>
                        <textarea id="customerMessage" placeholder="Any specific requirements?"></textarea>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary modal-submit">Proceed to WhatsApp</button>
            </div>
        `;
        
        // Append modal to body
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
        
        // Add modal styles
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background-color: white;
                border-radius: 15px;
                width: 90%;
                max-width: 500px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #e9ecef;
            }
            
            .modal-header h3 {
                margin: 0;
                color: #34495e;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #6c757d;
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .modal-product {
                display: flex;
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e9ecef;
            }
            
            .modal-product-image {
                width: 100px;
                height: auto;
                object-fit: contain;
                margin-right: 20px;
            }
            
            .modal-product-details h4 {
                margin-top: 0;
                margin-bottom: 10px;
                color:rgb(0, 0, 0);
            }
            
            .modal-product-price {
                font-size: 20px;
                font-weight: 700;
                color:rgb(0, 0, 0);
                margin-bottom: 10px;
            }
            
            .modal-product-features {
                padding-left: 20px;
                margin: 0;
            }
            
            .modal-product-features li {
                margin-bottom: 5px;
                color: #6c757d;
            }
            
            .modal-form .form-group {
                margin-bottom: 15px;
            }
            
            .modal-form label {
                display: block;
                margin-bottom: 5px;
                font-weight: 500;
                color:rgb(0, 0, 0);
            }
            
            .modal-form input,
            .modal-form textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #ced4da;
                border-radius: 5px;
                font-family: inherit;
            }
            
            .modal-form textarea {
                height: 100px;
                resize: vertical;
            }
            
            .modal-footer {
                padding: 20px;
                border-top: 1px solid #e9ecef;
                text-align: right;
            }
            
            .modal-submit {
                background-color: #00c853;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 30px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            
            .modal-submit:hover {
                background-color: #00c853;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px #00c853;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        
        document.head.appendChild(modalStyle);
        
        // Add event listeners
        const closeBtn = modalContent.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modalOverlay);
        });
        
        // Close modal when clicking outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                document.body.removeChild(modalOverlay);
            }
        });
        
        // Submit form
        const submitBtn = modalContent.querySelector('.modal-submit');
        submitBtn.addEventListener('click', () => {
            const customerName = document.getElementById('customerName').value || 'Customer';
            const customerPhone = document.getElementById('customerPhone').value || '';
            const customerMessage = document.getElementById('customerMessage').value || '';
            
            // Create WhatsApp message with form data
            let message = `Hello, I'm ${customerName} and I'm interested in purchasing the "AirPods Pro" for $17.99.\n\n`;
            
            message += `Features I'm interested in:\n`;
            message += `✓ Active Noise Cancellation\n`;
            message += `✓ Transparency Mode\n`;
            message += `✓ Spatial Audio\n`;
            message += `✓ Water Resistant\n\n`;
            
            if (customerPhone) {
                message += `My phone number: ${customerPhone}\n\n`;
            }
            
            if (customerMessage) {
                message += `Additional message: ${customerMessage}\n\n`;
            }
            
            message += `I saw your product on your landing page and would like to place an order. Can you provide more information about availability and shipping?`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/212770264606?text=${encodedMessage}`;
            
            // Close modal and open WhatsApp
            document.body.removeChild(modalOverlay);
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Testimonial Slider Auto-Scroll
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (testimonialSlider && testimonialCards.length > 1) {
        let currentIndex = 0;
        const cardWidth = testimonialCards[0].offsetWidth + 30; // Card width + gap
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            testimonialSlider.scrollTo({
                left: cardWidth * currentIndex,
                behavior: 'smooth'
            });
        }, 5000);
    }
    
    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .product-details, .testimonial-card, .order-details');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Add CSS class for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .product-details, .testimonial-card, .order-details');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Add animated class to show elements
    document.addEventListener('scroll', () => {
        elementsToAnimate.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Run animation on load
    window.addEventListener('load', () => {
        setTimeout(animateOnScroll, 500);
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
});