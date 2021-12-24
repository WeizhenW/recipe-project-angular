import { Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective {
    private dropdownIsOpen: boolean = false;

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) {}

    @HostListener('click') toggleDropdown() {
        const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
        if(!this.dropdownIsOpen) {
            this.renderer.addClass(dropdownMenu, 'show');
        } else {
            this.renderer.removeClass(dropdownMenu, 'show');
        }
        this.dropdownIsOpen = !this.dropdownIsOpen;
    }
}