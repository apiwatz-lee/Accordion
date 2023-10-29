import "./App.css";
import SingleContent from "./components/SingleContent";
import data from "./data";
import { useState } from "react";

function App() {
  const [content, setContent] = useState(data);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-screen">
      <h3 className="text-3xl font-bold">Frontend Developer tools 2023</h3>
      <section className="w-[60%]">
        {content.map((data) => {
          return <SingleContent key={data.id} {...data} />; //The spread operator can significantly simplify your code. For example, it allows you to pass all props to a child component in a single line, rather than passing them one by one.
        })}
      </section>
    </main>
  );
}

export default App;
