import React from 'react'; 
import axios from 'axios';


const PLAYERS_REST_API_URL = 'http://localhost:8010/KSUAPI/players';
const PLAYERS_BY_SEARCH ='http://localhost:8010/KSUAPI/playersbySearch';

export class BeginMatching extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            players:[],
            firstName: '',
            lastName: '',
            rankLevel: '',
            wins: '',
            numOfMatches: '',
            attitude: '',
            flagval: false,
            flagval1: false
        }
                
        // call the update functions
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLasttName = this.updateLasttName.bind(this);
        this.updateNoOfGames = this.updateNoOfGames.bind(this);
        this.updateRankLevel = this.updateRankLevel.bind(this);
        this.updateWin = this.updateWin.bind(this);
        this.updateAttitude=this.updateAttitude.bind(this);
        this.updateflags=this.updateflags.bind(this);
        this.getPlayers = this.getPlayers.bind(this);
        this.getPlayerBySearchDetails = this.getPlayerBySearchDetails.bind(this);
    }

    _Mounted = false;

    updateFirstName = (event) => {
        this.setState({
            firstName: event.target.value}
            )
    }

    updateLasttName = (event) => {
        this.setState({
            lastName: event.target.value}
            )
    }

    updateRankLevel = (event) => {
        this.setState({
            rankLevel: event.target.value}
            )
    }

    updateWin = (event) => {
        this.setState({
            wins: event.target.value}
            )
    }

    updateNoOfGames = (event) => {
        this.setState({
            noOfGames: event.target.value}
            )
    }

    updateAttitude = (event) => {
        this.setState({
            attitude: event.target.value}
            )
    }

    updateflags = async () => {
        alert("before change of flag val"+this.state.flagval);
        let flg=true;
        this.setState((preState, props) => ({
            [preState.flagval]: [preState.flagval]? false: true
            //flagval: flg
        }));
       
        this.setState({flagval: !this.state.flagval}); 
        alert(" after change of flag val"+this.state.flagval);      
    }

   
    
     getPlayers = async (e) => {   
        e.preventDefault();   
          
        const apidata = await axios.get(PLAYERS_REST_API_URL);
        this.setState({ players: apidata.data});
         
    }   

    componentDidMount(){
        console.log("inside did mount");
    }


    
    getPlayerBySearchDetails = async (e) => {       
        e.preventDefault();
        let playerobj = {firstName: this.state.firstName, lastName: this.state.lastName, wins: this.state.wins, 
            numOfMatches: this.state.noOfGames, rankLevel: this.state.rankLevel, attitude: this.state.attitude};           

            const apidata = await axios.post(PLAYERS_BY_SEARCH, playerobj)
        this.setState({ players: apidata.data});
      
    }

    render (){ 
        console.log("inside d=render");
      return ( 
        <div>           
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className = "card-body">
                                <form className='pform'>
                                    <div className = "form-group fname">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.updateFirstName}/>
                                    </div>
                                    <div className = "form-group lname">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.updateLasttName}/>
                                    </div>
                                    <div className = "form-group rankLevel">
                                        <label>Rank Level: </label>
                                        <input placeholder="Rank Level" name="rankLevel" className="form-control" 
                                            value={this.state.rankLevel} onChange={this.updateRankLevel}/>
                                    </div>

                                    <div className = "form-group wins">
                                        <label>Wins: </label>
                                        <input placeholder="Wins" name="wins" className="form-control" 
                                            value={this.state.wins} onChange={this.updateWin}/>
                                    </div>

                                    <div className = "form-group numOfGames">
                                        <label>number of Games: </label>
                                        <input placeholder="Number of Games" name="noOfGames" className="form-control" 
                                            value={this.state.noOfGames} onChange={this.updateNoOfGames}/>
                                    </div>

                                    <div className = "form-group attitude">
                                        <label>Attitude: </label>
                                        <input placeholder="Attitude" name="attitude" className="form-control" 
                                            value={this.state.attitude} onChange={this.updateAttitude}/>
                                    </div>

                                    <button className="btn1 btn btn-success"  onClick={(e) => {this.getPlayers(e); }} >Get all the Player</button>
                                    <button className="btn btn-success" onClick={(e) =>{this.getPlayerBySearchDetails(e); }}>Find the Player</button>
                                 </form>
                            </div>
                        </div>
                    </div>

               </div>

               <div className='tabnamecn '>
                <h1 className = "text-center"> Players List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>                           
                            <td className='fname'> First Name</td>
                            <td className='lname'> Last Name</td>
                            <td className='rankLevel'> Rank Level</td>
                            <td className='wins'> Wins</td>
                            <td className='numOfGames'> Number Of Games</td>
                            <td className='attitude'> Attitude</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.players.sort((a, b) => a.numOfMatches - b.numOfMatches).map(
                                player => 
                                <tr key = {player.sno}>
                                     <td> {player.firstName}</td>   
                                     <td> {player.lastName}</td>   
                                     <td> {player.rankLevel}</td>   
                                     <td> {player.wins}</td> 
                                     <td> {player.numOfMatches}</td>   
                                     <td> {player.attitude}</td>    
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
       ) 
    } 
}

//export default BeginMatching