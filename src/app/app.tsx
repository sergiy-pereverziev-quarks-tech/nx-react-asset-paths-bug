// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import './app.scss';

export function App() {
  return (
    <div className={styles.app}>
      <NxWelcome title="nx-react-asset-paths-bug" />
    </div>
  );
}

export default App;
