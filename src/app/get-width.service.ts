import {Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class GetWidthService {
  currentState = new BehaviorSubject<string>('');
  state = this.currentState.asObservable();
  config: object = {
    small: 768,
    medium: 992,
    large: 1200
  };
  constructor() {
    this.getScreenSize(window.innerWidth);
  }
  changeState(state) {
      this.currentState.next(state);
  }
  getScreenSize(width) {
    if (width < this.config['small']) {
      this.currentState.next('small');
    } else if (this.config['small'] <= width && width < this.config['medium']) {
      this.currentState.next('medium');
    } else if (this.config['medium'] <= width) {
      this.currentState.next('large');
    }
    this.changeState(this.currentState['_value']);
  }
}
