import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmPrimeEditorComponent } from './mm-prime-editor.component';

describe('MmPrimeEditorComponent', () => {
  let component: MmPrimeEditorComponent;
  let fixture: ComponentFixture<MmPrimeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmPrimeEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmPrimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
