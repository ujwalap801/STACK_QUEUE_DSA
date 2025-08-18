

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack =[];
    let ans ="";

    for(let i=0;i<s.length;i++)
    {
       if(s[i] === "(")
       {
        stack.push(s[i]);
        let n = stack.length
        if(n>1)
        {
            ans = ans +s[i];
        }
       }else{
            let n = stack.length
        if(n >1)
        {
            ans = ans+s[i];
          
        }
            stack.pop();
    
       }

    }

    return ans;
};


// Using Teterray operator
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack =[];
    let ans ="";

    for(let i=0;i<s.length;i++)
    {
       if(s[i] === "(")
       {
        stack.push(s[i]);
        let n = stack.length
       ans += ((n>1)?s[i] :"");
       }else{
            let n = stack.length
 
      ans += ((n>1)?s[i] :"");
          
            stack.pop();
    
       }


    }

    return ans;
};


// WITHOUT STack
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let level =0
    let ans ="";

    for(let i=0;i<s.length;i++)
    {
       if(s[i] === "(")
       {
   level++;
  
       ans += ((level>1)?s[i] :"");
       }else{
           
      
      ans += ((level>1)?s[i] :"");
          
   
          level--;
    
       }


    }

    return ans;
};