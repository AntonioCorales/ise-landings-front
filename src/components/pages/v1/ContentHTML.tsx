export default function ContentHTML({ description }: { description: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className="content-html"
    />
  );
}
