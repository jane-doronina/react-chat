import '../assets/stylesheets/App.scss';
import MessageList from '../containers/message-list';
import ChannelList from '../containers/channel-list';

function App() {
  return (
    <div className="app">
      <div className='logo-div'></div>
      <ChannelList />
      <MessageList />
    </div>
  );
}

export default App;
