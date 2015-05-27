<?php
use \LoginScenariosTester;

class NormalLoginCest
{
    private $userName = 'alon.ainbinder@kaltura.com';
    private $nonExistinguserName = '36CDC89C57E8@kaltura.com';

    private $password = 'azsxdcfv1!';


    public function _before(LoginScenariosTester $I)
    {
        //script for inserting new user and verify non existing user
    }

    public function _after(LoginScenariosTester $I)
    {
    }
    

    


    /**
     * @group loginTests
     */
    public function VerifyForgotEmailFeature(LoginScenariosTester $I)
    {
        $I->wantTo('test forgetting the password and link to a new email works');
        $I->amOnPage(LoginPage::$URL);
        $I->canSeeLink(LoginPage::$forgotPasswordText, LoginPage::$forgotPasswordLink);
    }

    /**
     * @group loginTests
     */
    public function LoginWithExistingUser(LoginScenariosTester $I)
    {
        $I->wantTo('test successful login');
        LoginPage::login($I, $this->userName, $this->password);
        $userNameToLookFor = $I->getDisplayedUserNameFromUserName($this->userName);
        $I->waitForElement(HomePage::$userMenuToggleButton, 60);
        $I->click(HomePage::$userMenuToggleButton);
        $I->waitForElement(HomePage::$userMenuDisplayName, 60);
        $I->waitForText($userNameToLookFor, 60, HomePage::$userMenuDisplayName);
        $I->see($userNameToLookFor);
    }

    /**
     * @group loginTests
     */
    public function LoginWithNonExistingUser(LoginScenariosTester $I)
    {
        $I->wantTo('test unsuccessful login with non existing user');
        LoginPage::login($I, $this->nonExistinguserName, $this->password);
        $I->see(LoginPage::$wrongPassOrUserNameMsg);

        $I->wantTo('test unsuccessful login with existing user and bad password');
        LoginPage::login($I, $this->userName, $this->nonExistinguserName);
        $I->see(LoginPage::$wrongPassOrUserNameMsg);
    }
}

