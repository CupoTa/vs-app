import WebApp from "@twa-dev/sdk";

export function useCloudStorage() {

    const setStorageItem = (key, value) => {
        WebApp.CloudStorage.setItem(key, value);
    }

    const getStorageItem = (key) => {
        return new Promise((resolve, reject) => {
            WebApp.CloudStorage.getItem(key, (err, value) => {
                if (err || !value) {
                    return reject(new Error('Data is not stored'));
                }

                resolve(value);
            });
        });
    }

    const removeItems = () => {
        WebApp.CloudStorage.getKeys((err, val) => {
            
            if(err == null && val.length > 0){
                WebApp.CloudStorage.removeItems(val)
            }
        })
    }

    return { setStorageItem, getStorageItem, removeItems }

}