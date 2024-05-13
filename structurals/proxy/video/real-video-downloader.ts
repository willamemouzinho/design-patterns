import { Video } from "./video";
import type { VideoDownloader } from "./video-downloader";

export class RealVideoDownloader implements VideoDownloader {
	public getVideo(videoName: string): Video {
		console.log("Connecting to https://www.youtube.com/");
		console.log("Downloading Video");
		console.log("Retrieving Video Metadata");
		return new Video(videoName);
	}
}
