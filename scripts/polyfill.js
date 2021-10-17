// myreverse

Array.prototype.myReverse=function(){
  const arr=this;

  for(let i =0 ;i<(arr.length/2);i++){
      let temp=arr[i];
      arr[i]=arr[arr.length-1-i];
      arr[arr.length-1-i]=temp;
      
  }
}
let array=[1,2,3,4,5,6,7,8];
array.myReverse();
console.log(array);


// mySplit

String.prototype.mySplit = (sep = "") => {
  const reserve = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    const ele = str[i];
    if (ele === sep || (sep === "" && temp)) {
      reserve.push(temp);
      temp = "";
    }
    if (ele !== sep) {
      temp += ele;
    }
  }
  if (temp) {
    reserve.push(temp);
    temp = "";
  }
  return reserve;
};

const str = "this is osme string";
console.log(str.mySplit(" "));

//myJoin

Array.prototype.myJoin=function(str = ''){
    const arr=this;
    let val='';
    for(let i=0;i<arr.length-1;i++){
        val +=""+arr[i]+str;
    }
    val +=""+arr[arr.length-1];
    return val;
}
let arr=[];
let arr2=arr.myJoin(' ');
console.log(str);


