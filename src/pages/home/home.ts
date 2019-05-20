import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/services/note.service';
// import { Note } from '../../app/models/note.model';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  // notes: Array<Note>
  notes: any

  constructor(
    public navCtrl: NavController, 
    private noteService: NoteService,
    private db: AngularFireDatabase) {
      this.noteService.notesCurrent.subscribe(
        response => { this.notes = response }
      )
  }

  ngOnInit (){
    this.notes = this.noteService.fetchNotes();
  }

  onItemClick(note) {
    this.navCtrl.push('DetailPage', {
      noteParam: note
    });
  }

  onAddClick() {
    this.navCtrl.push('DetailPage');
  }

}
