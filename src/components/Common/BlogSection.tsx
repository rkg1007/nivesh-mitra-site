export const BlogSection = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`mb-7 ${className ? className : ""}`}>{children}</div>;
};

export const BlogSubSection = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`mb-4 ${className ? className : ""}`}>{children}</div>;
};
