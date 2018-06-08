import NotificationStatus from "../enums/NotificationStatus";
import IAction from "./IAction";
/**
 * 
 */
interface IAlert {
  showDialog: boolean;
  category: string;
  text?: string;
  type: NotificationStatus;
  actions: IAction[];
}

export default IAlert;