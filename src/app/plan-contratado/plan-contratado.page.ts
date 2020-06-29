import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-contratado',
  templateUrl: './plan-contratado.page.html',
  styleUrls: ['./plan-contratado.page.scss'],
})
export class PlanContratadoPage implements OnInit {

slides =[

  {
    img: '/assets/img/Plan1.PNG',
    titulo:'Plan1'
  },
  {
    img: '/assets/img/Plan2.PNG',
      titulo:'Plan2'
  },
  {
    img: '/assets/img/planAnual.PNG',
      titulo:'Plan3'
  }
];

}
