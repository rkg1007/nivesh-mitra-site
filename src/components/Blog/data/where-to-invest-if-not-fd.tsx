import Link from "next/link";

export const Body = () => {
  return (
    <>
      <p>{"Let's Simplify That!"}</p>
      <h4 className="mb-2">{"Why Fixed Deposits Aren't So Hot Anymore"}</h4>
      <p>
        {
          "For a long time, Fixed Deposits (FDs) were the go-to choice for saving money. They were safe and you knew exactly how much you'd get back. But guess what? The returns on FDs have gone down, so many people are looking for better options."
        }
      </p>
      <h4 className="mb-2">{"Better Ways to Grow Your Money"}</h4>
      <p>
        {
          "Don't worry, there are plenty of other ways to invest your money and earn more. Here are a few :-"
        }
        <ul className="mt-2">
          <li>
            <span className="font-bold">
              Post Office Monthly Income Account (POMIS):
            </span>
            {
              " This is like a safe FD, but you get paid every month. It's great for people who want a steady income and don't like taking risks. "
            }
          </li>
          <li>
            <span className="font-bold">NPS Tier 2:</span>
            {
              " If you already have an NPS account, you can open a Tier 2 one. It usually gives you better returns than FDs."
            }
          </li>
          <li>
            <span className="font-bold">
              National Savings Certificate (NSC):
            </span>
            {
              " This is another government scheme where you lock your money for 5 years and get a good return at the end."
            }
          </li>
          <li>
            <span className="font-bold">Corporate Bonds:</span>
            {
              " These are like loans you give to companies. You get interest payments and your money back when the bond ends."
            }
          </li>
          <li>
            <span className="font-bold">Debt Mutual Funds:</span>
            {
              " This is where your money is invested in different loans and bonds. It's like spreading your risk."
            }
          </li>
          <li>
            <span className="font-bold">Liquid Funds:</span>
            {
              " Similar to debt funds, but your money is invested in short-term loans. You can easily get your money back when you need it."
            }
          </li>
          <li>
            <span className="font-bold">Equity Funds:</span>
            {
              " This is where your money is invested in stocks of companies. It's riskier, but it can also give you higher returns over time."
            }
          </li>
        </ul>
      </p>

      <p>
        <span className="font-bold">Remember:</span>
        {
          " It's always a good idea to spread your money across different investments. This helps you manage risk."
        }
      </p>
      <p>
        <span className="font-bold">
          Want to learn more or start investing?
        </span>
        {
          " Check out NiveshMitra! We can help you choose the right investments for you."
        }
      </p>
      <h5>
        {"Do you have any questions about these options? "}
        <Link href={"/contact"} className="text-blue">Visit Us</Link>
      </h5>
    </>
  );
};
