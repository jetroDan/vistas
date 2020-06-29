import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanContratadoPage } from './plan-contratado.page';

describe('PlanContratadoPage', () => {
  let component: PlanContratadoPage;
  let fixture: ComponentFixture<PlanContratadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanContratadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanContratadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
