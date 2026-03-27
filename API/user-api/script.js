let usersData = [];
const app = document.getElementById("app");

const fetchUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=24");
    const data = await response.json();
    usersData = data.users;

    if (!usersData || usersData.length === 0) {
      app.innerHTML = "<p style='color: red;'>No users found.</p>";
      return;
    }

    const dateParse = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" });
    app.innerHTML = usersData
      .map(
        (user, index) => `
    <div class="card">
      <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
      <div>
        <h4>${user.firstName} ${user.lastName}</h4>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>${user.address.city} né(e) le ${dateParse.format(
          new Date(user.birthDate),
        )}</p>
        <button class="more" data-index="${index}">Voir plus</button>
      </div>
    </div>`,
      )
      .join("");

    const buttonMores = document.querySelectorAll(".more");
    buttonMores.forEach((buttonMore) => {
      buttonMore.addEventListener("click", () => {
        const user = usersData[buttonMore.dataset.index];
        app.innerHTML = `
    <div class="cardMore">
      <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
      <div>
        <h4>${user.firstName} ${user.lastName}</h4>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>${user.address.city} né(e) le ${dateParse.format(
          new Date(user.birthDate),
        )}</p>
        <p>Adresse: ${user.address.address}, ${user.address.city}, ${
          user.address.state
        }, ${user.address.postalCode}</p>
        <button id="back">Retour</button>
      </div>
    </div>
    `;

        const backButton = document.getElementById("back");
        backButton.addEventListener("click", fetchUsers);
      });
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    app.innerHTML =
      "<p style='color: red;'>Failed to load users. Please try again later.</p>";
  }
};

fetchUsers();
