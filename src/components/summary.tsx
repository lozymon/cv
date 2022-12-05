import { Title } from "./title";

export function Summary({ title, description }: any) {
  return (
    <div>
      <Title>{title}</Title>
      <p className="text-sm">{description}</p>
    </div>
  );
}
