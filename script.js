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

    // Get the trend ID from the URL and handle trend details
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
      }
      // Add more trends here...
    };

    // Display the trend detail on the page
    const trendContent = document.querySelector('.trend-detail-content');
    if (trendContent) {
      const trendDetail = trends[trendId];
      trendContent.innerHTML = trendDetail
        ? `
          <h2>${trendDetail.title}</h2>
          <img src="${trendDetail.image}" alt="${trendDetail.title}" class="trend-detail-image">
          <p>${trendDetail.description}</p>
        `
        : "<h1>Youth and Agriculture</h1>";
    }

    // Mobile menu functionality
    const menuToggle = document.querySelector('.hamburger-icon');
    const navList = document.querySelector('header nav ul');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.querySelectorAll('header nav ul li a');

    // Toggle menu on hamburger icon click
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        navList.classList.add('show');
        menuToggle.classList.add('active');
        closeIcon.classList.add('active');

      });
    }

    // Close menu when close icon is clicked
    if (closeIcon) {
      closeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        navList.classList.remove('show');
        menuToggle.classList.add('active');
        closeIcon.classList.remove('active');

      });
    }

    // Handle navigation links
    if (navLinks.length) {
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          // Handle smooth scroll for anchor links
          if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }

          // Update active state
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');

          // Close mobile menu
          navList.classList.remove('show');
          menuToggle.classList.remove('active');
        });
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navList && menuToggle && !navList.contains(e.target) && !menuToggle.contains(e.target)) {
        navList.classList.remove('show');
        menuToggle.classList.remove('active');
      }
    });
  });
