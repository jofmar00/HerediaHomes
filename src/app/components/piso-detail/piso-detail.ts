import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-piso-detail',
  imports: [DecimalPipe],
  templateUrl: './piso-detail.html',
  styleUrl: './piso-detail.scss'
})
export class PisoDetail {
  public piso = {
    title: 'Piso en venta en Avenida Francisco de Goya, 1',
    description: 'Ubicación estratégica, luz natural y alto potencial: inversión segura en el corazón de Zaragoza Garaje opcional en la misma finca.',
    location: 'Paseo Sagasta, Zaragoza',
    bathrooms: 2,
    rooms: 4,
    price: 400_000,
    sq_meters: 120
  }
}
