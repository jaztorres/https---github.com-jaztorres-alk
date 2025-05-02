import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropletEffectComponent } from './droplet-effect.component';

describe('DropletEffectComponent', () => {
  let component: DropletEffectComponent;
  let fixture: ComponentFixture<DropletEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropletEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropletEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
