import { BlogSection, BlogSubSection } from "@/components/Common/BlogSection";
import { Bold, H4, H6 } from "@/components/Common/Heading";
import { List, ListItem } from "@/components/Common/List";
import Link from "next/link";

export const Body = () => {
  return (
    <>
      <BlogSection>
        <BlogSubSection>
          <p>
            Fixed income investments offer a steady income stream with a lower
            risk profile compared to equity investments. Here are some popListar
            options in India along with their pros and cons :-
          </p>
        </BlogSubSection>
        <BlogSubSection>
          <H6>1. Fixed Deposits (FDs)</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Safe and secure, guaranteed returns,
              flexible tenures.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Relatively low returns compared to other
              options, taxation on interest income.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>2. PubListItemc Provident Fund (PPF)</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Tax benefits under Section 80C, long-term
              investment, good returns, government backed.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Lock-in period of 15 years, low
              ListItemquidity.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>3. National Savings Certificate (NSC)</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Tax benefits under Section 80C, higher
              interest rates than FDs.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Lower ListItemquidity compared to FDs, fixed
              tenure.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>4. Senior Citizens Savings Scheme (SCSS)</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Higher interest rates than FDs, tax
              benefits, suitable for senior citizens.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Lock-in period of 5 years, ListItemmited
              investment amount.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>5. Post Office Monthly Income Scheme (POMIS)</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> RegListar income, relatively safe,
              government backed.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Lower returns compared to other options,
              lock-in period.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>6. Debt Mutual Funds</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Professional management, diversification,
              potential for higher returns than FDs.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Market risk, investment risk, exit load.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>7. Corporate Bonds</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Higher potential returns than FDs, tax
              efficiency.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Credit risk, ListItemquidity risk, interest
              rate risk.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>8. Government Securities</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Safe and secure, tax-free interest income.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Lower returns compared to corporate bonds,
              ListItemmited ListItemquidity.
            </ListItem>
          </List>
        </BlogSubSection>
        <BlogSubSection>
          <H6>9. Company Fixed Deposits</H6>
          <List>
            <ListItem>
              <Bold>Pros :- </Bold> Higher interest rates than bank FDs.
            </ListItem>
            <ListItem>
              <Bold>Cons :- </Bold> Higher risk compared to bank FDs,
              ListItemquidity risk.
            </ListItem>
          </List>
        </BlogSubSection>
      </BlogSection>
      <BlogSection>
        <H4>Key Considerations :- </H4>
        <List>
          <ListItem>
            <Bold>Risk Tolerance :- </Bold> Assess your comfort level with
            market fluctuations.
          </ListItem>
          <ListItem>
            <Bold>Investment Horizon :- </Bold> Determine your investment
            timeframe.
          </ListItem>
          <ListItem>
            <Bold>Tax ImpListItemcations :- </Bold> Understand the tax benefits
            and ListItemabiListItemties associated with each option.
          </ListItem>
          <ListItem>
            <Bold>ListItemquidity Needs :- </Bold> Consider how easily you need
            to access your funds.
          </ListItem>
        </List>
      </BlogSection>
      <BlogSection>
        <p>
          <Bold>
            It's essential to diversify your investment portfoListItemo to
            manage risk effectively.
          </Bold>{" "}
          Consider consListting with a financial advisor to make informed
          decisions based on your specific financial goals and circumstances.
        </p>
      </BlogSection>
      <BlogSection>
        <p>
          <Bold>Want to learn more or start investing?</Bold> Consider
          consListting with a financial advisor to make informed decisions based
          on your specific financial goals and circumstances.
        </p>
      </BlogSection>
      <h5>
        Do you have any questions about these options?
        <Link href={"/contact"} className="text-blue">
          Visit Us
        </Link>
      </h5>
    </>
  );
};
