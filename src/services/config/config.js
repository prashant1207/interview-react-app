import config from './config.json'
class Config {
    static appName = () => config.appName;
    static backend = () => config.backend;
}

export default Config;