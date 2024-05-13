import type { Video } from "./video";

export interface VideoDownloader {
	getVideo(videoName: string): Video;
}
