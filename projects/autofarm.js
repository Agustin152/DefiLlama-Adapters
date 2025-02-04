const utils = require('./helper/utils');
const {fetchChainExports} = require('./helper/exports');

const transformChain = {
  okexchain: 'okex',
  avax: 'avax',
  wanchain: 'wan',
}

function chainTvl(chain){
  return async()=>{
    const data = await utils.fetchURL(`https://static.autofarm.network/${transformChain[chain] ?? chain}/stats.json`)
  return data.data.platformTVL
  }
}

module.exports=fetchChainExports(chainTvl, [
  'bsc',       'polygon',
  'heco',      'avax',
  'fantom',    'moonriver',
  'okexchain', 'celo',
  'cronos',    'boba',
  'harmony','xdai',
  'velas','aurora',
  'oasis','wan',
  'kcc','evmos'
])
