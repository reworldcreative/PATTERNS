interface ImageFilter {
  applyFilter(image: string): string;
}

class SepiaFilter implements ImageFilter {
  applyFilter(image: string): string {
    return "Sepia Filter Applied to " + image;
  }
}

class BlackAndWhiteFilter implements ImageFilter {
  applyFilter(image: string): string {
    return "Black and White Filter Applied to " + image;
  }
}

class VintageFilter implements ImageFilter {
  applyFilter(image: string): string {
    return "Vintage Filter Applied to " + image;
  }
}

class ImageProcessor {
  private filter: ImageFilter;
  constructor(filter: ImageFilter) {
    this.filter = filter;
  }
  setFilter(filter: ImageFilter) {
    this.filter = filter;
  }
  processImage(image: string): string {
    return this.filter.applyFilter(image);
  }
}

const sepiaFilter = new SepiaFilter();
const blackAndWhiteFilter = new BlackAndWhiteFilter();
const vintageFilter = new VintageFilter();

const processor = new ImageProcessor(sepiaFilter);
const originalImage = "Original Image";

console.log("Processed Image:", processor.processImage(originalImage));

processor.setFilter(blackAndWhiteFilter);
console.log("Processed Image:", processor.processImage(originalImage));

processor.setFilter(vintageFilter);
console.log("Processed Image:", processor.processImage(originalImage));
