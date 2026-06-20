import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "he_selection_v1";

export type SelectionItem = {
  slug: string;
  title: string;
  img: string;
  category: string;
};

function read(): SelectionItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(items: SelectionItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("he-selection-changed"));
}

export function useSelection() {
  const [items, setItems] = useState<SelectionItem[]>([]);

  useEffect(() => {
    setItems(read());
    const handler = () => setItems(read());
    window.addEventListener("he-selection-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("he-selection-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const add = useCallback((item: SelectionItem) => {
    const current = read();
    if (current.find((i) => i.slug === item.slug)) return;
    write([...current, item]);
  }, []);

  const remove = useCallback((slug: string) => {
    write(read().filter((i) => i.slug !== slug));
  }, []);

  const clear = useCallback(() => write([]), []);

  const has = useCallback((slug: string) => items.some((i) => i.slug === slug), [items]);

  return { items, add, remove, clear, has, count: items.length };
}
