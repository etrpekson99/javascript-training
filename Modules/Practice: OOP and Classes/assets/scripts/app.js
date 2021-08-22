const ACTIVE = 'active';
const FINISHED = 'finished';

class Tooltip {

}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() { // switch from finished to active and vice-versa
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton.addEventListener('click', )
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        const projectItems = document.querySelectorAll(`#${type}-projects li`); // all list items
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id)); // id of the DOM node
        }
    }

    addProject() { // add the project to it's new list

    }

    switchProject(projectId) { // remove the project from it's existing list
        const projectIndex = this.projects.findIndex(p => p.id === projectId);
        this.projects.splice(projectIndex, 1);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList(ACTIVE);
        const finishedProjectsList = new ProjectList(FINISHED);
    }
}

App.init();