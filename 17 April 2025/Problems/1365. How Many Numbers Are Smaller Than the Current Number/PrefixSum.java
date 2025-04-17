class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] freq = new int[101];
        int[] prefixSum = new int[101];

        for (int num : nums) {
            freq[num]++;
        }

        for (int i = 1; i <= 100; i++) {
            prefixSum[i] = prefixSum[i - 1] + freq[i - 1];
        }

        int[] result = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            result[i] = prefixSum[nums[i]];
        }

        return result;
    }
}
