import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-piso',
  imports: [CommonModule, RouterLink],
  templateUrl: './piso.html',
  styleUrl: './piso.scss'
})
export class Piso {

  @Input() type!: string;
  @Input() description !: string;
  @Input() location !: string;
  @Input() price !: number;
  @Input() bathrooms : number = 0;
  @Input() rooms: number = 0;
  @Input() sq_meters: number = 0;


}
