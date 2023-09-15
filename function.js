const passwords = ["Quvonchbek", "Akhmedov", 996601906];

const submit = document.getElementById("submit");
var names = document.getElementById("name"),
  surname = document.getElementById("surname"),
  password = document.getElementById("password"),
  notification = document.getElementById("notification");

submit.addEventListener("click", () => {
  if (
    names.value === passwords[1] ||
    surname.value === passwords[1] ||
    password.value === passwords[2]
  ) {
    notification.textContent = "Ma'lumotlar to'g'ri!";
    notification.style.color = "rgb(49 255 0 / 50%)";
  } else {
    notification.textContent = "Ma'lumotlar noto'g'ri. Iltimos qayta kiriting!";
    notification.style.color = "rgb(255 0 0 / 50%)";
  }
});
