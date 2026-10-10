export function getCardValue(card) {
  const suit = card.slice(-1);
  const rank = card.slice(0, -1);
  const validSuits = "♠♥♦♣";
  const validRanks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  if (!validSuits.includes(suit)) {
    throw new Error(`Expected a number followed by a suit, but got "${card}"`);
  }
  if (!validRanks.includes(rank)) {
    throw new Error(`Expected a number followed by a suit, but got "${card}"`);
  }

  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K") return 10;
  return Number(rank);
}
