/**
 * Created by Mateusz on 27.08.2017.
 */
import {Component} from 'angular2/core';
import {Video} from './video'

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['playlistVideos']
})

export class PlaylistComponent {

    playVideo(vid:Video){
        console.log(JSON.stringify(vid));
    }

}
