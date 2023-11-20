const { expect } = require("chai");
const { ethers } = require("hardhat");

const token = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};
describe("KellyToken", () => {
  let kellytoken;

  beforeEach(async () => {
    const KellyToken = await ethers.getContractFactory("KellyToken");
    kellytoken = await KellyToken.deploy();
  });

  describe("Deployment", () => {
    it("has correct name", async () => {
      expect(await kellytoken.name()).to.eq("KellyToken");
    });
    it("has correct symbol", async () => {
      expect(await kellytoken.symbol()).to.eq("KYTN");
    });
  });
});
