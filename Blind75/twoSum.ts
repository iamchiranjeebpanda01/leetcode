//! Desc: https://leetcode.com/problems/two-sum/description/

//* Solution 1 (Time: O(n^2), Auxiliary Space: O(1))
function twoSum(nums: number[], target: number): number[] {
    let x = 0;
    let y = 1;
    let returnVal;

    while(x <= nums.length-1){
        while(y <= nums.length-1){
            if(nums[x]+nums[y] === target){
                returnVal = [x,y];
                break;
            }
            else{
                y++;
            }
        }
        x++;
        y = x+1;
    }

    return returnVal;
};