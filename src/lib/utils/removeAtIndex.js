export const removeAtIndex = (arr, index) => {
  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // part of the array after the specified index
    ...arr.slice(index + 1),
  ];
};
