import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:{};
  constructor(private DataService: DataService) {
  }
  getAbout(){
    return this.projects;
  }
  setAbout(data){
    this.projects=data[0];
    console.log(this.projects);
  }
  ngOnInit() {
    this.DataService.getProjectsData().subscribe(data=>{this.setAbout(data)});  
  }

}
