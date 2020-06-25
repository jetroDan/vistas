import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCountPage } from './my-count.page';

describe('MyCountPage', () => {
  let component: MyCountPage;
  let fixture: ComponentFixture<MyCountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
