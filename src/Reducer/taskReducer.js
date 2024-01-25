export function taskReducer(state, action) {
    switch (action.type) {
        case "added": {
            return (
                [
                    ...state,
                    action.task
                ]
            )
        }

        case "edited": {
            return (
                state.map(t => {
                    if (t.id === action.task.id) {
                        return action.task;
                    }
                    return t;
                })
            )
        }

        case "deleted": {
            return (
                state.filter(t => t.id !== action.taskId)
            )
        }

        default:
            throw new Error("Action type not matched ", action.type);
    }
}