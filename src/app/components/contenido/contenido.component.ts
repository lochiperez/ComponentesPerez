import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  content = [{
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }, {
    titulo: 'Puerto Iguazú',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo + Traslado',
    precio: '$25.703',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200.webp'
  }, {
    titulo: 'San Carlos de Bariloche',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$50.665',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (1).webp'
  }, {
    titulo: 'El calafate',
    salida: 'Saliendo desde Buenos Aires',
    combo: 'Hotel + Vuelo',
    precio: '$44.208',
    imp: 'Incluye impuestos, tasas y cargos',
    img: '../../../assets/img/300x200 (2).webp'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
