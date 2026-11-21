export type TeletextPage = { label: string; href: string; page: number };

function firstHref(item: any): string | null {
  if (typeof item?.href === "string" && item.href) return item.href;
  if (Array.isArray(item?.entries)) {
    for (const e of item.entries) {
      const h = firstHref(e);
      if (h) return h;
    }
  }
  return null;
}

// the index is page 100, so the top level sidebar groups count up from 200 in sidebar order
export function teletextPages(sidebar: any[]): TeletextPage[] {
  return sidebar
    .map((item, i) => ({ label: String(item.label), href: firstHref(item) ?? "", page: 200 + i * 100 }))
    .filter((p) => p.href);
}

export const FASTEXT = ["red", "green", "yellow", "cyan"] as const;
