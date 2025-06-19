export default function taskReducer(state, actions){
    switch(actions.type){
        case 'added':{
           return  [
                ...state,
                {
                    id: actions.id,
                    text: actions.text,
                    done: false,
                },
            ]
        }
        case 'changed':{
            return state.map((t) => {
                if (t.id === actions.task.id) {
                    return actions.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted':{
            return state.filter((t) => t.id !== actions.taskId);
        }
        default:{
            throw Error(`No action matched with ${actions.type}`);
        }
    }
}