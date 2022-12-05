import { Title } from "./title";

function experienceItem(item: string) {
  return <li>{item}</li>;
}

function ExperienceItems(props: { list: string[] }) {
  const items = props.list.map(experienceItem);

  return <ul className="list-disc list-inside text-sm">{items}</ul>;
}

export function Experience({ title, list, info }: { title: string; list: string[]; info: string }) {
  return (
    <div>
      <Title>{title}</Title>
      <p>{info}</p>
      <ExperienceItems list={list} />
    </div>
  );
}
