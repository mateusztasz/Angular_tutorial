/**
 * Created by Mateusz on 27.08.2017.
 */
import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Video} from './video'

@Component({
    selector: 'playlist',
    templateUrl: 'app/templates/playlist.component.html',
    //inputs: ['playlistVideos']
})

export class PlaylistComponent {
    @Input() playlistVideos: Array<Video>;
    @Output() onSelectedVideo = new EventEmitter<Video>();
    currentVideo: Video;



    playVideo(vid:Video){
        console.log(JSON.stringify(vid));
        this.onSelectedVideo.emit(vid);
        this.currentVideo = vid;
    }

}
