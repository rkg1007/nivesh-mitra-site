import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {
  return (
    <Link href={"/blogs/1"}>
      <div className="group">
        <div className="relative mb-6 aspect-[370/280] w-full overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
          <Image
            src={blog.image}
            alt={"Some Alt Text"}
            fill
            className="w-full object-cover"
          />
        </div>

        <h3>
          <span className="bg-gradient-to-r from-primary/20 to-primary/10 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
            {blog.title}
          </span>
        </h3>
        <p>{blog.description}</p>

        <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <p className="text-sm">
              {new Date(blog.publishedAt)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </p>
          </div>

          {blog.category}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
