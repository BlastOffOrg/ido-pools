import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumberish } from 'ethers';
import { ethers, deployments } from 'hardhat';
import {
  BlastMock,
  ETHIDOPool,
  MockERC20,
  MockRebaseERC20,
  USDIDOPool,
} from '../../typechain';

const { deploy } = deployments;

const deployWithProxy = async (
  deployer: SignerWithAddress,
  contractName: string,
  args: any[]
) => {
  const factory = await ethers.getContractFactory(contractName, deployer);
  const proxyFact = await ethers.getContractFactory('TestProxy', deployer);
  const impl = await factory.deploy();
  const proxy = await proxyFact.deploy(
    impl.address,
    factory.interface.encodeFunctionData('init', args)
  );
  return factory.attach(proxy.address);
};

export const deployMockBlast = async (
  deployer: SignerWithAddress
): Promise<BlastMock> => {
  const factory = await ethers.getContractFactory('BlastMock', deployer);

  return factory.deploy();
};

export const deployMockUSDB = async (
  deployer: SignerWithAddress
): Promise<MockRebaseERC20> => {
  const factory = await ethers.getContractFactory('MockRebaseERC20', deployer);

  return factory.deploy();
};
export const deployETHIDOPool = async (
  deployer: SignerWithAddress,
  fyETH: string,
  idoToken: string,
  idoDecimals: BigNumberish,
  treasury: string,
  idoStart: number,
  idoEnd: number,
  minimuFund: BigNumberish,
  price: BigNumberish
): Promise<ETHIDOPool> => {
  const factory = await ethers.getContractFactory('ETHIDOPool', deployer);
  const idoPool = await factory.deploy();
  await idoPool.init(
    fyETH,
    idoToken,
    idoDecimals,
    treasury,
    true,
    idoStart,
    idoEnd,
    minimuFund,
    price
  );
  return idoPool;
};

export const deployUSDIDOPool = async (
  deployer: SignerWithAddress,
  usdb: string,
  fyUSD: string,
  idoToken: string,
  idoDecimals: BigNumberish,
  treasury: string,
  idoStart: number,
  idoEnd: number,
  minimuFund: BigNumberish,
  price: BigNumberish
): Promise<USDIDOPool> => {
  const factory = await ethers.getContractFactory('USDIDOPool', deployer);
  const idoPool = await factory.deploy();
  await idoPool.init(
    usdb,
    fyUSD,
    idoToken,
    idoDecimals,
    treasury,
    idoStart,
    idoEnd,
    minimuFund,
    price
  );
  return idoPool;
};

export const deployMockERC20 = async (
  deployer: SignerWithAddress
): Promise<MockERC20> => {
  const factory = await ethers.getContractFactory('MockERC20', deployer);
  return factory.deploy();
};
