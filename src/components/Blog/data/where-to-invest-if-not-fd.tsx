import { BlogSection, BlogSubSection } from "@/components/Common/BlogSection";
import { Bold, H4, H5, Text } from "@/components/Common/Heading";
import { List, ListItem } from "@/components/Common/List";
import Link from "next/link";

export const Body = () => {
  return (
    <>
      <BlogSubSection>
        <p>Let's Simplify That!</p>
      </BlogSubSection>
      <BlogSection>
        <H4>Why Fixed Deposits Aren't So Hot Anymore</H4>
        <Text>
          For a long time, Fixed Deposits (FDs) were the go-to choice for saving
          money. They were safe and you knew exactly how much you'd get back.
          But guess what? The returns on FDs have gone down, so many people are
          looking for better options.
        </Text>
      </BlogSection>
      <BlogSection>
        <H4>Better Ways to Grow Your Money</H4>
        <Text>
          Don't worry, there are plenty of other ways to invest your money and
          earn more. Here are a few :-
        </Text>
        <List className="list-disc pl-10">
          <ListItem>
            <Bold>Post Office Monthly Income Account (POMIS):</Bold> This is
            like a safe FD, but you get paid every month. It's great for people
            who want a steady income and don't like taking risks.
          </ListItem>
          <ListItem>
            <Bold>NPS Tier 2:</Bold> " If you already have an NPS account, you
            can open a Tier 2 one. It usually gives you better returns than FDs.
          </ListItem>
          <ListItem>
            <Bold>National Savings Certificate (NSC):</Bold> This is another
            government scheme where you lock your money for 5 years and get a
            good return at the end.
          </ListItem>
          <ListItem>
            <Bold>Corporate Bonds:</Bold> These are like loans you give to
            companies. You get interest payments and your money back when the
            bond ends.;
          </ListItem>
          <ListItem>
            <Bold>Debt Mutual Funds:</Bold> This is where your money is invested
            in different loans and bonds. It's like spreading your risk.
          </ListItem>
          <ListItem>
            <Bold className="font-bold">Liquid Funds:</Bold> Similar to debt
            funds, but your money is invested in short-term loans. You can
            easily get your money back when you need it.
          </ListItem>
          <ListItem>
            <Bold className="font-bold">Equity Funds:</Bold> This is where your
            money is invested in stocks of companies. It's riskier, but it can
            also give you higher returns over time.
          </ListItem>
        </List>
      </BlogSection>
      <BlogSection>
        <Text>
          <Bold>Remember:</Bold> It's always a good idea to spread your money
          across different investments. This helps you manage risk.
        </Text>
      </BlogSection>
      <BlogSection>
        <Text>
          <Bold>Want to learn more or start investing?</Bold>Check out
          NiveshMitra! We can help you choose the right investments for you.
        </Text>
      </BlogSection>
      <H5>
        Do you have any questions about these options?{" "}
        <Link href={"/contact"} className="text-blue">
          Ask Us
        </Link>
      </H5>
    </>
  );
};
