import { Component } from "@angular/core";
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-ui',
    templateUrl: './ui.component.html',
    styleUrls: ['./ui.component.css']
})

export class UIComponent {
    activeLink: string = '';

    constructor(private router: Router) {
        // Escuchar eventos de navegación para actualizar el estado activo
        this.router.events
            .pipe(filter((event: NavigationEvent): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.activeLink = event.urlAfterRedirects;
            });
    }
}
