// Smooth Scroll for Navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Modal for Course Details
const courseItems = document.querySelectorAll('.course-item');
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

courseItems.forEach(course => {
    course.addEventListener('click', () => {
        const courseName = course.querySelector('h3').innerText;
        const coursePrice = course.querySelector('p').innerText;
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${courseName}</h2>
                <p>${coursePrice}</p>
                <button class="enroll-button">Enroll Now</button>
            </div>
        `;
        
        modal.style.display = 'block';

        // Close modal functionality
        modal.querySelector('.close').onclick = () => {
            modal.style.display = 'none';
        };
    });
});

// Appointment Booking Form Handling
const appointmentButton = document.querySelector('.appointment-button');

appointmentButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a simple form dynamically
    const formHtml = `
        <div class="form-modal">
            <div class="form-content">
                <span class="form-close">&times;</span>
                <h2>Book an Appointment</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" required>
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" required>
                <button class="submit-button">Submit</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHtml);
    
    const formModal = document.querySelector('.form-modal');
    
    // Close form functionality
    formModal.querySelector('.form-close').onclick = () => {
        formModal.remove();
    };
    
    // Form submission handling
    formModal.querySelector('.submit-button').onclick = () => {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        if (name && phone) {
            alert(`Appointment booked successfully for ${name} at ${phone}`);
            formModal.remove(); // Close modal after submission
        } else {
            alert("Please fill in all fields.");
        }
    };
});

// Close modal when clicking outside of it
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
