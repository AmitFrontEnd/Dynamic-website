const menu=document.querySelector('.menu');
const nav=document.querySelector('nav')

menu.addEventListener('click',()=>{
    nav.classList.toggle('active')
    if(nav.classList.contains('active')){
        menu.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    }else{
        menu.innerHTML=`<i class="fa-solid fa-bars"></i>`
    }
})




function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(data => {
      document.getElementById('container').innerHTML = data;

      // Re-initialize AOS for new content
      AOS.init({
      });
    });
}

  // Load home by default
  window.onload = () => {
    loadPage('home.html');
  };
  


  AOS.init();