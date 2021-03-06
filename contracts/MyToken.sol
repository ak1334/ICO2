// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("Coffee Tokens", "CTC") {
        //inital supply
        _mint(msg.sender, 10000); //creating initial supply and allocates to cont. deployer
    }

    //change no. of decimals
    function decimals() public view virtual override returns (uint8) {
        return 0; //1 , 2 , 3....10000 or 0.1 0.2 0.3   
    }
}
