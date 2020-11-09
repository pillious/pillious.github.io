var projectModalInstance;

const projects = [{
        name: 'Acaply',
        desc: 'Acaply is an internet forum built specifically for students.  It provides a central location for students to easily conduct discussions, post club updates, and advertise fundraisers.',
        tech: ['Node.js', 'Ejs', 'MongoDB', 'Bootstrap', 'SendGrid'],
        img: 'assets/img/projects/feature-1.png',
        github: '',
        site: 'https://acaply.humpillious.now.sh/'
    },
    {
        name: 'Covid-19 API',
        desc: 'A REST API which provides daily, up to date data on the 2020 global Covid-19 pandemic. The data is retrieved from WHO&apos;s detailed reports.',
        tech: ['Node.js', 'MongoDB', 'Zeit'],
        img: 'assets/img/projects/feature-2.png',
        github: 'https://github.com/pillious/Covid-19-Api',
        site: 'https://rapidapi.com/pillious/api/who-covid-19-data'
    },
    {
        name: 'Covid-19 Visualizer',
        desc: 'Check out the global Covid-19 data through searchable & sortable tables. Explore in-depth data on the United States, including individual charts displaying the cases in each state.',
        tech: ['Node.js', 'Ejs', 'Chart.js', 'MDBootstrap'],
        img: 'assets/img/projects/feature-3.png',
        github: '',
        site: 'http://virus.thehumboo.com'
    },
    {
        name: 'Newton Pavements',
        desc: 'A website that displays future road work sites in the city. Residents may also search for streets in Newton to get a sense of their current condition.',
        tech: ['JavaScript', 'Bootstrap', 'Google Maps'],
        img: 'assets/img/projects/feature-4.png',
        github: '',
        site: 'https://www.thehumboo.com/newton-pavements/'
    },
    {
        name: 'NNHS Programming',
        desc: 'A website for my high school&apos;s computer programming club.',
        tech: ['HTML', 'CSS'],
        img: 'assets/img/projects/feature-5.png',
        github: '',
        site: 'https://pillious.github.io/nnhsprogramming/'
    },
    {
        name: 'Redefined',
        desc: 'Create and share virtual decks of flashcards. Redefined has an auto-translation feature built into the flashcard creator.',
        tech: ['Node.js', 'Ejs', 'Firebase', 'Yandex'],
        img: 'assets/img/projects/feature-6.png',
        github: '',
        site: 'http://redefined.herokuapp.com/learn?owner=h608gExrpdRSkXt54tXFTOXmFpj1&set=eaf40a52f05234d7'
    },
]

$(document).ready(function () {
    // initialize the projects modal
    var projectModal = document.querySelector('#project-modal');
    projectModalInstance = M.Modal.init(projectModal);

    fillModal(0);
});

// fill the modal, then open it
function displayModal(projectNum) {
    fillModal(projectNum);
    openModal();
}

// fill modal with correct project info
function fillModal(projectNum) {
    var projectInfo = projects[projectNum];

    $("#modal-img").attr("src", projectInfo.img);
    $("#modal-title").html(projectInfo.name);
    $("#modal-desc").html(projectInfo.desc);

    if (projectInfo.github != '') {
        $("#modal-github").show();
        $("#modal-github").on("click", () => {
            window.location = projectInfo.github;
        });
    } else {
        $("#modal-github").hide();
    }

    if (projectInfo.site != '') {
        $("#modal-site").show();
        $("#modal-site").on("click", () => {
            window.location = projectInfo.site;
        });
    } else {
        $("#modal-site").hide();
    }

    if (projectInfo.tech.length != 0) {
        var innerHTML = '';
        projectInfo.tech.forEach(str => {
            innerHTML += '<span>' + str + '</span>';
        });
        $("#modal-tech").html(innerHTML);
        $("#modal-tech").show();
    } else {
        $("#modal-tech").hide();
    }
}

// open the project modal
function openModal() {
    projectModalInstance.open();
}
