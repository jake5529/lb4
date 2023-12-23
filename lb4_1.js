let array = [5, 2, 9, 6, 4, 7, 1];
let indexes = [];

for (let i = 1; i < array.length; i++) {
  if (array[i] > array[i - 1]) {
    indexes.push(i);
  }
}

indexes.sort((a, b) => b - a); // Сортируем номера элементов по убыванию

console.log("Найденные номера: " + indexes);
console.log("Количество элементов: " + indexes.length);
