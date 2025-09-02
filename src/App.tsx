import { Heading } from "./Components/Heading";
import { Container } from "./Components/container";
import { Logo } from "./Components/logo";
import { Menu } from "./Components/Menu";
import { CountDown } from "./Components/CountDown";
import { DefaultInput } from "./Components/defaultinput";
import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "./Components/defaultButton";
import { Cycles } from "./Components/cycles";
import { Footer } from "./Components/footer";

import "./style/themer.css";
import "./style/global.css";

export function App() {
  return (
    <>
      <Container>
        <Heading></Heading>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput labelText="TASK" id="meu input" type="text" />
          </div>

          <div className="formRow">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              corrupti labore repellendus veritatis beatae nemo soluta
              distinctio officia quos laboriosam odit iusto quia accusantium,
              ex, cupiditate dolor temporibus dignissimos ratione.
            </p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icons={<PlayCircleIcon />} color="" />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
