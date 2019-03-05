import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education:{};
  constructor(private DataService: DataService) {
  }
  getAbout(){
    return this.education;
  }
  setAbout(data){
    this.education=data;
    console.log(this.education);
  }
  ngOnInit() {
    this.DataService.getEducationData().subscribe(data=>{this.setAbout(data)});  
  }

}
