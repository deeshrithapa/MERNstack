// let titleElement = document.getElementById("title");
// console.log(titleElement.textContent);

// let contentElement = document.getElementsByClassName("content");
// console.log(contentElement);

// const listItemElements = document.getElementsByTagName('li');
// console.log(listItemElements.length);

// //changes only in js not in html browser
// let content=titleElement.textContent;
// content ="Hello, Everyone!";
// console.log(content);

// //changes in html browser multiple para with same class name 
// const paragraphElements = document.querySelectorAll('.content');
// paragraphElements.forEach(paragraph => {
//     paragraph.innerHTML = 'This is a <strong>modified</strong> paragraph.';
// });

// for (i in paragraphElements){
//     console.log((paragraphElements[i].innerHTML='new sentence'));
// }

// //changes in single para
// let paraElm = document.querySelectorAll('.content');
// console.log(paraElm);
// console.log(paraElm[0].innerHTML='hello all')
// console.log(paraElm[1].innerHTML='heyy all')


//Accessing attributes using DOM properties
var inputElement = document.getElementById('myInput');
console.log(inputElement.type);
console.log(inputElement.value);

//Modifying attributes using DOM properties
inputElement.value="New value";
console.log(inputElement.value);

//using getAttribute() and setAttribute()-inbuilt
var inputElement = document.getElementById('myInput');
console.log(inputElement.getAttribute('value'));

inputElement.setAttribute('value', 'New Value1');
console.log(inputElement.getAttribute('value'));

//hasAttribute
var element = document.getElementById('myInput');
if(element.hasAttribute("class")){
    console.log('Yes');
}else{
    console.log('No');
}

//creating and appending element



