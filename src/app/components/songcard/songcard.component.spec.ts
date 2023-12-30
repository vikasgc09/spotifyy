import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongcardComponent } from './songcard.component';

describe('SongcardComponent', () => {
  let component: SongcardComponent;
  let fixture: ComponentFixture<SongcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
