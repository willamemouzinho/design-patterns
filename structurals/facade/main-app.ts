import { BuyCryptoFacade } from "./buy-crypto-facade";

const buyCrypto = new BuyCryptoFacade();
buyCrypto.buyCryptocurrency(1000, "BTC");
