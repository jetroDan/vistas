import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlancontratadoPage } from './plancontratado.page';

describe('PlancontratadoPage', () => {
  let component: PlancontratadoPage;
  let fixture: ComponentFixture<PlancontratadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlancontratadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlancontratadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
