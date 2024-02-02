function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b)
    const answer: number[][] = []
    for (let i = 0; i < nums.length; i+=3) {
        if (Math.abs(nums[i] - nums[i + 2]) > k)  return []
        answer.push([nums[i], nums[i + 1], nums[i + 2]])
    }
    return answer
};