// 1 Print odd numbers in an array

( function()
  {
  const oddnum =[1,2,3,4,5,6,7,8,9,10];
  var valu=[];
  var j=0;
    for(var i=0;i<oddnum.length;i++)
    {
      if(oddnum[i]%2!=0)
      {
        
        valu[j]=oddnum[i];
        j++;
        
      }
    }
    console.log(valu);
  })();


  //Convert all the strings to title caps in a string array

  
//var j=0;
  ( function()
  {
    const stringarray =["hi all","hello world","happy to code"];
    var valu=[];
    for(var i=0;i<stringarray.length;i++)
    {
      var tempsrting=stringarray[i];
     // split
      tempsrting= tempsrting.toLowerCase().split(' ');

      for(var j=0;j<tempsrting.length;j++)
      {
        tempsrting[j]= tempsrting[j].charAt(0).toUpperCase()+tempsrting[j].slice(1);
      }
      valu[i]=tempsrting.join(" ");
      

    }
    console.log(valu);
  })();

  //Sum of all numbers in an array
  
//var j=0;
(function()
{
  const intarr =[1,2,3,4,5,6,7,8,9,10];
  var valu=0;
  for(var i=0;i<intarr.length;i++)
  {    
      valu+=intarr[i];
  }
  console.log(valu);
})();



  
  