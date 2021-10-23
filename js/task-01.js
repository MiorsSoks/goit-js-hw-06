// 1 task
const categoriesRef = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesRef.length);
// 2 task
const arrayTitleCategoriesRef = document.querySelectorAll("h2");
arrayTitleCategoriesRef.forEach(function (element) {
    console.log("Category:", element.textContent)
    console.log("Elements:", element.nextElementSibling.children.length)
});


