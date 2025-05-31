function FizzBuzz(input) {
    for (let i = 1; i < input; i++) {
         if (i % 2 == 0 && i % 4 == 0) {
            console.log(i, "FizzBuzz")
         } else if (i % 2 == 0 ) {
            console.log(i, "Fizz")
         } else if (i % 4 == 0 ) {
            console.log(i, "Buzz")
         } else if(i % 2 != 0 && i % 4 != 0) {
            console.log(i)
         }
        
    }
    
}

FizzBuzz(30)