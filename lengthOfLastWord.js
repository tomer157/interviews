const lengthOfLastWord = (s) => {
  let onLastWord = false;
  let lastWordLen = 0;

  if (s.length === 0) {
    return 0;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      onLastWord = true;
      lastWordLen++;
    } else {
      if (onLastWord) {
        break;
      }
    }
  }
  console.log(lastWordLen);
  return lastWordLen;
};

lengthOfLastWord(' hello world ');
