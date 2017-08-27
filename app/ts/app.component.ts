import {Component} from 'angular2/core';
import {Config} from './config.service'

import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    myHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor() {
        this.videos = [new Video(1, "Nie chcę w innym miejscu być", "Lw4ruVnxtZ8", "Rozpal ogień - gitara"),
        new Video(2, "Nasz Bóg","qFc0wkkEwSY","Brak opisu")]
    }
}
