let money = 0;
let autoClicker = 0;
let upgrades = {
  goldenTweet: { cost: 15, multiplier: 1 },
  wall: { cost: 100, multiplier: 5 },
  trumpTower: { cost: 500, multiplier: 25 },
  megaRally: { cost: 3000, multiplier: 150 },
  twitterBot: { cost: 10000, multiplier: 750 },
  billionaireYacht: { cost: 50000, multiplier: 4000 }
};

const trump = document.getElementById("trump");
const moneyDisplay = document.getElementById("money");
const quotes = document.getElementById("quotes");

trump.addEventListener("click", () => {
  money += 1;
  displayMoney();
  showQuote();
});

function buyUpgrade(name) {
  if (money >= upgrades[name].cost) {
    money -= upgrades[name].cost;
    autoClicker += upgrades[name].multiplier;
    upgrades[name].cost = Math.floor(upgrades[name].cost * 1.5);
    displayMoney();
  }
}

function displayMoney() {
  moneyDisplay.textContent = `Money: $${money}`;
}

function showQuote() {
  const trumpQuotes = [
    "Make clicking great again!",
    "Nobody clicks better than me!",
    "Winning clicks, folks!",
    "Tremendous money!",
    "The best click ever!"
  ];
  const random = trumpQuotes[Math.floor(Math.random() * trumpQuotes.length)];
  quotes.textContent = random;
}

// Auto-clicker loop
setInterval(() => {
  money += autoClicker / 100;
  displayMoney();
}, 1000);
