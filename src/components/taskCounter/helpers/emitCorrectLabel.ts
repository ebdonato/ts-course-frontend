import { Status } from "../../createTaskForm/enums/Status"
import { TaskCounterStatusType } from "../interfaces/ITaskCounter"

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
    const dict = {
        [Status.todo]: "Todo's",
        [Status.inProgress]: "In Progress",
        [Status.completed]: "Completed",
    }

    return dict[status] ?? "Completed"
}
