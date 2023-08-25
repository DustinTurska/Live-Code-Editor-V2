import React from "react";
import LiveCodeEditor from "../../LiveCodeEditor";
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

const scope = { 
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
  rainbowWallet, };

const code = `<ConnectWallet
  theme="dark"
  btnTitle="Connect Wallet"
/>`;

export default function ConnectWalletEditor() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
