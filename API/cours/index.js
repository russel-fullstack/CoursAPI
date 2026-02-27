/*fetch("https://api.blablagues.net/?rub=blagues")
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

  fetch("http://facebook.com", myInit).then((res) => console.log(res)); */

/*const now = new Date();
console.log(now);

// Ajouter des jours
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log(tomorrow);

// Différence en jours
const date1 = new Date("2024-01-01");
const date2 = new Date("2024-12-31");
const diffMs = date2 - date1;
const diffDays = diffMs / (1000 * 60 * 60 * 24); // 365
console.log(date1);
console.log(date2);
console.log(diffDays);
console.log(diffMs);

// Comparer des dates
date1 < date2; // true
date1.getTime() === date2.getTime();*/

const date = new Date("2024-12-25T10:30:00");

// Variantes de toLocaleString
const date8 = date.toLocaleDateString("fr-FR"); // '25/12/2024'
date.toLocaleDateString("en-US"); // '12/25/2024'
date.toLocaleTimeString("fr-FR"); // '10:30:00'
date.toLocaleString("fr-FR"); // '25/12/2024 10:30:00'
console.log(date8);

const user ={ name: "Alice", age: 30 };

// Utilisation de base
JSON.stringify(user); // '{"name":"Alice","age":30}'
console.log(JSON.stringify(user));

// Impression formatée (retrait de 2 espaces)
const formattedUser = JSON.stringify(user, null, 2);
console.log(formattedUser);

// {
//   "name": "Alice",
//   "age": 30
// }

// Retrait avec tabulation
JSON.stringify(user, null, "\t");