class DBManager {
    static instance = null;

    static getInstance() {
        if (DBManager.instance === null)
        {
            DBManager.instance = new DBManager();
        }
    }

    constructor() {
        if (DBManager.instance === null) {
            DBManager.instance = new DBManager();
        }

        return DBManager.instance;
    }

    getClasses(criteria) {

    }

    saveSchedule(schedule) {
        
    }
}

export default DBManager;
