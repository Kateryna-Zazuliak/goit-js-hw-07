const categoriesList = document.querySelector("#categories");
const categoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach(item => {
    const categoryTitle = item.querySelector("h2");
    const categoryTitleEl = item.querySelectorAll("li");

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryTitleEl.length}`);
});
    