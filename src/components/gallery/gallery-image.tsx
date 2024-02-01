import Image from "next/image";
import { GalleryModal } from "./gallery-model";

export const GalleryImage = ({ src }: { src: string }) => {
  return (
    <GalleryModal src={src}>
      <div className="relative h-[420px] overflow-hidden rounded-md">
        <Image src={src} alt={src} objectFit="cover" fill />
      </div>
    </GalleryModal>
  );
};
