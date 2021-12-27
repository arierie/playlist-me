const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const playlistMeContractFactory = await hre.ethers.getContractFactory('PlaylistMe');
    const playlistMeContract = await playlistMeContractFactory.deploy();
    await playlistMeContract.deployed();

    console.log("Contract deployed to:", playlistMeContract.address);
    console.log("Contract deployed by:", owner.address);

    let playlistCount;
    playlistCount = await playlistMeContract.getTotalPlaylists();
  
    let sendPlaylist = await playlistMeContract.sendPlaylist(
      "https://open.spotify.com/playlist/6okJSAobitfcikrz5akNEX?si=46e9c78e7bf040a7",
      "This is dope, you gotta like it!"
    );
    await sendPlaylist.wait();

    playlistCount = await playlistMeContract.getTotalPlaylists();

    sendPlaylist = await playlistMeContract.connect(randomPerson).sendPlaylist(
      "https://open.spotify.com/playlist/5upqHrG0QoDmPsL5sFfHHf?si=1ff97715b21541aa",
      "Here's mine, check out!"
    );
    await sendPlaylist.wait();

    playlistCount = await playlistMeContract.getTotalPlaylists();
  };
  
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};
  
runMain();
