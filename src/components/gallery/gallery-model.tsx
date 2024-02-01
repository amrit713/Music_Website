import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface GalleryModalProps {
  children: React.ReactNode;
  src: string;
}

export const GalleryModal = ({ children, src }: GalleryModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="p-10">
        <div className="relative h-[520px] overflow-hidden  w-full rounded-md">
          <Image src={src} alt={src} objectFit="cover" fill />
        </div>
      </DialogContent>
    </Dialog>
  );
};
