<?php

class LoginPage
{
    //TODO: add support for languages
    // include url of current page
    public static $URL = 'http://alon.kaltura.com/';

    /**
     * Declare UI map for this page here. CSS or XPath allowed.
     * public static $usernameField = '#username';
     * public static $formSubmitButton = "#mainForm input[type=submit]";
     */

    public static $usernameField = '#Login-username';
    public static $passwordField = '#Login-password';
    public static $signinButton = '#Login-login';

    public static $titleText = 'MediaSpace Sign In';
    public static $wrongPassOrUserNameMsg = 'Invalid Username/Password provided';
    public static $forgotPasswordLink = "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=admin@example.com&amp;su=MediaSpace password reminder request&amp;body=Please send me a reminder";
    public static $forgotPasswordText = "Forgot Password?";

    public static function login($actor, $userName, $password)
    {
        $actor->amOnPage(self::$URL);
        $actor->see(self::$titleText);
        $actor->fillField(self::$usernameField, $userName);
        $actor->fillField(self::$passwordField, $password);
        $actor->click(self::$signinButton);
    }
}