import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { TestPage } from '../pages/test/test';
import { CuponsDescontosComponent } from '../components/cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from '../components/loja-torcida/loja-torcida';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    TestPage,
    CuponsDescontosComponent,
    LojaTorcidaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    TestPage,
    CuponsDescontosComponent,
    LojaTorcidaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
