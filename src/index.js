module.exports = function check(str, bracketsConfig) {
const firstElement = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
const pairElement = {
  ')': '(',
  '}': '{',
  ']': '[',
  '|': '|',
  '2': '1',
  '4': '3',
  '6': '5', 
  '7': '7', 
  '8': '8', 
};
let res = [];

for (let i = 0; i < str.length; i++) { 
  if (firstElement.includes(str[i])) {
    res.push(str[i]);
  } else {
    if (res.length === 0) {
      return false;
    }
    // if (str[i] === res[res.length - 1]) {
    //   res.pop();
    // } else {
    
      if (pairElement[str[i]] === res[res.length - 1] ) {
        res.pop();
        if (res[res.length - 1] === '|') {
        return true; }
      } else {
        return false;
      // } 
    }
  }
}
// console.log(res);
return res.length === 0;
}
