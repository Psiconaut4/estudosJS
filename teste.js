let alunos = ["Bruno", "Carlos"]

function mostrar()
{
    setTimeout(function()
    {
        for(let i in alunos)
    {
        console.log(alunos[i])
    }
    })
}

function adicionar(aluno, callback)
{
    setTimeout(function()
    {
        alunos.push(aluno)
        callback()
    })  
}

adicionar("rita",mostrar)
