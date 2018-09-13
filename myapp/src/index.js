import React                 from 'react';
import ReactDOM              from 'react-dom';
import './index.css';
// import App                   from './App';
import registerServiceWorker from './registerServiceWorker';

// //引入redux
// import { createStore } from 'redux';

// //定义reducer   Store 收到 Action 以后，必须给出一个新的 State(对数据的操作)
// const reducer = (state=0, action) => {
//     switch(action.type) {
//         case 'INCREMENT': return state + 1;
//         case 'DECREMENT': return state - 1;
//         default: return state;
//     }
// }

// //创建一个store(store在一个项目中只能有一个)
// const store = createStore(reducer); 

// //定义的加事件
// let onIncrement = function(){
//     store.dispatch({type:"INCREMENT"})
// }
// //定义的减事件
// let onDecrement = function(){
//     store.dispatch({type:"DECREMENT"})
// }

// //加载页面元素（view）
// const render = () =>{
//     ReactDOM.render(
//         <div>
//             <h1>{store.getState()}</h1>
//             <button onClick={onIncrement}>+</button>
//             <button onClick={onDecrement}>-</button>
//         </div>,
//     document.getElementById('root'));
// registerServiceWorker();
// }

// //页面首次调用显示
// render();

// //通过store.subscribe();方法监听函数，一旦 State 发生变化，就自动执行这个函数刷新页面内容
// store.subscribe( render);


//////////////////////////////////////////////////////////////////////$RECYCLE.BIN

// import { Provider } from 'react-redux'
// import App from './containers/App'
// import configureStore from './store/configureStore'

// const store = configureStore()

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//   }

//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }

//   handleChange=(e)=> {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit=(e)=> {
//     e.preventDefault();
//     if (!this.state.text.length) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(prevState => ({
//       items: prevState.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function Square(props) {
      return (
        <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
      )
  }
  
  class Board extends React.Component {
    constructor() {
          super();
          this.state = {
              squares: Array(9).fill(null),
              xIsNext: true,
          }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
      return (
                <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
                />
      )
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner) {
          status = 'winner:' + winner;
      } else {
          status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O')
      }
    //   const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
    registerServiceWorker();