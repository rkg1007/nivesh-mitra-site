import Image from "next/image";
import Link from "next/link";

const BlogDetails = async ({
  categories,
  title,
  description,
  date,
  image,
  altText,
  body,
}) => {
  return (
    <section className="pb-20 pt-25">
      <div className="mx-auto max-w-[1030px] px-4 sm:px-8 xl:px-0">
        <div className="mx-auto max-w-[770px] text-center">
          <div className="flex items-center justify-center gap-2">
            {categories.map((category: string, key: number) => (
              <Link
                key={key}
                href={`/blogs}`}
                className="mb-1 inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-blue "
              >
                {category}
              </Link>
            ))}
          </div>
          <h1 className="text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
            {title}
          </h1>
          {description ? <p className="text-body">{description}</p> : <></>}

          <div className="flex items-center justify-center gap-4">
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <p>
                  {new Date(date).toDateString().split(" ").slice(1).join(" ")}
                </p>
                <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
                <p>1 min read</p>
              </div>
            </div>
          </div>
        </div>

        {image ? (
          <Image
            src={image}
            alt={altText}
            className="mb-11 mt-10 rounded-lg"
            width={1030}
            height={550}
          />
        ) : (
          <></>
        )}

        <div className="mb-10"></div>

        <div className="mx-auto max-w-[770px]">
          <div className="blog-details blog-details-one">{body}</div>

          {/* <!-- Blog Show More BTN --> */}
          <button className="mx-auto flex justify-center">
            <Link
              href={`/blogs`}
              className="mt-10 rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark  hover:text-white"
            >
              View all Posts
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
