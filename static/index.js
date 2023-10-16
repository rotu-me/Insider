document.addEventListener('DOMContentLoaded', function() {
  const featuredPosts = document.getElementById('featured-blog-posts');
  const blogPostItems = featuredPosts.querySelectorAll('.p-4');
  let currentPostIndex = 0;

  function showNextPost() {
    blogPostItems[currentPostIndex].style.display = 'none';
    currentPostIndex = (currentPostIndex + 1) % blogPostItems.length;
    blogPostItems[currentPostIndex].style.display = 'block';
    setTimeout(showNextPost, 5000); // Change post every 5 seconds
  }

  // Hide all posts initially, except the first one
  blogPostItems.forEach((post, index) => {
    post.style.display = index === 0 ? 'block' : 'none';
  });

  // Start the slideshow
  showNextPost();

  // Initialize the date picker
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'YYYY-MM',
    yearRange: [2000, new Date().getFullYear()], // Allow selection of the current year
    onSelect: function(date) {
      // Handle the selected date (e.g., display content or perform actions)
    }
  });

  // Function to generate archive links for the past 12 months
  function generateArchiveLinks() {
    const archivesList = document.getElementById('archives-list');
    archivesList.innerHTML = ''; // Clear existing content
    const currentDate = new Date();
    for (let i = 0; i < 12; i++) {
      const pastDate = new Date(currentDate);
      pastDate.setMonth(currentDate.getMonth() - i);
      const year = pastDate.getFullYear();
      const month = String(pastDate.getMonth() + 1).padStart(2, '0');
      const archiveLink = document.createElement('a');
      archiveLink.href = `/archives/${year}-${month}`;
      archiveLink.textContent = `${year}-${month}`;
      archivesList.appendChild(archiveLink);
    }
  }

  // Generate initial archive links for the past 12 months
  generateArchiveLinks();
});
