import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CamisaMascuComponent } from './modo-masculina/camisa-mascu/camisa-mascu.component';
import { CamisetaMascuComponent } from './modo-masculina/camiseta-mascu/camiseta-mascu.component';
import { CuecaMascuComponent } from './modo-masculina/cueca-mascu/cueca-mascu.component';
import { CasacoMascuComponent } from './modo-masculina/casaco-mascu/casaco-mascu.component';
import { CalcaMascuComponent } from './modo-masculina/calca-mascu/calca-mascu.component';
import { RegataMascuComponent } from './modo-masculina/regata-mascu/regata-mascu.component';
import { ShortMascuComponent } from './modo-masculina/short-mascu/short-mascu.component';
import { CamisaTimeMascuComponent } from './modo-masculina/camisa-time-mascu/camisa-time-mascu.component';
import { MoletomMascuComponent } from './modo-masculina/moletom-mascu/moletom-mascu.component';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { BermudaMascuComponent } from './modo-masculina/bermuda-mascu/bermuda-mascu.component';
import { HomeComponent } from './home/home.component';
import { ConjuntoFemiComponent } from './modo-feminina/conjunto-femi/conjunto-femi.component';
import { RegataFemiComponent } from './modo-feminina/regata-femi/regata-femi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeMasculinaComponent } from './home-masculina/home-masculina.component';
import { HomeFemininoComponent } from './home-feminino/home-feminino.component';
import { CamisaPoloComponent } from './modo-masculina/camisa-polo/camisa-polo.component';
import { CamisaLoncaComponent } from './modo-masculina/camisa-lonca/camisa-lonca.component';
import { CamisaPersonalisadaComponent } from './modo-masculina/camisa-personalisada/camisa-personalisada.component';
import {BodyFemiComponent} from './modo-feminina/body-femi/body-femi.component';
import {CalcaFemiComponent} from './modo-feminina/calca-femi/calca-femi.component';
import {CasacoFemiComponent} from './modo-feminina/casaco-femi/casaco-femi.component';
import {MacacaoFemiComponent} from './modo-feminina/macacao-femi/macacao-femi.component';
import {SaiaFemiComponent} from './modo-feminina/saia-femi/saia-femi.component';
import {ShortFemiComponent} from './modo-feminina/short-femi/short-femi.component';
import {VestidoFemiComponent} from './modo-feminina/vestido-femi/vestido-femi.component';
import {BlusaFemiComponent} from './modo-feminina/blusa-femi/blusa-femi.component';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CamisaMascuComponent,
    CamisetaMascuComponent,
    CuecaMascuComponent,
    CasacoMascuComponent,
    CalcaMascuComponent,
    RegataMascuComponent,
    ShortMascuComponent,
    CamisaTimeMascuComponent,
    MoletomMascuComponent,
    BermudaMascuComponent,
    HomeComponent,
    ConjuntoFemiComponent,
    RegataFemiComponent,
    HomeMasculinaComponent,
    HomeFemininoComponent,
    CamisaPoloComponent,
    CamisaLoncaComponent,
    CamisaPersonalisadaComponent,
    BlusaFemiComponent,
    BodyFemiComponent,
    CalcaFemiComponent,
    CasacoFemiComponent,
    MacacaoFemiComponent,
    SaiaFemiComponent,
    ShortFemiComponent,
    VestidoFemiComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatSliderModule,
    MatTabsModule,
    MatMenuModule,
    A11yModule,
    ClipboardModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatNativeDateModule, 
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
