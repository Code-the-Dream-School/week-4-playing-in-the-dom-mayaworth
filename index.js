//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

let div = document.createElement('div');
let square = document.getElementsById('a-1');

div.className = 'square';
div.innerText = 'x';

div.click=function (e) {
 if( e.Target.innerText === 'x'){
     e.Target.innerText = '0';
 } else {
     e.Target.innerText = 'x';
 }

}

//resolve // QUESTION 1 here




//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

const select = document.createElement ("select");
const divSecond = document.getElementByTagName ('a-2');

for( let i=0; i<colors.length; i++) {
    let optionElement = document.createElement ("option");
    option.value = colors[i];
    option.innerText = color[i];
    select.appendChild(optionElement);

}

divSecond.appendChild(select);

const button = document.createElement('button');
 button.innerText = "Delete";

 button.click = (e) => {
    select.option[select.selectedIndex].remove();
 }

divSecond.appendChild(button);

//resolve // QUESTION 2 here






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
const radiusSelect = docuemnt.getElementById('radius');
const volumeSelect = document.getElementById('volume');
const areaSelect = document.getElementById('area');

const calculate_sphere = () =>{
    let radius = radiusSelect.value;
    

    let volume = ((4/3)* Math.PI * (radius^3));
    console.log(volume);
    let surfaceArea = (4 * Math.PI * (radius^2));
    console.log(surfaceArea);

    volumeSelect.value = volume;
    areaSelect.value = SurfaceArea;

        e.preventDefault();
        return false;

 }

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here


const divOne = document.createElement("button");
const divTwo = document.createElement("button");
const divThree = document.createElement("button");

const divFour = document.getElementById("a-4");

divOne.innerText = "Hide Question One";
divTwo.innerText = "Hide Question Two";
divThree.innerText = "Hide Question Three";

divFour.appendChild(divOne);
divFour.appendChild(divTwo);
divFour.appendChild(divThree);

divOne.onClick = (e) => {
    let q1 = document.querySelector(".question-item:nth-child(1)");
    let questionHide = "Hide Question One";
    let questionShow = "Show Question Two";
    if (q1.style.display === "block" || !q1.style.display) {
        q1.style.display = "none";
        divOne.innerText = showText;

    } else{
        q1.style.display = "block";
        divOne.innerText = hideText;
    }

}