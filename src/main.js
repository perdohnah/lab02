let name = prompt("Введіть ваше ім'я:") ?? "Анонім";

let age;
do {
  age = prompt("Введіть ваш вік:");
} while (isNaN(age) || age === "");

age = Number(age);

if (age >= 18) {
  alert("Ви повнолітній.");
} else {
  alert("Ви неповнолітній.");
}

if (confirm("Чи хочете продовжити опитування?")) {
  let favoriteColor = prompt("Ваш улюблений колір?") ?? "Не вказано";
  let hobby = prompt("Ваше хобі?") ?? "Не вказано";
  alert(`Дякуємо за участь, ${name}!
  Вік: ${age}
  Улюблений колір: ${favoriteColor}
  Хобі: ${hobby}`);
} else {
  alert(`Дякуємо, ${name}, за відповіді. Гарного дня!`);
}
