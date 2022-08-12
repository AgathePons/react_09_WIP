// == Import
import ChatContainer from './ChatContainer';
import SettingsContainer from './SettingsContainer';

// == Composant
function App() {
  return (
    <div className="app">
      <SettingsContainer />
      <ChatContainer />
    </div>
  );
}

// == Export
export default App;
