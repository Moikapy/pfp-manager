import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// require('dotenv').config()
import { NFTStorage, File, Blob, FormData } from 'nft.storage';
const api = process.env.NFT_STORAGE_KEY;
// console.log(api)
const nft_storage = new NFTStorage({ token: api });

const storeMultiFile = async (files) => {
  let _files = [];
  let i = 0;
  console.log('Loadin...')
  try {
    for await (var file of files) {
      // console.log(file)
      const _file = new File([file], i + 1 + '.png');
      _files.push(_file);
    }
    console.log(_files)
    const cid = await nft_storage.storeDirectory(_files)
    console.log('https://ipfs.io/ipfs/' + cid)
    // return cid;
  } catch (error) {
    throw error;
  }
};

export default function Home() {
  return (
    <div className={styles.container}>
      <input multiple type='file' onChange={(e) => storeMultiFile(e.target.files)} />
    </div>
  );
}
