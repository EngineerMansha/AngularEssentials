import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MmCkEditorComponent } from "./components/mm-ck-editor/mm-ck-editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MmCkEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
