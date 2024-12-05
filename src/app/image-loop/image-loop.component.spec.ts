import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoopComponent } from './image-loop.component';

describe('ImageLoopComponent', () => {
  let component: ImageLoopComponent;
  let fixture: ComponentFixture<ImageLoopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageLoopComponent]
    });
    fixture = TestBed.createComponent(ImageLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
