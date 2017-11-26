export let Guid = class Guid {

    constructor() {
        this.internalGuid = '';

        this.setRandomInternalGuid();
    }

    toString() {
        return this.internalGuid;
    }

    static newGuid() {
        return new Guid();
    }

    setRandomInternalGuid() {
        this.internalGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }
};