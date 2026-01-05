import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompFraseComponent } from './comp-frase.component';

describe('CompFraseComponent', () => {
  let component: CompFraseComponent;
  let fixture: ComponentFixture<CompFraseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CompFraseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
