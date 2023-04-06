package com.example.demo.DAO;

import java.util.List;
import com.example.demo.entity.PlayersEntity;

public interface PlayersDAOInterface {

	public List<PlayersEntity> getPlayersData(); 
	public List<PlayersEntity> getPlayersDataBySearchDetails(PlayersEntity entity);
	public List<PlayersEntity> getPlayersDataByFirstName(String fname);
	public List<PlayersEntity> getPlayersDataByLastName(String lName);
	public List<PlayersEntity> getPlayersDataByWins(String wins);
	public List<PlayersEntity> getPlayersDataByRanklevel(String ranklevel);
	public List<PlayersEntity> getPlayersDataByAttitude(String attitude);
	public List<PlayersEntity> getPlayersDataByNumOfMatches(String numOfMatches);
		
}
