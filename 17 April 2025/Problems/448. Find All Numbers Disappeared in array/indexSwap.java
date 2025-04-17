class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
       int i=0;

       while(i<nums.length){
        if(nums[i]!=nums[nums[i]-1]){
            int temp=nums[i];
            nums[i]=nums[temp-1];
            nums[temp-1]=temp;
            }else{
                i++;
            }
        }
        List<Integer> result = new ArrayList<>();
        for(int j=0;j<nums.length;j++){
            if(nums[j]!=j+1){
                result.add(j+1);
            }
        }
        return result;
    }
}