import { RealVideoDownloader } from "./real-video-downloader";
import type { Video } from "./video";
import type { VideoDownloader } from "./video-downloader";

export class ProxyVideoDownloader implements VideoDownloader {
	private readonly videoCache: Map<string, Video> = new Map<string, Video>();
	private readonly downloader: VideoDownloader = new RealVideoDownloader();

	public getVideo(videoName: string): Video {
		if (!this.videoCache.has(videoName)) {
			this.videoCache.set(videoName, this.downloader.getVideo(videoName));
		}
		console.log("Retrieving video from cache...");
		console.log("\n-----------------------\n");

		return this.videoCache.get(videoName) as Video;
	}
}
