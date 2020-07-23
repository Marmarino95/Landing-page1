/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll('section');
const list=document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const Inviewoffset=(elem)=>{
    return Math.floor(elem.getBoundingClientReact().top);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
(function build() {
    for(let i = 0; i <= sections.length; i++) {
        let sectionTitle = sections[i].id;
        let dataNav=sections[i].dataset.nav;
        let Item = document.createElement('li');
        let Link = document.createElement('a');
        Link.textContent = sectionTitle;
        Link.setAttribute("href",`#${sectionTitle}`,`#${dataNav}`);
        Link.classList.add('menu__link');
        list.append(Item);
        Item.append(Link);
    
        
    }
})();

// Add class 'active' to section when near top of viewport
let links=document.querySelectorAll('#nav__barlist li a');
function Active(){
    let x= sections.legnth;
    if (Inviewoffset<150 && Inviewoffset>-150){
        links.forEach((Link)=>Link.classlist.remove('active'));
        sections.forEach((section)=>section.classlist.remove('your-active-class'));
    }
    else{
        links[x].classList.add('active');
        sections[x].classList.add('your-active-class');
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
 * 
 * 
*/

// Scroll to section on link click
window.addEventListener("scroll".Active)
