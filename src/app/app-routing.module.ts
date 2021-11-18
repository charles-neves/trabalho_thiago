import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFemininoComponent } from './home-feminino/home-feminino.component';
import { HomeMasculinaComponent } from './home-masculina/home-masculina.component';
import { HomeComponent } from './home/home.component';
import { BlusaFemiComponent } from './modo-feminina/blusa-femi/blusa-femi.component';
import { BodyFemiComponent } from './modo-feminina/body-femi/body-femi.component';
import { CalcaFemiComponent } from './modo-feminina/calca-femi/calca-femi.component';
import { CasacoFemiComponent } from './modo-feminina/casaco-femi/casaco-femi.component';
import { ConjuntoFemiComponent } from './modo-feminina/conjunto-femi/conjunto-femi.component';
import { MacacaoFemiComponent } from './modo-feminina/macacao-femi/macacao-femi.component';
import { RegataFemiComponent } from './modo-feminina/regata-femi/regata-femi.component';
import { SaiaFemiComponent } from './modo-feminina/saia-femi/saia-femi.component';
import { ShortFemiComponent } from './modo-feminina/short-femi/short-femi.component';
import { VestidoFemiComponent } from './modo-feminina/vestido-femi/vestido-femi.component';
import { BermudaMascuComponent } from './modo-masculina/bermuda-mascu/bermuda-mascu.component';
import { CalcaMascuComponent } from './modo-masculina/calca-mascu/calca-mascu.component';
import { CamisaLoncaComponent } from './modo-masculina/camisa-lonca/camisa-lonca.component';
import { CamisaMascuComponent } from './modo-masculina/camisa-mascu/camisa-mascu.component';
import { CamisaPersonalisadaComponent } from './modo-masculina/camisa-personalisada/camisa-personalisada.component';
import { CamisaPoloComponent } from './modo-masculina/camisa-polo/camisa-polo.component';
import { CamisaTimeMascuComponent } from './modo-masculina/camisa-time-mascu/camisa-time-mascu.component';
import { CamisetaMascuComponent } from './modo-masculina/camiseta-mascu/camiseta-mascu.component';
import { CasacoMascuComponent } from './modo-masculina/casaco-mascu/casaco-mascu.component';
import { CuecaMascuComponent } from './modo-masculina/cueca-mascu/cueca-mascu.component';
import { MoletomMascuComponent } from './modo-masculina/moletom-mascu/moletom-mascu.component';
import { RegataMascuComponent } from './modo-masculina/regata-mascu/regata-mascu.component';
import { ShortMascuComponent } from './modo-masculina/short-mascu/short-mascu.component';



const routes: Routes = [
  {
    path: 'camisa-masculina', component: CamisaMascuComponent
  },
  {
    path: 'calca-masculina', component: CalcaMascuComponent
  },
  {
    path: 'bermuda-masculina', component: BermudaMascuComponent
  },
  {
    path: 'camiseta-masculina', component: CamisetaMascuComponent
  },
  {
    path: 'regata-masculina', component: RegataMascuComponent
  },
  {
    path: 'short-masculina', component: ShortMascuComponent
  },
  {
    path: 'moletom-masculina', component: MoletomMascuComponent
  },
  {
    path: 'camiseta-de-time-masculina', component: CamisaTimeMascuComponent
  },
  {
    path: 'cueca-masculina', component: CuecaMascuComponent
  },
  {
    path: 'casaco-masculina', component: CasacoMascuComponent
  },
  {
    path: 'blusa-feminina', component: BlusaFemiComponent
  },
  {
    path: 'body-feminina', component: BodyFemiComponent
  },
  {
    path: 'calca-feminina', component: CalcaFemiComponent
  },
  {
    path: 'casaco-feminina', component: CasacoFemiComponent
  },
  {
    path: 'regata-feminina', component: RegataFemiComponent
  },
  {
    path: 'short-feminina', component: ShortFemiComponent
  },
  {
    path: 'saia-feminina', component: SaiaFemiComponent
  },
  {
    path: 'vestido-feminina', component: VestidoFemiComponent
  },
  {
    path: 'macacao-feminina', component: MacacaoFemiComponent
  },
  {
    path: 'conjunto-feminina', component: ConjuntoFemiComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'moda-masculina', component: HomeMasculinaComponent
  },
  {
    path: 'moda-feminina', component: HomeFemininoComponent
  },
  {
    path: 'camisa-polo', component: CamisaPoloComponent
  },
  {
    path: 'camisa-longa', component: CamisaLoncaComponent
  },
  {
    path: 'camisa-perso', component: CamisaPersonalisadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
