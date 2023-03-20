import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardComponentComponent } from './content-card-component.component';

describe('ContentCardComponentComponent', () => {
  let component: ContentCardComponentComponent;
  let fixture: ComponentFixture<ContentCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
