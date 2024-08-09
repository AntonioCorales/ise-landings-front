import { Dropdown } from "@/components/icons";
import type { Curriculum, Input } from "@/content/type";
import { useEffect, useRef, useState } from "react";

export default function Curriculum(props: Props) {
  const { input } = props;
  return (
    <div className={"curriculum flex flex-col gap-2" + " " + props.className}>
      {input.template.curriculum.map((curriculum, index) => (
        <CurriculumItem curriculum={curriculum} key={curriculum.name + index} />
      ))}
    </div>
  );
}

interface Props {
  input: Input;
  className?: string;
}

function CurriculumItem(props: ItemProps) {
  const { curriculum, ...rest } = props;
  const [open, setOpen] = useState(true);
  const refItems = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resize = () => {
      if (refItems.current) {        
        if (!open) {
          refItems.current.style.height = "0px";
          return;
        }
        const height = refItems.current.scrollHeight;
        refItems.current.style.height = `${height}px`;  
        const timeOut = setTimeout(() => {          
          if (refItems.current) {            
            refItems.current.style.height = "auto";          
          }          
        }, 300);        
        return () => {          
          clearTimeout(timeOut);          
        };
      }
    };
    resize();
    window.addEventListener("resize", () => {
      resize();
    });
    return () => {
      window.removeEventListener("resize", () => {
        resize();
      });
    };
  }, [open, refItems.current]);

  return (
    <div
      className={"curriculum-item flex flex-col gap-2 " + (open ? "mb-4" : "")}
      {...rest}
    >
      <header
        className={
          "flex justify-between items-center border-[--sky-1] border-[1px] py-2 px-4 lg:py-4 lg:px-6 lg:text-lg rounded-md gap-2 cursor-pointer" +
          " " +
          (!open ? "group" : "")
        }
        onClick={() => setOpen(!open)}
      >
        <h3
          className={
            "text-pretty group-hover:text-[--sky-1]" +
            " " +
            (open ? "group-hover:text-[auto]" : "")
          }
        >
          {curriculum.name}
        </h3>
        <Dropdown
          className={
            "transition-transform duration-300 group-hover:text-[--sky-1]" +
            " " +
            (open ? "rotate-180 text-[--sky-1] group-hover:none" : "")
          }
        />
      </header>
      <div
        className={
          "items transition-height duration-300 ease-in-out overflow-hidden px-4 lg:px-6 flex flex-col gap-2"
        }
        ref={refItems}
      >
        {curriculum.items?.map((item, index) => (
          <CurriculumSubItem curriculum={item} key={item.name + index} />
        ))}
      </div>
    </div>
  );
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  curriculum: Curriculum;
}

function CurriculumSubItem(props: SubItemProps) {
  const { curriculum, ...rest } = props;

  return (
    <div className="curriculum-sub-item flex flex-col gap-2" {...rest}>
      <header>
        <h4 className="text-pretty">{curriculum.name}</h4>
      </header>
      {(curriculum.items?.length ?? 0) > 0 && (
        <div className="items pl-2">
          {curriculum.items?.map((item, index) => (
            <CurriculumItem curriculum={item} key={item.name + index} />
          ))}
        </div>
      )}
    </div>
  );
}

interface SubItemProps extends React.HTMLAttributes<HTMLDivElement> {
  curriculum: Curriculum;
}
