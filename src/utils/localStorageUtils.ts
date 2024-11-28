export const loadFromLocalStorage = <T>(key: string): T | null => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error(`Ошибка загрузки данных из LocalStorage (${key}):`, error);
        return null;
    }
};

export const saveToLocalStorage = <T>(key: string, data: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Ошибка сохранения данных в LocalStorage (${key}):`, error);
    }
};