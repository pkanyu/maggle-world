

// Function to handle the intersection of the about section
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Remove the 'show' class if not intersecting
    }
  });
}

// Create a new Intersection Observer instance
const aboutObserver = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: 0.2, // Adjust this threshold value as needed
});

//  // Create a new Intersection Observer instance
//  const scrollObserver = new IntersectionObserver(handleIntersection, {
//   root: null,
//   threshold: 2,
// });

// Observe the about section and its child elements
const aboutSection = document.getElementById('about');
aboutObserver.observe(aboutSection);

const aboutImg = aboutSection.querySelector('.about-img');
aboutObserver.observe(aboutImg);

const aboutText = aboutSection.querySelector('.about-text');
aboutObserver.observe(aboutText);

// services 
const servicesSection = document.getElementById('services');
aboutObserver.observe(servicesSection);
const sectionHeader = servicesSection.querySelector('.section-header');
aboutObserver.observe(sectionHeader);
const paragraph = servicesSection.querySelector('p');
aboutObserver.observe(paragraph);
const cards = servicesSection.querySelectorAll('.card');
aboutObserver.observe(cards);


// Re-observe the about section and its child elements on window resize
window.addEventListener('resize', function() {
  aboutObserver.observe(aboutSection);
  aboutObserver.observe(aboutImg);
  aboutObserver.observe(aboutText);

  // services 
  aboutObserver.observe(servicesSection);
  aboutObserver.observe(sectionHeader);
  aboutObserver.observe(paragraph);
  cards.forEach(card => aboutObserver.observe(card));
 
});


  // ...

  
  // Function to handle the intersection of the elements
  // function handleIntersection(entries, observer) {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show');
  //     } else {
  //       entry.target.classList.remove('show');
  //     }
  //   });
  // }

 

  // // Select the elements to observe
  // const servicesSection = document.getElementById('services');
  // const sectionHeader = servicesSection.querySelector('.section-header');
  // const paragraph = servicesSection.querySelector('p');
  // const cards = servicesSection.querySelectorAll('.card');

  // // Observe the elements
  // scrollObserver.observe(servicesSection);
  // scrollObserver.observe(sectionHeader);
  // scrollObserver.observe(paragraph);
  // cards.forEach(card => scrollObserver.observe(card));


