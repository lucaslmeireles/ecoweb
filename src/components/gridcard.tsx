import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { DeleteButton } from "./deleteButton";
import { GridCardProps } from "@/types/dataFunctions.type";

export const GridCard = (data: GridCardProps) => {
  const { title, id, cover_img, status, myposts } = data;
  return (
    <div className="flex my-2 flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg hover:shadow-slate-600 transition-all">
      <Image
        src={cover_img}
        width={256}
        height={256}
        alt=""
        className="h-full w-full object-cover opacity-70"
      />
      <div className="flex justify-between align-middle items-center bottom-0 w-full h-16 absolute">
        {myposts && (
          <span className="top-0 z-10">
            <DeleteButton postId={id as number} />
          </span>
        )}
        {status && (
          <div className="top-2 right-1 bg-slate-200 m-auto w-20 h-5 rounded-md ">
            <p className="text-slate-900 text-base">Rascunho</p>
          </div>
        )}
        <div className="bg-white opacity-80 ">
          <Link
            className="flex flex-row items-center pb-2"
            href={`/posts/${id}`}
          >
            <p className="font-semibold ml-2 mt-1 mb-2 h-2/5 w-3/5  text-neutral-950 text-clip">
              {title}
            </p>

            <div className="w-20 h-5 bg-accent rounded-md mr-2 mt-1 flex flex-row items-center ">
              <p className="text-secondary text-xs px-1 font-bold">Ler Mais</p>
              <AiOutlineArrowRight className="text-secondary" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
