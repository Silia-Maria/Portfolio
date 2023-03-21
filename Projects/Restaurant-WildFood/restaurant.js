"use strict";
// Dishes 
let dishes = [
    {
        type: "starter",
        name: "Veggie Platter",
        definition: "seasonal fermented vegetables, served with honey-dip",
        price: 8
    },
    {
        type: "starter",
        name: "Potato-Focaccia",
        definition: "home-made potato-focaccia, served with butter",
        price: 5
    },
    {
        type: "veggie",
        name: "Mushroom Crumble",
        definition: "local mushrooms with spinach and pumpkinseeds",
        price: 9
    },
    {
        type: "veggie",
        name: "Seasonal Ravioli",
        definition: "home-made ravioli filled with seasonal vegetables",
        price: 8
    },
    {
        type: "meat",
        name: "Waldviertler Chicken",
        definition: "roasted chicken with caramalizes carottes in redwine sauce ",
        price: 13
    },
    {
        type: "meat",
        name: "Lamb stew",
        definition: "local lamb stew with potatoes and vegetables",
        price: 15
    },
    {
        type: "sweet",
        name: "Poppy-Seed dumplings",
        definition: "special austrian wheat dumplings with poppy-seeds, sugar and butter",
        price: 7
    },
    {
        type: "sweet",
        name: "Chocolate Tart",
        definition: "grandma's famous chocolate tart, served with vanilla ice cream and fruit",
        price: 8
    }
];
//currency Formater
const currencyFormater = new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
});
// print array dishes
for (let dish of dishes) {
    let result = `<div>
    <div class="d-flex justify-content-between"> 
    <p><b>${dish.name}</b></p>
    <p>${currencyFormater.format(dish.price)}</p>
    </div>  
       <p>${dish.definition}</p>
     <hr></div> `;
    if (dish.type == "starter") {
        let starterRow = document.getElementById("starters");
        starterRow.innerHTML += result;
    }
    else if (dish.type == "veggie") {
        let veggieRow = document.getElementById("veggie");
        veggieRow.innerHTML += result;
    }
    else if (dish.type == "meat") {
        let meatRow = document.getElementById("meat");
        meatRow.innerHTML += result;
    }
    else {
        let dessertRow = document.getElementById("dessert");
        dessertRow.innerHTML += result;
    }
}
//Drinks
let drinks = [{
        type: "beer",
        name: "Tegernseer (Flasche)",
        price: 4.5
    }, {
        type: "beer",
        name: "Schremser (vom Fass)",
        price: 5
    }, {
        type: "shots",
        name: "Wiskey",
        price: 5
    }, {
        type: "shots",
        name: "Tequila Don Juan",
        price: 3.2
    }, {
        type: "mix",
        name: "Gin&Tonic",
        price: 9
    }, {
        type: "mix",
        name: "Vodka-Mate",
        price: 10
    }, {
        type: "coffe",
        name: "Cappochino",
        price: 4.5
    }, {
        type: "coffe",
        name: "Tea (different Flavors)",
        price: 4.3
    }, {
        type: "non-alcohol",
        name: "Water (sparkling/flat)",
        price: 3
    }, {
        type: "non-alcohol",
        name: "Fresh Juice (ask about Juice of the day)",
        price: 5
    }, {
        type: "wine",
        name: "Sauvignon Blanc (1/8)",
        price: 6
    }, {
        type: "wine",
        name: "Muskateller (1/8)",
        price: 5
    }
];
// Print array Drinks
for (let drink of drinks) {
    let result = `<div>
    <div class="d-flex justify-content-between"> 
    <p>${drink.name}</p>
    <p>${currencyFormater.format(drink.price)}</p>
    </div>
    
    <hr>
</div>`;
    if (drink.type == "wine") {
        let wineRow = document.getElementById("wine");
        wineRow.innerHTML += result;
    }
    else if (drink.type == "beer") {
        let beerRow = document.getElementById("beer");
        beerRow.innerHTML += result;
    }
    else if (drink.type == "shots") {
        let shotRow = document.getElementById("shots");
        shotRow.innerHTML += result;
    }
    else if (drink.type == "mix") {
        let mixRow = document.getElementById("mix");
        mixRow.innerHTML += result;
    }
    else if (drink.type == "non-alcohol") {
        let noAlcRow = document.getElementById("non-alcohol");
        noAlcRow.innerHTML += result;
    }
    else {
        let coffeRow = document.getElementById("coffeTea");
        coffeRow.innerHTML += result;
    }
    ;
}
