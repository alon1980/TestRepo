<?php
namespace Codeception\Module;

// here you can define custom actions
// all public methods declared in helper class will be available in $I

class LoginScenariosHelper extends \Codeception\Module
{
    public function getDisplayedUserNameFromUserName($userName)
    {
        $loggedInUserNameParts = preg_split( "/\@|\./", $userName);
        $userNameToLookFor = $loggedInUserNameParts[0]. " " . $loggedInUserNameParts[1];
        return $userNameToLookFor;
    }

}
