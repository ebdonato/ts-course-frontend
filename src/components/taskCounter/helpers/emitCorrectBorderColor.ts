import { Status } from "../../createTaskForm/enums/Status"
import { TaskCounterStatusType } from "../interfaces/ITaskCounter"

export const emitCorrectBorderColor = (status: TaskCounterStatusType): string => {
    const dict = {
        [Status.todo]: "error.light",
        [Status.inProgress]: "warning.light",
        [Status.completed]: "success.light",
    }

    return dict[status] ?? "success.light"
}
