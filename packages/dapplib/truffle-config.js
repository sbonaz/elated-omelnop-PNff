require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift response remain pulse hover knee army gaze'; 
let testAccounts = [
"0x28b9d0c8efe332d642d43da7859dcd56c644b2ccd926af4de809ec4f4aff6052",
"0x55fe5289e1cbf2db1f9452b9577114d76bdc8d77d0d69138b79fe43bb13bc804",
"0x9b321e7109fdc65a7ee6cb44ff14634e1e7932ae4c50b0bec00c248fb430dffa",
"0xb112daab2c887ab4c63901496c2f832be829a34ec496a3c334e8626e68d3bb08",
"0xb39db1fb6200b556b3dd6997e31b70b2d521f401fea09b91e2cae6a1d2c4ccca",
"0x28cdd6e6281bf1441f469c2e19ffb8bf5783e0b5d14023aa6cfc6485f94994a2",
"0xfcd8b6754fa9c057767b09d05e431eb63f120cca2a85e7b7478d69d6d634b34a",
"0x3fc7de1755f05e1890579efce4dfac34b961bb5dfcc6cbb092fc42156fdfa0f5",
"0x6ff17959175937252f240283fc06c62b3c9cee8b585a7f86fae1a1423975f2d2",
"0xa16c9a565f300710d7eb92e8d0dcd70acf4cca018660315e069cee5cd7148aa4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


