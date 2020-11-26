import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz";
  }

  onClick($event){
    window.open(this.url,"_blank");
  }
}
