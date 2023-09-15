import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss']
})
export class ProjectTemplateComponent {
	@Input() project: any = {
		name: '',
		image: '',
		codebase: '',
		description: '',
		link: '',
		github: ''
	  }
}
