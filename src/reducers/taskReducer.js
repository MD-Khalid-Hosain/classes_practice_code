export default function taskReducer(draft, actions){
    switch(actions.type){
        case 'added':{
            draft.push(
                {
                    id: actions.id,
                    text: actions.text,
                    done: false,
                }
            )
            break;
        }
        case 'changed':{
            const index = draft.findIndex(t => t.id === actions.task.id);
            draft[index] = actions.task
           break;
        }
        case 'deleted':{
            return draft.filter((t) => t.id !== actions.taskId);
        }
        default:{
            throw Error(`No action matched with ${actions.type}`);
        }
    }
}