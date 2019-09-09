package com.assess.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Tshirt {
	
	private WebDriver driver;
	
	private By hoverImg=By.xpath("//*[@id='center_column']/ul/li/div/div[1]/div/a[1]/img");
	private By cartElement=By.xpath("//*[@id='center_column']/ul/li/div/div[2]/div[2]/a[1]/span");
	private By proceedToCheckOut=By.cssSelector("a[title='Proceed to checkout']");
	private By proceedToCheckOut2=By.xpath("//*[@id='center_column']/p[2]/a[1]/span");
	private By email=By.id("email");
	private By pswd=By.id("passwd");
	private By submit=By.id("SubmitLogin");
	
	public Tshirt(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public boolean validateAddToCart()
	{
		Actions hover=new Actions(driver);
		WebElement from=driver.findElement(hoverImg);
		hover.moveToElement(from).perform();
	    Boolean cart=driver.findElement(cartElement).isDisplayed();

		if(cart)
			return true;
		else
			return false;
	}
	
	public void clickAddToCart()
	{
		driver.findElement(cartElement).click();
	}
	
	public boolean verifyPopupWithProceedToCheckout()
	{
		WebDriverWait wait1=new WebDriverWait(driver, 5);
		wait1.until(ExpectedConditions.visibilityOf(driver.findElement(proceedToCheckOut)));
		Boolean popup=driver.findElement(proceedToCheckOut).isDisplayed();
		
		if(popup)
			return true;
		else
			return false;
	}
	
	public Address completeOrder(String emailId,String password)
	{
		driver.findElement(proceedToCheckOut).click();
		driver.findElement(proceedToCheckOut2).click();	
		driver.findElement(email).sendKeys(emailId);
		driver.findElement(pswd).sendKeys(password);
		driver.findElement(submit).click();
		return new Address(driver);
	}
}
