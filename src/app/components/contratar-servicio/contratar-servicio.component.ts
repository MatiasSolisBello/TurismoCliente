import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-contratar-servicio',
  templateUrl: './contratar-servicio.component.html'
})
export class ContratarServicioComponent implements OnInit {
  reserva: FormGroup;
  id  = 0; 
  accion = 'Agregar';
  re:Reserva;
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private reservaService: ReservaService, 
    private router: Router) { 
    this.reserva = this.fb.group({
      id:['', Validators.required],
      //servicio_id:['', Validators.required],
      //usuario_id:['', Validators.required],
      precio:['', Validators.required],
      descripcion:['', Validators.required],
      llegada:['', Validators.required],
      salida:['', Validators.required],
      pago:['', Validators.required],
      
    });
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.id = +this.route.snapshot.paramMap.get('id');
    }
    
  }
  ngOnInit(): void {
    this.esEditar();
  }

  guardarReserva(){
    if(this.accion === 'Agregar'){
      const res: Reserva = {
        id: this.reserva.get('id').value,
        precio: this.reserva.get('precio').value,
        descripcion: this.reserva.get('descripcion').value,
        llegada: this.reserva.get('llegada').value,
        salida: this.reserva.get('salida').value,
        pago: this.reserva.get('pago').value,
        servicio_id: this.reserva.get('servicio_id').value,
        usuario_id: this.reserva.get('usuario_id').value,
      };
      this.reservaService.createReserva(this.id, res).subscribe(data => {
        this.router.navigate(['/listareserva']);
      });
    }else{
      const res: Reserva = {
        id: this.reserva.get('id').value,
        precio: this.reserva.get('precio').value,
        descripcion: this.reserva.get('descripcion').value,
        llegada: this.reserva.get('llegada').value,
        salida: this.reserva.get('salida').value,
        pago: this.reserva.get('pago').value,
      };

        this.reservaService.updateReserva(res).subscribe(data => {
          this.router.navigate(['/listareserva']);
        })
    }
    console.log(this.reserva);
  }
  esEditar(){
    if(this.id > 0){
      this.accion = 'Editar';
      this.reservaService.verReserva(this.id).subscribe(data => {
        this.re = data;
        this.reserva.patchValue({
          id: data.id,
          precio: data.precio,
          descripcion:data.descripcion,
          llegada: data.llegada,
          salida: data.salida,
          pago: data.pago,
          //usuario_id: data.usuario_id,
          //servicio_id: data.servicio_id,
          //departamento_id: data.departamento_id,
          
        });
      });

      
    }
  }

}
