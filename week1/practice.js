var row=5; 
for (let i=1; i<=row; i++){
    let line='';
    for (let j=1; j<=i; j++){
        line+= String.fromCharCode(64+j);
    }
console.log(line);}

        