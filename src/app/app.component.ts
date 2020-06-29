import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Mi cuenta',
      url: '/my-count',
      icon: 'person'
    },
    {
      title: 'Mi empresa',
      url: '/info-empresa',
      icon: 'business'
    },
    {
      title: 'Mensajes',
      url: '/mensajes',
      icon: 'mail'
    },
    {
      title: 'Crear usuarios de Empleados',
      url: '/crear-usuario',
      icon: 'person-add'
    },
    {
      title: 'Servicios',
      url: '/servicios',
      icon: 'reader'
    },
    {
      title: 'Paquete de contrato',
      url: '/plan-contratado',
      icon: 'receipt'
    },
    {
      title: 'Invitaciones/Contrataciones',
      url: '/folder/Spam',
      icon: 'mail-open'
    },
    {
      title: 'Agenda',
      url: '/folder/Spam',
      icon: 'calendar'
    //  <ion-icon name="person-sharp"></ion-icon>
    }

    //<ion-button color="secondary">Secondary</ion-button>

  ];





  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
