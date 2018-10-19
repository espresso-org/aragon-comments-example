pragma solidity ^0.4.24;

import "@aragon/os/contracts/kernel/IKernel.sol";
import "@aragon/os/contracts/kernel/KernelConstants.sol";
import "@aragon/os/contracts/apm/APMNamehash.sol";
import "../aragon-comments/contracts/AragonComments.sol";


contract HasComments is APMNamehash {
    bytes32 public constant APP_BASES_NAMESPACE = 0xf1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f;

    AragonComments private aragonComments;

    function getAragonCommentsApp() public returns (address) {
        //return kernel().getApp(APP_BASES_NAMESPACE, apmNamehash("aragon-comments"));
        return aragonComments;
    }

    function setAragonComments(address _aragonComments) public {
        aragonComments = AragonComments(_aragonComments);
    }    
         

    function postComment(string comment) public;
    function kernel() public view returns (IKernel);

}