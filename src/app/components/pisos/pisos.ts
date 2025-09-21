import { Component } from '@angular/core';
import { Piso } from '../piso/piso';

@Component({
  selector: 'app-pisos',
  imports: [Piso],
  templateUrl: './pisos.html',
  styleUrl: './pisos.scss'
})
export class Pisos {
  public pisos = [
    {
      title: 'Piso',
      description: 'Hermoso piso completamente reformado',
      location: 'Romareda',
      bathrooms: 2,
      rooms: 4,
      price: 400_000,
      sq_meters: 120
    },
    {
      title: 'Ático',
      description: 'Ático luminoso con terraza privada',
      location: 'Centro',
      bathrooms: 2,
      rooms: 3,
      price: 350_000,
      sq_meters: 95
    },
    {
      title: 'Apartamento',
      description: 'Apartamento moderno cerca de universidades',
      location: 'Universidad',
      bathrooms: 1,
      rooms: 2,
      price: 210_000,
      sq_meters: 65
    },
    {
      title: 'Dúplex',
      description: 'Dúplex amplio con garaje y trastero',
      location: 'Delicias',
      bathrooms: 2,
      rooms: 4,
      price: 320_000,
      sq_meters: 110
    },
    {
      title: 'Piso',
      description: 'Piso familiar en zona tranquila',
      location: 'Actur',
      bathrooms: 2,
      rooms: 3,
      price: 270_000,
      sq_meters: 85
    },
    {
      title: 'Estudio',
      description: 'Estudio ideal para estudiantes',
      location: 'San José',
      bathrooms: 1,
      rooms: 1,
      price: 120_000,
      sq_meters: 40
    },

  ]
}
