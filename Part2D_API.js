endpoint="https://official-joke-api.appspot.com/jokes/programming/random"

fetch(endpoint)
.then(response => response.json()) //promise
.then(data => console.log(data[0]))
.catch(error => console.error('Error:', error))

endpoint="https://reqres.in/api/users"

let my_data = {
    name: 'Awais Mazahir',
    job: 'Programmer'
}

fetch(endpoint,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(my_data)
})
.then(response => response.json()) //promise
.then(data => console.log(data))
.catch(error => console.error('Error:', error))

