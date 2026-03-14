import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const basePath = process.env.NODE_ENV === "production" ? "/gold-pm-poc" : "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
