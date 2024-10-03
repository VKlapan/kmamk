"use client";

import { useEffect, useState } from "react";
import { CalendarSelectItem } from "./CalendarSelectItem";
type Props = {
  label: string;
  items: CalendarSelectItemType[];
};

export const CalendarSelect = ({ label, items }: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isItemsListOpen, setIsItemsListOpen] = useState(false);
  const onSelect = (item: CalendarSelectItemType) => {
    setSelectedItem(item);
    setIsItemsListOpen(false);
  };

  return (
    <div className="relative w-60">
      <div>{label}</div>
      <div
        className="relative"
        onClick={() => setIsItemsListOpen(!isItemsListOpen)}
      >
        <CalendarSelectItem item={selectedItem} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <svg className="w-4 h-4">
            <use href="/icons/tools-sprite.svg#icon-chevron_down"></use>
          </svg>
        </div>
      </div>
      {isItemsListOpen && (
        <div
          className="absolute top-full mt-1 left-0 w-60 flex flex-col gap-1 bg-neutral-600"
          onClick={(event) => console.log(event.target, event.currentTarget)}
        >
          {items.map((item) => (
            <CalendarSelectItem key={item.name} item={item} cb={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
};
