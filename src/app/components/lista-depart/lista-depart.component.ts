import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/models/Depart';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-lista-depart',
  templateUrl: './lista-depart.component.html'
})
export class ListaDepartComponent implements OnInit {
  listDepart: Depart[];

  constructor(private departService: DepartService) { }

  ngOnInit(): void {
    this.cargarDepart();
  }

  cargarDepart(){
    this.departService.getListDepart().subscribe(data => {
      this.listDepart = data;
    });
  }
}
