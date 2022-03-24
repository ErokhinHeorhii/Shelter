var runLengthEncoding = function(str){
    let result =[];
    let count=0;
    let chars = str.split('')
    for (let i=0; i<chars.length; i++){
       count = result[chars[i]]? result[chars[i]] : 0;
       result[chars[i]] = count + 1;
    }
   console.log(result.reverse())
  }

  runLengthEncoding('hello')