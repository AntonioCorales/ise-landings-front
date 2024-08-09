import { getSrcFromIframes } from "@/utils/functions";
import ContentHTML from "./ContentHTML";
import type { Input } from "@/content/type";

export default function ContentSection(props: Props) {
  const { input } = props;
  const iframes = getSrcFromIframes(input.template.description);
  return (
    <section className={"content-section flex flex-col gap-2 "+ props.className}>
      {/* <img src={input.template.image} alt={input.name} /> */}
      <div className="video-container">
        {iframes?.map((iframe, index) => (
          <iframe
            src={iframe}
            title={input.template.name}
            allowFullScreen
            className="aspect-video w-full"
            key={iframe + index}
          />
        ))}
      </div>
      <div className="content-container">
        <ContentHTML description={input.template.description} />
      </div>
    </section>
  );
}

interface Props {
  input: Input;
  className?: string;
}
