//about section
let about = document.querySelector('section#about .row:last-child')
let aboutContent =["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","T Using this command in latex will print a few random paragraphs in the output., you will get the result just by passing it in the argument"]
//looping through the content
aboutContent.forEach((content)=>{
    about.innerHTML += `<p class='lead'>${content}</p>`
}) //shorrtcut for creating a funtion

let education = [
    {
        id: 1,
        year: 2023,
        description: 'I started at Life Choice coding Acedmia',
        place: 'Life Choices',
        // type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2022,
        description: ' Merchadising for a large chain wholesaler, which included meticulous stock taking, inventory maintenance, and restocking of shelves.',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my certificates on Intro to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'I got my certificate on Intro to Android Developer',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2014,
        description: 'I got my diploma on Software Engineering',
        place: 'Tshwane University of Technology',
        type: 'Diploma',
        certificate: ''
    },
    {
        id: 6,
        year: 2005,
        description: 'Completed my course on PC Engineering',
        place: 'Havatech',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2000,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})