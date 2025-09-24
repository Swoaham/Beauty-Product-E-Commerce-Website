import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZSectionsComponent } from './z-sections.component';

describe('ZSectionsComponent', () => {
  let component: ZSectionsComponent;
  let fixture: ComponentFixture<ZSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZSectionsComponent]
    });
    fixture = TestBed.createComponent(ZSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
