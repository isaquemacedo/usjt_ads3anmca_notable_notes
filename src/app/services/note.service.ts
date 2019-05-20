import { Note } from "../models/note.model";
// import {Observable} from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AngularFireDatabase } from "angularfire2/database";
import { LoadingController } from "ionic-angular";

@Injectable()
export class NoteService {
    notes: Array<Note> = new Array<Note>();
    notesSource = new BehaviorSubject<Array<Note>>(this.notes)
    notesCurrent = this.notesSource.asObservable()

    constructor(
        private db: AngularFireDatabase, 
        public loading: LoadingController) {
    
    }

    fetchNotes() {
        this.db.list("/notes/").subscribe(
            (resp) => {
                resp.forEach(note => {
                    this.notes.push(note)
                    this.notesSource.next(this.notes)
                })
            }
        );
    }
       
    editNote(note) {
        this.db.object("/notes/"+note.$key).update({
            title: note.title,
            content: note.content,
            date: note.date
        });
    }

    removeNote(note) {
        this.db.object("/notes/"+note.$key).remove()
        .then(x => console.log ("Note deleted successfully"))
            .catch( error => {
                console.log ("Could not delete note");
                alert ("Could not delete note")
            }
        );

        let index = this.notes.indexOf(note);
        if (index > -1) {
            this.notes.splice(index, 1);
        }
    }

    addNote(note: Note) {
        this.db.list("/notes/").push({
            title: note.title,
            content: note.content,
            date: note.date
        });
           
    }


}