pragma solidity ^0.4.24;

import "@aragon/os/contracts/apps/AragonApp.sol";

contract AragonComments is AragonApp {

    function initialize() onlyInit public {
        initialized();
    }

    function test() external view returns (uint) {
        return 42;
    }
    
}