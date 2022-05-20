import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';
import { finalize, Observable, Subscription } from 'rxjs';
import { TurNLPValidateResponse } from './model/nlp-validate.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public json!: Observable<TurNLPValidateResponse>;

  constructor(private httpClient: HttpClient) { }
  name = 'Angular ' + VERSION.major;
  dataimage: any;

  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr = 'Choose File';
  fileName!: string;
  uploadProgress!: number;
  uploadSub!: Subscription;
  getResponse(file: File): Observable<any> {
    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);
      return this.httpClient.post<any>("http://localhost:2700/api/nlp/6f6a2468-95b8-419e-bf4a-ac21cca0e5c2/validate/document",
        formData, {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa("admin:admin")
        })
      });
    }
    return new Observable<TurNLPValidateResponse>();
  }
  onFileSelected(event: any) {
    this.json = this.getResponse(event.target.files[0]);
  }
}
