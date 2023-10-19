// Importing thing from react-dom library specified in the package.json
// react and react-dom together form react
import ReactDOM from 'react-dom/client';

// React feature to include CSS code in our project
import './index.css';
// App is a component
import App from './App';

// Creates main entrypoint of entire react interface 
// Where to place entrypoint in webpage
// Points to index.html in public folder
// root here point to the root div tag in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render tells react what to render in that place specified by the div tag
root.render(<App />);
