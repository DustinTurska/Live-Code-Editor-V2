import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseTokenClaim from "../../live-code/snippets/tokens/UseTokenClaim";
import UseBalanceOf from "../../live-code/snippets/tokens/UseBalanceOf";
const Tokens: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useTokenClaim</h2>
        <UseTokenClaim />
        <a href="https://portal.thirdweb.com/unity/erc20#balanceof" target="_blank">
          <h2>BalanceOf</h2>
        </a>
          <UseBalanceOf />
      </main>
    </div>
  );
};

export default Tokens;
