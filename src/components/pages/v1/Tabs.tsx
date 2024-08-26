import type { Input } from "@/content/type";
import { useEffect, useRef, useState } from "react";
import ContentSection from "./ContentSection";
import Curriculum from "./Curriculum";
import { ContentCopyOutlined, ViewListOutlined } from "@mui/icons-material";

export default function Tabs(props: TabsInterface) {
  const [tab, setTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const refButtons = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);
  const refButtonsContainer = useRef<HTMLDivElement>(null);
  

  useEffect(() => {   
    const resizeButton = () => {
      const buttonsContainer = refButtons.current;
      const refContainer = ref.current;
      if (buttonsContainer && refContainer) {
        const buttons = buttonsContainer.querySelectorAll("button");
        const buttonsArray = Array.from(buttons);
        const selectedButton = buttonsArray[tab];
        const buttonLeft =
          selectedButton.offsetLeft - buttonsContainer.offsetLeft;

        const width = selectedButton.clientWidth;
        refContainer.style.width = `${width}px`;
        refContainer.style.left = `${buttonLeft}px`;
      }
    };
    resizeButton();
    window.addEventListener("resize", () => {
      resizeButton();
    });

    return () => {
      window.removeEventListener("resize", () => {
        resizeButton();
      });
    };
  }, [tab]);

  return (
    <div className="flex flex-col gap-4 mt-3 lg:mt-0 relative">
      <div className="sticky top-[60px] lg:top-[60px] z-10 bg-[--body-bg-v1] lg:pt-5 flex flex-col" ref={refButtonsContainer}>
        <div
          className="flex items-center justify-center md:gap-5 md:w-fit"
          ref={refButtons}
        >
          <Button
            onClick={() => {
              setTab(0);
              if (refContent.current && refButtonsContainer.current) {
                const bounding = refContent.current.getBoundingClientRect();
                const moveTo = window.scrollY + bounding.top - refButtonsContainer.current.clientHeight - 80;      
                window.scrollTo({ top: moveTo, behavior: "smooth" });
              }
            }}
            className={tab === 0 ? "text-[--yellow-1]" : "hover:text-[--sky-3]"}
          >
            <ContentCopyOutlined /> Descripción
          </Button>
          <Button
            onClick={() => {
              setTab(1);
              if (refContent.current && refButtonsContainer.current) {
                const bounding = refContent.current.getBoundingClientRect();
                const moveTo = window.scrollY + bounding.top - refButtonsContainer.current.clientHeight - 80;      
                window.scrollTo({ top: moveTo, behavior: "smooth" });
              }
            }}
            className={tab === 1 ? "text-[--yellow-1]" : "hover:text-[--sky-3]"}
          >
            <ViewListOutlined />
            Temario
          </Button>
        </div>
        <div className="w-full bg-[--sky-2] h-[2px] relative">
          <div
            ref={ref}
            className="bg-[--yellow-1] absolute h-[2px] transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4" ref={refContent}>
        <ContentSection
          input={props.input}
          className={tab === 0 ? "" : "hidden"}
        />
        <Curriculum input={props.input} className={tab === 1 ? "" : "hidden"} />
      </div>
    </div>
  );
}

interface TabsInterface {
  input: Input;
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={
        "tab-button px-9 py-3 w-[50%] md:w-fit flex flex-row gap-2 justify-center items-center text-lg text-[--sky-1] " +
        " " +
        props.className
      }
    />
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
