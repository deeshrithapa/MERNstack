//Right-angled triangle
for( i=0; i<=5; i++){
    var line= '';
    for ( j=0; j<i; j++){
        line+="*";
    }
    console.log(line);
}

//Solid Rectangle
var row=5;
var cols= 10;
for ( a=0; a<row; a++){
    var lines='';
    for(b=0; b<cols; b++){
        lines+="*";

    }
    console.log(lines);
}

// Inverted triangle 
for (var c = 5; c >= 1; c--) {
    var liness = '';
    for (var d = 1; d <= c; d++) {
        liness += "*";
    }
    console.log(liness);
} 

// Pyramid
 let rows=5;
for(let e=1; e<=rows; e++){
    let lin='';
    for( let f=1; f<=rows-e; f++){
        lin+=' ';
    }
    for (let g=1; g<=(2*e-1); g++){
        lin+='*';
    }
    console.log(lin);
}

// Inverted Pyramid
var ro= 5;
for (let h=5; h>=1; h--){
    let bar='';
    for(let l=1; l<=ro-h; l++){
        bar+=' ';
    }
    for ( let m=1; m<=(2*h-1); m++) {
        bar+='*';
    }
    console.log(bar);
} 

// Hollow Rectangle
let rowss = 5;
let cools = 10;

for (let n = 1; n <= rowss; n++) {
    let bars = '';
    for (let o = 1; o <= cols; o++) {
        if (n === 1 || n === rowss || o === 1 || o === cools) {
            bars += '*';
        } else {
            bars += ' ';
        }
    }
    console.log(bars);
}

// Cross
let size = 5;
for (let cc = 0; cc < size; cc++) {
    let line = '';
    for (let dd = 0; dd < size; dd++) {
        if (cc === dd || dd === size - 1 - cc) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

//X
let sizes = 5;
for (let ee = 0; ee < size; ee++) {
    let line = '';
    for (let ff = 0; ff < size; ff++) {
        if (ee === ff || ff === size - 1 - ee) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

//Number Triangle
let num=5;
for( let p=1; p<=num; p++){
    let ba='';
    for (let q=1; q<=p; q++){
        ba+= q+' ';
    }
    console.log(ba);
}

//Inverted Number Triangle
for (r=5; r>=1; r--){
    let barss='';
    for( let s=1; s<=r; s++){
        barss+= s+' ';
    }
    console.log(barss);
} 

//Repeated Number Triangle
 for( let t=1; t<=5; t++){
    let dash='';
    for(let u=1; u<=t; u++){
        dash+= t+ ' ';
    }
    console.log(dash);
}

//Repeated inverted Number Triangle
for (let v=5; v>=1;v-- ){
    let das= '';
    for(let w=1; w<=v;w++){
        das+= v+' ';
    }
    console.log(das);
} 

// Inverted Number Square
for ( let x=1; x<=5; x++){
    let dashs='';
    for (let y=5; y>=1; y--){
        dashs+=y;
    }
    console.log(dashs);
}

//alphabet triangle 
let roows = 5;

for (let aa = 1; aa <= roows; aa++) {
    let line = '';
    for (let bb = 1; bb <= aa; bb++) {
        line += String.fromCharCode(64 + bb);    }
    console.log(line);
}
