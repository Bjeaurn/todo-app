import { Component } from '@angular/core';
import '../../public/css/styles.css';

import {TodoBrowserComponent} from './todo/browser.component';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [TodoBrowserComponent]
})

export class AppComponent {
}