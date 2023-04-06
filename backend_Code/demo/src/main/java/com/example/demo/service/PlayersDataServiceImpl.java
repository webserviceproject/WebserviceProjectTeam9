package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DAO.PlayersDAOInterface;
import com.example.demo.Util.PlayersUtil;
import com.example.demo.entity.PlayersEntity;

@Service
public class PlayersDataServiceImpl implements PlayersDataServiceInterface {

	@Autowired
	private PlayersDAOInterface daoInterface;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Transactional
	@Override
	public List<PlayersUtil> getPlayersData() {
		List<PlayersEntity> entity= daoInterface.getPlayersData();
		if(!entity.isEmpty()) {
		List<PlayersUtil> utilList = new ArrayList<PlayersUtil>();
		entity.forEach(obj -> {
			PlayersUtil util = new PlayersUtil();
			util.setFirstName(obj.getFirstName());
			util.setLastName(obj.getLastName());
			util.setNumOfMatches(obj.getNumOfMatches());
			util.setWins(obj.getWins());
			util.setRankLevel(obj.getRankLevel());
			util.setAttitude(obj.getAttitude());
			util.setSno(obj.getSno());
			utilList.add(util);
		});
		return utilList;
		}
		return null;
	}

	@Override
	public List<PlayersUtil> getPlayersDataBySearchDetails(PlayersUtil playerutil) {
		List<PlayersUtil> utilList=null;
		if(null != playerutil) {
			if(null!= playerutil.getFirstName() && !playerutil.getFirstName().isEmpty()) {
				System.out.println("inside firstname");
				utilList=getPlayersDataByFirstName(playerutil.getFirstName());
			}else if(null!=playerutil.getLastName() && !playerutil.getLastName().isEmpty()) {
				System.out.println("inside lastname");
				utilList=getPlayersDataByLastName(playerutil.getLastName());
			}else if(null != playerutil.getRankLevel() && !playerutil.getRankLevel().isEmpty()) {
				System.out.println("inside ranklevel");
				utilList=getPlayersDataByRanklevel(playerutil.getRankLevel());
			}else if(null != playerutil.getWins() && !playerutil.getWins().isEmpty()) {
				System.out.println("inside wins");
				utilList=getPlayersDataByWins(playerutil.getWins());
			}else if(null!= playerutil.getNumOfMatches() && !playerutil.getNumOfMatches().isEmpty()) {
				System.out.println("inside numofmatches");
				utilList=getPlayersDataByNumOfMatches(playerutil.getNumOfMatches());
			}else {
				System.out.println("inside else");
				utilList=null;
			}
			System.out.println("before utilList return"+utilList);
			return utilList;
		}
		System.out.println("before null return");
		return null;
	}

	@Override
	public List<PlayersUtil> getPlayersDataByFirstName(String fname) {
		List<PlayersEntity> entityList= daoInterface.getPlayersDataByFirstName(fname);
		if(null!=entityList) {
			List<PlayersUtil> utilList= new ArrayList<PlayersUtil>();
			entityList.forEach(obj ->{
				PlayersUtil util = new PlayersUtil();
				util.setFirstName(obj.getFirstName());
				util.setLastName(obj.getLastName());
				util.setNumOfMatches(obj.getNumOfMatches());
				util.setWins(obj.getWins());
				util.setRankLevel(obj.getRankLevel());
				util.setAttitude(obj.getAttitude());
				util.setSno(obj.getSno());
				System.out.println("util object value is"+util.toString());
				utilList.add(util);
			});
			System.out.println("returns utils list with values in fname");
			return utilList;
		}
		System.out.println("before null infname service");
		return null;
	}

	@Override
	public List<PlayersUtil> getPlayersDataByLastName(String lName) {
		List<PlayersEntity> entityList= daoInterface.getPlayersDataByLastName(lName);
		if(null!=entityList) {
			List<PlayersUtil> utilList= new ArrayList<PlayersUtil>();
			entityList.forEach(entity ->{
				PlayersUtil util=modelMapper.map(entityList, PlayersUtil.class);
				utilList.add(util);
			});
			return utilList;
		}
		return null;
	}

	@Override
	public List<PlayersUtil> getPlayersDataByWins(String wins) {
		List<PlayersEntity> entityList= daoInterface.getPlayersDataByWins(wins);
		if(null!=entityList) {
			List<PlayersUtil> utilList= new ArrayList<PlayersUtil>();
			entityList.forEach(entity ->{
				PlayersUtil util=modelMapper.map(entityList, PlayersUtil.class);
				utilList.add(util);
			});
			return utilList;
		}
		return null;
	}

	@Override
	public List<PlayersUtil> getPlayersDataByRanklevel(String ranklevel) {
		List<PlayersEntity> entityList= daoInterface.getPlayersDataByRanklevel(ranklevel);
		if(null!=entityList) {
			List<PlayersUtil> utilList= new ArrayList<PlayersUtil>();
			entityList.forEach(entity ->{
				PlayersUtil util=modelMapper.map(entityList, PlayersUtil.class);
				utilList.add(util);
			});
			return utilList;
		}
		return null;
	}

	@Override
	public List<PlayersUtil> getPlayersDataByAttitude(String attitude) {
		List<PlayersEntity> entityList= daoInterface.getPlayersDataByAttitude(attitude);
		if(null!=entityList) {
			List<PlayersUtil> utilList= new ArrayList<PlayersUtil>();
			entityList.forEach(entity ->{
				PlayersUtil util=modelMapper.map(entityList, PlayersUtil.class);
				utilList.add(util);
			});
			return utilList;
		}
		return null;
	}

	@Override
	public List<PlayersUtil> getPlayersDataByNumOfMatches(String numOfMatches) {
		List<PlayersEntity> entityList= daoInterface.getPlayersDataByNumOfMatches(numOfMatches);
		if(null!=entityList) {
			List<PlayersUtil> utilList= new ArrayList<PlayersUtil>();
			entityList.forEach(entity ->{
				PlayersUtil util=modelMapper.map(entityList, PlayersUtil.class);
				utilList.add(util);
			});
			return utilList;
		}
		return null;
	}

}
