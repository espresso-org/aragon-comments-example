pragma solidity ^0.4.24;

import "@aragon/os/contracts/kernel/IKernel.sol";

contract CommentApp {

    function postComment(string comment) public;
    function kernel() public view returns (IKernel);
}