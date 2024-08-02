export function parseClasses(...classes: (string | undefined)[]): string {
  const filteredClasses = classes.filter((c) => c !== undefined) as string[];
  return filteredClasses.map((fc) => fc.trim()).join(" ");
}
