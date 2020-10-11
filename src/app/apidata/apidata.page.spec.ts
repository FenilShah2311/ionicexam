import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApidataPage } from './apidata.page';

describe('ApidataPage', () => {
  let component: ApidataPage;
  let fixture: ComponentFixture<ApidataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApidataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
