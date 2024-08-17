import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: { opacity: 1, y: 0 },
};
const NavLink = motion(Link);

export const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex cursor-pointer items-center justify-between w-full relative rounded-lg overflow-hidden  p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border border-bottom border-dashed border-muted" />
      <p className="sm:text-foreground text-muted ">
        {new Date(date).toDateString()}
      </p>
    </NavLink>
  );
};
