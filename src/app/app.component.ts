import {Component, HostListener} from '@angular/core';
import { GetWidthService } from './get-width.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private getWidthService: GetWidthService) {
  }
  @HostListener('window:resize')
  onResize() {
    this.getWidthService.getScreenSize(window.innerWidth);
  }
}
