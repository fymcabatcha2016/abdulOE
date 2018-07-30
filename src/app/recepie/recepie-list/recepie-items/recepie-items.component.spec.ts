import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieItemsComponent } from './recepie-items.component';

describe('RecepieItemsComponent', () => {
  let component: RecepieItemsComponent;
  let fixture: ComponentFixture<RecepieItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
