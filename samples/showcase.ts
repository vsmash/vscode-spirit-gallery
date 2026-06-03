/**
 * Spirit Gallery — theme showcase
 * A dark theme inspired by Aboriginal art: warm charcoal backgrounds
 * with ochre, gold, aqua and silver accents.
 */
import { readFile } from "node:fs/promises";

const MAX_RETRIES = 3;            // numbers & constants — ochre
const API_URL = "https://example.com/api/v1";   // strings — gold

type Status = "active" | "archived" | "draft";

interface Artwork<T = unknown> {
  readonly id: number;
  title: string;
  status: Status;
  metadata?: Record<string, T>;
}

@sealed
export class Gallery {
  #works: Artwork[] = [];

  constructor(private readonly name: string) {}

  // Add a work and return its position — template strings show aqua escapes
  add(work: Artwork): number {
    const index = this.#works.push(work) - 1;
    console.log(`Added "${work.title}" to ${this.name} (#${index})`);
    return index;
  }

  async *stream(): AsyncGenerator<Artwork> {
    for (const work of this.#works) {
      if (work.status !== "archived") {
        yield await Promise.resolve(work);
      }
    }
  }
}

function sealed(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// Regex, booleans, and arrow functions
const isSlug = (s: string): boolean => /^[a-z0-9-]+$/.test(s);
export const DEFAULTS = { retries: MAX_RETRIES, verbose: false } as const;
