import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  // newServerName='';
  // newServerContent='';
  @ViewChild('serverContentInput') serverContentInput: ElementRef|any;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement){
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }



}
