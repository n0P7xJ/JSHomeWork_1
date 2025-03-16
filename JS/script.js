
fetch('../news.json')
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('newsContainer');
        data.forEach(news => {
            const newsCard = `
                <div class="card">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.description}</p>
                    </div>
                </div>
            `;
            newsContainer.innerHTML += newsCard;
        });
    })
    .catch(error => console.error('Error loading news:', error));
