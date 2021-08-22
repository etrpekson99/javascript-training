const ACTIVE = 'active';
const FINISHED = 'finished';

class Tooltip {

}

class ProjectItem {

}

class ProjectList {
    constructor(type) {
        const projItems = document.querySelectorAll(`#${type}-projects li`); // all list items
        console.log(projItems);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList(ACTIVE);
        const finishedProjectsList = new ProjectList(FINISHED);
    }
}

App.init();