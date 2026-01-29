const wrapper = document.getElementById('userwrapper')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        
        const ul = document.createElement('ul')
        
        for(item of data) {
            console.log(item.address.street);

            const liName = document.createElement('li')
            liName.innerText = item.name

            const liEmail = document.createElement('li')
            liEmail.innerText = item.email
            
            ul.append(liName, liEmail)
        }
        wrapper.append(ul)
        
    })
