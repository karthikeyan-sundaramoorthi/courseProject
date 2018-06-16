import { Directive , OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';
@Directive({
	'selector': '[addClass]'
})

export class AddClassDirective implements OnInit {
	//@HostBinding('style.color') color:string = '';
	constructor(private renderer: Renderer2 , private element: ElementRef) {
		// code...
	}
	ngOnInit(){
		/*this.element.nativeElement.className += 'asdf';
		this.element.nativeElement.style.color = 'blue';*/
		this.renderer.addClass(this.element.nativeElement, 'asdf');
	}

	@HostListener('click') myFunction(eventData: Event){
		this.renderer.addClass(this.element.nativeElement, 'btn-outline-success');
		//this.color = 'green';
	}
}