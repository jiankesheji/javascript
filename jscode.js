//18.1.2
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
//检查字符串结尾是否和条件一致
function confirmEnding(str, target) {
  return (str.substr(-target.length)==target);
}
//18.1.3
//实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值
// [].slice.call(arguments) 转arguments为数组；reduce(）累加；filter（）筛选。
function destroyer(arr) {
 return [].slice.call(arguments).reduce(function (prev, next) {  
        return prev.filter( e => e !== next);  
    });  
}
