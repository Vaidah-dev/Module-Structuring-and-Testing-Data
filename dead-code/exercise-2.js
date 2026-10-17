const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];
const petsStartingWithH = pets.filter((pet) => pet[0] === "h");

function countAndCapitalisePets(petsArr) {
  const petCount = {};

  petsArr.forEach((pet) => {
    const capitalisedPet = pet.toUpperCase();
    if (petCount[capitalisedPet]) {
      petCount[capitalisedPet] += 1;
    } else {
      petCount[capitalisedPet] = 1;
    }
  });
  return petCount;
}

const countedPetsStartingWithH = countAndCapitalisePets(petsStartingWithH);

console.log(countedPetsStartingWithH);
