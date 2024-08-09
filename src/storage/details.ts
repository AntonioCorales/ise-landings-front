import type { Details } from "@/content/type";
import { atom } from "nanostores";

export const detailsStore = atom<Details | null>(null);