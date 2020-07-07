import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  eventSource=[];

calendar={
  mode:'month',
  currentDate: new Date()
}

onEventSelected(){

}
onViewTitleChanged(){

}
onTimeSelected(){

}

}
