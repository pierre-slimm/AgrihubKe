// Initialize the Slick slider for the main image slider
$(document).ready(function() {
  $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      fade: true,
      speed: 1000
  });

  // Initialize the Slick slider for the trends section
  $('.trend-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
});
// Get the trend ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const trendId = urlParams.get('id');

// Sample trend data (this can be replaced with data from an API or database)
const trends = {
  1: {
    title: "Trend 1",
    image: "images/trend1.jpg",
    description: "This is a detailed description of Trend 1. It covers the main highlights and why it's popular."
  },
  2: {
    title: "Trend 2",
    image: "images/trend2.jpg",
    description: "This is a detailed description of Trend 2. It explains the background and significance of this trend."
  },
  // Add more trends here...
};

// Get the trend details from the trends object based on the trendId
const trendDetail = trends[trendId];

// Display the trend detail on the page
if (trendDetail) {
  document.querySelector('.trend-detail-content').innerHTML = `
    <h2>${trendDetail.title}</h2>
    <img src="${trendDetail.image}" alt="${trendDetail.title}" class="trend-detail-image">
    <p>${trendDetail.description}</p>
  `;
} else {
  document.querySelector('.trend-detail-content').innerHTML = "<p>Trend not found!</p>";
}
