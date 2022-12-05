import { Experience as IExperience } from "../interfaces/experience";
import { Experience } from "./experience";
import { Title } from "./title";

function experienceItem(experience: IExperience) {
  const info = `${experience.company} | ${experience.start_date} - ${experience.end_date}`;

  return <Experience title={experience.description} info={info} list={experience.list} />;
}

function ExperienceItems(props: { experience: IExperience[] }) {
  const items = props.experience.map(experienceItem);

  return <>{items}</>;
}

export function Experiences({ title, experience }: { title: string; experience: IExperience[] }) {
  return (
    <>
      <Title>{title}</Title>
      <ExperienceItems experience={experience} />
    </>
  );
}
