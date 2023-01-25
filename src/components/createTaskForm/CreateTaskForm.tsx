import { FC, ReactElement, useState } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { TaskTitleField } from "./TaskTitleField"
import { TaskDescriptionField } from "./TaskDescriptionField"
import { TaskDateField } from "./TaskDateField"
import { TaskSelectField } from "./TaskSelectField"

import { Status } from "./enums/Status"
import { Priority } from "./enums/Priority"

export const CreateTaskForm: FC = (): ReactElement => {
    const [status, setStatus] = useState("")
    const [priority, setPriority] = useState("")

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%" px={4} my={6}>
            <Typography mb={2} component="h2" variant="h6">
                Create a Task
            </Typography>

            <Stack sx={{ width: "100%" }} spacing={2}>
                <TaskTitleField />
                <TaskDescriptionField />
                <TaskDateField />

                <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
                    <TaskSelectField
                        label="Status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        items={[
                            {
                                value: Status.todo,
                                label: Status.todo.toUpperCase(),
                            },
                            {
                                value: Status.inProgress,
                                label: Status.inProgress.toUpperCase(),
                            },
                        ]}
                    />
                    <TaskSelectField
                        label="Priority"
                        name="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        items={[
                            {
                                value: Priority.low,
                                label: Priority.low.toUpperCase(),
                            },
                            {
                                value: Priority.normal,
                                label: Priority.normal.toUpperCase(),
                            },
                            {
                                value: Priority.high,
                                label: Priority.high.toUpperCase(),
                            },
                        ]}
                    />
                </Stack>
            </Stack>

            {/*Task Status*/}
            {/*Task Priority*/}
        </Box>
    )
}
