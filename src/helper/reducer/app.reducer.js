class AppReducer {
    user = (state, action) => {
        let result = {}
        switch (action.type) {
            case 'update':
                result = action.user;
                break;
            default:
                result = state;
                break;
        }

        return result;
    }
    messages = (state, action) => {
        let result = []
        switch (action.type) {
            case 'add_message':
                result = [...state]
                result.push(action.message);
                break;
            case 'add':
                result = [...state]
                let item = {
                    user: action.user,
                    text: action.message,
                    timestamp: Date.now()
                }
                result.push(item);
                break;
            case 'delete':
                break;
            case 'update_all':
                result = action.messages;
                break;
            default:
                result = state;
                break;
        }

        return result;
    }
    friend = (state, action) => {
        let result = {}
        switch (action.type) {
            case 'select':
                result = action.user;
                break;
            default:
                result = state;
                break;
        }

        return result;
    }
}

export default AppReducer;