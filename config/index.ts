export const config: {
  [key: string]: {
    fyUSD: string;
    fyETH: string;
    blast: string;
    usdb: string;
    idoToken: string;
    idoStartTime: number;
    idoEndTime: number;
    idoPrice: number;
  };
} = {
  blast_sepolia: {
    blast: '0x4300000000000000000000000000000000000002',
    usdb: '0x4200000000000000000000000000000000000022',
    fyETH: '0x6bf8f1ff10F1f82B6fFc89114a9cA4F864E57AFe',
    fyUSD: '0x4a2EE4f81c3801ef6aBA5A8007149640E1688127',
    // TODO: correct this later
    idoToken: '0x0000000000000000000000000000000000000001',
    idoStartTime: 0,
    idoEndTime: 0,
    idoPrice: 0,
  },
  blast: {
    blast: '0x4300000000000000000000000000000000000002',
    usdb: '0x4300000000000000000000000000000000000003',
    fyETH: '0x29100147Fd38f02bb78e7Ae77F794003c6d9faa2',
    fyUSD: '0xF35fdAAF364CAA4008b327C4cb48637942457287',
    // TODO: correct this later
    idoToken: '0x0000000000000000000000000000000000000001',
    idoStartTime: 0,
    idoEndTime: 0,
    idoPrice: 0,
  },
  default: {
    blast: '0x4300000000000000000000000000000000000002',
    usdb: '0x4300000000000000000000000000000000000003',
    fyETH: '0x29100147Fd38f02bb78e7Ae77F794003c6d9faa2',
    fyUSD: '0xF35fdAAF364CAA4008b327C4cb48637942457287',
    // TODO: correct this later
    idoToken: '0x0000000000000000000000000000000000000001',
    idoStartTime: 0,
    idoEndTime: 0,
    idoPrice: 0,
  },
};
