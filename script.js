// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 15px';
toggleButton.style.borderRadius = '5px';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
toggleButton.style.backgroundColor = '#007bff';
toggleButton.style.color = '#fff';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add dark mode styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #1a1a1a;
        color: #f5f5f5;
    }
    
    .dark-mode header h1 {
        color: #4da6ff;
    }
    
    .dark-mode section h3 {
        color: #4da6ff;
        border-bottom-color: #333;
    }
    
    .dark-mode article .date {
        color: #aaa;
    }
    
    .dark-mode ul li {
        color: #ddd;
    }
`;
document.head.appendChild(style);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Print Button
const printButton = document.createElement('button');
printButton.textContent = 'Print Resume';
printButton.style.position = 'fixed';
printButton.style.top = '60px';
printButton.style.right = '20px';
printButton.style.padding = '10px 15px';
printButton.style.borderRadius = '5px';
printButton.style.border = 'none';
printButton.style.cursor = 'pointer';
printButton.style.backgroundColor = '#28a745';
printButton.style.color = '#fff';
document.body.appendChild(printButton);

printButton.addEventListener('click', () => {
    window.print();
});

// Hover Effects
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.transition = 'transform 0.3s ease';
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.02)';
    });
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Message sent successfully!';
    successMessage.style.position = 'fixed';
    successMessage.style.bottom = '20px';
    successMessage.style.right = '20px';
    successMessage.style.padding = '15px 25px';
    successMessage.style.backgroundColor = '#28a745';
    successMessage.style.color = '#fff';
    successMessage.style.borderRadius = '5px';
    successMessage.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    document.body.appendChild(successMessage);

    // Clear form
    contactForm.reset();

    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});
