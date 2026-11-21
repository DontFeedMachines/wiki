import figlet from "figlet";
import ansiShadow from "figlet/importable-fonts/ANSI Shadow.js";

figlet.parseFont("ANSI Shadow", ansiShadow);

export function ansi(text: string): string {
  return figlet
    .textSync(text.toUpperCase(), { font: "ANSI Shadow" })
    .split("\n")
    .map((l) => l.replace(/\s+$/, ""))
    .filter((l, i, all) => l.length || all.slice(i).some((x) => x.trim()))
    .join("\n");
}

export const ansiWidth = (art: string) => Math.max(...art.split("\n").map((l) => [...l].length));
