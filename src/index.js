module.exports = function check(str, bracketsConfig) {
  let library = bracketsConfig.reduce(
    (obj, value) => ((obj[value[0]] = value[1]), obj),
    {}
  );
  console.log(library);

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (library[str[i]]) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (library[stack[stack.length - 1]] === str[i]) {
        stack.pop();
      } else {
        return false;
      }
      //console.log(library[stack[stack.length - 1]] ,str[i])
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};
