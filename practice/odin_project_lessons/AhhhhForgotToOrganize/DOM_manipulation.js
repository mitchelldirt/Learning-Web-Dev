// Below is example HTML code to reference to with the DOM code
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>

// There are lots of different wats to target parts of nodelists/nodes with selectors
const container = document.querySelector('#container');
// select the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// select the first child of #container => .display

const controls = document.querySelector('.controls');   
// select the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

// You can also create elements
// THIS WILL NOT put the new element into the DOM - just creates it in memory
const div = document.createElement('div'); // this will create a div element in the document

// You can append your created element to the DOM like so
'#container'.appendChild(div); // appends at the end of the parent node
'#container'.insertBefore(div, '.controls'); // appends div to before the .controls class element in the #container parent node

// You can remove an element from a parent node as well
'#container'.removeChild('div'); // removes div from parent node and returns a reference to the child removed

// You can also add styles to the elements you added in with inline styling
const div = document.createElement('div'); // create a new div element
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules

// You can also change the attributes that are set on elements

div.setAttribute('id', 'theDiv');                              
// if id exists update it to 'theDiv' else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute

// You should get used to messing with classes in css using JS. Toggling is cleaner than adding and removing inline css

div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// remove "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

// You can change the content of the div above using either of the two below properties
div.textContent = 'Hello World!'; 
div.innerHTML = '<span>Hello World!</span>' // use sparingly; only when using tags inline

