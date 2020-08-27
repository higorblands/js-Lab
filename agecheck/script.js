function verificador(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById(`textage`)
    var res = document.getElementById(`res`)

    if(formAno.value.length == 0 || formAno.value.length > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else{
      var fsex = document.getElementsByName(`radsex`)
      var idade = ano - (formAno.value)
      var gender = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
          gender = 'Homem'
          if(idade >=0 && idade < 12){
              //Children
              gender = 'criança'
              img.setAttribute('src', 'img/babyman.jpg')
          } else if(idade < 21 && idade > 12){
              //Jovem
              gender = 'jovem'
              img.setAttribute('src', 'img/boy.jpg')
          } else if (idade < 50){
              //Adult
              gender = 'adulto'
              img.setAttribute('src', 'img/man.jpg')
          } else{
              //Old but gold
              gender = 'idoso'
              img.setAttribute('src', 'img/oldman.jpg')
          }
      }else if (fsex[1].checked){
          gender = 'Mulher'
          if(idade >=0 && idade < 12){
            //Children
            img.setAttribute('src', 'img/babywoman.jpg')
        } else if(idade < 21 && idade > 12){
            //Jovem
            img.setAttribute('src', 'img/girl.jpg')
        } else if (idade < 50){
            //Adult
            img.setAttribute('src', 'img/woman.jpg')
        } else{
            //Old but gold
            img.setAttribute('src', 'img/oldwoman.jpg')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gender} com ${idade} anos.`
      res.appendChild(img)
    }
    }