document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Booking Appointment Form Validation
document.querySelector('.appointment-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Sample form data (you can replace this with actual form data)
    const name = prompt("Enter your name:");
    const phone = prompt("Enter your phone number:");
    
    // Simple validation
    if (!name || !phone) {
        alert("Please fill in all fields.");
        return;
    }
    
    // Simulate a booking confirmation
    alert(`Appointment booked successfully for ${name} at ${phone}`);
});

// Dynamic Course Detail Display
const courseItems = document.querySelectorAll('.course-item');
courseItems.forEach(course => {
    course.addEventListener('click', () => {
        const courseName = course.querySelector('h3').innerText;
        const coursePrice = course.querySelector('p').innerText;
        alert(`Course: ${courseName}\nPrice: ${coursePrice}`);
    });
});