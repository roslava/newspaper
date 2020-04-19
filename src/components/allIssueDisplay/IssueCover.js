import React from 'react';


class MyComponent extends React.Component {
  render() {
    const {data} = this.props;
    const nameList = data.map(issue => {
      return(
        <div key={issue.key}>
        <div>№ {issue.issue_number} ({issue.overal_number}), {issue.month} {issue.year}</div>
        <div>{issue.id}</div>
        <hr/>
        </div>
      )
    });

    return(
      <div>{nameList}</div>
    )
  }
}

export default MyComponent;
