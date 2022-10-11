import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    
constructor(private elementRef: ElementRef){

}//reference to the element the director was placed on
ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='green';
}
}