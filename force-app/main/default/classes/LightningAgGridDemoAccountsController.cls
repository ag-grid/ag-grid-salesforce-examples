public with sharing class LightningAgGridDemoAccountsController {
    @AuraEnabled
    public static string getAccountsData()
    {
        List<Account> accounts = [SELECT Name, AccountNumber, Rating, Industry, Type, NumberOfEmployees FROM Account];
        
        return JSON.serialize(accounts);
    }
}
