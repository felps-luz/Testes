

const Observa = new IntersectionObserver((arrastar) => {
    arrastar.forEach((rasta) =>{
       if (rasta.isIntersecting) {
        rasta.target.classList.add('olho')
       } else{
            rasta.target.classList.remove('olho')
       }
    })
})

const teste = document.querySelectorAll(".teste")

teste.forEach((teste) => Observa.observe (teste))
 