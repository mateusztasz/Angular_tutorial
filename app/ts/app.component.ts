import {Component} from 'angular2/core';
import {Config} from './config.service'

import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {VideoPlayerComponent} from './videoplayer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [PlaylistComponent, VideoPlayerComponent]
})

export class AppComponent {
    myHeading = Config.MAIN_HEADING;
    videos: Array<Video>;
    video: Video;

    constructor() {
        this.videos = [
            new Video(1, "Nie chcę w innym miejscu być", "Lw4ruVnxtZ8", "Rozpal ogień - gitara"),
            new Video(2, "Nasz Bóg", "qFc0wkkEwSY", "Brak opisu")
        ];
        this.video = this.videos[0];
    }


    onVideoSelected(video: Video) {
        this.video = video;
    }
}
