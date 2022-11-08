function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById
    ('txtano')
    var anos = fano.value
    var res = document.getElementById('res')
    if(anos.length == 0 || anos>ano) {
        alert('ERRO: Verifique os dados e tente novamente.')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anos)
        var genero = ''
        var artigo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            artigo = 'um'
                if(idade>=0 && idade<10) {
                    img.setAttribute('src', 'imagens/crianca h.jpg')
                }
                else if(idade<23) {
                    img.setAttribute('src', 'imagens/jovem h.jpg')
                }
                else if(idade<60) {
                    img.setAttribute('src', 'imagens/adulto.jpg')
                }
                else {
                    img.setAttribute('src', 'imagens/idoso.jpg')
                }
        }
        else if(fsex[1].checked) {
            genero = 'Mulher'
            artigo = 'uma'
            if(idade>=0 && idade<10) {
                img.setAttribute('src', 'imagens/crianca m.jpg')
            }
            else if(idade<23) {
                img.setAttribute('src', 'imagens/jovem m.jpg')
            }
            else if(idade<60) {
                img.setAttribute('src', 'imagens/adulta.jpg')
            }
            else {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${artigo} ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}