export default function ButtonBack(props: ButtonBackProps) {
  return (
    <button
      {...props}
      onClick={() => {
        window.history.back();
      }}
    />
  );
}

interface ButtonBackProps {
  className?: string;
  children?: React.ReactNode;
}
