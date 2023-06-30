export const Header = ({ text }: { text: string }) => {
  return (
    <>
      <button className={'btn btn-primary'}>TEST</button>
      <h1 className={'text-3xl font-bold underline'}>{text}</h1>
    </>
  );
};
