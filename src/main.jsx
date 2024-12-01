import { createRoot } from 'react-dom/client'
import {Layout} from "./Layout.jsx";
import {QrCodeGenerator} from "./QrCodeGenerator.jsx";


createRoot(document.getElementById('root')).render(
  <div>
     <QrCodeGenerator />
  </div>
)
