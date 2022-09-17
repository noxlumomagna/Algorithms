nums = number array
target = number

function linearSearch(nums,target){
  for(let i=0; i<nums.length;i++){
   if(nums[i] === target){
      return true;
      }
   }
   return false;
}
