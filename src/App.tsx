import { Heading } from "./Components/Heading";
import { Container } from "./Components/container";
import { Logo } from "./Components/logo";
import { Menu } from "./Components/Menu";
import { CountDown } from "./Components/CountDown";
import { DefaultInput } from "./Components/defaut-input";

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
            <DefaultInput id="meuInput" type="text" />
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
            <p>ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>clicar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
