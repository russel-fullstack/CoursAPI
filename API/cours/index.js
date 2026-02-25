fetch("https://api.blablagues.net/?rub=blagues")
  .then((response) => {
    //console.log(response);
    
  })
  .catch((error) => {
    console.error("une erreur s'est produit:", error);
  });

  const myHeaders = new Headers();
  const myInit = {
    method: 'GET',
    headers: 'myHeaders',
    mode: 'cors',
    cache:  'default'
  };

  fetch("http://facebook.com", myInit).then((res) => console.log(res));