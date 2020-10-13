const url = "https://rickandmortyapi.com/api/character";
const body = document.body;
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInserted = e.target[0].value

 const getCharacter=fetch(url)
   getCharacter.then((response) =>{
        return response.json()})
    .then((response) => {
      return fetch(`${url}/?name=${nameInserted}`);
    })
    .then((response) => response.json())
    .then((response) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const img = document.createElement("img");
      img.src = response.image;
      p.innerText = `Name:${response.name}`;
      div.appendChild(p);
      div.appendChild(img);
      body.appendChild(div);
    })
    .catch((err) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.innerText = err;
      div.appendChild(p);
      body.appendChild(div);
    });
});
