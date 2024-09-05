import reactImg from './assets/react-core-concepts.png';
import componentsImge from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Heder() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ title, description, imge }) {
  return (
    <li>
      <img src={imge} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Heder />
      <main>
        <sctoin id="core-concepts"></sctoin>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title="merry" description="cute" imge={componentsImge} />
          <CoreConcept title="merry" description="cute" imge={componentsImge} />
          <CoreConcept title="merry" description="cute" imge={componentsImge} />
        </ul>
      </main>
    </div>
  );
}
export default App;
