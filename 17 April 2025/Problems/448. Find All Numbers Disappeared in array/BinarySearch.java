class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> result = new ArrayList<>();
        Arrays.sort(nums);
        int n=nums.length;

        for(int i=1;i<=n;i++){
            if(!binarySearch(nums,i)){
                result.add(i);
            }
        }
        return result;
    }

    private boolean binarySearch(int[] nums,int target){
        int left=0,right=nums.length-1;
        while(left<=right){
            int mid=left+(right-left)/2;

            if(nums[mid]==target){
                return true;
            }else if(nums[mid]<target){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
        return false;
    }
}