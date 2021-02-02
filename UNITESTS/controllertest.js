
function pushCard(){
    let cardNameInput = model.tempCard[0].name;
    let cardWantInput = model.tempCard[0].want;
    let cardHaveInput = model.tempCard[0].have;
    let cardPriceInput = model.tempCard[0].price;
    let cardPicInput = model.tempCard[0].picLink;
    let cardBuyInput = model.tempCard[0].buyLink;
    
    if(cardNameInput == "" || cardPicInput == "" || cardBuyInput == ""){
        model.errorMode = true;
        console.log("error");
        displayCard();
    }else{
        model.cards.push({
            name: cardNameInput,
            want: cardWantInput,
            have: cardHaveInput,
            price: cardPriceInput,
            buyLink: cardBuyInput
        });
        console.log("pushed");
        model.errorMode = false;
        clearTempCard();
        listView();}
    }
    
    function deleteCard(index){
        model.cards.splice(index, 1)
        listView();
    }
    
    function updateCard(index) {
        const card = model.cards[index];
        let cardNameInput = model.tempCard[0].name;
        let cardWantInput = model.tempCard[0].want;
        let cardHaveInput = model.tempCard[0].have;
        let cardPriceInput = model.tempCard[0].price;
        let cardPicInput = model.tempCard[0].picLink;
        let cardBuyInput = model.tempCard[0].buyLink;
        if(cardNameInput == "" || cardPicInput == "" || cardBuyInput == ""){
            model.errorMode = true;
            console.log("error");
            displayCard();
        }else{
        card.name = cardNameInput == "" ? card.name : cardNameInput;
        card.want = cardWantInput == "" ? card.want : cardWantInput;
        card.have = cardHaveInput == "" ? card.have : cardHaveInput;
        card.price = cardPriceInput == "" ? card.price : cardPriceInput;
        card.picLink = cardPicInput == "" ? card.picLink : cardPicInput;
        card.buyLink = cardBuyInput == "" ? card.buyLink : cardBuyInput;
        clearTempCard();
        listView();}
    }
    function clearTempCard(){
    model.tempCard[0].name = "";
    model.tempCard[0].want = 0;
    model.tempCard[0].have = 0;
    model.tempCard[0].price = 0;
    model.tempCard[0].picLink = "";
    model.tempCard[0].buyLink = "";
    }
    
    function addTempCard(index){
    model.tempCard[0].name = model.cards[index].name;
    model.tempCard[0].want = model.cards[index].want;
    model.tempCard[0].have = model.cards[index].have;
    model.tempCard[0].price = model.cards[index].price;
    model.tempCard[0].picLink = model.cards[index].picLink;
    model.tempCard[0].buyLink = model.cards[index].buyLink;
    }