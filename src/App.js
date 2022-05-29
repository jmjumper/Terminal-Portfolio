import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import { Help, Whois, Github, Projects, Ls, Cat } from './components/commands';

const ENTER_KEYS = ['Enter'];
const ESCAPE_KEYS = ['Escape'];
const ARROW_UP = ['ArrowUp'];
const ARROW_DOWN = ['ArrowDown'];

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};


const welcomeMessage = <div className='orangeText'>Oh hi, <span>I'm Julian!</span> Welcome to my personal portfolio :)</div>;
const helpMessage = <div className='orangeText'>Type <span className='command-highlight'>"help"</span> to list all available commands.</div>
const notFoundMessage = <div className='notFoundText'>Error: Command not found! </div>
const prompt = <span className='prompt'>visitor@jmjumper.de$ </span>;

const ascii_arts = [
  `                      ________|          |________
                     |       /   ||||||   \\       |
                     |     ,'              \`.     |
                     |   ,'                  \`.   |
                     | ,'   ||||||||||||||||   \`. |
                     ,'  /____________________\\  \`.
                    /______________________________\\
                   |                                |
                   |                                |
                   |                                |
                   |________________________________|
                     |____________________------__|

         ,----------------------------------------------------,
         | [][][][][]  [][][][][]  [][][][]  [][__]  [][][][] |
         |                                                    |
         |  [][][][][][][][][][][][][][_]    [][][]  [][][][] |
         |  [_][][][][][][][][][][][][][ |   [][][]  [][][][] |
         | [][_][][][][][][][][][][][][]||     []    [][][][] |
         | [__][][][][][][][][][][][][__]    [][][]  [][][]|| |
         |   [__][________________][__]              [__][]|| |
         \`----------------------------------------------------'
`,
  `             ________________________________________________
            /                                                \\
           |    _________________________________________     |
           |   |                                         |    |
           |   |  C:\\> Welcome to jmjumper.de_           |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |_________________________________________|    |
           |                                                  |
            \\_________________________________________________/
                   \\___________________________________/
                ___________________________________________
             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- \`-_
          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.\`-_
       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\`__\`. .-.-.-.\`-_
    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.\`-_
 _-'.-.-.-.-.-. .---.-. .-------------------------. .-.---. .---.-.-.-.\`-_
:-------------------------------------------------------------------------:
\`---._.-------------------------------------------------------------._.---'
`,
  `      _________________________________________________________________  
     /                                                                 \\  
    |    __________________________________________________________     |
    |   |                                                          |    |
    |   |                                                          |    | 
    |   |                                                          |    | 
    |   |                                                          |    | 
    |   |       _            _                                     |    |         
    |   |      (_)_ __ ___  (_)_   _ _ __ ___  _ __   ___ _ __     |    | 
    |   |      | | '_ \` _ \\ | | | | | '_ \` _ \\| '_ \\ / _ \\ '__|    |    |     
    |   |      | | | | | | || | |_| | | | | | | |_) |  __/ |       |    | 
    |   |     _/ |_| |_| |_|/ |\\__,_|_| |_| |_| .__/ \\___|_|       |    |  
    |   |    |__/         |__/                |_|                  |    |   
    |   |                                                          |    |       
    |   |                                                          |    |
    |   |                                                          |    |
    |   |                                                          |    |
    |   |__________________________________________________________|    |
    |                                                                   |
     \\_________________________________________________________________/
                   \\___________________________________/
                ___________________________________________
             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- \`-_
          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.\`-_
       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\`__\`. .-.-.-.\`-_
    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.\`-_
 _-'.-.-.-.-.-. .---.-. .-------------------------. .-.---. .---.-.-.-.\`-_
:-------------------------------------------------------------------------:
\`---._.-------------------------------------------------------------._.---'
`,
  `   _            _                                 
  (_)_ __ ___  (_)_   _ _ __ ___  _ __   ___ _ __ 
  | | '_ \` _ \\ | | | | | '_ \` _ \\| '_ \\ / _ \\ '__|
  | | | | | | || | |_| | | | | | | |_) |  __/ |   
 _/ |_| |_| |_|/ |\\__,_|_| |_| |_| .__/ \\___|_|   
|__/         |__/                |_|              
`
]


