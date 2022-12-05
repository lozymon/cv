import axios from "axios";
import avatar from "./assets/avatar.jpg";
import { useEffect, useState } from "react";
import { Contact } from "./components/contact";
import { Experiences } from "./components/experiences";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { CV } from "./interfaces/cv";

function App() {
  const [cv, setCv] = useState<CV | undefined>();

  useEffect(() => {
    axios.get<CV>("/cv/cv.json").then((resp) => setCv(resp.data));
  }, []);

  if (!cv) return null;

  return (
    <div className="grid grid-cols-12 gap-1">
      <div className="bg col-span-3 p-10">
        <img src={avatar} className="inline-block rounded-full ring-0 ring-white" />
        <Summary title="Executive Summary" description={cv.summary} />
        <Skills title="Language" list={cv.language} />
        <Skills title="SKILLS AND ABILITIES" list={cv.skills} />
        <Contact title="How to Contact Me" contacts={cv.contact} />
      </div>
      <div className="col-span-9 pt-20">
        <div className="bg p-10">
          <h1 className="text-7xl  pb-6">{cv.name}</h1>
          <span className="text-4xl ">{cv.roll}</span>
        </div>
        <div className="p-10">
          <Experiences title="Relevant Experience" experience={cv.experience} />
          <Experiences title="School Background" experience={cv.schools} />
        </div>
      </div>
    </div>
  );
}

export default App;
