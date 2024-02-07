const generateForm = document.getElementById('generate-form');
const generatedAccount = document.getElementById('generated-account');

generateForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Generuj konto Minecraft
  const account = {
    username,
    password,
  };

  // Wyświetl wygenerowane konto
  generatedAccount.innerHTML = `
    <h3>Twoje konto Minecraft:</h3>
    <ul>
      <li>Nazwa użytkownika: ${account.username}</li>
      <li>Hasło: ${account.password}</li>
    </ul>
  `;
});
