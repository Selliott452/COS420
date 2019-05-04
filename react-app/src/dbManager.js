import Firestore from "./Firestore"

export default class DBManager 
{
    static Instance = null;

    static getInstance() 
    {
        if (DBManager.Instance === null)
        {
            DBManager.Instance = new DBManager();
        }

        return DBManager.Instance
    }

    constructor()
    { 
        return DBManager.getInstance();
    }

    getClasses(criteria)
    {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
    }

    saveSchedule(schedule)
    {
        
    }
}