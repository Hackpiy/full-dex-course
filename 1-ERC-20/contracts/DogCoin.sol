// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DogCoin is ERC20{

    address public minter;
    constructor(address _user , uint _supply) ERC20("Dog Coin","DOGC") {
        minter = _msgSender();
        _mint(_user, _supply);
    }

    function mint(address _to , uint _amount) external OnlyMinter{
        require(_to != address(0),"Dead address not supported");
        require(_amount > 0 , "Mint amount must be above zero");
        _mint(_to, _amount);
    } 

    modifier OnlyMinter(){
        require(_msgSender() == minter , "Only minter allowed to mint");
        _;
    }

}
