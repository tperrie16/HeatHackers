export const Card = ({ children, className }) => (
  <div className={`bg-white border p-4 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);
