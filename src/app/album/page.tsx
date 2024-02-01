import { AlbumCard } from "@/components/album/album-card";
import { contents } from "@/content/album";
const AlbumPage = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
        {contents.map((content) => (
          <AlbumCard
            key={content.albumName}
            singerName={content.singerName}
            src={content.src}
            albumName={content.albumName}
            href={content.src}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
