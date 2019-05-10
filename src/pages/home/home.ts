import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/models/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [
    {
      id: '1',
      date: '2016-02-01',
      title: 'Firebase',
      content: 'Que tal programar Serverless?'
    },
    {
      id: '2',
      date: '2016-01-01',
      title: 'Ionic',
      content: 'Aprenda o básico de Ionic'
    },
    {
      id: '3',
      date: '2016-03-01',
      title: 'Angular',
      content: 'Importante para desenvolver com Ionic'
    }
  ]

  constructor(public navCtrl: NavController, private noteService: NoteService) {
    this.notes = noteService.notes;
  }

  onItemClick(note) {
    this.navCtrl.push('DetailPage', {
      noteParam: note
    });
  }

}
