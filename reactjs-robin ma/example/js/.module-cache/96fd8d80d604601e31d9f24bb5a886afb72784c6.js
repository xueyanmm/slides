(function(){

  var UserInput = React.createClass({displayName: "UserInput",

    getInitialState: function () {

    },
    componentDidMount: function () {
      this.getDom();
    },
    componentWillUnmount: function () {

    },
    getDom: function () {
      var inputDom = this.refs.unamdom;
      console.log('inputDom',inputDom);
    },
    render: function () {
      return (
        React.createElement("div", null, 
          React.createElement("input", {valu: "test", name: "uname", ref: "unamdom"})
        )
      );
    }
  });

  React.render(React.createElement(UserInput, null),
  document.getElementById('example'));

}());
