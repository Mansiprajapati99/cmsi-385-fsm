export default class DeterministicFiniteStateMachine {

  /**
   */
  constructor({ transitions, startState, acceptStates }) {
    this._transitions = transitions;
    this._startState = startState;
    this._acceptStates = acceptStates;
  }

  /**
   *
   * @returns a string state name
   */
  transition(state, symbol) {
    return this._transitions[state][symbol];
  }
  isAcceptState(state)
  {
    return this._acceptStates.includes(state);
  }
  /*
  accepts(string, state = this._startState) {
    const nextState = this.transition(state, string.charAt(0));
    return (string.length === 0) ? this.isAcceptState(state):
                                   this.accepts(string.substr(1),nextState);
  } */

  accepts(string, state= this._startState)
  {
     var nextState = this.transition(state,string.charAt(0));
     if(string.length === 0)
     {
       this.isAcceptState(state);
     }else{
       this.accepts(string.substr(1),nextState);
     }
     

  }

}
