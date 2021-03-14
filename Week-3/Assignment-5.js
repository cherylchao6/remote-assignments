function twoSum(nums, target) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    var rest = target - nums[i];
    if (nums.indexOf(rest) !== -1) {
      output.push(i, nums.indexOf(rest));
      break;
    }
  }

  return output;
}

console.log(twoSum([2, 7, 11, 15, 22], 29))

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/