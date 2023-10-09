// media.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
  });

  it('should return the correct average of column 1', () => {
    const data = [1, 2, 3, 4, 5];
    const expectedMedia = 3;
    const actualMedia = calculateMedia(data);
    expect(actualMedia).toBe(expectedMedia);
  });

  it('should return the correct average of column 2', () => {
    const data = [2, 4, 6, 8, 10];
    const expectedMedia = 6;
    const actualMedia = calculateMedia(data);
    expect(actualMedia).toBe(expectedMedia);
  })
});