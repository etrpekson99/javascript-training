import { ProjectItem as ProjItem } from './ProjectItem.js';
// import { moveElement } from '../Utility/DOMHelper.js';
import * as DOMHelp from '../Utility/DOMHelper.js'; // bundle everything in one object (DOMHelp)

export class ProjectList {
    projects = [];
  
    constructor(type) {
      this.type = type;
      const prjItems = document.querySelectorAll(`#${type}-projects li`);
      for (const prjItem of prjItems) {
        this.projects.push(
          new ProjItem(prjItem.id, this.switchProject.bind(this), this.type)
        );
      }
      console.log(this.projects);
      this.connectDroppable();
    }
  
    connectDroppable() {
      const list = document.querySelector(`#${this.type}-projects ul`);
      console.log(window.DEFAULT_VALUE);
      console.log(globalThis);
  
      list.addEventListener('dragenter', event => {
        if (event.dataTransfer.types[0] === 'text/plain') {
          list.parentElement.classList.add('droppable');
          event.preventDefault();
        }
      });
  
      list.addEventListener('dragover', event => {
        if (event.dataTransfer.types[0] === 'text/plain') {
          event.preventDefault();
        }
      });
  
      list.addEventListener('dragleave', event => {
        if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
          list.parentElement.classList.remove('droppable');
        }
      });
  
      list.addEventListener('drop', event => {
        const prjId = event.dataTransfer.getData('text/plain');
        if (this.projects.find(p => p.id === prjId)) {
          return;
        }
        document
          .getElementById(prjId)
          .querySelector('button:last-of-type')
          .click();
        list.parentElement.classList.remove('droppable');
        // event.preventDefault(); // not required
      });
    }
  
    setSwitchHandlerFunction(switchHandlerFunction) {
      this.switchHandler = switchHandlerFunction;
    }
  
    addProject(project) {
        this.projects.push(project);
    //   moveElement(project.id, `#${this.type}-projects ul`);
        DOMHelp.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }
  
    switchProject(projectId) {
      this.switchHandler(this.projects.find(p => p.id === projectId));
      this.projects = this.projects.filter(p => p.id !== projectId);
    }
  }