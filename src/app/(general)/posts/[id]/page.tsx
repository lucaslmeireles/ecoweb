import LikedZone from "@/components/likedZone";
import DisqusComments from "./DisqusComponent";
import moment from "moment";
import { getPostById } from "@/app/data";
import { PostData } from "@/types/dataFunctions.type";
import { PostHeader } from "@/components/PostHeader";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = (await getPostById(params.id)) as PostData;

  if (!post.tags) {
    return <div>Carregando</div>;
  }

  return (
    <div className="flex flex-col align-middle items-center h-full bg-slate-100">
      <PostHeader post={post} />
      <section
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="Content pt-6 my-5 w-3/5 text-slate-900 text-base justify-normal"
      ></section>
      <span className="w-9/12 h-1 bg-slate-700 mb-4"></span>
      <section className="Comments w-4/6">
        <DisqusComments id={post.id} title={post.title} />
      </section>
    </div>
  );
}
