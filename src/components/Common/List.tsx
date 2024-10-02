export const List = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <ul className={`pl-8 list-disc ${className ? className : ""}`}>
      {children}
    </ul>
  );
};

export const ListItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <li className={`${className ? className : ""}`}>{children}</li>;
};
