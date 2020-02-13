export default class DeterministicFiniteStateMachine {

  /**
   */
  constructor({ transitions, startState, acceptStates }) {
    
    this.transitions=transitions;
    this.startState=startState;
    this.acceptStates=acceptStates;
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
    return this.acceptStates.includes(state);
  }


  accept(string,state=this.startState)
  {
    const nextState = this.transition(state,string.charAt((0)));
    return 


  }

  /*
  accepts(string, state = this._startState) {
    if(string.length === 0)
    {
        return this.isAcceptState(state);

    }else{

        const nextState = this.transition(state,string.charAt(0));
        return this.accepts(string.substr(1),nextState);
    }
*/

    
  }

}
