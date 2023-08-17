// Кеш проксі.  Кеш проксі покращує продуктивність реального об'єкта, коли вони виконують довгі операції, а результат цих операцій рідко змінюється.
// Проксі захисту.Проксі захисту, додає рівень захисту над реальним об'єктом.
// Віддалений проксі.Віддалений проксі - сервер надає локальний об'єкт, який посилається на реальний об'єкт в іншому місці, як правило, через мережеве з'єднання.
// Розумний проксі.Розумний проксі додає додаткову функціональність реальному об'єкта.
// Віртуальний проксі. Віртуальний проксі забезпечує спрощену версію складного об'єкта. Тільки тоді, коли потрібні дані реального об'єкта, лише тоді він створюється, забезпечуючи форму лінивої ініціалізації.

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
