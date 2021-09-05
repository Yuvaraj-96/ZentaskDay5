// 1 Print odd numbers in an array

  //anonymous function
  const oddnum =[1,2,3,4,5,6,7,8,9,10];
var valu=[];
var j=0;
  var oddvalue = function(oddnum)
  {
    for(var i=0;i<oddnum.length;i++)
    {
      if(oddnum[i]%2!=0)
      {
        
        valu[j]=oddnum[i];
        j++;
        
      }
    }
    console.log(valu);
  }
  oddvalue(oddnum);


  //Convert all the strings to title caps in a string array

 const stringarray =["hi all","hello world","happy to code"];
 var valu=[];
 //var j=0;
   var stringval = function(stringarray)
   {
     for(var i=0;i<stringarray.length;i++)
     {
       var tempsrting=stringarray[i];
 
       tempsrting= tempsrting.toLowerCase().split(" ");
 
       for(var j=0;j<tempsrting.length;j++)
       {
         tempsrting[j]= tempsrting[j].charAt(0).toUpperCase()+tempsrting[j].slice(1);
       }
       valu[i]=tempsrting.join(" ");
       
 
     }
     console.log(valu);
   }
   stringval(stringarray);

   //Sum of all numbers in an array

const intarr =[1,2,3,4,5,6,7,8,9,10];
var valu=0;
//var j=0;
  var intarrval = function(intarr)
  {
      
    for(var i=0;i<intarr.length;i++)
    {    
        valu+=intarr[i];
    }
    console.log(valu);
  }
  intarrval(intarr);

//Return all the prime numbers in an array
const primnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let isPrime=function (num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(primnum.filter(isPrime));

  //Return all the palindromes in an array

const palidrom =["HIH",123321,"tnent",12345];
var validate=function(palidrom) 
{
  var stringvalue = palidrom.toString();
  let lenstring=stringvalue.length;
  for(var i = 0;i<lenstring/2;i++)
  {
      if(stringvalue.charAt(i)!=stringvalue.charAt(lenstring-i-1))
      {
        return false;
      }   
  }

  return true;
  


}


console.log(palidrom.filter(validate));