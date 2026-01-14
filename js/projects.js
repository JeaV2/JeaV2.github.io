import { getLang } from './getlang.js';

const projectsContainer = document.getElementById('projects');

const lang = getLang();
let pathPrefix;
if (lang === 'en') {
    pathPrefix = '../';
} else {
    pathPrefix = '../../';
}

const buttonText = {
    'en': {
        viewProject: 'View Project',
        viewOnGitHub: 'View on GitHub'
    },
    'nl': {
        viewProject: 'Bekijk Project',
        viewOnGitHub: 'Bekijk op GitHub'
    },
    'de': {
        viewProject: 'Projekt ansehen',
        viewOnGitHub: 'Auf GitHub ansehen'
    }
};

const fetchProjects = async () => await (await fetch(`${pathPrefix}data/projects.json`)).json();
const warn = (project, field) => console.warn(`No ${field} for project: ${project}`);

async function createProjectCards() {
    projectsContainer.innerHTML = '';
    try {
        const data = await fetchProjects().then(data => data.projects);
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'card';
            
            let cardHTML = '';
            
            if (project.img) {
                cardHTML += `
                <img src="${pathPrefix+project.img}" class="card-img-top" alt="${project.title} img">
            `;
            } else {warn(project.title, 'image');}
            cardHTML += `
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description.lang[lang]}</p>
            `;
            for (const tag of project.tags) {
                cardHTML += `<span class="badge badge-tag text-dark me-1 mb-1">${tag}</span>`;
            }
            cardHTML += `<br>`;

            if (project.link) {
                cardHTML += `<a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${buttonText[lang].viewProject}</a>`;
            } else {console.warn(`No link for project: ${project.title}`);}

            if (project.github) {
                cardHTML += `<a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">${buttonText[lang].viewOnGitHub}</a>`;
            } else {console.warn(`No GitHub link for project: ${project.title}`);}
            
            cardHTML += `</div>`;
            
            card.innerHTML = cardHTML;
            projectsContainer.appendChild(card);
        });
    }
    catch (error) {
        console.error(`Error fetching or processing projects: ${error}`);
        projectsContainer.innerHTML = `<div class="alert alert-danger" role="alert">Failed to load projects. Please try again later. <br> ${error}</div>`;
    }
}
createProjectCards();