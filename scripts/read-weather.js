const WeatherFeed = artifacts.require('WeatherFeed')
const FarmCredibly2022ChainlinkWeatherNFT = artifacts.require('FarmCredibly2022ChainlinkWeatherNFT')

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract
    if (!network.startsWith('rinkeby')) {
        console.log("We can deploy stuff... but that's it!")
    }
    const weatherNFT = await FarmCredibly2022ChainlinkWeatherNFT.deployed()
    const weatherFeed = await WeatherFeed.deployed()
    console.log(await weatherFeed.weather())
    console.log(await weatherNFT.tokenURI(0))
}
