//颠倒字符串
newstr= str.split("").reverse().join("");
//首字母大写
function titleCase(str) {
  var array = str.split(" ");
  for (var i = 0; i < array.length; i++){
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length).toLowerCase();
  }
  var string = array.join(" ");

  return string;
}
