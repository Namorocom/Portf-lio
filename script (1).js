function mobilemenu(){
        const menu = document.getElementById("menu");
        const icone = document.getElementById("icone");
        
        if (menu.classList.contains('show')) {
             menu.classList.remove('show');   
      
        }else{
                menu.classList.add('show')
        }
        if(icone.classList.contains('mobile')){
                icone.classList.remove('mobile')
        }else{
                icone.classList.add('mobile')
        }

}