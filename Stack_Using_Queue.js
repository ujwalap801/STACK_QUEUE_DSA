
var MyStack = function() {
       this.q1 =[];
    this.q2 =[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q1.push(x);
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n =this.q1.length;
    for(let i=0;i<n-1;i++)
    {
        let frontElement = this.q1.shift();
        this.q2.push(frontElement);
    }

    let ans = this.q1.shift();

  let temp = this.q1;
   this.q1= this.q2;
   this.q2= temp;

    return ans;
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n =this.q1.length;
    for(let i=0;i<n-1;i++)
    {
        let frontElement = this.q1.shift();
        this.q2.push(frontElement);
    }

     let ans = this.q1.shift();
     this.q2.push(ans);

   let temp = this.q1;
   this.q1= this.q2;
   this.q2= temp;

   return ans;


    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
 
    return this.q1.length ===0;

};


