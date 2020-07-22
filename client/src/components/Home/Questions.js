import React from 'react';
import { Card } from 'antd';

export default class Questions extends React.Component {
  constructor(props) {
      super(props)

  }

  componentDidMount() {
    this.props.getAllQuestions()
  }
  componentDidReceiveProps(nextProps) {
    console.log(nextProps);
  }
  renderQuestions() {
    console.log(this.props.questions);
    if (this.props.questions === undefined) {
      return <div> No Questions Here ... </div>
    }
    else {
      return Object.keys(this.props.questions).map( (index) => {
        return (
          <div key={this.props.questions[index]._id}>
              <Card title={this.props.questions[index].title} bordered={false} style={{ width: "100%" }}>
                  <p> Posted by : {this.props.questions[index].user}</p>
                  <p> {this.props.questions[index].content} </p>
              </Card>
          </div>
        )
      })
    }
  }
  render() {
    return (
      <div>
         {this.renderQuestions()}
      </div>
    );
  }

}
