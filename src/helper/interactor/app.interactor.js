import { NetworkService, StorageService, Config } from '../../services';
class AppInteractor {
    static fetchMessages = async (user, friend) => {
        let result = [];
        let cached = StorageService.getMessages(user, friend);
        if (cached) {
            result = cached
        } else {
            result = await NetworkService.getChatHistory(user, friend);
        }

        return result;
    }

    static updateStorage = (user, friend, messages) => {
        if (user && friend && messages) {
            StorageService.saveMessages(user, friend, messages);
        }
    }

    static streamChat = async (dispatch, friend) => {
        let message = await NetworkService.streamChat(friend, Date.now());
        dispatch({ type: 'add_message', message: message });

    }

    static fetchUsers = async (ids) => {
        let friendList = await NetworkService.getUsers(ids);
        return friendList;
    }

    static fetchAllUsers = async () => {
        let users = await NetworkService.getAllUsers();
        return users;
    }

    static appName = () => Config.appName()
}

export default AppInteractor;