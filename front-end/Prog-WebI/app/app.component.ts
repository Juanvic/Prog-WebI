import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My SECOND Angular 2 is {{nameApp}} </h1>'
})
export class AppComponent { 
  nameApp: string = "Prog-WebI";
  
}

/*
constructor(nameApp?:string){
    this.nameApp = nameApp;
  }

  getNameApp() : string {
    return this.nameApp;
  }

  setNameApp(nameApp:string) {
    this.nameApp = nameApp;
  }
*/
