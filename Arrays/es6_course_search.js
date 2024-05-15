"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];

let course = null;
//  When does the PROG200 course start?
let courseId = "PROG200";
course = courses.find(c => c.CourseId === courseId);
console.log(`PROG200 course start date is : ${course.StartDate}`);

//  What is the title of the PROJ500 course?
course = courses.find(c => c.CourseId === "PROJ500");
console.log(`title of the PROJ500 course is : ${course.Title}`);

//  What are the titles of the courses that cost $50 or less?
 
 let allBelowOrEqual50 = courses.filter(c=>c.Fee <= parseInt("50.00"));
 let allBelowOrEqual50Length = allBelowOrEqual50.length;
 console.log(`course below or equal to price Rs. 50 are : `);
 for (let i = 0; i < allBelowOrEqual50Length; i++) {
    console.log(allBelowOrEqual50[i].Title);
};

//  What  classes meet in "Classroom 1"?

let classesInClassroom1 = courses.filter(c=>c.Location==="Classroom 1");
console.log(`classes meet in Classroom 1 are:`);
for(let x=0; x < classesInClassroom1.length; x++){
    console.log(classesInClassroom1[x].CourseId);
}
