// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleStorage {
    uint256 private storedValue;  //menyimpan sebuah nilai dalam bentuk     uint256
    address public owner; // Task 1: State variable untuk owner [cite: 250]

    // Task 1 & 2: Events 
    event OwnerSet(address indexed oldOwner, address indexed newOwner);  //track perubahan
    event ValueUpdated(uint256 newValue);

    // Task 4 (Optional): Access Control [cite: 264]
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender; // Pembuat contract otomatis jadi owner 
        emit OwnerSet(address(0), msg.sender); // Task 2: Muncul saat deploy 
    }

    // simpan nilai ke blockchain (write)
    function setValue(uint256 _value) public onlyOwner {
        storedValue = _value;
        emit ValueUpdated(_value); // Task 2: Muncul saat set value 
    }

    //membaca nilai dari blockchain (read) terakhir kali diupdate
    function getValue() public view returns (uint256) {
        return storedValue;
    }
}