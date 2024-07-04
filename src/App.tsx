import { TonConnectUIProvider } from "@tonconnect/ui-react"
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
        hello
      </TonConnectUIProvider>
    </div>
  )
}

export default App
