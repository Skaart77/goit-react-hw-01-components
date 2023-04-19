import { Profile } from 'components/User/profile';
import { Statistics } from 'components/Statistic/statistic';
import { FriendList } from 'components/Friends/friends';
import { TransactionHistory } from 'components/Transactions/transactions';


import user from 'components/data/user';
import data from 'components/data/data';
import friends from 'components/data/friends';
import transactions from 'components/data/transactions';

export const App = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
  
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
    
    <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  
  );

};
