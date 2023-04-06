import React from 'react';
//import {MatchingPlayersInfoService} from '../MatchingPlayersInfoService';
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';

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
            noOfGames: '',
            attitude: ''
        }
        
        // call the update functions
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLasttName = this.updateLasttName.bind(this);
        this.updateNoOfGames = this.updateNoOfGames.bind(this);
        this.updateRankLevel = this.updateRankLevel.bind(this);
        this.updateWin = this.updateWin.bind(this);
        this.updateAttitude=this.updateAttitude.bind(this);
       // this.getPlayers = this.getPlayers.bind(this);
        //this.getPlayerBySearchDetails = this.getPlayerBySearchDetails.bind(this);
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

    componentDidMount(){
        this.getPlayers().then((response) => {
            console.log(response);
            this.setState({ players: response.data})
            console.log(this.state.players);
            this.state.players.map( player =>{
                console.log(player.firstName);
                console.log(player.lastName);
                console.log(player.numOfMatches);
                console.log(player.rankLevel);
                console.log(player.wins);
                console.log(player.attitude);
            });
            this.state.players.forEach( ele => {
                console.log(ele.value);
            })
        }); 
        this._Mounted = true;
        if (this._Mounted) {
        this.getPlayerBySearchDetails().then((response) => {
            console.log(response);
           // alert("getplayersbysearch call");
            this.setState({ players: response.data})
            console.log(this.state.players);
            this.state.players.map( player =>{
                console.log(player.firstName);
                console.log(player.lastName);
                console.log(player.numOfMatches);
                console.log(player.rankLevel);
                console.log(player.wins);
                console.log(player.attitude);
            });
            this.state.players.forEach( ele => {
                console.log(ele.value);
            })
        }); 
    }
    }

    componentWillUnmount() {
        this._Mounted = false;
    }

    getPlayers(){       
       // alert("before the getplayer call"); 
        return axios.get(PLAYERS_REST_API_URL);/*.then((response) =>{
            console.log("getplayer inside response called");
            alert("getplayer insee called");
            this.setState({ players: response.data});
            console.log("getplayer after set statecalled");
            alert("getplayer after set  called");
            this.state.players.forEach( ele => {
                console.log(ele.value);
                console.log("getplayer inside foreach called");
                alert("getplayer inside foreach called");
                alert(ele.value);
            });

        });*/
    }   

    getPlayerBySearchDetails = async () => {
        let playerobj = {firstName: this.state.firstName, lastName: this.state.lastName, wins: this.state.wins, 
            numOfMatches: this.state.numOfMatches, rankLevel: this.state.rankLevel, attitude: this.state.attitude};
           // alert("before the service call in by search");

          /* axios.post(PLAYERS_BY_SEARCH, playerobj).then((respose) => {
                this.setState({ players: respose.data});
            })*/
       return axios.post(PLAYERS_BY_SEARCH, playerobj);
       
       // this.setState({ players: respose.data });
    }

    render (){ 

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
                                            value={this.state.noOfGames} onChange={this.updateNoOfGames}/>
                                    </div>

                                    <button className="btn1 btn btn-success" onClick={this.getPlayers}>Get all the Player</button>
                                    <button className="btn btn-success" onClick={this.getPlayerBySearchDetails}>Find the Player</button>
                                 </form>
                            </div>
                        </div>
                    </div>

               </div>

               <div className='tabnamecn'>
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
                            this.state.players.map(
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