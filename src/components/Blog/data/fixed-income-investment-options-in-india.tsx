import Link from "next/link";

export const Body = () => {
  return (
    <>
      <p>
        {
          "Fixed income investments offer a steady income stream with a lower risk profile compared to equity investments. Here are some popular options in India along with their pros and cons :-"
        }
      </p>
      <h4 className="mb-2">{"1. Fixed Deposits (FDs)"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {"Safe and secure, guaranteed returns, flexible tenures."}
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {
            "Relatively low returns compared to other options, taxation on interest income"
          }
        </li>
      </ul>
      <h4 className="mb-2">{"2. Public Provident Fund (PPF)"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {
            "Tax benefits under Section 80C, long-term investment, good returns, government backed."
          }
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Lock-in period of 15 years, low liquidity."}
        </li>
      </ul>
      <h4 className="mb-2">{"3. National Savings Certificate (NSC)"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {"Tax benefits under Section 80C, higher interest rates than FDs."}
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Lower liquidity compared to FDs, fixed tenure."}
        </li>
      </ul>
      <h4 className="mb-2">{"4. Senior Citizens Savings Scheme (SCSS)"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {
            "Higher interest rates than FDs, tax benefits, suitable for senior citizens."
          }
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Lock-in period of 5 years, limited investment amount."}
        </li>
      </ul>
      <h4 className="mb-2">{"5. Post Office Monthly Income Scheme (POMIS)"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {"Regular income, relatively safe, government backed."}
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Lower returns compared to other options, lock-in period."}
        </li>
      </ul>
      <h4 className="mb-2">{"6. Debt Mutual Funds"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {
            "Professional management, diversification, potential for higher returns than FDs."
          }
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Market risk, investment risk, exit load."}
        </li>
      </ul>
      <h4 className="mb-2">{"7. Corporate Bonds"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {"Higher potential returns than FDs, tax efficiency."}
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Credit risk, liquidity risk, interest rate risk."}
        </li>
      </ul>
      <h4 className="mb-2">{"8. Government Securities"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {"Safe and secure, tax-free interest income."}
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Lower returns compared to corporate bonds, limited liquidity."}
        </li>
      </ul>
      <h4 className="mb-2">{"9. Company Fixed Deposits"}</h4>
      <ul>
        <li>
          <span className="font-bold">Pros :- </span>
          {"Higher interest rates than bank FDs."}
        </li>
        <li>
          <span className="font-bold">Cons :- </span>
          {"Higher risk compared to bank FDs, liquidity risk."}
        </li>
      </ul>
      <h4 className="mb-2">{"Key Considerations:"}</h4>
      <ul>
        <li>
          <span className="font-bold">Risk Tolerance :- </span>
          {"Assess your comfort level with market fluctuations."}
        </li>
        <li>
          <span className="font-bold">Investment Horizon :- </span>
          {"Determine your investment timeframe."}
        </li>
        <li>
          <span className="font-bold">Tax Implications :- </span>
          {
            "Understand the tax benefits and liabilities associated with each option."
          }
        </li>
        <li>
          <span className="font-bold">Liquidity Needs :- </span>
          {"Consider how easily you need to access your funds."}
        </li>
      </ul>
      <p>
        <span className="font-bold">
          It's essential to diversify your investment portfolio to manage risk
          effectively.
        </span>
        {
          " Consider consulting with a financial advisor to make informed decisions based on your specific financial goals and circumstances."
        }
      </p>
      <p>
        <span className="font-bold">
          Want to learn more or start investing?
        </span>
        {
          " Consider consulting with a financial advisor to make informed decisions based on your specific financial goals and circumstances."
        }
      </p>
      <h5>
        {"Do you have any questions about these options? "}
        <Link href={"/contact"} className="text-blue">
          Visit Us
        </Link>
      </h5>
    </>
  );
};
