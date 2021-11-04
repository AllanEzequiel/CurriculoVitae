const h1Nome = document.getElementById('nome')
const h4DadosPessoais = document.getElementById('dadosPessoais')
const pDescricao = document.getElementById('descricao')

const sobre = {
    nome:'ALLAN EZEQUIEL',
    endereco:'Rua 29 de Dezembro, 69° Esteio RS',
    email:'allan.ezequiel.s@gmail.com',
    celular:'(51) 99767-7445',
    descricao:'Atualmente iniciei no programa Starter 4ª edição da Growdev que é um treinamento intensivo que visa a formação de Desenvolvedores Full Stack com os conhecimentos e experiência necessários para desenvolver aplicações utilizando as melhores práticas e tecnologias do mercado. Busco uma oportunidade para me tornar um profissional completo e de qualidade, para desenvolver meu trabalho da melhor maneira possível. Continuar adquirindo experiência e me dedicando a aprender cada vez mais!',
    footer:'Desenvolvido por Allan Ezequiel .Todos os direitos reservados ©',
    redesSociais:[{
        iconClass:'<i class="fab fa-linkedin-in" id="icon"></i>',
        link:'https://www.linkedin.com/in/allan-ezequiel-19b164208/',
    },
    {
        iconClass:'<i class="fab fab fa-github" id="icon"></i>',
        link:'https://github.com/AllanEzequiel',
    }],
}


function clicarSobre(){
    descricao.innerHTML = sobre.descricao;
    descricao.style.display = "block";
    objetivo.style.display = "none";
    habilidades.style.display = "none";
    ativarSobre.classList.add('active')
    ativarConhecimento.classList.remove('active')
    ativarObjetivo.classList.remove('active')
}

function clicarConhecimento(){
    
   conhecimento = ['HTML','CSS','JavaScript','NodeJS','Typescript','React','MySQL','Postgres'];
   habilidades.innerHTML = conhecimento.join(' ')
   habilidades.style.display = "block";
   objetivo.style.display = "none";
   descricao.style.display = "none";
   ativarConhecimento.classList.add('active')
   ativarSobre.classList.remove('active')
   ativarObjetivo.classList.remove('active')
}


function clicarObjetivo(){
    objetivo.innerHTML = "Me tornar um profissional completo e de qualidade para desenvolver meu trabalho da melhor maneira possível. Continuar adquirindo experiência e me dedicando a aprender cada vez mais!"
    objetivo.style.display = "block";
    descricao.style.display = "none";
    habilidades.style.display = "none";
    ativarObjetivo.classList.add('active')
    ativarSobre.classList.remove('active')
    ativarConhecimento.classList.remove('active')

}

nome.innerHTML = sobre.nome;
endereco.innerHTML = `${sobre.endereco}`
email.innerHTML = `${sobre.email}`
numero.innerHTML = `${sobre.celular}`
pDescricao.innerHTML = sobre.descricao;
document.getElementById('linkedin').innerHTML = sobre.redesSociais[0].iconClass;
document.getElementById('linkedin').href = sobre.redesSociais[0].link;
document.getElementById('github').innerHTML = sobre.redesSociais[1].iconClass;
document.getElementById('github').href = sobre.redesSociais[1].link;
footer.innerHTML = `${sobre.footer}`
