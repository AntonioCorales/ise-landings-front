export function parseClasses(...classes: (string | undefined)[]): string {
  const filteredClasses = classes.filter((c) => c !== undefined) as string[];
  return filteredClasses.map((fc) => fc.trim()).join(" ");
}

export function joinURLs(baseUrl: string, url: string): string {
  if (url.startsWith("/")) {
    if (baseUrl.endsWith("/")) {
      return baseUrl + url.substring(1);
    }
    return baseUrl + url;
  }
  return url;
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
