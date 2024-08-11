function missingNo(nums) {
    //sort array
    nums.sort((a,b) => a-b)
    //if 0 and 100 aren't in array, return 0 or 100, else find() and return num that is not nums[i-1]+1
    return nums[0] !== 0 ? 0 : nums[nums.length-1] !== 100 ? 100 : nums.find((thisNum, thisIndex) => thisNum > 0 && (thisNum !== nums[thisIndex-1]+1))-1
}

let arr1 = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]

console.log(missingNo(arr1)) //26