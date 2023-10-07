// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract AvalonUserRegistration {
    struct User {
        address userAddress;
        string username;
        string tokenURI;
    }

    mapping(address => User) public users;
    mapping(uint256 => User) public usersById;
    uint256 public userCount;

    event UserRegistered(
        address userAddress,
        string username,
        string tokenURI,
        uint256 userId
    );

    function registerUser(
        string memory _username,
        string memory _tokenURI
    ) public {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(bytes(_tokenURI).length > 0, "TokenURI cannot be empty");
        require(
            users[msg.sender].userAddress == address(0),
            "User already registered"
        );

        userCount++;

        User memory newUser = User({
            userAddress: msg.sender,
            username: _username,
            tokenURI: _tokenURI
        });

        users[msg.sender] = newUser;
        usersById[userCount] = newUser;

        emit UserRegistered(msg.sender, _username, _tokenURI, userCount);
    }

    function getUserByAddress(
        address _userAddress
    ) public view returns (User memory) {
        return users[_userAddress];
    }

    function getUserById(uint256 _userId) public view returns (User memory) {
        return usersById[_userId];
    }
}
