/**
 * Action Interface
 */
interface IAction {
  text: string; // You can also pass HTML
  action?();
  primary?: boolean;
  color?: string;
  className?: string;
  loading?: boolean;
}

export default IAction;