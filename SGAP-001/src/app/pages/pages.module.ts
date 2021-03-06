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
import { PolizaComponent } from './poliza/poliza.component';
import { ClienteSearchTextComponent } from '../components/cliente/cliente-search-text/cliente-search-text.component';
import { NePolizaComponent } from './poliza/ne-poliza.component';
import { ProductoComponent } from '../components/producto/producto.component';
import { EndosoComponent } from './poliza/endoso.component';
import { RenovacionesComponent } from './poliza/renovaciones.component';
import { FrmProductoComponent } from '../components/frm-producto/frm-producto.component';
import { FrmArchivoComponent } from '../components/frm-archivo/frm-archivo.component';
import { TblArchivoComponent } from '../components/frm-archivo/tbl-archivo.component';
import { TblProductoComponent } from '../components/frm-producto/tbl-producto.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
        CoberturasComponent,
        PolizaComponent,
        EndosoComponent,
        RenovacionesComponent,
        ClienteSearchTextComponent,
        NePolizaComponent,
        ProductoComponent,
        FrmProductoComponent,
        FrmArchivoComponent,
        TblArchivoComponent,
        TblProductoComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PolizaComponent,
        NePolizaComponent,
        ProductoComponent,
        FrmProductoComponent,
        FrmArchivoComponent,
        TblArchivoComponent,
        TblProductoComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTE,
        ChartsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ]
})
export class PagesModule {}
