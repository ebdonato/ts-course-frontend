import { Box, Grid } from "@mui/material"
import { FC, ReactElement } from "react"

import { format } from "date-fns"

// import { Task } from "../task/task"
import { TaskCounter } from "../taskCounter/taskCounter"
import { Status } from "../createTaskForm/enums/Status"

export const TaskArea: FC = (): ReactElement => {
    return (
        <Grid item md={8} px={4}>
            <Box mb={8} px={4}>
                <h2>Status Of Your Tasks As On {format(new Date(), "PPPP")}</h2>
            </Box>
            <Grid container display="flex" justifyContent="center">
                <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    md={10}
                    xs={12}
                    mb={8}
                >
                    <TaskCounter status={Status.todo} count={1} />
                    <TaskCounter status={Status.inProgress} count={3} />
                    <TaskCounter status={Status.completed} count={2} />
                </Grid>
                <Grid item display="flex" flexDirection="column" xs={10} md={8}>
                    {/* <Task />
                    <Task />
                    <Task /> */}
                </Grid>
            </Grid>
        </Grid>
    )
}
