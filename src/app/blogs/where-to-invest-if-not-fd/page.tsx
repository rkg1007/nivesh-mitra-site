import BlogDetails from "@/components/Blog/BlogDetail";
import { Body } from "@/components/Blog/data/where-to-invest-if-not-fd";

const Page = () => {
  return (
    <BlogDetails
      categories={["Investment", "FD"]}
      title={"Where to invest if not FD ?"}
      description={""}
      date={"01-10-2024"}
      image={""}
      altText={""}
      body={<Body />}
    />
  );
};

export default Page;
