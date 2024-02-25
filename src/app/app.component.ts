import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as Editor from '../../ckeditor5-custom-build/build/ckeditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RichTextEditorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ckeditor_project';
  sampleForm = new FormGroup({
    title: new FormControl(),
    editor: new FormControl(),
  });

  textData = '';

  logData() {
    console.log(this.sampleForm.value);
    this.textData = this.sampleForm.value.editor;
  }

  // public Editor = ClassicEditor;
}
