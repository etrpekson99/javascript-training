const ACTIVE = 'active';
const FINISHED = 'finished';

const ACTIVATE = 'Activate';
const FINISH = 'Finish';

class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element); // element is moved, not copied
    }
}

class Tooltip {
    constructor(closeNotifierFunction) {
        this.closeNotifier = closeNotifierFunction;
    }

    closeTooltip() {
        this.detach();
        this.closeNotifier();
    }

    detach = () => {
        this.element.remove();
        // this.element.parentElement.removeChild(this.element); // for older browser support
    }

    attach() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'DUMMY';

        tooltipElement.addEventListener('click', this.closeTooltip.bind(this));
        this.element = tooltipElement;
        
        document.body.append(tooltipElement);
    }
}

class ProjectItem {
    hasActiveTooltip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }
        const tooltip = new Tooltip(() => {
            this.hasActiveTooltip = false;
        });
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoButton = projectItemElement.querySelector('button:first-of-type');
        moreInfoButton.addEventListener('click', this.showMoreInfoHandler);
    }

    connectSwitchButton(type) { // switch from finished to active and vice-versa
        const projectItemElement = document.getElementById(this.id);
        let switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton = DOMHelper.clearEventListeners(switchButton); // clear previous event listeners
        switchButton.textContent = type === ACTIVE ? FINISH : ACTIVATE;
        switchButton.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFunction, type) {
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-projects li`); // all list items
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this), this.type)); // id of the DOM node
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    // add the project to it's new list, but call this in a different instance
    addProject(project) { // "this" in addProject will refer to the opposite project and not the value of this.type
        console.log(this);
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) { // remove the project from it's existing list
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId)); // this is where we "call" addProject() as a callback function
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