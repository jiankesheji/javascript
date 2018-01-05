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
//写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
//function where(collection, source) {
   var keys = Object.keys(source);                                                    //获得对象2所有属性 
    return collection.filter(m => {                                                   //传入数组1的所有对象，符合条件的返回
        return keys.every(key => m.hasOwnProperty(key) && m[key] === source[key]);    //是否满足条件？数组1中对象包含对象2，且值都相等
    });
}
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
function pair(str) {
  var obj = {'A':'T','T':'A','G':'C','C':'G'};
  return str.split('').map(e => [e,obj[e]]);
}
