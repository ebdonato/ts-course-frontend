import { Priority } from "../../createTaskForm/enums/Priority"

export const renderPriorityBorderColor = (priority: string): string => {
    const dict: {
        [key: string]: string
    } = {
        [Priority.normal]: "grey.900",
        [Priority.low]: "info.light",
        [Priority.high]: "error.light",
    }

    return dict[priority] ?? "grey.900"
}
