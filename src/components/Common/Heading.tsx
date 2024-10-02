type HeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export const H1 = ({ className, children }: HeadingProps) => {
  return (
    <div className={`mb-6 ${className ? className : ""}`}>
      {children ? <h1>{children}</h1> : null}
    </div>
  );
};

export const H2 = ({ className, children }: HeadingProps) => {
  return (
    <div className={`mb-5 ${className ? className : ""}`}>
      {children ? <h2>{children}</h2> : null}
    </div>
  );
};

export const H3 = ({ className, children }: HeadingProps) => {
  return (
    <div className={`mb-4 ${className ? className : ""}`}>
      {children ? <h3>{children}</h3> : null}
    </div>
  );
};

export const H4 = ({ className, children }: HeadingProps) => {
  return (
    <div className={`mb-3 ${className ? className : ""}`}>
      {children ? <h4>{children}</h4> : null}
    </div>
  );
};

export const H5 = ({ className, children }: HeadingProps) => {
  return (
    <div className={`mb-2 ${className ? className : ""}`}>
      {children ? <h5>{children}</h5> : null}
    </div>
  );
};

export const H6 = ({ className, children }: HeadingProps) => {
  return (
    <div className={`mb-1 ${className ? className : ""}`}>
      {children ? <h6>{children}</h6> : null}
    </div>
  );
};

export const Bold = ({ className, children }: HeadingProps) => {
  return children ? (
    <span className={`font-bold ${className ? className : ""}`}>
      {children}
    </span>
  ) : null;
};

export const Text = ({ className, children }: HeadingProps) => {
  return children ? (
    <p className={`mb-1 ${className ? className : ""}`}>{children}</p>
  ) : null;
};
