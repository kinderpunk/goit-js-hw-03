function slugify(title) {
    return title.toLowerCase().split(' ').join('-');
}


console.log(slugify("Arrays for Beginners")); // Поверне "arrays-for-beginners"
console.log(slugify("JavaScript Basics")); // Поверне "javascript-basics"
console.log(slugify("Introduction to Web Development")); // Поверне "introduction-to-web-development"
