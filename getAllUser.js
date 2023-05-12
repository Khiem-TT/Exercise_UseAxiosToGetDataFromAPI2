let axios = require('axios');

async function getAllUser() {
    let allUser = await axios.get('https://jsonplaceholder.typicode.com/users');
    return allUser.data;
}

getAllUser().then(result => console.log(result));