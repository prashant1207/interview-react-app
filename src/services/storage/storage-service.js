class StorageService {
    static store = window.localStorage;
    static setItem = (key, item) => {
        this.store.setItem(key, item);
    }

    static getItem = (key) => {
        return this.store.getItem(key);
    }

    static deleteAll = () => {
        this.store.clear();
    }

    static getSavedItems = () => {
        let items = [];
        let stored = this.getItem(this.storage_key);
        if (stored != null) {
            items = JSON.parse(stored);
        }

        return items;
    }

    static saveMessages = (user, friend, messages) => {
        const key = user.id + '_' + friend.id;
        StorageService.setItem(key, JSON.stringify(messages));
    }

    static getMessages = (user, friend) => {
        const key = user.id + '_' + friend.id;
        const json = StorageService.getItem(key);
        return JSON.parse(json);
    }
}

export default StorageService;