import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true 
})
export class HoverAffectDirective {
  @Input() appHoverAffect!: string; // treat appHoverAffect as input prop

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverEffect(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverEffect(false);
  }

  private hoverEffect(isHovering: boolean): void {
    // if hovering it applies styles below
    if (isHovering) {
      const style = this.appHoverAffect === 'underline' ? 'underline' : 'bold';
      const property = this.appHoverAffect === 'underline' ? 'text-decoration' : 'font-weight';
      this.renderer.setStyle(this.el.nativeElement, property, style);
    } else {
      // if not hovering, no styles
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
    }
  }
}
