// function to get ranger data

const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    
    console.log(response)
    console.log(response.data)
    return response.data
}

// create a constant to hold my DOM Elements
const DOM_Elements = {
    ranger_list: '.ranger-list'
}

// Creeation of the Ragner List HTML
const createList = (id, name, color, season, coin, coin2) => {
    const html = `<div id=${id} class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush" id=${name}>
    <li class="list-group-item">${name}</li>
    <li class="list-group-item">${color}</li>    
    <li class="list-group-item">${season}</li>
    <li class="list-group-item">${coin ? coin : 'no power-coin'}</li>
    <li class="list-group-item">${coin2 ? coin2 : 'no morp-coin'}</li>
    <button id="hello" onclick="deleteRow(${id})">Remove</button>
    
  </ul>
</div>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

const loadData = async () => {
    const rangers = await getData()

    rangers.forEach(element => createList(element.id, element.name, element.color, element.season, element['power-coin'], element['morp-coin']))
}

const clearData = () => {
    document.querySelector('.ranger-list').innerHTML = '';
}


const deleteRow = (id) => {
    const card = document.getElementById(id);
    card.remove();
}