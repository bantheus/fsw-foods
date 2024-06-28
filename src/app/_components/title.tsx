interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h2 className="font-semibold">{title}</h2>;
};

export default Title;
