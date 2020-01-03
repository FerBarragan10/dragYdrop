import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../services/paises.service';
import { CdkDragDrop,moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
   paises:any=[];
   paisesSudamerica:any=[];
   otrosPaises:any=[];

  constructor(private service:PaisesService) { }

  ngOnInit() {
    this.getPaises();
  }
  getPaises(){
    this.service.getPaises().subscribe(data=>{
        console.log(data);
        this.paises=data;
    });
  }
  drop(evento:CdkDragDrop<any>){
  
    console.log("ok!",evento);
    if(evento.previousContainer!==evento.container){
     
      transferArrayItem(evento.previousContainer.data,evento.container.data,evento.previousIndex,evento.currentIndex);
    }else{
      moveItemInArray(this.paises,evento.previousIndex,evento.currentIndex);
    }
  }
}
