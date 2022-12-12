const NionFactory = artifacts.require('NionFactory');

const feeToSetter = '0x5F318726600056f6f1770075C6bAA22E5Fc60F82';

module.exports = function(deployer) {
  deployer.deploy(NionFactory, feeToSetter).then(() => {
    console.log('Nion Factory is deployed.');
  });
};
