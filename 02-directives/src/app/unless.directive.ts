import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {
  @Input() set dirUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.temlateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private temlateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
