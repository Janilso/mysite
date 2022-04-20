const stringCapitalized = (value: string | undefined = '') => {
  const capitalize = (text: string) =>
    text
      .trimStart()
      .split(/ /g)
      .map(
        (word) =>
          `${word.substring(0, 1).toUpperCase()}${word
            .substring(1)
            .toLowerCase()}`
      )
      .join(' ')
      .replace(/\s+/g, ' ');
  return value ? capitalize(value) : value;
};

export { stringCapitalized };
