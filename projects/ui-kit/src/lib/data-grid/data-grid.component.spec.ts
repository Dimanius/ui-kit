import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpDataGridComponent } from './data-grid.component';

describe('DataGridComponent', () => {
  let component: PpDataGridComponent;
  let fixture: ComponentFixture<PpDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
