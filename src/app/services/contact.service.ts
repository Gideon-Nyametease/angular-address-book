import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from 'src/app/Contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:5000/contacts'

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl)
  }

  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/${contact.id}`;
    console.log("Contact ID =>"+url)
    return this.http.delete<Contact>(url);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact, httpOptions);
  }
}
