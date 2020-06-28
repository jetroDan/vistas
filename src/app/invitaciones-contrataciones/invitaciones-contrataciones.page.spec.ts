import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitacionesContratacionesPage } from './invitaciones-contrataciones.page';

describe('InvitacionesContratacionesPage', () => {
  let component: InvitacionesContratacionesPage;
  let fixture: ComponentFixture<InvitacionesContratacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionesContratacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitacionesContratacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
