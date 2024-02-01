import { GalleryImage } from "@/components/gallery/gallery-image";

const images = [
  "/gallery/a.jpeg",
  "/gallery/b.jpeg",
  "/gallery/e.jpeg",
  "/gallery/d.jpeg",
  "/gallery/c.jpeg",
  "/gallery/e.jpeg",
  "/gallery/e.jpeg",
  "/gallery/d.jpeg",
];

const GalleryPage = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6  mt-10">
      {images.map((image) => (
        <GalleryImage key={image} src={image} />
      ))}
    </div>
  );
};

export default GalleryPage;
