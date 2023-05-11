window.addEventListener('scroll',function(){
    const windowHeight = window.pageYOffset
    const nav = document.querySelector('nav')
    const h1 = document.querySelector('h1')
    const lis = document.querySelectorAll('a')
      
    if(windowHeight > 120){
        nav.classList.add('window__scroll')
        
            h1.style.color = 'white'

            lis.forEach(li => {
               li.style.color = 'white' 
            });
    }
    else{
        nav.classList.remove('window__scroll')
        
            h1.style.color = `#2E5CFF`
            lis.forEach(li => {
                li.style.color = '#2E5CFF' 
             });
    }
})