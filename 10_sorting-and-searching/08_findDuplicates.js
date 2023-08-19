/**
 * You have an array with all the numbers from 1 to N,
 * where N is at most 32,000. The array may have duplicate
 * entries and you do not know what N is. With only 4
 * kilobytes of memory available, how would you print all
 * duplicate elements in the array?
 *
 * Adapted:
 * Given an integer array nums of length n where all the
 * integers of nums are in the range [1, n] and each
 * integer appears once or twice, return an array of all
 * the integers that appears twice.
 *
 * You must write an algorithm that runs in O(n) time and
 * uses only constant extra space.
 */

export function findDuplicates(nums) {
    const duplicates = [];

    for (let num of nums) {
        let cur = Math.abs(num) - 1;

        if (nums[cur] < 0) {
            duplicates.push(cur + 1);
        }
        nums[cur] *= -1;
    }

	// Restore numbers
	for (let i = 0; i < nums.length; i++) {
		nums[i] = Math.abs(nums[i]);
	}

	return duplicates;
};

// TEST CASES
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // [2,3]
console.log(findDuplicates([1,1,2])); // [1]
console.log(findDuplicates([1])); // []
console.log(findDuplicates([1,3,2])); // []
