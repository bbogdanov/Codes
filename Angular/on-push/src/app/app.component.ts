import { Component, ChangeDetectorRef } from '@angular/core';
import { Item } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public items = [
    new Item('asd', 'fgh'),
    new Item('qwe', 'ert'),
  ]

  constructor(private cdr: ChangeDetectorRef) {
    // cdr.detach();
  }

  public ngOnChanges() {
    // console.log('Changes appeared in App');
  }

  ngOnInit() {
  }

  public runChanges() {
    this.cdr.detectChanges();
  }
}
