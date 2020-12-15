import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomheader]'
})
export class CustomheaderDirective {
  @Input() appCustomheader: string;

  domElement: any;
  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
                console.log(this.appCustomheader)
    this.domElement = this.elementRef.nativeElement;
    const requiredStyles = {
       'padding':'0 0 300px', 
       'background':'url('+'../images/header-subtle-pattern.gif'+')'       
      };
     Object.keys(requiredStyles).forEach(newStyle => {   
      this.renderer.setStyle(
         this.domElement, `${newStyle}`, requiredStyles[newStyle]
         );
       });
     }}
