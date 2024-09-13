const avanca =document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button .addEventlistener( 'click',  function(){
        const atual = document.querySelector('. ativo');
        const proximopasso = 'passo-'+ this.getattribute(' data-proximo');


        atual.classList.remove('ativo');
        document.getElementById(procimoPasso).classList.add('ativo');
    })
})