// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
// Part1
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
console.log(mainEl[0])

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
    // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl[0].style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>. 
// There are a variety of ways to do this; 
// pick whichever one that you think works best in this situation.
mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl.
    // Hint: Use the Element.classList API.

mainEl[0].classList.add('flex-ctr');

// Part2

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//3
// Iterate over the entire menuLinks array and for each "link" object:

    menuLinks.forEach((link)=>{

    // Create an <a> element.
    let newLink = document.createElement('a');

    // On the new element, add an href attribute with 
    // its value set to the href property of the "link" object.
    newLink.setAttribute('href', link.href)

    // Set the new element's content to the value of the 
    // text property of the "link" object.
    newLink.textContent = link.text
    topMenuEl.appendChild(newLink)

})


// Set the new element's content to the value of the text property of the "link" object.


// Append the new element to the topMenuEl element.

//Part3

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.getElementById("sub-menu");

// //Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// // Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');

// //Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add("flex-around");

//Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = "0";

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

//Part 4
const topMenuLinks = topMenuEl.querySelectorAll('a');
// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
    topMenuEl.addEventListener('click', function(event){

        event.preventDefault();
// The second line of code of the function should immediately return if the 
//element clicked was not an <a> element.
        if(!event.target.matches('a')){
            return;
        }
// Log the content of the <a> to verify the handler is working.
        console.log(event.target.textContent)
    })
//The event listener should add the active class to the <a> element that was clicked, 
//unless it was already active, in which case it should remove it.
    topMenuEl.addEventListener('click', function(event){
        event.preventDefault(); // // Prevent default behavior of link clicks
 // Check if the clicked element is an <a> element
 if(event.target.tagName === 'A'){
    const clickedLink = event.target;
    // Toggle the 'active' class for the clicked link
    clickedLink.classList.toggle('active');
        
    // Remove the 'active' class from all other <a> elements
    topMenuLinks.forEach(link => {
        if (link !== clickedLink) {
            link.classList.remove('active');
        }
    });
}
});

//part5
  
// Within the event listener, if the clicked <a> element does not yet have a class of "active" 
//(it was inactive when clicked):
   //a)If the clicked <a> element's "link" object within menuLinks has a subLinks property 
       //(all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.

