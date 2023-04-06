package com.example.demo.service;

import java.util.List;
import com.example.demo.Util.PlayersUtil;
import com.example.demo.entity.PlayersEntity;

public interface PlayersDataServiceInterface {

	public List<PlayersUtil> getPlayersData(); 
	public List<PlayersUtil> getPlayersDataBySearchDetails(PlayersUtil util);
	public List<PlayersUtil> getPlayersDataByFirstName(String fname);
	public List<PlayersUtil> getPlayersDataByLastName(String lName);
	public List<PlayersUtil> getPlayersDataByWins(String wins);
	public List<PlayersUtil> getPlayersDataByRanklevel(String ranklevel);
	public List<PlayersUtil> getPlayersDataByAttitude(String attitude);
	public List<PlayersUtil> getPlayersDataByNumOfMatches(String numOfMatches);
	
}
