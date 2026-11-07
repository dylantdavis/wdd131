// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TR',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TR',
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function(num) {
        //get the section that has sectionNum == num
        const theSection = anotherCourse.sections.find((section) => section.sectionNum === num);
        //increment enrolled
        console.log(theSection);
        theSection.enrolled++;
    },

     dropStudent: function(num) {
        //get the section that has sectionNum == num
        const theSection = anotherCourse.sections.find((section) => section.sectionNum === num);
        //decrement enrolled
        console.log(theSection);
        theSection.enrolled--;
    }
};
function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return ` <tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>
    
    `
}
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

function enrollHandler(ev){
    console.log(ev)
    if(ev.target.id === "enrollStudent")
            aCourse.enrollStudent(1);
        else if(ev.target.id === "dropStudent")
            aCourse.dropStudent(1);
}

document.querySelector("#enrollStudent").addEventListener("click", (enrollHandler));
document.querySelector("#dropStudent").addEventListener("click", (enrollHandler));