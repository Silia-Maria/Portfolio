//events
let events = [{
    name: "Wine Tasting Alora",
    description: "The Winery Alora from Italy is hosting a special wine tasting with it's best wines produced throughout the Year at the Wild-Food Restaurant. They're going to present and serve their wines.",
    entry: "Free Entry",
    date: "Do 07.01.23, 6:30 PM"
}, {
    name: "Live Concert",
    description: "The newcomer Rene is going to create a magical atmosphere with his latest album. Rene is known for his relaxing beats and incredible soft voice.",
    entry: "Free Entry",
    date: "Di 15.01.23, 7:30 PM"
}, {
    name: "Beer Tasting with our seasonal Tapas",
    description: "Our house brewery is presenting their different beers which is going to be complemented by seasonal Tapas especially created for each beer.",
    entry: "50€ per Person",
    date: "Sa 20.02.23, 7:00 PM"
}, {
    name: "Wine Tasting with Tapas",
    description: "The Winery Brainschneid from Vienna is hosting a wine tasting. The wines are going to be served with Tapas that are created to go perfectly with each of the presented wines.",
    entry: "Free Entry",
    date: "Do 07.01.23, 18:30 Uhr"
}
];

// Print Events
let eventRow = document.getElementById("events");
for (let event of events) {
let eventResult = `<div>
   <h5>${event.name}</h5>
  <p>${event.description}</p>
   <p><em>${event.entry}</em></p>
   <p>${event.date}</p>
 </div>
 <hr>`;
eventRow.innerHTML += eventResult;

}
