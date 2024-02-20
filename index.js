// binary search on Array

const binarySearchonSortedArray = (arr, num) => {
    const n = arr.length;
    let l = 0;
    let h = n-1

    while(l<=h) {
        let mid =  Math.floor(l - (l - h) / 2);
        if(arr[mid] === num) return mid;
        else if(arr[mid] > num) {
            h=mid-1;
        }
        else {
            l=mid+1
        }
    }
    return -1;
}

const arr = [1,3,5,7,9];

console.log(binarySearchonSortedArray(arr, 7))