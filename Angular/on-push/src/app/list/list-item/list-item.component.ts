import { Component, OnInit, Input, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { Item } from '../list.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  public data: Item;

  constructor(private cdr: ChangeDetectorRef) {
    // cdr.detach();
  }

  public ngOnChanges(changes: SimpleChange) {
    // this.data = changes.data.currentValue;
    // this.cdr.detectChanges();
    // console.log('Changes appeared in Item');
  }

  ngOnInit() {
  }

}
