import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailsComponentComponent } from './content-details-component.component';

describe('ContentDetailsComponentComponent', () => {
  let component: ContentDetailsComponentComponent;
  let fixture: ComponentFixture<ContentDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
