import NetworkService from '../../services/network/network-service';
import Config from '../../services/config/config';
class AppInteractor {
    static fetchMessages = async (user, friendState) => {
        let messages = await NetworkService.getChatHistory(user, friendState);
        return messages;
    }

    static streamChat = () => {
        //To Do
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