interface ImageDownloader {
  downloadImage(url: string): void;
}

class RealImageDownloader implements ImageDownloader {
  downloadImage(url: string): void {
    console.log(`Завантаження зображення з ${url}`);
  }
}

class ImageDownloaderProxy implements ImageDownloader {
  private realDownloader: ImageDownloader;
  private cachedImages: Map<string, string> = new Map();

  constructor(realDownloader: ImageDownloader) {
    this.realDownloader = realDownloader;
  }

  downloadImage(url: string): void {
    if (this.cachedImages.has(url)) {
      console.log(
        `Використовую зображення з кешу: ${this.cachedImages.get(url)}`
      );
    } else {
      this.realDownloader.downloadImage(url);
      this.cachedImages.set(url, "Локальний шлях до зображення");
    }
  }
}

const realDownloader = new RealImageDownloader();
const downloaderProxy = new ImageDownloaderProxy(realDownloader);

downloaderProxy.downloadImage("https://example.com/image1.jpg");
downloaderProxy.downloadImage("https://example.com/image2.jpg");
downloaderProxy.downloadImage("https://example.com/image1.jpg"); // Вже в кешу
