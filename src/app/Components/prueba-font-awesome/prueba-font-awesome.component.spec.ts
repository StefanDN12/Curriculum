import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFontAwesomeComponent } from './prueba-font-awesome.component';

describe('PruebaFontAwesomeComponent', () => {
  let component: PruebaFontAwesomeComponent;
  let fixture: ComponentFixture<PruebaFontAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaFontAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaFontAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
