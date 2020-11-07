const gigaSecondInMilli = Math.pow(10, 12);

export const gigasecond = (givenDate) => {
  return new Date(givenDate.getTime() + gigaSecondInMilli);
};
