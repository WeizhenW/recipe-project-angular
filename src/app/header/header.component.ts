import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() headerClicked = new EventEmitter<string>();
    onClickHeader(headerName) {
        this.headerClicked.emit(headerName);
    }

}