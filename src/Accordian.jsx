import { useState } from "react";
import Panel from "./Panel";

export default function Accordian() {
  const [activeIndex, setIndexActive] = useState(0);
  return (
    <>
      <h3>Accordian 01</h3>
      <Panel
        isActive={activeIndex === 0 && true}
        title="Paid Course"
        onActive={() => setIndexActive(0)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
        minus esse. Quia corporis eius, ipsa deleniti, asperiores dicta quos
        quidem praesentium veniam magnam voluptatibus? Pariatur provident
        inventore reiciendis totam? Facere.
      </Panel>
      <Panel
        isActive={activeIndex === 1 && true}
        title="Free Course"
        onActive={() => setIndexActive(1)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
        minus esse. Quia corporis eius, ipsa deleniti, asperiores dicta quos
        quidem praesentium veniam magnam voluptatibus? Pariatur provident
        inventore reiciendis totam? Facere.
      </Panel>
    </>
  );
}
