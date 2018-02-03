import { Directive, Injectable, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import {GetWidthService} from '../get-width.service';

@Directive({
  selector: '[IfViewportSize]'
})

@Injectable()

export class IfViewportSizeDirective {
  currentState: string;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private getWidthService: GetWidthService) {
      this.getWidthService.state.subscribe(res => this.currentState = res);
      this.getWidthService.changeState(this.currentState);
  }
  @Input() set IfViewportSize(condition: string) {
    if (condition === this.currentState) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
