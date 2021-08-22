const ACTIVE = 'active';
const FINISHED = 'finished';

class Tooltip {

}

class ProjectItem {
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() { // switch from finished to active and vice-versa
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton.addEventListener('click', this.updateProjectListsHandler)
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-projects li`); // all list items
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this))); // id of the DOM node
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    // add the project to it's new list, but call this in a different instance
    addProject() {
        console.log(this);
    }

    switchProject(projectId) { // remove the project from it's existing list
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId); // this is the shorter solution
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList(ACTIVE);
        const finishedProjectsList = new ProjectList(FINISHED);

        // we set the handlers here instead of in the constructor 
        // because this is only when both new objects finish initializing
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }
}

App.init();