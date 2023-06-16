export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button onClick={() => alert('book')}>{children}</button>;
};
