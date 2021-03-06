// id: '池子id',
// name: '池子名字',
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// depostAlert: '存入提示'
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price:
export const pools = [
  {
    id: 'dai',
    name: 'DAI',
    token: 'DAI',
    tokenDescription: 'DAI',
    tokenAddress: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'DAI',
    earnedTokenAddress: '0xa38cAdD483c188F72a961b74482b14cfbc35a2CA',
    earnContractAddress: '0xa38cAdD483c188F72a961b74482b14cfbc35a2CA',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },{
    id: 'busd',
    name: 'BUSD',
    token: 'BUSD',
    tokenDescription: 'BUSD',
    tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'BUSD',
    earnedTokenAddress: '0xd2c17eBf8DEdB9bD9D32699820E5d254eccA86b7',
    earnContractAddress: '0xd2c17eBf8DEdB9bD9D32699820E5d254eccA86b7',
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    id: 'usdt',
    name: 'USDT',
    token: 'USDT',
    tokenDescription: 'USDT',
    tokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'USDT',
    earnedTokenAddress: '0x104eff0aCB024625FCD839eBfEef2553172dF046',
    earnContractAddress: '0x104eff0aCB024625FCD839eBfEef2553172dF046',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  }
]