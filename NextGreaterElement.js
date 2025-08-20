let a1 = [4, 1, 2];
let a2 = [1, 3, 4, 2];

function Next(a1, a2) {
    let ans = [];
    for (let i = 0; i < a1.length; i++) {
        let found = false;

        // Step 1: Find where a1[i] is in a2
        for (let j = 0; j < a2.length; j++) {
            if (a2[j] === a1[i]) {
                
                // Step 2: Look to the right of that position in a2
                for (let k = j + 1; k < a2.length; k++) {
                    if (a2[k] > a1[i]) {
                        ans.push(a2[k]); // Next greater element found
                        found = true;
                        break; // stop searching
                    }
                }
                
                break; // stop once we found a1[i] in a2
            }
        }

        // Step 3: If no greater element was found, push -1
        if (!found) {
            ans.push(-1);
        }
    }
    return ans;
}

console.log(Next(a1, a2));


// O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(arr1, arr2) {
    let ans=[];
    let map ={};
    let stack =[];
    let n = arr2.length;
    stack.push(arr2[n-1]);
    map[arr2[n-1]] =-1;

for(let i=n-2;i>=0;i--)
{
    let top = stack[stack.length-1];
    if(arr2[i] <top)
    {
        map[arr2[i]] = top;
    }else{
        while(stack.length)
        {
            let top =stack[stack.length-1]
            if(top < arr2[i])
            {
               stack.pop();
            }
            else{
        map[arr2[i]] = top;
        break;
            }
        }

        if(stack.length ===0)
        {
            map[arr2[i]] =-1;
        }
    }


         stack.push(arr2[i]);
}

for(let i=0;i<arr1.length;i++)
{
  ans.push(map[arr1[i]]);
}

return ans;

};