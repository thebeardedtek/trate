import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

showMobileMenu:any;
showMenu:any;

  constructor(private menu: MenuService) { }

  toTeletherapy(){
    // this.showMenu = false;
    this.menu.scrollToTeletherapy();
    this.showMobileMenu = false;
  }

  toInterview(){
    this.showMenu = false;
    this.menu.scrollToInterview();
    this.showMobileMenu = false;
  }

  toSpeaking(){
    this.showMenu = false;
    this.menu.scrollToSpeaking();
    this.showMobileMenu = false;
  }
 
  toConsulting(){
    this.showMenu = false;
    this.menu.scrollToConsulting();
    this.showMobileMenu = false;
  }

  toFees(){
    this.showMenu = false;
    this.menu.scrollToFees();
    this.showMobileMenu = false;
  }

  toAbout(){
    this.showMenu = false;
    this.menu.scrollToAbout();
    this.showMobileMenu = false;   
  }

  toggleMenu(){
    console.log('Hey');
  }

  
  ngOnInit() {
    this.showMenu = false;
    this.showMobileMenu = false;  
  }

}
