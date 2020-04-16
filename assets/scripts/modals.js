var projectModalInstance;

const projects = [
    {
        name:'Lorem 1',
        desc: 'Hello here, hello there, hello everywhere!',
        tech: ['HTML', 'Node.js', 'ejs', 'something', 'test', '123'],
        img: 'assets/img/feature-1.jpg',
        github: 'https://github.com',
        site: 'https://github.com/pillious'
    },
    {
        name:'Lorem 2',
        desc: 'lorem ipsum something someting 123 blah blah blah.',
        tech: ['JavaScript', 'Node.js'],
        img: 'assets/img/feature-1.jpg',
        github: '',
        site: 'https://github.com/pillious'
    },
    {
        name:'Lorem 3',
        desc: 'lorem ipsum something someting 123 blah blah blah.',
        tech: ['JavaScript', 'Node.js'],
        img: 'assets/img/feature-1.jpg',
        github: 'https://github.com',
        site: 'https://github.com/pillious'
    }
]

$(document).ready(function () {
    // initialize the projects modal
    var projectModal = document.querySelector('.modal');
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
            window.open(projectInfo.github, '_blank');
        });
    }
    else {
        $("#modal-github").hide();
    }

    if (projectInfo.site != '') {
        $("#modal-site").show();
        $("#modal-site").on("click", () => {
            window.open(projectInfo.site, '_blank');
        });
    }
    else {
        $("#modal-site").hide();
    }

    if (projectInfo.tech.length != 0) {
        var innerHTML = '';
        projectInfo.tech.forEach(str => {
            innerHTML += '<span>' + str + '</span>';
        });
        $("#modal-tech").html(innerHTML);
        $("#modal-tech").show();
    }
    else {
        $("#modal-tech").hide();
    }
}

// open the project modal
function openModal() {
    projectModalInstance.open();
}