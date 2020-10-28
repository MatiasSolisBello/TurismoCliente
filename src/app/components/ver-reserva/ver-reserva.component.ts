import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-ver-reserva',
  templateUrl: './ver-reserva.component.html',
  styleUrls: ['./ver-reserva.component.css']
})
export class VerReservaComponent implements OnInit {
  reserva: Reserva;
  id: number;
  constructor(private reservaService: ReservaService, private route: ActivatedRoute) { 
    this.id = +this.route.snapshot.paramMap.get('id_reserva');
  }

  ngOnInit(): void {
    this.cargarReserva();
  }

  cargarReserva(){
    this.reservaService.verReserva(this.id).subscribe(data => {
      this.reserva = data;
    })
  }

}
