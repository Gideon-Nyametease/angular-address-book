import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/Contact';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter

  firstname: string = "";
  lastname: string = "";
  number: string = "";
  text: string = "";
  showAddContact!: boolean;
  subscription!: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddContact = value))
  }

  ngOnInit(): void {
  }

  onSubmit(){
      if(!this.firstname){
        alert('Please add a First Name');
        return;
      }

      const newContact = {
        firstname: this.firstname,
        lastname: this.lastname,
        number: this.number,
        text: this.text
      }

      this.onAddContact.emit(newContact);

      this.firstname = '';
      this.lastname = '';
      this.number = '';
      this.text = '';
  }
}
