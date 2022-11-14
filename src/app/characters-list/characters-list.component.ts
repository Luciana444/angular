import { Component, OnInit } from '@angular/core';
import { Character } from './Character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [
    {
    imagen:'../assets/img/jett.jpg',
    personaje:'Jett',
    habilidad1:'Q: RÁFAGA ASCENDENTE',
    habilidad2:'E: IMPULSO CICLÓN',
    habilidad3:'C: NUBE EXPLOSIVA',
    habilidad4:'X: TORMENTA DE CUCHILLAS',
  },
  {
    imagen:'../assets/img/raze.jpg',
    personaje:'Raze',
    habilidad1:'Q: PAQUETE EXPLOSIVO',
    habilidad2:'E: CARCASAS DE PINTURA',
    habilidad3:'C: BUMBOT',
    habilidad4:'X: TUMBADIVAS',
  },
  {
    imagen:'../assets/img/Breach.jpg ',
    personaje:'Breach',
    habilidad1:'Q: FULGOR',
    habilidad2:'E: FALLA SÍSMICA',
    habilidad3:'C: RÉPLICA',
    habilidad4:'X: TRUENO RODANTE',
  },
  {
    imagen:'../assets/img/omen.jpg',
    personaje:'Omen',
    habilidad1:'Q: PARANOIA',
    habilidad2:'E: MANTO OSCURO',
    habilidad3:'C: PASO SOMBRÍO',
    habilidad4:'X: DESDE LAS SOMBRAS',
  },
  {
    imagen:'../assets/img/Brimstone.jpg',
    personaje:'Brimstone',
    habilidad1:'Q: LA INCENDIARIA',
    habilidad2:'E: HUMO CELESTIAL',
    habilidad3:'C: BALIZA POTENCIADORA',
    habilidad4:'X: ATAQUE ORBITAL',
  },
  {
    imagen:'../assets/img/phoenix.jpg',
    personaje:'Phoenix',
    habilidad1:'Q: DESTELLO EN CURVA',
    habilidad2:'E: MANITAS CALIENTES',
    habilidad3:'C: MURO ABRASADOR',
    habilidad4:'X: VA DE FUEGO',
  },
  {
    imagen:'../assets/img/sage.jpg',
    personaje:'Sage',
    habilidad1:'Q: ORBE RALENTIZADOR',
    habilidad2:'E: ORBE CURATIVO',
    habilidad3:'C: ORBE DE BARRERA',
    habilidad4:'X: RESURRECCIÓN',
  },
  {
    imagen:'../assets/img/sova.jpg',
    personaje:'Sova',
    habilidad1:'Q: PROYECTIL ELÉCTRICO',
    habilidad2:'E: PROYECTIL RASTREADOR',
    habilidad3:'C: DRON BÚHO',
    habilidad4:'X: FURIA DEL CAZADOR',
  },
  {
    imagen:'../assets/img/viper.jpg',
    personaje:'Viper',
    habilidad1:'Q: NUBE VENENOSA',
    habilidad2:'E: CORTINA TÓXICA',
    habilidad3:'C: MORDEDURA',
    habilidad4:'X: FOSA VIPÉREA',
  },
  {
    imagen:'../assets/img/cypher.jpg',
    personaje:'Cypher',
    habilidad1:'Q: CIBERJAULA',
    habilidad2:'E: CÁMARA ESPÍA',
    habilidad3:'C: CABLE TRAMPA',
    habilidad4:'X: ASALTO NEURAL',
  },
  {
    imagen:'../assets/img/reyna.jpg',
    personaje:'Reyna',
    habilidad1:'Q: DEVORAR',
    habilidad2:'E: DESECHAR',
    habilidad3:'C: LA MIRADA',
    habilidad4:'X: LA EMPERATRIZ',
  },
  {
    imagen:'../assets/img/killjoy.jpg',
    personaje:'Killjoy',
    habilidad1:'Q: ALARMABOT',
    habilidad2:'E: TORRETA',
    habilidad3:'C: NANOPLAGA',
    habilidad4:'X: DISPOSITIVO INMOVILIZADOR',
  },
  {
    imagen:'../assets/img/skye.jpg',
    personaje:'Skye',
    habilidad1:'Q: FORJACAMINOS',
    habilidad2:'E: LUZ GUÍA',
    habilidad3:'C: REGENERACIÓN',
    habilidad4:'X: BUSCADORES',
  },
  {
    imagen:'../assets/img/yoru.jpg',
    personaje:'Yoru',
    habilidad1:'Q - PUNTO CIEGO',
    habilidad2:'E: INFILTRACIÓN',
    habilidad3:'C - ENGAÑO',
    habilidad4:'X - CAMBIO DIMENSIONAL',
  },
  {
    imagen:'../assets/img/astra.jpg',
    personaje:'Astra',
    habilidad1:'Q: PULSO ESTELAR',
    habilidad2:'E: NEBULOSA',
    habilidad3:'C: POZO GRAVITACIONAL',
    habilidad4:'X: MODO ASTRAL/DIVISIÓN CÓSMICA',
  },
  {
    imagen:'../assets/img/kayo.jpg',
    personaje:'Kay/o',
    habilidad1:'Q: MEMORIA/FLASH',
    habilidad2:'E: PUNTO/CERO',
    habilidad3:'C: FRAG/MENTACIÓN',
    habilidad4:'X: NULL/CMD',
  },
  {
    imagen:'../assets/img/chamber.jpg',
    personaje:'Chamber',
    habilidad1:'Q: CAZADOR DE CABEZAS',
    habilidad2:'E: RENDEZVOUS',
    habilidad3:'C: MARCA REGISTRADA',
    habilidad4:'X: TOUR DE FORCE',
  },
  {
    imagen:'../assets/img/neon.jpg',
    personaje:'Neon',
    habilidad1:'Q: ELECTRORREBOTE',
    habilidad2:'E: VELOCIDAD RELÁMPAGO',
    habilidad3:'C: CARRIL RÁPIDO',
    habilidad4:'X: POTENCIA MÁXIMA',
  },
  {
    imagen:'../assets/img/fade.jpg',
    personaje:'Fade',
    habilidad1:'Q: CAPTURAR',
    habilidad2:'E: ATORMENTAR',
    habilidad3:'C: ACECHADORA',
    habilidad4:'X: ANOCHECER',
  },
];
  constructor() { }

  ngOnInit(): void {
  }

  aggregate(character: Character):void{
    character.personaje;  
  }

}
