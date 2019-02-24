import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {
  }
  getPersonalData(){
    return this.http.get("http://localhost:3000/get_details");
  }
  getEducationData(){
    return this.http.get("http://localhost:3000/get_education");
  }
  getProjectsData(){
    return this.http.get("http://localhost:3000/get_projects");
  }
  getSkillsData(){
    return this.http.get("http://localhost:3000/get_skills");
  }
  getworkExData(){
    return this.http.get("http://localhost:3000/get_work_experience");
  }
  getContactData(){
    return this.http.get("http://localhost:3000/get_contact");
  }
  
}
