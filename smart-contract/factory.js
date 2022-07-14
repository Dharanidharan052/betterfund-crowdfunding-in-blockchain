import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xcaaaeadd0d8e9fc4ac6af8c97faafc11c9f36fc4"
);

export default instance;
