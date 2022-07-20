let btn = document.querySelector('#btn');
let cpf = document.querySelector('#cpf');

btn.addEventListener('click', e =>{
  e.preventDefault();

  let cleanCpf = cpf.value.replace(/\D+/g, '');

  cleanCpf.length !== 11 ? 
  alert('Digite um cpf válido') :
  validaCpf();

  function validaCpf() {
    let total = 0;
    let total2 = 0;

      for(let i = 10, k=0; i>1 ; i--, k++ ) { // i = multiplicador e k=números do cpf
      total += cleanCpf[k] * i;

      }
      //console.log(total)

      for(let i = 11, k=0; i>1 ; i--, k++ ) { // i = multiplicador e k=números do cpf
        total2 += cleanCpf[k] * i;
      }
      //console.log(total2)


    let primeiroDig = (11 - ( total % 11)) < 9 ? 11 - ( total % 11): 0;
    let segundoDig = 11 - (total2 % 11); 

`${primeiroDig}${segundoDig}` == `${cleanCpf[9]}${cleanCpf[10]}` ?
alert('cpf valido') :
alert('caralho neguim');

  }
})




