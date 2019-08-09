// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2091</span>
//    <h1>Lambda Times Lambda</h1>
//    <h6>lambda squared lol</h6>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');

function Header(){
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const titleSquared = document.createElement('h6');
    const temp = document.createElement('span');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(titleSquared);
    header.appendChild(temp);

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'AUGUST 9, 2091';
    title.textContent = 'Lambda Times Lambda';
    titleSquared.textContent = 'lambda squared lol'
    temp.textContent = 'Two°';

    return header;
};

const theOneTrueHeader = Header();

headerContainer.appendChild(theOneTrueHeader);