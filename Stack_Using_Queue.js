
var MyStack = function() {
       this.q1 =[];
    this.q2 =[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {  ///O(1)
  this.q1.push(x);
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() { //O(N)
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
MyStack.prototype.top = function() { //O(N)
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
MyStack.prototype.empty = function() { //0(1)
 
    return this.q1.length ===0;

};




// USING ONE QUEUE

var MyStack = function() {
    this.q1 =[];
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
    let n = this.q1.length;
    for(let i=0;i<n-1;i++)
    {
        let firstElement = this.q1.shift();
        this.q1.push(firstElement);
    }
    
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i=0;i<n-1;i++)
    {
        let firstElement = this.q1.shift();
        this.q1.push(firstElement);
    }
    
    let ans = this.q1.shift();
    this.q1.push(ans);
    return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {

    if(this.q1.length ===0) return true;

    return false;

    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */