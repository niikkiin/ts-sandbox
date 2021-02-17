import { Component } from 'react';

interface User {
  name: string;
  age: number;
}
interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class ClassUserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };
  render() {
    return (
      <div>
        <h3>User Search:</h3>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>

        {this.state.user && this.state.user.name}
        {this.state.user && this.state.user.age}
      </div>
    );
  }
}

export default ClassUserSearch;
