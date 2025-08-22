/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {
    arr= [...arr,...arr]
    let stack =[];
    let n = arr.length;
    let ans = Array(n).fill(-1);

    stack.push(ans[n-1]);
    for(let i=n-2;i>=0;i--)
    {
        while(stack.length)
        {
            let top = stack[stack.length-1];
            if(arr[i] <top)
            {
                ans[i] = top;
                break;
            }else{
                stack.pop();
            }
        }

        stack.push(arr[i]);
    }

    return ans.slice(0, n/2);
    
};


// WITHOUT DOUBLE ARRAY
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {

    let stack =[];
    let n = arr.length;
    let ans = Array(n).fill(-1);

    stack.push(ans[n-1]);
    for(let i=(2*n)-2;i>=0;i--)
    {
        while(stack.length)
        {
            let top = stack[stack.length-1];
            if(arr[i%n] <top)
            {
                ans[i%n] = top;
                break;
            }else{
                stack.pop();
            }
        }

        stack.push(arr[i%n]);
    }

    return ans.slice(0, n);
    
};