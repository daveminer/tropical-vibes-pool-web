import { useState, useEffect } from "react"

import Image from 'next/image'

// the poolId from the sample at https://github.com/papacarp/pooltool.io/blob/master/ptwidget/ptwidget.html
// that actually produces json in the s3 location
//const poolId = "52b33a5db6d27d3b791c65d21a646f2b127aa0c0a09737f692c53750a5dab0ce";
const poolId = "7447913be564ff4e2505fb21ca5de980517f3b1575e006ce2d754b74";


const PoolToolWidget = () => {
  const [height, setHeight] = useState(undefined);
  const [epoch, setEpoch] = useState(0);
  const [epochBlocks, setEpochBlocks] = useState(0);
  const [lifetimeBlocks, setLifetimeBlocks] = useState(0);
  const [liveStake, setLiveStake] = useState(undefined);
  const [slot, setSlot] = useState(undefined);

  useEffect(() => {
    const loadData = async () => {
      const start = Date.now().toString();

      const networkQuery = fetch("https://pooltool.s3-us-west-2.amazonaws.com/stats/stats.json?now=" + start)

      //const poolQuery = fetch("https://pooltool.s3-us-west-2.amazonaws.com/8e4d2a3/pools/" + poolId + "/livestats.json?now=" + start)
      const options = {
        headers: { "project_id": "mainnetOmftm61gxeazeDXzpnkCw1tHnC5nQDdE" }
      };

      const poolQuery = fetch("https://cardano-mainnet.blockfrost.io/api/v0/pools/7447913be564ff4e2505fb21ca5de980517f3b1575e006ce2d754b74", options);

      let networkResponse = await networkQuery;
      let poolResponse = await poolQuery;


      let networkResponseBody = await networkResponse.json();
      let poolResponseBody = await poolResponse.json();

      setEpoch(parseInt(networkResponseBody['currentepoch']));
      setHeight(networkResponseBody['majoritymax'])
      setSlot(networkResponseBody['currentslot'])
      setEpochBlocks(poolResponseBody['blocks_epoch']);
      setLifetimeBlocks(poolResponseBody['blocks_minted']);
      setLiveStake((poolResponseBody['active_stake'] / 1000000));
    };

    loadData();
    setInterval(loadData, 60000);
  })

  return (
    <table className="ptwidget">
      <tbody>
        <tr><th colSpan="2">TropicPool.io ITN Live Stats</th></tr>
        <tr><td className="ptwidgetright">Epoch:</td><td className="ptwidgetleft" id="ptepoch">{epoch}</td></tr>
        <tr><td className="ptwidgetright">Slot:</td><td className="ptwidgetleft" id="ptslot">{slot}</td></tr>
        <tr><td className="ptwidgetright">Height:</td><td className="ptwidgetleft" id="ptheight">{height}</td></tr>
        <tr><td className="ptwidgetright">Live Stake:</td><td className="ptwidgetleft" id="ptstake">{liveStake}</td></tr>
        <tr><td className="ptwidgetright">Epoch Blocks:</td><td className="ptwidgetleft" id="pteblocks">{epochBlocks}</td></tr>
        <tr><td className="ptwidgetright">Lifetime Blocks:</td><td className="ptwidgetleft" id="ptlblocks">{lifetimeBlocks}</td></tr>

        <tr>
          <td colSpan="2" className="ptwidgetcenter">
            <a className="ptwidget" href="https://pooltool.io" target="">
              <Image className="ptwidget" src="https://pooltool.io/pooltoollogosm.png" alt="PoolTool icon" height="200" width="200" /> PoolTool.io
            </a>
            <br /><span className="ptwidget">data updates every 60 seconds</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default PoolToolWidget;