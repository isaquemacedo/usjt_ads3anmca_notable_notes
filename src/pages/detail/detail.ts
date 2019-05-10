import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../app/models/note.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
  }

  onTrash() {
    this.noteService.removeNote(this.note);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.note = this.navParams.get("noteParam");
    console.log("nav - param", this.note);
  }

}
