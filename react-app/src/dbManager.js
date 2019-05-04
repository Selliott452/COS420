export default class dbManager 
{
    static Instance = null;

    static getInstance() 
    {
        if (dbManager.Instance === null)
        {
            dbManager.Instance = new dbManager();
        }
    }

    constructor()
    {
        if (dbManager.myInstace === null)
        {
            dbManager.Instance = new dbManager();
        }

        return dbManager.Instance;
    }

    getClasses(criteria)
    {

    }

    saveSchedule(schedule)
    {
        
    }
}