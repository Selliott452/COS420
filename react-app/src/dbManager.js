export default class DBManager 
{
    static Instance = null;

    static getInstance() 
    {
        if (DBManager.Instance === null)
        {
            DBManager.Instance = new DBManager();
        }
    }

    constructor()
    {
        if (DBManager.myInstace === null)
        {
            DBManager.Instance = new DBManager();
        }

        return DBManager.Instance;
    }

    getClasses(criteria)
    {

    }

    saveSchedule(schedule)
    {
        
    }
}