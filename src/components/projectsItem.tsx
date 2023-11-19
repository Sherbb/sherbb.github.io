interface ProjectListItemProps {
  title: string;
  subtitle: string;
  year: string;
  selected: boolean;
  onClick: () => void;
}

const ProjectListItem = (props: ProjectListItemProps) => (
  <div
    className={
      "relative flex gap-2 group hover cursor-pointer select-none " +
      (props.selected ? "opacity-100" : "opacity-30 hover:opacity-70")
    }
    onClick={props.onClick}
  >
    <p className="font-bold">{props.title}</p>
    <p className="font-light text-offwhite opacity-50">{props.subtitle}</p>
    <div className="flex-grow" />
    <p className="font-light text-offwhite opacity-50">{props.year}</p>
    <div
      className="
        absolute origin-left scale-x-0 animate-slideOut bg-offwhite bottom-[2px] left-0 right-0 h-[1px] group-hover:animate-slideIn group-hover:scale-x-100"
    ></div>
    {props.selected && (
      <div className="absolute left-[-16px] top-0 bottom-0 m-auto w-1 h-1 rounded-xl bg-offwhite" />
    )}
  </div>
);

export default ProjectListItem;
