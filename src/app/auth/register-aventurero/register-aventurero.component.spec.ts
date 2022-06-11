import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAventureroComponent } from './register-aventurero.component';

describe('RegisterAventureroComponent', () => {
  let component: RegisterAventureroComponent;
  let fixture: ComponentFixture<RegisterAventureroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAventureroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAventureroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
