import { RealVideoDownloader } from "./real-video-downloader";
import type { Video } from "./video";
import type { VideoDownloader } from "./video-downloader";

export class ProxyVideoDownloader implements VideoDownloader {
	private readonly _videoCache: Map<string, Video> = new Map<string, Video>();
	private readonly _downloader: VideoDownloader = new RealVideoDownloader();

	public getVideo(videoName: string): Video {
		if (!this._videoCache.has(videoName)) {
			this._videoCache.set(videoName, this._downloader.getVideo(videoName));
		}
		console.log("Retrieving video from cache...");
		console.log("-----------------------");
		return this._videoCache.get(videoName) as Video;
	}
}
