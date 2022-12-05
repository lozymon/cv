import { Title } from "./title";

function skillItem(item: string) {
  return <li>{item}</li>;
}

function SkillItems(props: { list: string[] }) {
  const list = props.list.map(skillItem);

  return <ul className="list-disc list-inside text-sm">{list}</ul>;
}

export function Skills({ title, list }: any) {
  return (
    <div>
      <Title>{title}</Title>
      <SkillItems list={list} />
    </div>
  );
}
