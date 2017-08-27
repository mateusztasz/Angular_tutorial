/**
 * Created by Mateusz on 27.08.2017.
 */
export class Video {
    id: number;
    title: string;
    videoCode: string;
    desc: string;

    constructor(id: number, title: string, videoCode: string, desc: string) {
        this.id = id;
        this.title = title;
        this.videoCode = videoCode;
        this.desc = desc;
    }
}