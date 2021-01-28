listView();
function listView(){
   tableHTML = `
   <h1>MTG wishlist</h1>
    <table id="list"></table>
   `;
    appDiv.innerHTML = tableHTML;
    const tableTag = document.getElementById("list");
    tableContent = `
    <tr id="heading">
        <th><button id="addCardBtn" class="addCardBtn" onclick="addCardView()">Add card</button></th>
        <th>Card name</th>
        <th>Want</th>
        <th>Have</th>
        <th>Price €</th>
        <th>Link</th>
        <th>Edit?</th>
        <th>Delete?</th>
    </tr>
    `;
    for (let i = 0; i < model.cards.length; i++) {
        tableContent += addCard(i);
    }
    tableTag.innerHTML = tableContent;
}

function addCard(index){
const card = model.cards[index];
return `
    <tr>
        <td><img src="${card.picLink}"></td>
        <td>${card.name}</td>
        <td>${card.want}</td>
        <td>${card.have}</td>
        <td>${card.price}</td>
        <td><a href="${card.buyLink}" target="_blank">Link</a></td>
        <td><button id="edit-btn" onclick="editCardView(${index})">Edit</button></td>
        <td><button onclick="deleteCard(${index})">X</button></td>
    </tr>
`;
}

function addCardView(){
    addCardHTML = `
    <div id="add-card">
        <button onclick="listView()" style="border-radius: 10px">cancel</button>
        <h1>Add card:</h1>
        <h2>card name: <input id="nameInput" 
                              class="input-text" 
                              type="text" 
                              placeholder="NAME" 
                              value=""></h2>
        <h2>Want: <input id="wantInput" 
                         class="input-number" 
                         type="number" 
                         value="4"></h2>
        <h2>Have: <input id="haveInput" 
                         class="input-number" 
                         type="number" 
                         value="0" ></h2>
        <h2>price (euro): <input id="priceInput" 
                                 class="input-number" 
                                 type="number" 
                                 placeholder="PRICE" 
                                 value="0"></h2>
        <h2>Cardmarket link: <input id="buyInput" 
                                    class="input-text" 
                                    type="text" 
                                    placeholder="Cardmarket link" 
                                    value=""></h2>
        <h2>Picture link: <input id="picInput" 
                                 class="input-text" 
                                 type="text" 
                                 placeholder="Picture" 
                                 value="">
        <button onclick="previewCard()" 
                style="border-radius: 10px">show picture</button></h2>
        <button onclick="pushCard()" 
                class="bigBtn">ADD CARD</button>
    </div>
    <div class="img-frame" id="displayDiv">
        
    </div>`;
    appDiv.innerHTML = addCardHTML;
}

function displayCard(){
   const cardDiv = document.getElementById("displayDiv");
   if(model.errorMode == true) {
    cardDiv.innerHTML = `
    <h1 id="error-msg">Please put in:</h1>
    <h1 id="error-msg">Card name</h1>
    <h1 id="error-msg">Link to Cardmarket</h1>
    <h1 id="error-msg">Link to a picture of the card</h1>
    `;
   }else {
    cardDiv.innerHTML = `<img src="${model.Preview}" >`;
   }
}

function editCardView(index){
const card = model.cards[index];
editCardHTML = `
<div id="add-card">
        <button onclick="listView()" style="border-radius: 10px">cancel</button>
        <h1>Add card:</h1>
        <h2>card name: <input id="nameInput" 
                              class="input-text" 
                              type="text" 
                              value="${card.name}"></h2>
        <h2>Want: <input id="wantInput" 
                         class="input-number" 
                         type="number" 
                         value="${card.want}"></h2>
        <h2>Have: <input id="haveInput" 
                         class="input-number" 
                         type="number" 
                         value="${card.have}" ></h2>
        <h2>price (euro): <input id="priceInput" 
                                 class="input-number" 
                                 type="number" 
                                 value="${card.price}"></h2>
        <h2>Cardmarket link: <input id="buyInput" 
                                    class="input-text" 
                                    type="text" 
                                    placeholder="Cardmarket link" 
                                    value="${card.buyLink}"></h2>
        <h2>Picture link: <input id="picInput" 
                                 class="input-text" 
                                 type="text" 
                                 value="${card.picLink}">
        <button onclick="updateCard(${index})" 
                class="bigBtn">DONE EDIT</button>
    </div>
    <div class="img-frame" id="displayDiv">
        <img src="${card.picLink}" >
    </div>`;
appDiv.innerHTML = editCardHTML
console.log(index);
}