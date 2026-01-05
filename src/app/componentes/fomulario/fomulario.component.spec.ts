import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FomularioComponent } from './fomulario.component';

describe('FomularioComponent', () => {
  let component: FomularioComponent;
  let fixture: ComponentFixture<FomularioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FomularioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FomularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
