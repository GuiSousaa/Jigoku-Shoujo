
// Exercício 1 

/* function GerarNota (nota) { if (nota < 60) {
    console.log('F') }
    else if (nota >= 60 && nota <= 69) {
        console.log('D')
    } else if (nota >=70 && nota <= 79) {
        console.log('C')
    } else if (nota >= 80 && nota <= 89) {
        console.log('B') } else if(nota >=90) {
            console.log('A')
        } 
        return nota
    }
*/

// Exercício 2

/* let Family = {
    receipt: [ 5000,
        200,
               
    ],
    despesas: [ 500, 100

    ]
}

let sum = function (array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

function calculate () {let SomaDaReceita = sum(Family.receipt) 
let SomaDaDespesa = sum(Family.despesas)

let resultado = SomaDaReceita - SomaDaDespesa

if (resultado > 0) {
    console.log(`A família está com crédito de ${resultado}`)
} else if (resultado < 0) {
    console.log(`A família está com débito de ${resultado}`)
}
    else {'A família está no 0'}
}

calculate()

*/






/* function GerarNota (nota) { 
    
    if (typeof nota !== 'number') {
    
        throw new Error ('Nota inválida') 
    } else if (nota < 60) {
    console.log('F') }
    else if (nota >= 60 && nota <= 69) {
        console.log('D')
    } else if (nota >=70 && nota <= 79) {
        console.log('C')
    } else if (nota >= 80 && nota <= 89) {
        console.log('B') } else if(nota >=90) {
            console.log('A')
        } 
        return nota

    }

    try { 
        GerarNota(60)
    } catch (e) {
        console.log(e)
    }
    */

 
 
   //Conversor de Graus para Celsius

  /*   function TransformDegree (degree) {
     let ThereIsC = degree.toUpperCase().includes('C')
     let ThereIsF = degree.toUpperCase().includes('F')
     
     if (ThereIsC === true) {
        
        let NewValor = degree.toUpperCase().replace('C', '')
        
       let NewDegree = (Number(NewValor) * 9/5 ) + 32
        
        let result = String(NewDegree) + 'F'
        return result
     } else if (ThereIsF === true) { 

        let NewValor = degree.toUpperCase().replace('F', '')
        
        let NewDegree = (Number(NewValor) - 32 ) * 5/9
        
        let result = String(NewDegree) + 'C'
        return result

     } 
     
    
}

console.log(TransformDegree('40c')) */

function print() {
    let image = document.getElementById('screen')
     image.style.display = "flex"
     condition()
    }





    function pressionar() {
    console.log('executou')
        document.addEventListener("keydown", (event) => { 
            console.log('funfa')
            let screen = document.getElementById('screen')
        if(event.code === 'Escape' && screen.style.display === 'flex') {
            console.log('chamei')
            let screen = document.getElementById('screen')
           screen.style.display = 'none'
           condition2()
                      }
 })        
}

pressionar()

// animations 

gsap.fromTo('.logo', {opacity: 0}, {opacity: 1, duration: 5})
gsap.fromTo('button', {y: 0, opacity: 0}, {y: 60, opacity: 1, duration: 5})
gsap.fromTo('input', {y: 0, opacity: 0}, {y: -20, opacity: 1, duration: 5} )  

function condition () {
        gsap.fromTo('screen', {opacity: 0}, {opacity: 1, duration: 3})
        gsap.fromTo('img', {y: 0, opacity: 0}, {y: 60, opacity: 1, duration: 5})
        gsap.fromTo('.balao', {y: 0, opacity: 0}, {y: 60, opacity: 1, duration: 5},'<1')
        gsap.fromTo('.balao1', {y: 0, opacity: 0}, {y: 60, opacity: 1, duration: 5})
        gsap.fromTo('.esc', {opacity: 0}, {opacity: 1, duration: 10})      
    }

    function condition2 () {

        
    }

















    








   






       

   




