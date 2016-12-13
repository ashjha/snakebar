import {Component, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    constructor(
    private snackbar: MdSnackBar,
    public viewContainerRef: ViewContainerRef,
  ) { }
  
  showSnack(){
    // let config = new MdSnackBarConfig(this.viewContainerRef);
    // this.snackbar.open('This is a snackbar ', 'Ok', config);
  }
  
  open() { 
    let config = new MdSnackBarConfig(); 
    // config.duration = this.autoHide; 
    config.viewContainerRef = this.viewContainerRef; 
    this.snackbar.open('Second snackbar ', 'Got it', config); 
  }
}
