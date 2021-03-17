//auto populate array of 1-100
//project made with auto populated array and splice

let MyArray = Array.from({length: 100}, (v,k)=>(k+1))


for (let i = 1; i <MyArray.length; i ++){
    let num = MyArray[i]
//if num % 3 === 0  -- change index to fizz
if (num % 3 === 0 && num % 5 === 0){
    MyArray.splice(MyArray[i]-1, 1, "fizzbuzz")
}
   else if (num % 3 === 0 && num !== 1){
        MyArray.splice(MyArray[i]-1, 1,"fizz")
    }
//elseif num % 5 === 0 -- change index to buzz
   else if(num % 5 === 0){
        MyArray.splice(MyArray[i]-1, 1, "buzz")
    }
  
    

}
console.log(MyArray)