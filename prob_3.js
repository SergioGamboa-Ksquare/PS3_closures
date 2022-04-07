function donkeygame(amountOfTries){
var tail = Math.floor(Math.random() * 10) + 1;
amountOfTries=amountOfTries-1
var Tries=0

return function Play(guess){
var guess = Math.floor(Math.random() * 10) + 1;
  
for (Tries; Tries <= amountOfTries; Tries++) {
  var guess = Math.floor(Math.random() * 10) + 1;
  console.log('----------------------')
  console.log('Try #',Tries+1);
  console.log('Donkey Tail:',tail)
  console.log('Your guess:',guess)
  
  
  if (guess > tail){
          console.log('The tail is below')
          } else {
            
    if (guess < tail) {
          console.log('The tail is above')
      }
      else {
    if (guess = tail) {
          console.log('You hit the mark!')
      }
      
        }
        
        } 

        
  
 
}
console.log('You have no tries left')
}

}
donkeygame(2)()