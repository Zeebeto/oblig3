const appDiv = document.getElementById("app");
const model = {
    cards: [
        { 
        name: "Questing Beast",
        want: 4,
        have: 0,
        price: 13,
        buyLink: "https://www.cardmarket.com/en/Magic/Products/Singles/Throne-of-Eldraine/Questing-Beast",
        picLink: "https://static.cardmarket.com/img/32c208d02b46456211f793f17c87ed48/items/1/ELD/399999.jpg",
        },
        { 
        name: "The Great Henge",
        want: 2,
        have: 0,
        price: 27,
        buyLink: "https://www.cardmarket.com/en/Magic/Products/Singles/Throne-of-Eldraine/The-Great-Henge",
        picLink: "https://static.cardmarket.com/img/1d92d33acc18427a98af7cf38ec75e2a/items/1/ELD/401744.jpg",
        },
                    ],
    tempCard:[{
        name: "",
        want: 0,
        have: 0,
        price: 0,
        buyLink: "",
        picLink: "",
    }],
    Preview: "", 
    errorMode: false,
            };
