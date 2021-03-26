//og array
arr=[1,2,3]
//copying value using ... operator
arr1=[...arr]
//proving that arr and arr1 are different
arr1.push(4)

arr2=[]
arr3=[]
//copying value using for or while
arr1.forEach(element => {
    arr2.push(element)
});
//proving that arr1 and arr2 are different
arr2.push(5)
// copying using map function
arr3=arr2.map((x)=>x)
//proving that arr2 and arr3 are different
arr3.push(6)

console.log(arr,arr1,arr2,arr3)