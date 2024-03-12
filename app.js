const cardsContainer = document.getElementById('cardsContainer');
const addCardButton = document.getElementById('addCard');
const titleInput = document.getElementById('titleInput');
const infoInput = document.getElementById('infoInput');

addCardButton.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const info = infoInput.value.trim();

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('col-md-12', 'mb-3');

    
    const titleBox = document.createElement('div');
    titleBox.classList.add('title-box', 'mb-3', 'border-bottom');
    
    
    const titleHeader = document.createElement('h5');
    titleHeader.textContent = title;
    titleHeader.style.fontWeight = 'bold'; 
    titleHeader.style.fontSize = '2em'; 

    titleBox.appendChild(titleHeader);

    
    const contentBox = document.createElement('div');
    contentBox.classList.add('content-box', 'mb-3');
    contentBox.textContent = info;

    
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'w-100');

    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
    deleteButton.textContent = 'Delete';
    
    // Add the event listener to the delete button
    deleteButton.addEventListener('click', () => {
        cardContainer.remove();
    });
    
    // Style the delete button to make it appear on the right
    deleteButton.style.float = 'right';
    
    // Append the delete button to the container
    cardContainer.appendChild(deleteButton);

    
    cardBody.appendChild(titleBox);
    cardBody.appendChild(contentBox);
    cardBody.appendChild(deleteButton);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);

    cardsContainer.appendChild(cardContainer);

    titleInput.value = '';
    infoInput.value = '';
});
