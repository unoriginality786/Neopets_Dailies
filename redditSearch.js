const container = document.getElementById('reddit-results');

fetch('https://www.reddit.com/r/neopets/search.json?q=food+club&type=link&sort=new&limit=25')
  .then(response => response.json())
  .then(data => {
    const posts = data.data.children;
    const filteredPosts = posts.filter(post =>
      post.data.title.startsWith("Food Club Bets")
    );

    if (filteredPosts.length === 0) {
      container.innerHTML = '<p>No matching results found.</p>';
      return;
    }

    const list = document.createElement('ul');
    filteredPosts.forEach(post => {
      const title = post.data.title;

      const item = document.createElement('li');
      const a = document.createElement('a');
      a.href = 'https://www.reddit.com' + post.data.permalink;
      a.textContent = cleanedTitle;
      a.target = '_blank';
      item.appendChild(a);
      list.appendChild(item);
    });

    container.innerHTML = '';
    container.appendChild(list);
  })
  .catch(error => {
    console.error('Error fetching Reddit data:', error);
    container.innerHTML = '<p>Failed to load results.</p>';
  });
