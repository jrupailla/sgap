import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTE } from './pages.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ModeloComponent } from './modelo/modelo.component';
import { MFormularioComponent } from './modelo/formulario/formulario.component';
import { MSeguroComponent } from './modelo/formulario/seguro.component';
import { CFormularioComponent } from './cotizacion/formulario/formulario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { NeCotizacionComponent } from './cotizacion/ne-cotizacion.component';
import { NeClienteComponent } from './cliente/ne-cliente.component';
import { PrevCotizacionComponent } from './cotizacion/prev-cotizacion.component';
import { CoberturasComponent } from './coberturas/coberturas.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        ModeloComponent,
        MFormularioComponent,
        MSeguroComponent,
        CFormularioComponent,
        UsuarioComponent,
        ClienteComponent,
        CotizacionComponent,
        NeCotizacionComponent,
        NeClienteComponent,
        PrevCotizacionComponent,
        CoberturasComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTE,
        ChartsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PagesModule {}
