// auth.js (brukes både på login.html og index.html)

const validUsers = [
  { username: 'Bjørn', password: 'Theodor2012' },
  { username: 'montør', password: 'kontroll' }
];

function login(username, password) {
  const found = validUsers.find(u => u.username === username && u.password === password);
  if (found) {
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  }
  return false;
}

function checkAuth() {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
  }
}
