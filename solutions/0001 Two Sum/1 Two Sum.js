/**
 * @author etheranl(haoran)
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let result = []
  nums.forEach((num, i) => {
    if (map[num] !== undefined) {
      result = [map[num], i]
    } else {
      map[target - num] = i;
    }
  })
  return result;
};
console.log(twoSum([1, 3, 4], 7));

const twoSum1 = (nums, target) => {
    // target 不能大于等于 Number.MAX_SAFE_INTEGER
    // 时间复杂度 O(n)
    // 空间复杂度 O(1)
    let firstNum = null;
    let secondNumIndex = -1;
    for (let i = 0; i < nums.length; i += 1) {
        firstNum = nums[i];
        nums[i] = Number.MAX_SAFE_INTEGER;
        secondNumIndex = nums.indexOf(target - firstNum);
        if (secondNumIndex > -1) {
            return [i, secondNumIndex];
        }
        nums[i] = firstNum;
    }
    return [-1, -1];
}