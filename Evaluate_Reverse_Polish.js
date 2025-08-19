/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

let stack =[];


for(let i=0;i<tokens.length;i++)
{
    if(tokens[i] ==="+" || tokens[i] ==="-" || tokens[i] ==="*" || tokens[i]==="/")
    {

        let a = stack.pop();
        let b = stack.pop();
        let ans = eval(`${b}${tokens[i]}${a}`);
        stack.push(Math.trunc(ans));
       
    }else{
        stack.push(tokens[i]);
    }
}

     return Number(stack.pop());
};


// USING INCLUDES
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

let stack =[];


for(let i=0;i<tokens.length;i++)
{
    if(["+","*","/","-"].includes(tokens[i]))
    {

        let a = stack.pop();
        let b = stack.pop();
        let ans = eval(`${b} ${tokens[i]} ${a}`);
        stack.push(Math.trunc(ans));
       
    }else{
        stack.push(tokens[i]);
    }
}

    return Number(stack.pop());
};


// USING MAP
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

let stack =[];
let map ={
    "+":(a,b)=>(b+a),
     "-":(a,b)=>(b-a),
      "/":(a,b)=>Math.trunc(b/a),
       "*":(a,b)=>(b*a)

}

for(let i=0;i<tokens.length;i++)
{
    if(map[tokens[i]])
    {

        let a = stack.pop();
        let b = stack.pop();
        let ans = map[tokens[i]](Number(a), Number(b));
        stack.push(ans);
       
    }else{
        stack.push(tokens[i]);
    }
}

    return Number(stack[0]);
};