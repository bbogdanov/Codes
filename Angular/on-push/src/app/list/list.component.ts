import { Component, OnInit, Input, ChangeDetectorRef, SimpleChange } from '@angular/core';

export class Item {
  constructor(
    public key: string,
    public value: string,
  ) { }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: Item[];

  constructor(private cdr: ChangeDetectorRef) {
    // cdr.detach();
  }

  public ngOnChanges(changes: SimpleChange) {
    // console.log(changes);

    // this.items = changes.items.currentValue;

    // this.cdr.detectChanges();
    // console.log('Changes appeared in List');
  }

  ngOnInit() {
  }

}
