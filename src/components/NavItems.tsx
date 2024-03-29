"use client"
import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const[activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;

  // close the dropdown when clicking outside
  const navRef = useRef<HTMLDivElement | null>();
  useOnClickOutside(navRef, () => setActiveIndex(null));

  // close the dropdown when pressing the escape key
  useEffect(() => {
    const handler = (e:KeyboardEvent)=>{
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }
    document.addEventListener("keydown", handler);

    return ()=>{
      document.removeEventListener("keydown", handler);
    }
  }, []);

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {
        PRODUCT_CATEGORIES.map((category, index) => {
          const handleOpen = () => {
            if (activeIndex === index) {
              setActiveIndex(null)
            } else {
              setActiveIndex(index)
            }
          }
          const isOpen = activeIndex === index;

          return (
            <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={index} isAnyOpen={isAnyOpen} />
          )
        })
      }
    </div>
  )
}

export default NavItems