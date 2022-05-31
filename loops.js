// let i = 0 -> initializes variable
// i < 10 -> is the condition to be checked
// i++ -> this adds 1 to i
for(let i = 0; i < 0; i++){
   // console.log('loop is running', i)
}

for(let i = 0; i < 100; i++){ // cannot use const because i is trying to be reassigned. let allows you to reassign
    // step 1 -> i = 0 then i +1
    // step 2 -> i = 1 then i + 1
    // step 3 -> i = 2 then i + 1
    // step 4 -> i = 3 the i + 1
    //console.log('just testing', i)
}

//               0        1       2        3
const cars = ['Chevy', 'Volvo', 'Saab', 'Ford', 'Ferrari', 'Tesla']
for(let i = 0; i < cars.length; i++){
   

    if(i >= 4 && i < 6){
        console.log('here are my high end cars', cars[i])
        // console.log only high end cars
    }
    //console.log('Check out my car',cars[i] )
}