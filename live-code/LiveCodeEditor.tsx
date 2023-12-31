import { useState } from "react";
import ChainContext from "../context/Chain";
import { Dogechain, Ethereum, Polygon, Mumbai, Goerli, Base, BaseGoerli } from "@thirdweb-dev/chains"
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  smartWallet,
  localWallet,
  paperWallet,
  trustWallet,
  zerionWallet,
  bloctoWallet,
  magicLink,
  frameWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styles from "../styles/Home.module.css"
import React from "react";
import { Navbar } from "../components/Navbar";

type Props = {
  code: string;
  additionalScope?: any;
  wrapInProvider?: boolean;
  network?: string;
  setSelectedChain?: string;
};

const defaultScope = {
  React,
  ThirdwebProvider,
};

function LiveCodeEditor({ code, additionalScope }: Props) {
  const [selectedChain, setSelectedChain] = useState("");

  const handleChainChange = (e: { target: { value: string } }) => {
    setSelectedChain(e.target.value);
  };


  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENTID}
        activeChain={selectedChain}
        supportedChains={[Dogechain, Ethereum, Polygon, Mumbai, Goerli, Base, BaseGoerli]}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          safeWallet({
            personalWallets: [
              metamaskWallet(),
              coinbaseWallet(),
              walletConnect(),
            ],
          }),
          smartWallet({
            factoryAddress: "YOUR_FACTORY_ADDRESS",
            gasless: true,
            personalWallets: [
              metamaskWallet(),
              coinbaseWallet(),
              walletConnect(),
            ],
          }),
          localWallet(),
          paperWallet({
            paperClientId: "YOUR_PAPER_CLIENT_ID",
          }),
          trustWallet(),
          zerionWallet(),
          bloctoWallet(),
          magicLink({
            apiKey: "YOUR_MAGIC_API_KEY",
            oauthOptions: {
              providers: [
                "google",
                "facebook",
                "twitter",
                "apple",
              ],
            },
          }),
          frameWallet(),
          rainbowWallet(),
        ]}
      >
      <ConnectWallet />
        <LiveProvider
          code={code}
          scope={{
            ...defaultScope,
            ...additionalScope,
          }}
        >
          <div className={styles.liveCodeContainer}>
            <div className={styles.liveCodeBlock}>
              <select
                value={selectedChain}
                onChange={handleChainChange}
                className={styles.chainSelector}
              >
                <option value="ethereum">Ethereum</option>
                <option value="base">Base</option>
                <option value="base-goerli">Base Goerli</option>
                <option value="polygon">Polygon</option>
                <option value="mumbai">Mumbai</option>
                <option value="goerli">Goerli</option>
                <option value="arbitrum">Arbitrum One</option>
                <option value="arbitrum-goerli">Arbitrum Goerli</option>
                <option value="optimisim">Optimism</option>
                <option value="binance">Binance SmartChain</option>
                <option value="binance-testnet">Binance SmartChain Testnt</option>
                <option value="fantom">Fantom Opera</option>
                <option value="fantom-testnet">Fantom Testnet</option>
                <option value="avalanche-fuji">Avalanche C Chain</option>
                <option value="avalanche-fuji-testnet">Avalanche Fuji Testnet</option>
              </select>

              <p className={styles.title}>Editor</p>
              <LiveEditor className={styles.liveCodeBlock}
              />
            </div>
            <div style={{ width: "650px", height: "100%" }}>
              <p className={styles.title}>Preview</p>
              <LivePreview
                className={styles.liveCodePreview}
              />
              <LiveError />
            </div>
          </div>
        </LiveProvider>
      </ThirdwebProvider>
    </ChainContext.Provider>
  );
}

function WrappedLiveCodeEditor(props: Props) {
  return (
    <ThirdwebProvider activeChain="goerli">
      <LiveCodeEditor {...props} />
    </ThirdwebProvider>
  );
}

export default function LiveCodeEditorWrapper(props: Props) {
  return props.wrapInProvider ? (
    <WrappedLiveCodeEditor {...props} />
  ) : (
    <LiveCodeEditor {...props} />
  );
}
