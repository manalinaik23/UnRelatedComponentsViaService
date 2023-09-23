import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @Input()
  appHighlight:string="";

  @HostListener('mouseenter') onMouseEnter(){
     this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  highlight(color:string){
    console.log(color);
    this.el.nativeElement.style.backgroundColor = color;
  }
}
