import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
declare var $;
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = (window.location.hostname === 'localhost') ? 'http://localhost:3977' : 'https://serviacero-api.herokuapp.com';
  constructor(
    private http: HttpClient,
  ) { 
  }

  sendProject(project: any): Observable<any> {
    const token: string = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      
    });
    const url = `${this.baseUrl}/api/project/add-project`;
    const fd = new FormData();

    fd.append('name', project.name);
    fd.append('description', project.description);
    for(let img of project.project) {
      fd.append('image', img);
    }
    fd.append('createdAt', project.createdAt);

    $('#ProcesoAjax').show();
    return this.http.post(url, fd, {headers: headers}).pipe(
      map(
        (res: any) => {
          $('#ProcesoAjax').hide();
          return res;
        }
      ),
      catchError(
        (error: any) => {
          $('#ProcesoAjax').hide();
          return error;
        }
      )
    );
  }

  editProject(project: any): Observable<any> {
    const token: string = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const url = `${this.baseUrl}/api/project/edit-project`;
    const fd = new FormData();
    fd.append('name', project.name);
    fd.append('description', project.description);
    if(project.project) {
      for(let img of project.project) {
        fd.append('image', img);
      }
    }
    
    fd.append('createdAt', project.createdAt);
    fd.append('id', project.id);

    $('#ProcesoAjax').show();
    return this.http.post(url, fd, {headers: headers}).pipe(
      map(
        (res: any) => {
          $('#ProcesoAjax').hide();
          return res;
        }
      ),
      catchError(
        (error: any) => {
          $('#ProcesoAjax').hide();
          return error;
        }
      )
    );
  }

  getProjects(): Observable<any> {
    const url = `${this.baseUrl}/api/project/projects`;
    return this.http.get(url).pipe(
      map(
        (res: any) => {
          return res;
        }
      ),
      catchError(
        (error: any) => {
          return error;
        }
      )
    );
  }

  getProject(idProject: string): Observable<any> {
    const url = `${this.baseUrl}/api/project/get-project?id=${idProject}`;
    return this.http.get(url).pipe(
      map(
        (res: any) => {
          return res;
        }
      ),
      catchError(
        (error: any) => {
          return error;
        }
      )
    );
  }

  deleteProject(idProject: any): Observable<any> {
    const token: string = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const url = `${this.baseUrl}/api/project/delete-project`;
    return this.http.post(url, {idProject}, {headers: headers}).pipe(
      map(
        (res: any) => {
          return res;
        }
      ),
      catchError(
        (error: any) => {
          return error;
        }
      )
    );
  }

  getContacts(): Observable<any> {
    const url = `${this.baseUrl}/api/contacts/contacts`;
    return this.http.get(url).pipe(
      map(
        (res: any) => {
          return res;
        }
      ),
      catchError(
        (error: any) => {
          return error;
        }
      )
    );
  }

  insertCorreo(correo: any): Observable<any> {
    const token: string = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const url = `${this.baseUrl}/api/contacts/add-contact`;

    $('#ProcesoAjax').show();
    return this.http.post(url, {correo}, {headers: headers}).pipe(
      map(
        (res: any) => {
          $('#ProcesoAjax').hide();
          return res;
        }
      ),
      catchError(
        (error: any) => {
          $('#ProcesoAjax').hide();
          return error;
        }
      )
    );
  }
  
}
