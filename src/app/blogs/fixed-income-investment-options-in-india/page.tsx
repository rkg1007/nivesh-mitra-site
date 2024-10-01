import BlogDetails from "@/components/Blog/BlogDetail";
import { Body } from "@/components/Blog/data/fixed-income-investment-options-in-india";

const Page = () => {
  return (
    <BlogDetails
      categories={['Investment', 'Options']}
      title={"Fixed Income Investment Options in India"}
      description={""}
      date={"01-10-2024"}
      image={""}
      altText={""}
      body={<Body />}
    />
  );
};

export default Page;
