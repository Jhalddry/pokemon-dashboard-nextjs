'use client'

import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import Link from "next/link";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {

  const isCart = useAppSelector(state => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={ `${isCart}`}
        subtitle="Shopping Cart"
        label="Main Widget"
        href="counter"
        icon={<IoCafeOutline size={ 70 } className="text-blue-600" />}
      />
    </div>
  );
};
