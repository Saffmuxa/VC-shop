export const calcTotalPrice = (items) =>
  items.reduce((acc, hardItem) => (acc = acc + hardItem.price), 0);
