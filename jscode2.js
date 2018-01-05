//对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。 
function steamroller(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      result = result.concat(steamroller(arr[i]));
    }else{
      result.push(arr[i]);
    }
  }
  return result;
}
