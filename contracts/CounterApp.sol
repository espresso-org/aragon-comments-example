pragma solidity ^0.4.24;

import "@aragon/os/contracts/apps/AragonApp.sol";
import "@aragon/os/contracts/kernel/Kernel.sol";
import "@aragon/os/contracts/lib/math/SafeMath.sol";

import "@espresso-org/aragon-comments/contracts/HasComments.sol";


contract CounterApp is HasComments, AragonApp {

    /// Permissions
    bytes32 constant public TEST_ROLE = keccak256("TEST_ROLE");

    function initialize() onlyInit public {
        initialized();
    }


    function postComment(string comment, string threadName) public {
        aragonComments.postComment(comment, msg.sender);
    }

    
    function setAragonComments(address _aragonComments) public {
        super.setAragonComments(_aragonComments);
    }
 

    
}
