require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name response tortoise come good process metal giant'; 
let testAccounts = [
"0x871f06c55e3326cecdb4bcb7b4b0a44c914731eedb7f4747d3090d7ccf91a534",
"0xbd28691e4319803513384d2edb16ee0b16959712cb2c0ff4141065fc4fab953c",
"0x578c46e79c3c658383dcd932c5af5937d695b27335828d0a6d2a98360a2407b3",
"0x0834367d1cb8ca4de5e79b430efb3eb72d9d41a57d768b311ffafa6c0c4e31f6",
"0xd7ef7da17775d093119e18f39ce1938c1d9844fc13cfcc8cc65af17ffe437a05",
"0xaeed1cf223fb580e1daa5d7584d946a96a781583fcd20b0d917c92468a79d2a3",
"0x5aa1d4ff25ebb30f841abf298bd83e1234df2549f134f7a92d2b40652f073fb2",
"0x64850853048f3c9b379cf5a19539c48817552d6208030252b1c36cebf57ee805",
"0x50c9a9ea33f73dab0a860a0d8b0cca0cb9b709aed7d7df1ad601f1462e43c2a3",
"0x030e061828595eef85f1dd8beffa83a61adec366612b289e759069e474839914"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
