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
//实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值
// [].slice.call(arguments) 转arguments为数组；reduce(）累加；filter（）筛选。
function destroyer(arr) {
 return [].slice.call(arguments).reduce(function (prev, next) {  
        return prev.filter( e => e !== next);  
    });  
}
//将给定的数字转换成罗马数字。
//array.forEach(function(Value, index, array);  forEach() 方法对数组的每个元素执行一次提供的函数;
//Value(当前值)index(索引)array(forEach方法正在操作的数组.) 
function convert(num) {
 var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];  
  var romans =["m","cm","d","cd","c","xc","l","xl","x","ix","v","iv","i"];  
  var str = '';  
  nums.forEach(function(item,index,array){  
    while(num >= item){  
      str += romans[index];  
      num -= item;  
    }  
  });  
 return str.toUpperCase();  
}
