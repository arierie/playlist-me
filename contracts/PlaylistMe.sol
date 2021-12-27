// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PlaylistMe {
    struct User{
        address owner;
        string playlist;
        string comment;
    }

    User[] private users;

    constructor() {
        console.log("Welcome to the PlaylistMe app");
    }

    function sendPlaylist(string memory playlist, string memory comment) public {
        User memory newUser = User(msg.sender, playlist, comment);
        users.push(newUser);
        console.log("%s have share their playlist!", newUser.owner);
        console.log("Comment: %s", newUser.comment);
        console.log("Link: %s\n", newUser.playlist);
    }

    function getTotalPlaylists() public view returns (uint256) {
        console.log("We have %d total users sharing their playlist!", users.length);
        return users.length;
    }
}
