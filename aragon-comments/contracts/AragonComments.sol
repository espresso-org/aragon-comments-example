pragma solidity ^0.4.24;

import "@aragon/os/contracts/apps/AragonApp.sol";

contract AragonComments is AragonApp {

    bytes32 constant public TEST_ROLE = keccak256("TEST_ROLE");

    event NewComment(address indexed entity);

    struct Comment {
        address author;
        uint256 date;
        string message;
    }

    Comment[] public comments;
    string private currentComment;

    function initialize() onlyInit public {
        initialized();

        currentComment = "initial comment";

        comments.push(Comment({
            author: 0,
            date: 123,
            message: "Hello!"
        }));
    }

    function postComment(string _comment) public {
        currentComment = _comment;
        emit NewComment(msg.sender);
    }

    function commentsCount() external view returns (uint256) {
        return comments.length;
    }

    function getComment() external view returns (string) {
        return currentComment;
    }


}