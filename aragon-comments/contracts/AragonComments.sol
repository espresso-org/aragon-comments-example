pragma solidity ^0.4.24;

import "@aragon/os/contracts/apps/AragonApp.sol";

contract AragonComments is AragonApp {

    event NewComment(address indexed entity);

    string private currentComment;
    uint private currentValue;

    function initialize() onlyInit public {
        initialized();

        currentComment = "initial comment";
        currentValue = 123;
    }

    function postComment(string _comment) public {
        currentComment = _comment;
        emit NewComment(msg.sender);
    }

    function test() external view returns (string) {
        return currentComment;
    }


}