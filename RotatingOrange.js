/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length; //row
    let n = grid[0].length; //column

let queue =[];
    // First add all the rotten organges in queue
    for(let i=0;i<m;i++)
{
    for(let j=0;j<n;j++)
    {
        if(grid[i][j] ===2)
        {
            queue.push([i,j,0]);   
                 }
    }

}

let Maxmin =0;

// Mark all ajd nodes are rotten and push in queue till it's not empty
while(queue.length)
{
     console.log(grid[0]);
        console.log(grid[1]);
           console.log(grid[2]);
           console.log("-----")
                 console.log("-----")

    let [x,y,min]= queue.shift();
    if( x>0 && grid[x-1][y] ===1)
    {
        grid[x-1][y]=2;
           queue.push([x-1,y, min+1]);
    }

        if(x <m-1 &&grid[x+1][y]===1)
    {
        grid[x+1][y]=2;
     queue.push([x+1,y, min+1]);
    }


        if(y >0 && grid[x][y-1] ===1)
    {
        grid[x][y-1]=2;
         queue.push([x,y-1, min+1]);
    }


        if(y <n-1 &&grid[x][y+1] ===1)
    {
        grid[x][y+1]=2;
     queue.push([x,y+1, min+1]);
    }


    Maxmin = Math.max(Maxmin, min);
}



// finally run over each element to check if any fresh is remaining


    for(let i=0;i<m;i++)
{
    for(let j=0;j<n;j++)
    {
        if(grid[i][j] ===1)
        {
          return -1;
        }
    }




}

return Maxmin;
};


