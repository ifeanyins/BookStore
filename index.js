

const headerText = document.getElementById('uk-header-text');
headerText.innerHTML = 'Add New Book';
const currentDate = document.querySelector('#currentDate')

//  Current Date Manipulation

let date = new Date();

let day = date.getDate();
let month =  date.getMonth() + 1;
let year =  date.getFullYear() ;
currentDate.innerHTML = `Date: ${day} | ${month} | ${year}`
currentDate.classList.add('current')

// Tab content switch

let tabPanel = document.querySelectorAll('.tabPanel');
function showPanel(panelId) {
tabPanel.forEach(element => {
    element.classList.add('hide');
});
    document.getElementById(panelId).classList.remove('hide')
}

// const changeNavColor = (index) => {
//     const navItems = document.querySelectorAll('#nav-item');
//     Array.from(navItems).forEach((item, ind) => (ind === index ? item.classList.toggle('clicked-link') : item.classList.remove('clicked-link')));
//   };
//   window.changeNavColor = changeNavColor;
  

