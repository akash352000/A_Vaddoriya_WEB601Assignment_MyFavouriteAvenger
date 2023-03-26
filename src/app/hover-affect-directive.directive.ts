import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffectDirective]'
})
export class HoverAffectDirectiveDirective {
  @HostBinding('class.type') isHovered = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
  constructor() { }

}
