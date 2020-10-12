const url='https://rickandmortyapi.com/api/character'
const body=document.body
const getCharacter= fetch (url)
.then(response=>response.json())
.then(response=>{
const characterId=response.results[0].id
return fetch (`${url}/${characterId}`)
})
.then(response=>response.json())
.then(response=>{
    const div=document.createElement('div')
    const p =document.createElement('p')
    const img=document.createElement('img')
img.src=response.image
p.innerText= `Name:${response.name}`
div.appendChild(p)
div.appendChild(img)
body.appendChild(div)
})