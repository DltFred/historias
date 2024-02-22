export const typeText = (textToType, setTextCallback) => {
  for (let i = 0; i < textToType.length; i++) {
    setTimeout(() => {
      setTextCallback((prevText) => prevText + textToType[i]);
    }, 100 * i);
  }
};