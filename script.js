function validatePasswords() {
  const pw1 = document.getElementById('password').value;
  const pw2 = document.getElementById('confirmPassword').value;

  if (pw1 !== pw2) {
    alert("Passwords do not match!");
    return false;
  }
  return true;
}
