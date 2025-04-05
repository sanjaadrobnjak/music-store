import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{

  email = "";
  subject = "";
  body = "";
  error = "";
  message = "";

  ngOnInit(): void {
      
  }

  submit(){
    if(this.email == "" || this.subject == "" || this.body == ""){
      this.error = "You must fill out all the fields!";
      return;
    }
    this.error = "";
    this.message = "You have successfully sent a request!";

  }
  
}
