import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseChainId from "../../live-code/snippets/network/UseChainId";
import UseNetworkMismatch from "../../live-code/snippets/network/UseNetworkMismatch";
import UseSwitchChain from "../../live-code/snippets/network/UseSwitchChain";
const Network: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        < a href="https://portal.thirdweb.com/react/react.usechainid" target="_blank">
        <h2>useChainId</h2>
        </a>
        <UseChainId />
        <a href="https://portal.thirdweb.com/react/react.usenetworkmismatch" target="_blank">
        <h2>useNetworkMismatch</h2>
        </a>
        <UseNetworkMismatch />
        <a href="https://portal.thirdweb.com/react/react.useSwitchChain" target="_blank">
          <h2>useSwitchChain</h2>
        </a>
        <UseSwitchChain />

      </main>
    </div>
  );
};

export default Network;
