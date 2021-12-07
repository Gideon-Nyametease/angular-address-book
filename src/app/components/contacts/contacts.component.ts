import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service'
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => this.contacts = contacts)
  }

  addContact(contact: Contact) {
    this.contactService.addContact(contact).subscribe((contact) => this.contacts.push(contact))
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(() => this.contacts = this.contacts.filter(c => c.id !== contact.id))
  }
}
