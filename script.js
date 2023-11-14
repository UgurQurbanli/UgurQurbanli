let arr = [1,2,3,4,4,5,6,2,1,5]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) == -1) {
        arr2.push(arr[i]);
    }
}


console.log(arr2);