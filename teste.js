let alunos = ["Bruno", "Carlos"]

function mostrar()
{
    setTimeout(function()
    {
        for(let i in alunos)
    {
        console.log(alunos[i])
    }
    },1500)
}

function adicionar(aluno, callback)
{
    setTimeout(function()
    {
        alunos.push(aluno)
        callback()
    },2000)  
}

adicionar("rita",mostrar)
