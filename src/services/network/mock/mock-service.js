import users from './users.json';
import quotes from './quotes.json';
class MockService {
    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    getChatHistory = async (user, friend) => {
        let result = [];
        for (let i = 0; i < 10; i++) {
            let item = {
                text: quotes[this.getRandomNumber(0, quotes.length)],
                timestamp: Date.now()
            }
            if (i % 2 === 0) {
                item.user = user
            } else {
                item.user = friend
            }

            result.push(item)
        }

        return result;
    }

    streamChat = async (friend, timestamp) => {
        let item = {
            user: friend,
            text: quotes[this.getRandomNumber(0, quotes.length)],
            timestamp: Date.now()
        }

        return item
    }

    getUser = async (id) => {
        let idx = users.findIndex(item => item.id === id);
        return users[idx];
    }

    getUsers = async (ids) => {
        let operations = []
        ids.forEach(id => {
            operations.push(this.getUser(id));
        });

        let result = await Promise.all(operations);

        return result;
    }

    getAllUsers = (async) => {
        return users;
    }
}

export default MockService;