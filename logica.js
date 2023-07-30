let pesquisa =document.getElementById('pesquisa')
let botao = document.getElementById('botao')
let est = document.getElementById('est')
 
  
botao.addEventListener('click', async function () {
 let pesquisar = pesquisa.value
 let estado = est.value
if(pesquisar== ''){
    alert('Por favor, informe a cidade corretamente!')
    return
}
    const uri = 'https://api.hgbrasil.com/weather?format=json-cors&key=8f928842&city_name='+pesquisar+', '+estado
    const code = encodeURI(uri)

    const resp = await fetch(code)
    const json = await resp.json()

    let d1= new Semana(json.results.forecast[0].weekday,json.results.forecast[0].max,json.results.forecast[0].min,
        json.results.forecast[0].rain_probability,json.results.forecast[0].description)
    let d2 = new Semana(json.results.forecast[1].weekday,json.results.forecast[1].max,json.results.forecast[1].min,
        json.results.forecast[1].rain_probability,json.results.forecast[1].description)
    let d3 = new Semana(json.results.forecast[2].weekday,json.results.forecast[2].max,json.results.forecast[2].min,
        json.results.forecast[2].rain_probability,json.results.forecast[2].description)
    let d4= new Semana(json.results.forecast[3].weekday,json.results.forecast[3].max,json.results.forecast[3].min,
        json.results.forecast[3].rain_probability,json.results.forecast[3].description)
    let d5 = new Semana(json.results.forecast[4].weekday,json.results.forecast[4].max,json.results.forecast[4].min,
        json.results.forecast[4].rain_probability,json.results.forecast[4].description)
    let d6 = new Semana(json.results.forecast[5].weekday,json.results.forecast[5].max,json.results.forecast[5].min,
        json.results.forecast[5].rain_probability,json.results.forecast[5].description)
    let d7= new Semana(json.results.forecast[6].weekday,json.results.forecast[6].max,json.results.forecast[6].min,
        json.results.forecast[6].rain_probability,json.results.forecast[6].description)

    let dias =[]
    dias.push(d1,d2,d3,d4,d5,d6,d7)
    

    

    let temp = document.getElementById('temp').innerHTML = json.results.temp
    let cid = document.getElementById('cid').innerHTML = json.results.city
    let descricao = document.getElementById('descricao').innerHTML=json.results.description
    let himidade = document.getElementById('humidade').innerHTML=json.results.humidity
    let data = document.getElementById('data').innerHTML=json.results.date
    let hora = document.getElementById('hora').innerHTML=json.results.time
    let nascer = document.getElementById('nascer').innerHTML=json.results.sunrise
    let por = document.getElementById('por').innerHTML=json.results.sunset
   


    
    

    let diascorridos = document.getElementById('diascorridos')
diascorridos.innerHTML=''
for(let i =0; i< dias.length;i++){
diascorridos.innerHTML+=`
<div class='cardDia'>
<h1> ${dias[i].dia}</h1> 
<h2>${dias[i].descricao}</h2>
<p>Min:${dias[i].min}°C Máx:${dias[i].max}°C</p>
<pre>probabilidade de chuva:${dias[i].probchuva}%</pre>
</div>
`


}


    console.log(dias[3])

})
