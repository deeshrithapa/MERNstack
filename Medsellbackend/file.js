

// const result= math.add(9,1);
// const result1= math.subtract(6,1);
// const result2= math.product(7,1);
// const result3= math.divide(2,1);

// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);

const fs = require('fs');
 
const read= fs.readFile('greet.txt', 'utf-8', (err,data)=>{
    if(err) throw err;
    console.log(data);
})

const write= fs.writeFile ('greet.txt', 'Heyyaaa', (err)=>{
    if (err){
        console.log('Error:', err);
    }else{
        console.log('File written sucessfully');
    }
})

const update= fs.appendFile ('greet.txt', 'Hieeee', (err)=>{
    if (err){
        console.log('Error:', err);
    }else{
        console.log('File updates sucessfully');
    }
})

module.exports={ read, write, update}