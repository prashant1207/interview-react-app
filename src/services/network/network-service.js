import MockService from './mock/mock-service';
import HttpService from './http/http-service';
import Config from '../config/config';
const service = Config.backend() == 'mock' ? new MockService() : new HttpService();
class NetworkService {
    static getChatHistory = async (user, friend) => {
        return service.getChatHistory(user, friend);
    }

    static getUser = async (id) => {
        return service.getUser(id);
    }

    static streamChat = async (friend, timestamp) => {
        return service.streamChat(friend, timestamp);
    }

    static getUsers = async (ids) => {
        return service.getUsers(ids)
    }

    static getAllUsers = async () => {
        return service.getAllUsers();
    }
}

export default NetworkService;