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
        <th>Complete?</th>
        <th>Delete?</th>
    </tr>
    `;
    for (let i = 0; i < model.cards.length; i++) {
        tableContent += addCard(i);
    }
    tableTag.innerHTML = tableContent;
}
function addCard(i){
const card = model.cards[i];
const checkedHtml = card.done ? 'checked="checked"' : '';
return `
    <tr>
        <td><img src="${card.picLink}"></td>
        <td>${card.name}</td>
        <td>${card.want}</td>
        <td>${card.have}</td>
        <td>${card.price}</td>
        <td><a href="${card.buyLink}" target="_blank">Link</a></td>
        <td><button id="edit-btn">Edit</button></td>
        <td>checkbox</td>
        <td><button>X</button></td>
    </tr>
`;
}

function addCardView(){
    addCardHTML = `
    <div id="add-card">
        <button onclick="listView()" style="border-radius: 10px">cancel</button>
        <h1>Add card:</h1>
        <h2>card name: <input id="nameInput" class="input-text" type="text" placeholder="NAME"></h2>
        <h2>Want: <input id="wantInput" class="input-number" type="number" value="0"></h2>
        <h2>Have: <input id="haveInput" class="input-number" type="number" value="0" ></h2>
        <h2>price: <input id="priceInput" class="input-text" type="text" placeholder="PRICE"></h2>
        <h2>Cardmarket link: <input id="buyInput" class="input-text" type="text" placeholder="Cardmarket link"></h2>
        <h2>Picture link: <input id="picInput" class="input-text" type="text" placeholder="Picture">
        <button onclick="previewCard()" style="border-radius: 10px">show picture</button></h2>
        <button onclick="" class="bigBtn">ADD CARD</button>
    </div>
    <div class="img-frame">
        <img src="${model.Preview}" >
    </div>`;
    appDiv.innerHTML = addCardHTML;
}