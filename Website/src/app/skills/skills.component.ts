import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:{};
  constructor(private DataService: DataService) {
  }
  getAbout(){
    return this.skills;
  }
  setAbout(data){
    this.skills=data;
    console.log(this.skills);
  }
  ngOnInit() {
    this.DataService.getSkillsData().subscribe(data=>{this.setAbout(data)});  
  }

}
