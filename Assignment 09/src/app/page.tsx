import Myself from "./myself/page";
import About  from "./about/page";
import MySkills from "./my-skills/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div>
      <Myself/>
      <About/>
      <MySkills/>
      <Projects/>
    </div>
  );
}
