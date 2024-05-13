import type { Internet } from "./internet/internet";
import { ProxyInternet } from "./internet/proxy-internet";
import { ProxyVideoDownloader } from "./video/proxy-video-downloader";
import type { VideoDownloader } from "./video/video-downloader";

const internet: Internet = new ProxyInternet();
internet.connectTo("google.com");
internet.connectTo("banned.com");

console.log("\n==========================================\n");

const videoDownloader: VideoDownloader = new ProxyVideoDownloader();
videoDownloader.getVideo("geekific");
videoDownloader.getVideo("geekific");
videoDownloader.getVideo("likeNsub");
videoDownloader.getVideo("likeNsub");
videoDownloader.getVideo("geekific");
