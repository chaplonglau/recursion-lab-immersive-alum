// Code your solution here!



function printString(myString){
  console.log(myString[0]);
  if (myString.length>1){
    let mySubString=myString.substring(1,myString.length);
    printString(mySubString);
  }
  else {
    return true;
  }
}

function reverseString(myString){
  if (myString.length==1){
    return myString;
  }
  else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(str){
  if (str.length<2){
    return true;
  }
  else
  {
    if (str[0]==str[str.length-1]){
      isPalindrome(str.substring(1,str.length-1))
    }
    else {
      return false; 
    }
  }
  return true;
}

function addUpTo(myArray, index){
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(arr){
  if (arr.length==1){
    return arr[0];
  }
  else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, num){
  if (arr.length==0){
    return false;
  }
  else if (arr[0]==num){
    return true;
  }
  else {
    return includesNumber(arr.slice(1),num); 
  }
}