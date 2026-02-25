const init ={
    method : 'delete',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
        nom : 'KLauss',
        email : 'KLauss@example.com',
        message : 'Hello, this is a message from the client.'
    }),
    mode : 'cors',
    credentials : 'same-origin'
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/posts/84a4", init).then((response) =>
      response.json(),
    );
       //.then(data => console.log(data))
       // .catch(error => console.error('Error:', error));
})