function render_art() {
  const index_art_arr = Math.floor(Math.random() * ascii_arts.length);
  console.log(index_art_arr);
  return ascii_arts[index_art_arr];
}

function App() {
  const [uInput, setInput] = useState('');
  const [allTexts, setAllTexts] = useState([]);
  const [art, setArt] = useState(render_art());
  const [isCleared, setCleared] = useState(false);
  const [commandsUndo, setCommandsUndo] = useState([]);
  const [commandsRedo, setCommandsRedo] = useState([]);


  const scrollRef = useRef(null)

  useEffect(() => {
    document.title = 'jmjumper.sh';
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [allTexts])

  const sendCommand = (command) => {
    setAllTexts(prev => [...prev, <div key={allTexts.length}>{prompt}{uInput}</div>])

    if (command.toLowerCase().split(' ')[0] === 'sudo') {
      window.open('https://www.youtube.com/watch?v=jeg_TJvkSjg', '_self').focus();
      return;
    }

    switch (command.toLowerCase().trim()) {
      case 'clear':
        setAllTexts(() => []);
        setCleared(() => true);
        break;
      case 'help':
        setAllTexts((prev) => [...prev, <Help />]);
        break;
      case 'whois':
        setAllTexts((prev) => [...prev, <Whois />]);
        break;
      case 'github':
        setAllTexts((prev) => [...prev, <Github />]);
        break;
      case 'projects':
        setAllTexts((prev) => [...prev, <Projects />]);
        break;
      case 'ls':
        setAllTexts((prev) => [...prev, <Ls />]);
        break;
      case 'cat secret.txt':
        setAllTexts((prev) => [...prev, <Cat />]);
        break;
      case 'ascii-art':
        // setArt(() => render_art());
        // setCleared(() => false);
        setAllTexts((prev) => [...prev, <pre className='ascii-art'>{render_art()}</pre>]);
        break;
      default:
        if (uInput === '') break;
        setAllTexts((prev) => [...prev, notFoundMessage, helpMessage]);
        break;
    }
  }

  const handleInputChange = (e) => {
    setInput(() => e.target.value);
  }
  const handler = ({ key }) => {
    if (ENTER_KEYS.includes(String(key))) {
      sendCommand(uInput);
      setCommandsUndo((prev) => [...prev, uInput])
      setInput(() => '');
    } else if (ESCAPE_KEYS.includes(String(key))) {
      setInput(() => '');
    } else if (ARROW_UP.includes(String(key))) {
      const command = commandsUndo.pop();
      setCommandsRedo((prev) => [...prev, command]);
      setInput(() => command);
    } else if (ARROW_DOWN.includes(String(key))) {
      const command = commandsRedo.pop();
      setCommandsUndo((prev) => [...prev, command]);
      setInput(() => command);
    }
  };
  useEventListener("keydown", handler);

  return (
    <div className="App">
      <div className='padding'>

        <div>
          Welcome to <span className='white_glow'>jmjumper.sh v1.0.1</span> (Portfolio Script 2022)
          <br />  <br />
          {welcomeMessage}
          {helpMessage}
        </div>
        {
          !isCleared &&
          <pre className='ascii-art'>{art}</pre>
        }
        <br />
        <div>
          {allTexts}
        </div>


        <div className='inputWrapper' ref={scrollRef}>
          {prompt}
          <input
            type="text"
            value={uInput}
            placeholder=""
            label="Name"
            name="name"
            onChange={handleInputChange}
            className="inputModule"
            autoComplete='off'
            spellCheck='false'
            autoFocus={true}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
