import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferencePage } from './reference.page';

describe('ReferencePage', () => {
  let component: ReferencePage;
  let fixture: ComponentFixture<ReferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
