import moment from "moment";

export type HeaderPostTitleType = {
  title: string;
  author: {
    firstName: string;
  };
  createdAt: string;
};

export function HeaderPostTitle({
  title,
  author,
  createdAt,
}: HeaderPostTitleType) {
  const convertDate = (date: string) => {
    return moment(date).format("LL");
  };
  return (
    <>
      <h1 className=" text-black font-semibold text-3xl">{title}</h1>
      <p className="text-neutral-600 font-medium text-lg">
        Descriçao muito boa ahahahhaa
      </p>
      <p className="text-slate-900 text-base font-medium">
        Posted by {author.firstName}, {convertDate(createdAt)}
      </p>
    </>
  );
}
