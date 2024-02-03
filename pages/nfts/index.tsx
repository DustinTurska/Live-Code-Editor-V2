import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseAirdropHook from "../../live-code/snippets/nfts/UseAirdropHook";
import UseBurnNFT from "../../live-code/snippets/nfts/UseBurnNFT";
import UseMintNFTSupply from "../../live-code/snippets/nfts/UseMintNFTSupply";
import UseNFTBalance from "../../live-code/snippets/nfts/UseNFTBalance";
import UseNFTHook from "../../live-code/snippets/nfts/UseNFTHook";
import UseOwnedNFTs from "../../live-code/snippets/nfts/UseOwnedNFTs";
import UseTransferNFT from "../../live-code/snippets/nfts/UseTransferNFT";
import UseLazyMint from "../../live-code/snippets/nfts/nftdrops/UseLazyMint";
import UseClaimNFT from "../../live-code/snippets/nfts/nftdrops/UseClaimNFT";
import UseUnclaimedNFTs from "../../live-code/snippets/nfts/nftdrops/UseUnclaimedNFTs";
import UseGetApproved from "../../live-code/snippets/nfts/UseGetApproved";
const NFTs: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <a href="https://portal.thirdweb.com/react/react.usenft" target="_blank">
        <h2>useNFTTest</h2>
        </a>
        <UseNFTHook />
        <a href="https://portal.thirdweb.com/react/react.useownednfts" target="_blank">
        <h2>useOwnedNFTs</h2>
        </a>
        <UseOwnedNFTs />
        <a href="https://portal.thirdweb.com/react/react.uselazymint" target="_blank">
        <h2>useLazyMint</h2>
        </a>
        <UseLazyMint />
        <a href="https://portal.thirdweb.com/react/react.useclaimnft" target="_blank">
        <h2>useClaimNFT</h2>
        </a>
        <UseClaimNFT />
        <a href="https://portal.thirdweb.com/react/react.useunclaimednfts" target="_blank">
        <h2>useUnclaimedNFTs</h2>
        </a>
        <UseUnclaimedNFTs />
        {/* <h2>useTotalCirculatingSupply</h2>
        <UseTotalCirculatingSupply />
        <h2>useTotalCount</h2>
        <UseTotalCount /> */}
        <a href="https://portal.thirdweb.com/react/react.usetransfernft" target="_blank">
        <h2>useTransferNFT</h2>
        </a>
        <UseTransferNFT />
        <a href="https://portal.thirdweb.com/react/react.useairdropnft" target="_blank">
        <h2>useAirdrop</h2>
        </a>
        <UseAirdropHook />
        <a href="https://portal.thirdweb.com/react/react.useburnnft" target="_blank">
        <h2>useBurnNFT</h2>
        </a>
        <UseBurnNFT />
        {/* <h2>useMintNFTSupply</h2>
        <UseMintNFTSupply /> */}
        <a href="https://portal.thirdweb.com/react/react.usenftbalance" target="_blank">
        <h2>useNFTBalance</h2>
        </a>
        <UseNFTBalance />
        <h2>useGetApproved</h2>
        <UseGetApproved />
      </main>
    </div>
  );
};

export default NFTs;
