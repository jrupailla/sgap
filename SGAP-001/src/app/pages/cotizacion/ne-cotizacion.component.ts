import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Modelo } from 'src/app/models/modelo.model';
import { UsuarioService,
        ClienteService,
        ModeloService,
        ParametroService,
        CotizacionService} from 'src/app/services/service.index';

import { Cotizacion } from 'src/app/models/cotizacion.model';

import { VALOR_USO_VEHICULAR } from 'src/app/config/constants';
import { GRUPO_USO_VEHICULAR } from 'src/app/config/constants';
import { Parametro } from 'src/app/models/parametro.model';
import { Auto } from 'src/app/models/auto.model';
import { Router } from '@angular/router';

import swal from 'sweetalert';


@Component({
  selector: 'app-ne-cotizacion',
  templateUrl: './ne-cotizacion.component.html',
  styleUrls: []
})
export class NeCotizacionComponent implements OnInit {

  isSaving: boolean = false;
  isClientFind: boolean = false;
  isModeloFind: boolean = false;
  clientsFind: Array<Cliente> = [];
  modelosFind: Array<Modelo> = [];

  /* LISTAS GENERALES */
  usosVehiculares: Array<Parametro> = [];

  cotizacion: Cotizacion = new Cotizacion();
  auto: Auto = new Auto();

  @ViewChild('anio') txtAnio: ElementRef;

  constructor( public _cliente: ClienteService,
                public _modelo: ModeloService,
                public _usuario: UsuarioService,
                public _parametro: ParametroService,
                public _cotizacion: CotizacionService,
                public _router: Router ) {
                  this.listUsos();
                  this.cotizacion.en_tramite = false;
                  this.cotizacion.is_nuevo = false;
  }

  ngOnInit() {  }

  searchModelo(token, search) {
    this._modelo.search( token, search ).subscribe( data => {
      this.modelosFind = data;
      this.isModeloFind = true;
    } );
  }

  listUsos() {
    this._parametro.listGroupChildren( GRUPO_USO_VEHICULAR ).subscribe( data => this.usosVehiculares = data );
  }

  validarNuevo( value: number ) {

    let currentYear = new Date().getFullYear();
    if ( (this.txtAnio.nativeElement.value !== '') && (this.cotizacion.is_nuevo) ) {
      if ( (currentYear - value) > 1 ) {
        swal('Atención', 'El año ingresado no aplica para nuevo, lo corregimos al año actual', 'warning');
        this.txtAnio.nativeElement.value = currentYear;
      }
    }

  }

  cotizar( ) {

    // Si es sistema dual se debe incorporar 45 USD solo en RIMAC, dar la posibilidad de eliminar los 45 dolares en la emisión de la póliza

    // Opción de agregar visto bueno


    this.isSaving = true;
    this.cotizacion.auto = this.auto;
    this.cotizacion.producto = VALOR_USO_VEHICULAR;

    this._cotizacion.save( this._usuario.token, this.cotizacion ).subscribe( _ => {
      this.isSaving = false;
      this._router.navigate( ['/cotizacion/prev/' + _._id] );
    }, error => {
      this.isSaving = false;
      swal( 'Ups...', error.error.mensaje, 'error' );
      console.log( error );
      });

  }
}
