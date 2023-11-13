// Courses grid JS
const griditems = [
    {
        img: `Image/htmlIMG.png`,
        line1: `The Complete Guide to HTML`,
        line2: `From zero to master in this course!`,
        line3: `4.7`,
        line33: `(1060)`,
        line4: `$69.99`
    },
    {
        img: "Image/cssIMG.png",
        line1: "CSS-The Complete Guide 2023 (Flexbox, Grid & Sass)",
        line2: "From zero to master in this course!",
        line3: `4.7`,
        line33: `(2354)`,
        line4: `$59.99`
    },
    {

        img: "Image/jsIMG.png",
        line1: "JavaScript-The Complete Guide 2023 (Beginner + Advanced)",
        line2: "From zero to master in this course!",
        line3: `4.7`,
        line33: `(1492)`
        , line4: `$89.99`
    },
    {
        img: "Image/reactIMG.png",
        line1: "React-The Complete Guide 2023 (incl Hooks, React Router, Redux)",
        line2: "From zero to master in this course!",
        line3: `4.7`,
        line33: `(3545)`
        , line4: `$59.99`
    },
    {
        img: "Image/AngularIMG.png",
        line1: "Angular-The Complete Guide 2023 (incl. Angular 12)",
        line2: "From zero to master in this course!",
        line3: `4.7`,
        line33: `(3545)`,
        line4: `$59.99`
    },
    {
        img: "Image/PhpIMG.png",
        line1: "PHP-The Complete Guide 2023 (incl. PHP 8, MySQL 8 & MariaDB)",
        line2: "From zero to master in this course!",
        line3: `4.7`,
        line33: `(3545)`,
        line4: `$59.99`
    },
    {
        img: "Image/CsharpIMG.png",
        line1: "C#-The Complete Guide 2023 (incl. .NET 5, ASP.NET, Core 5)",
        line2: "From zero to master in this course!",
        line3: `4.7`,
        line33: `(3545)`,
        line4: `$59.99`
    },
    {
        img: "Image/PythonIMG.png",
        line1: "Python-The Complete Guide 2023 (incl. Django, NumPy, Pandas)",
        line2: "From zero to master in this course!",
        line3: `4.7`,
        line33: `(3545)`,
        line4: `$59.99`
    }



]

function fillgrid(griditems) {
    // get length of griditems
    document.getElementById("grid-courses").innerHTML = "";
    const griditemsLength = griditems.length;
    console.log(griditemsLength);

    // loop through griditems
    for (let i = 0; i < griditemsLength; i++) {
        console.log(griditems[i].img);
        document.getElementById("grid-courses").innerHTML += `
        <div class="courses-gridbox">
        <img src="${griditems[i].img}" alt="courseImg">
        <h3>${griditems[i].line1}</h3>
        <h4>${griditems[i].line2}</h4>
        <h4>${griditems[i].line3}<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
            ${griditems[i].line33}
        </h4>
        <h4>${griditems[i].line4}</h4>
        `;
    }
}

fillgrid(griditems);
// end of courses grid JS



const students = [
    {
        img: `Image/studentIMG.png`,
        name: `Micheal`,
        review: `I am a student of this course and I am very happy to be a part of this course. I have learned a lot from this course. I am a student of this course and I am very happy to be a part of this course. I have learned a lot from this course.`,
        course: `Student of Css Developer`
    },
    {
        img: `Image/studentIMG2.png`,
        name: `John`,
        review: `This course was very well-organized and easy to follow. The instructor was very knowledgeable and explained everything in a way that was easy to understand. I would recommend this course to anyone who wants to learn HTML.`,
        course: `Student of Web Developer`
    },
    {
        review:`
        "This course was very well-organized and easy to follow. The instructor was very knowledgeable and explained everything in a way that was easy to understand. I would recommend this course to anyone who wants to learn HTML."
        "I really enjoyed this course! It was very informative and helpful. I learned a lot about CSS and how to use it to style my websites. I would definitely recommend this course to anyone who wants to learn CSS."
        "This course was a great way to learn JavaScript. The instructor was very patient and helpful. I would definitely recommend this course to anyone who wants to learn JavaScript."
        "This course was very comprehensive and covered a lot of material. I would definitely recommend this course to anyone who wants to learn React."
        "This course was very well-structured and easy to follow. The instructor was very knowledgeable and explained everything in a way that was easy to understand. I would definitely recommend this course to anyone who wants to learn Angular."
        "This course was a great way to learn PHP. The instructor was very patient and helpful. I would definitely recommend this course to anyone who wants to learn PHP."
        "This course was very comprehensive and covered a lot of material. I would definitely recommend this course to anyone who wants to learn C#."
        "This course was a great way to learn Python. The instructor was very patient and helpful. I would definitely recommend this course to anyone who wants to learn Python."
        `
    }

]

// add event when review button is clicked

document.getElementById("review-button").addEventListener("click", function () {
    document.getElementById("review-box").innerHTML =
        ` <div id="review-text">
    <p>“${students[0].review}”</p>
    </div>
    <div id="review-img"><img src="Image\studentIMG.png" alt="studentImg">
    <h3>Mary Jane</h3>
    <p>Student of Web Developer</p>
</div>`
});
