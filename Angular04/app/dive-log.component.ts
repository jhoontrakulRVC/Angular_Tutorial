//this tells angular the role orientation "type" this particular class will play.
import { Component } from '@angular/core';

import {DiveLogEntry} from './dive-log-entry'

//"selector:" tell angular that the tag <divelog> in the index.html file refers to this calss.
//templateUrl: specifies that this calss has a template dictating how it should be displayed.
@Component({
    selector: 'divelog',
    templateUrl: 'app/dive-log.template.html'
})

export class DiveLogComponent {
    public dives: DiveLogEntry[] = [];
    private _index = 0;
    private _stockDives = DiveLogEntry.StockDives;

    public enableAdd() {
        return this._index < this._stockDives.length;
    }

    public addDive() {
        if (this.enableAdd()) {
            this.dives.push(this._stockDives[this._index++]);
        }
    }

    public clearDives() {
        this.dives = [];
        this._index = 0;
    }
}