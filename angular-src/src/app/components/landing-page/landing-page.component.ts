import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  protected searchStr: string;
  protected dataService: CompleterData;
  protected projectNames = [];


  constructor(private projectService: ProjectService, private completerService: CompleterService, private router: Router) {
    //this.dataService = completerService.local(this.searchData, 'color', 'color');
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      for (let obj of data.msg) {
        this.projectNames.push(obj.project.name);
      }
    });
  }

  selected(event) {
    this.router.navigate(['/projectInfo']);
  }

}
