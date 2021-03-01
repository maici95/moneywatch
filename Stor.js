


function Stor() {
    /** @private */
    this.ls = window.localStorage;

    /** @private */
    this.getItem = function(key) {
        return this.ls.getItem(key);
    }

    /**
     * @description Get Object by key
     * @param {string} key 
     */
    this.getObject = function(key) {
        return JSON.parse(this.ls.getItem(key));
    }
    /**
     * @description Set Object by key -- default overwrite object if exist else merge with old object
     * @param {string} key 
     * @param {Object} object 
     * @param {boolean} merge 
     */
    this.setObject = function(key, object, merge) {
        if (!merge) {
            this.ls.setItem(key, JSON.stringify(object));
        } else {
            const newObject = {...this.getObject(key), ...object};
            this.ls.setItem(key, JSON.stringify(newObject));
        }
    }

    /**
     * @description Get array by key
     * @param {string} key 
     */
    this.getArray = function(key) {
        const array = JSON.parse(this.ls.getItem(key));
        if (array) {
            return array;
        } else {
            return [];
        }
    }
    /**
     * @description Get Array by key -- default overwrite array if exist else merge with old array
     * @param {string} key 
     * @param {array} array 
     * @param {boolean} merge 
     */
    this.setArray = function(key, array, merge) {
        if (!merge) {
            this.ls.setItem(
                key, JSON.stringify(array)
            );
        } else {

            console.log(
                this.getArray(key)
            );

            const newArray = [...this.getArray(key), ...array];
            this.ls.setItem(
                key, JSON.stringify(newArray)
            );
        }
    }

    /**
     * @description Get set by key
     * @param {string} key 
     */
    this.getSet = function(key) {
        const array = this.getArray(key);
        const set = new Set();

        for (let e of array) {
            set.add(e);
        }

        return set;
    }
    /**
     * @description Get Set by key -- default overwrite set if exist else merge with old set
     * @param {string} key 
     * @param {array} array 
     * @param {boolean} merge 
     */
    this.setSet = function(key, set, merge) {
        const array = [];

        for (let e of set) {
            array.push(e);
        }

        this.setArray(key, array, merge);
    }

    /**
     * @description Get number by key
     * @param {string} key 
     */
    this.getNumber = function(key) {
        return parseFloat(this.getItem(key));
    }
    /**
     * @description Set number
     * @param {string} key 
     * @param {number} value 
     */
    this.setNumber = function(key, value) {
        this.ls.setItem(key, parseFloat(value));
    }

    /**
     * @description Get string
     * @param {string} key 
     */
    this.getString = function(key) {
        return this.getItem(key);
    }
    /**
     * @description Set string
     * @param {string} key 
     * @param {string} value 
     */
    this.setString = function(key, value) {
        this.ls.setItem(key, value);
    }

    /**
     * @description Remove item by key
     * @param {string} key 
     */
    this.removeItem = function(key) {
        this.ls.removeItem(key);
    }

    /**
     * @description Remove everything
     */
    this.REMOVEALL = function() {
        this.ls.clear();
    }
}
