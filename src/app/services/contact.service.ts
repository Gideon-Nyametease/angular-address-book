import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from 'src/app/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:5000/contacts'

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    // const contacts = of(CONTACTS);
    // return contacts
    return this.http.get<Contact[]>(this.apiUrl)
  }

  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/${contact.id}}`;
    return this.http.delete<Contact>(url);
  }
}
