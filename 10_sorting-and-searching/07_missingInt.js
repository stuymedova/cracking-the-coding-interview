/**
 * Given an input file with four billion non-negative
 * integers, provide an algorithm to generate an integer
 * that is not contained in the file. Assume you have
 * 1 GB of memory available for this task.
 *
 * Adapted:
 * Given an array containing n non-negative numbers,
 * provide an algorithm to generate an integer that is not
 * contained in the array.
 *
 * Implicit: array may contain duplicates.
 */

function missingNumber(nums) {
    const auxArray = [];
    nums.map((num) => {
        auxArray[num] = 1;
    });
    for (let i = 0; i < auxArray.length; i++) {
        if (!auxArray[i]) {
            return i;
        }
    }
    return auxArray.length;
}

// TEST CASES
console.log(missingNumber([3,0,1])) // 2
console.log(missingNumber([3,0,1,3,3,3])) // 2
console.log(missingNumber([0,1])) // 2
console.log(missingNumber([0,1,1])) // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8
console.log(missingNumber([9,6,3,4,2,0,3,5,2,7,0,1])) // 8
