export function parseClasses(...classes: (string | undefined)[]): string {
  const filteredClasses = classes.filter((c) => c !== undefined) as string[];
  return filteredClasses.map((fc) => fc.trim()).join(" ");
}

export function joinURL(...urls: string[]): string {
  if(urls.length === 0) return "";
  return urls.map((url) => url.trim().replace(/(\/)+$/, "")).join("/");
  
}
  

export function getPrice(number: number, currency: "USD" | "PEN"): string {
  return number.toLocaleString(currency === "USD" ? "en-US" : "es-PE", {
    style: "currency",
    currency: currency,
  });
}

export function getSrcFromIframes(content: string): string[] | null {
  const iframes = content.match(/<iframe.*?src="(.*?)".*?><\/iframe>/g);

  if (!iframes) return null;

  return iframes.map((iframe) => iframe.replace(/<iframe.*?src="(.*?)".*?><\/iframe>/, "$1"));
}
