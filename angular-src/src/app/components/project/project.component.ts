import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../services/project.service';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private completerService: CompleterService) {
          //this.dataService = completerService.local(this.searchData, 'color', 'color');
    }

  ngOnInit() {
}
}
