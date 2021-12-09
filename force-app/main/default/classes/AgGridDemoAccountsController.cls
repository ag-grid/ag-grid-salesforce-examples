public with sharing class AgGridDemoAccountsController {
    public string jsonAccountsData { get; set; }
    
	public AgGridDemoAccountsController() 
    {
        jsonAccountsData = JSON.serialize([SELECT Name, AccountNumber, Rating, Industry, Type, NumberOfEmployees FROM Account]);
    }
}
