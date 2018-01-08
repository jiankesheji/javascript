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
//把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准
function perms(str) {
    var result = [];
    var n = 0;
    var m = str.length;
    var perm = function(str, n, m) {                           //递归函数
        if (n === m - 1) {                                     //若已经是最后两个互换了，加入数组
            result.push(str.join(''));                         //递归达到字符串长度将其加入数组
        } else {
            for (var i = n; i < m; i++) {                      //循环字符串长度-1次
                str[i] = [str[n], str[n] = str[i]][0];         //第一项依次与后面的数（1.2.3...）互换位置
                perm(str, n + 1, m);                           //n+1代表i每次从下个位置开始，将字符串头去掉，其余继续循环
                str[i] = [str[n], str[n] = str[i]][0];         //交换回来，继续循环，与后一个交换位置            
            }
        }
    };
    perm(str, n, m);
    return result;
}
function permAlone(str) {
    var regex = /(.)\1+/g;                                   //这段正则表示重复的字符
    str = str.split(''); 
    var b = perms(str);
    var filter = b.filter(function(a) {                      //筛选符合条件的项
        return ! a.match(regex);                             //返回没有匹配到重复的项        
    });
    return filter.length;
}
