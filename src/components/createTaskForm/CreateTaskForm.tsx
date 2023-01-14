import { FC, ReactElement } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { TaskTitleField } from "./TaskTitleField"
import { TaskDescriptionField } from "./TaskDescriptionField"

export const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%" px={4} my={6}>
            <Typography mb={2} component="h2" variant="h6">
                Create a Task
            </Typography>

            <Stack sx={{ width: "100%" }} spacing={2}>
                <TaskTitleField />
                <TaskDescriptionField />
                {/* <TaskDateField /> */}

                <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
                    {/* <TaskSelectField
                        label="Status"
                        name="status"
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
                        items={[
                            {
                                value: Priority.low,
                                label: Priority.low,
                            },
                            {
                                value: Priority.normal,
                                label: Priority.normal,
                            },
                            {
                                value: Priority.high,
                                label: Priority.high,
                            },
                        ]}
                    /> */}
                </Stack>
            </Stack>

            {/*Task Status*/}
            {/*Task Priority*/}
        </Box>
    )
}