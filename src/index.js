module.exports = function check(str, bracketsConfig) {
  while(true) {
   let len = str.length;

   bracketsConfig.forEach(item => {
    let key = item.join('');
      if (str.includes(key)) {
        str = str.split(key).join('')
      }
    })

    if (len === str.length) {
      return str ? false : true;
    } 
 }
}
