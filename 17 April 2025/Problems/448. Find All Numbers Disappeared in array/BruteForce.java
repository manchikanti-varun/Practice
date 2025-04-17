class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> result = new ArrayList<>();
        int n=nums.length;

        for(int i=1;i<=n;i++){
            boolean flag=false;
            for(int j=0;j<n;j++){
                if(nums[j]==i){
                    flag=true;
                    break;
                }
            }
            if(!flag){
            result.add(i);
            }
        }
        return result;
    }
}