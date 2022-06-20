import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //assigns string as a value
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] //comment out and define your own style below
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `] 
})
export class AppComponent {
  //name = 'Sam';
  //username = '';
  showSecrete = false;
  log = [];

  onToggleDetails(){
    this.showSecrete = !this.showSecrete;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
