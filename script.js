const facts = [
  "Bananas are berries, but strawberries aren't.",
  "A group of flamingos is called a 'flamboyance'.",
  "You can't hum while holding your nose.",
  "Octopuses have three hearts. Two are just drama queens.",
  "Scotland’s national animal is the unicorn.",
  "You burn more calories sleeping than watching TV.",
  "Wombat poop is cube-shaped. Nature is weird.",
  "Slugs have four noses. Overkill?",
  "Sharks existed before trees.",
  "Honey never spoils. That 3,000-year-old honey? Still edible."
];

function generateFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factBox = document.getElementById("factBox");
  factBox.style.animation = "none"; // reset animation
  void factBox.offsetWidth; // trigger reflow to restart animation
  factBox.innerText = facts[randomIndex];
  factBox.style.animation = "pop 0.3s ease";
}
