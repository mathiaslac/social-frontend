import { useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

/* 
interface Props {
    mode?: 'click' | 'hover' | 'hybrid'
    containerClassName?: string
    containerStyles?: {}
    component?: ReactNode
    items?: ReactNode[]
}
*/
const Dropdown = ({
  mode = "hybrid",
  containerClassName = "",
  containerStyles = {},
  component: Component = null,
  items = [],
}) => {
  const componentRef = useRef(null);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const onOpenEvent = (e) => setOpen(true);
    const onCloseEvent = (e) => setOpen(false);

    switch (mode) {
      case "click": {
        componentRef.addEventListener("click", onOpenEvent);
        // click outside
        return () => componentRef.removeEventListener("click", onOpenEvent);
      }
      case "hover": {
        componentRef.addEventListener("mouseenter", onOpenEvent);
        componentRef.addEventListener("mouseleave", onCloseEvent);
        return () => {
          componentRef.removeEventListener("mouseenter", onOpenEvent);
          componentRef.removeEventListener("mouseleave", onCloseEvent);
        };
      }
      default: {
        componentRef.addEventListener("touchstart", onOpenEvent);
        // TODO: click outside
        componentRef.addEventListener("mouseenter", onOpenEvent);
        componentRef.addEventListener("mouseleave", onCloseEvent);
        return () => {
          componentRef.removeEventListener("touchstart", onOpenEvent);
          componentRef.removeEventListener("mouseenter", onOpenEvent);
          componentRef.removeEventListener("mouseleave", onCloseEvent);
        };
      }
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Component ref={componentRef} />

      <ul style={{ zIndex: 1, position: "absolute", top: "calc(100% + 15px)" }}>
        {open && items}
      </ul>
    </div>
  );
};

export default Dropdown;
