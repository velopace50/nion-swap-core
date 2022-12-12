pragma solidity >=0.5.0;

import '../NionERC20.sol';

contract ERC20 is NionERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
