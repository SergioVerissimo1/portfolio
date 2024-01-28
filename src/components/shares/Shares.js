
import { websocketClient } from "polygon.io";
const stocksWS = websocketClient("0XGpK7UvZA3lSY9EJXETORO_1vm2Xi3w").getStocksWebsocket();
function Shares() {
  stocksWs.onmessage = raw => {
    const message = JSON.parse(raw);
    console.log(message);
    // switch (message.ev) {
    //   case "T":
    //     // your trade message handler
    //     break;
    // }
  }

  stocksWS.send({ action: "subscribe", params: "T.MSFT" });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Lauching Soon.
        </p>
      </header>
    </div>
  );
}

export default Shares;
