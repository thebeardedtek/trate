import { Injectable ,Inject, ViewChild, ElementRef} from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  @ViewChild('container')
  private container: ElementRef;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  public scrollToTeletherapy(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#teletherapy');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollToTeletherapyMobile(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#teletherapy-mobile');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollToInterview(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#interview');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollToSpeaking(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#speaking');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollToConsulting(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#consulting');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollToFees(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#fees-section');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollToAbout(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#about-section');
    this.pageScrollService.start(pageScrollInstance);
  };

}
