// Constants
const PI = 3.1415;
const radius = 5;
const plantSpace = 0.8;
const startPlants = 20;

// Calculate total garden area
const area = PI * radius * radius;

// Maximum number of plants
const maxPlants = Math.floor(area / plantSpace);

// Function to simulate growth
function plantGrowth(weeks) {
  let plants = startPlants;

  for (let i = 0; i < weeks; i++) {
    plants *= 2;
  }

  let percentage = plants / maxPlants;

  console.log(`\nAfter ${weeks} week(s):`);
  console.log(`Plants: ${plants}`);
  console.log(`Capacity: ${maxPlants}`);

  if (percentage > 0.8) {
    console.log("Prune");
  } else if (percentage >= 0.5) {
    console.log("Monitor");
  } else {
    console.log("Plant More");
  }
}

// Test for 1, 2, 3 weeks
plantGrowth(1);
plantGrowth(2);
plantGrowth(3);


const plants = 100 * (2 ** 10);
const requiredArea = plants * plantSpace;
const newRadius = Math.sqrt(requiredArea / PI);

console.log("\nPart 2:");
console.log("Plants:", plants);
console.log("New radius:", newRadius);

