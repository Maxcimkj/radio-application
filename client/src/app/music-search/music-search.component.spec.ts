import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSearchComponent } from './style-select.component';

describe('StyleSelectComponent', () => {
  let component: MusicSearchComponent;
  let fixture: ComponentFixture<MusicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});