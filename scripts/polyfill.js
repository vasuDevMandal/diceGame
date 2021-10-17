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
  const res = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === sep || (sep === "" && temp)) {
      res.push(temp);
      temp = "";
    }
    if (el !== sep) {
      temp += el;
    }
  }
  if (temp) {
    res.push(temp);
    temp = "";
  }
  return res;
};


const str = "this is osme string";
console.log(str.mySplit(" "));
