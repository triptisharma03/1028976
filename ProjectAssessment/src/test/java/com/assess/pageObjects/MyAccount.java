package com.assess.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyAccount {
	
	private WebDriver driver;
	
	private By personalInformation=By.cssSelector("a[title='Information']");
	private By firstname=By.id("firstname");
	private By save=By.cssSelector("button[name='submitIdentity']");
	private By oldPassword=By.id("old_passwd");
	private By home=By.xpath("//*[@id='center_column']/ul/li[2]/a");
	private By successMessage=By.xpath("//*[@id='center_column']/div/p");
	
	public MyAccount(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void clickMyPersonalInformation()
	{
		driver.findElement(personalInformation).click();
	}
	
	public void updateFirstName(String fName,String passwrd)
	{
		driver.findElement(firstname).clear();
		driver.findElement(firstname).sendKeys(fName);
		driver.findElement(oldPassword).sendKeys(passwrd);
		driver.findElement(save).click();
	}
	
	public boolean verifySuccessMessage()
	{
		boolean verifyMsg=driver.findElement(successMessage).isDisplayed();
		if(verifyMsg)
		{
			driver.findElement(home).click();
			return true;
		}	
		else
			return false;
	}
	
}
