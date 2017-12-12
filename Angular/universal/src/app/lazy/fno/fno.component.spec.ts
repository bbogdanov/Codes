import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnoComponent } from './fno.component';

describe('FnoComponent', () => {
  let component: FnoComponent;
  let fixture: ComponentFixture<FnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
