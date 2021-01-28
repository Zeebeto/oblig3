function previewCard(){
    const picInput = document.getElementById("picInput");
    model.Preview = picInput.value;
    displayCard();
}

function pushCard(){
let cardNameInput = document.getElementById("nameInput");
let cardWantInput = document.getElementById("wantInput");
let cardHaveInput = document.getElementById("haveInput");
let cardPriceInput = document.getElementById("priceInput");
let cardPicInput = document.getElementById("picInput");
let cardBuyInput = document.getElementById("buyInput");

if(cardNameInput.value == "" || cardPicInput.value == "" || cardBuyInput.value == ""){
    model.errorMode = true;
    console.log("error");
    displayCard();
}else{
    model.cards.push({
        name: cardNameInput.value,
        want: cardWantInput.value,
        have: cardHaveInput.value,
        price: cardPriceInput.value,
        buyLink: cardBuyInput.value,
        picLink: cardPicInput.value,
    });
    console.log("pushed");
    model.errorMode = false;
    listView();}
}

function deleteCard(index){
    model.cards.splice(index, 1)
    listView();
}

function updateCard(index) {
    const card = model.cards[index];
    let cardNameInput = document.getElementById("nameInput");
    let cardWantInput = document.getElementById("wantInput");
    let cardHaveInput = document.getElementById("haveInput");
    let cardPriceInput = document.getElementById("priceInput");
    let cardPicInput = document.getElementById("picInput");
    let cardBuyInput = document.getElementById("buyInput");
    if(cardNameInput.value == "" || cardPicInput.value == "" || cardBuyInput.value == ""){
        model.errorMode = true;
        console.log("error");
        displayCard();
    }else{
    card.name = cardNameInput.value;
    card.want = cardWantInput.value;
    card.have = cardHaveInput.value;
    card.price = cardPriceInput.value;
    card.picLink = cardPicInput.value;
    card.buyLink = cardBuyInput.value;
    listView();}
}