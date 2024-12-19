$(document).ready(function () { 
  // Initialize the Slick slider for the main image slider
  if ($('.slider').length) {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      fade: true,
      speed: 1000
    });
  }

  // Initialize the Slick slider for the trends section
  if ($('.trend-slider').length) {
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
  }

  // Get the trend ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const trendId = urlParams.get('id');

  // Sample trend data (this can be replaced with data from an API or database)
  const trends = {
    1: {
      title: "Trend 1",
      image: "img/whyyoungpeople.jpg",
      description: "This is a detailed description of Trend 1. It covers the main highlights and why it's popular."
    },
    2: {
      title: "Trend 2",
      image: "img/networks_mentoring.jpg",
      description: "This is a detailed description of Trend 2. It explains the background and significance of this trend."
    },
    // Add more trends here...
  };

  // Display the trend detail on the page
  const trendDetail = trends[trendId];
  const trendContent = document.querySelector('.trend-detail-content');

  if (trendContent) {
    trendContent.innerHTML = trendDetail
      ? `
        <h2>${trendDetail.title}</h2>
        <img src="${trendDetail.image}" alt="${trendDetail.title}" class="trend-detail-image">
        <p>${trendDetail.description}</p>
      `
      : "<h1>Youth and Agriculture</h1>";
  }

  // Toggle the menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('header nav ul');
  const closeIcon = document.querySelector('.close-icon');

  if (menuToggle && navList && closeIcon) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show'); // Toggle the 'show' class for the menu
      menuToggle.classList.toggle('active'); // Toggle the active state of the menu toggle
    });

    closeIcon.addEventListener('click', () => {
      navList.classList.remove('show');
      menuToggle.classList.remove('active');
    });
  }
});
