function isProstNumber(num){
  if (num > 1000) return "данные неверны!";
  if (num === 0) return "Это 0!";
  if (num === 1) return "это 1!";
{
      
  let divCount = 0;
      for (let i = 1; i <= num; i++){
          if (num % i === 0) 
             divCount++;
          }
        if (divCount === 2)
        return "простое";
    else
      
      return "непростое";
  }}

console.log(isProstNumber(1500));