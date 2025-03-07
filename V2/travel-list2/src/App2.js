import { useState } from 'react';
import './styles.css';
export default function App() {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
}

// Great way for this functionality
function Accordian({ data }) {
  const [curOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordian">
      {data.map((el, i) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurrOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordianItem>
      ))}
    </div>
  );
}
// we lifted state up to the current parent.

function AccordianItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
const faqs = [
  {
    title: 'Where do you live',
    text: 'I live in Fresno',
  },
  {
    title: 'How long do i have to return my chair',
    text: ' It will take 5 months',
  },
  {
    title: 'Do you ship stuff to the EU',
    text: ' I will ship to different markets ',
  },
];
