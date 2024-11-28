import { Task } from '../store/slices/tasksSlice'

export const filterTasks = (tasks: Task[], activeTab: number) => {
    switch (activeTab) {
        case 0:
            return tasks.filter((task) => task.status === 'active')
        case 1:
            return tasks
        case 2:
            return tasks.filter((task) => task.status === 'completed')
        case 3:
            return tasks.filter((task) => task.status === 'trashed')
        default:
            return tasks
    }
}

export const calculateTaskCounts = (tasks: Task[]) => ({
    current: tasks.filter((task) => task.status === 'active').length,
    all: tasks.length,
    completed: tasks.filter((task) => task.status === 'completed').length,
    trashed: tasks.filter((task) => task.status === 'trashed').length,
})