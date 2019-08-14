import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <h1>{{ fullName }}</h1>
              `
})
export class AppComponent {
    fullName: string = 'Martin Luther King Jr';
}