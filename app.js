// Get all form sections
const sections = document.querySelectorAll('.flex');
// Get navigation buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const submitBtn = document.querySelector('#submitBtn');
// Keep track of current section
let currentSection = 0;

// Show the current section and hide the others
function showSection() {
  sections.forEach((section, index) => {
    if (index === currentSection) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

// Move to the previous section
function prevSection() {
  currentSection--;
  showSection();
}

// Move to the next section
function nextSection() {
  currentSection++;
  showSection();
}

// Handle button clicks
prevBtn.addEventListener('click', prevSection);
nextBtn.addEventListener('click', nextSection);

// Show the first section by default
showSection();
