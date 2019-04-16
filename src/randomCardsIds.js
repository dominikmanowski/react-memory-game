import { random, shuffle } from "lodash";

const AMOUNT_OF_PHOTOS = 992;

const randomCardsIds = length => {
  let array = [];

  while (array.length < length / 2) {
    array.push(random(AMOUNT_OF_PHOTOS));
    array = Array.from(new Set(array));
  }

  const doubledArray = array.concat(array);

  return shuffle(doubledArray);
};

export default randomCardsIds;
