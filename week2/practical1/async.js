//await needs async
//setTimeout = callback function and arrow function too

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched!");
        }, 1000);
    });
}
async function getData(){
    const data = await fetchData();
    console.log(data);
}
getData();  

