import moment from "moment";
import LikedZone from "./likedZone";
import Image from "next/image";
import { HeaderPostTitle } from "./HeaderpostTitle";

export function PostHeader({ post }) {
  const convertDate = (date: string) => {
    return moment(date).format("LL");
  };

  const mapTags = (tags: { name: string }[]) => {
    return tags.map((tag: { name: string }) => (
      <span key={tag.name} className="px-1 text-slate-900 font-medium">
        #{tag.name}
      </span>
    ));
  };

  return (
    <div className="flex flex-col w-4/5">
      <div
        className="h-96 flex flex-col justify-end rounded"
        style={{
          backgroundImage: `url(${post.cover_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white opacity-90 pl-12 py-4">
          <HeaderPostTitle
            title={post.title}
            author={post.author}
            createdAt={post.createdAt}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start pt-3">
        <div className="flex flex-row">
          <LikedZone id={post.id} />
        </div>
      </div>
    </div>
  );
}
