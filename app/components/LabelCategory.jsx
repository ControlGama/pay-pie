import containersStyles from "../../styles/containers.module.css";

export function LabelCategory({ text }) {
  return <div className={containersStyles.labelcategory}>{text}</div>;
}
