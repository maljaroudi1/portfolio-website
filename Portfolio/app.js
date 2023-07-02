const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); // Corrected selector
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
  // Button Click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
      let currentBtns = document.querySelectorAll('.active-btn');
      for (let j = 0; j < currentBtns.length; j++) {
        currentBtns[j].classList.remove('active-btn');
      }
      this.classList.add('active-btn');
    });
  }

  //sections active class
  allSections.addEventListener('click', (e) =>{
      const id = e.target.dataset.id;
      if(id){
        //remove selected from the other button
        sectBtns.forEach((btn) =>{
          btn.classList.remove('active')
        })
        e.target.classList.add('active')

        //hide other sections
        sections.forEach((section) =>{
          section.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
      }
  })

  //toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}
PageTransitions();


