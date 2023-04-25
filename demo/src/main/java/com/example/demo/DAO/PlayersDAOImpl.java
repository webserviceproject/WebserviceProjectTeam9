package com.example.demo.DAO;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.PlayersEntity;

@Repository
public class PlayersDAOImpl implements PlayersDAOInterface {

	@Autowired
	private EntityManager entityManager;	
	
	@Override
	public List<PlayersEntity> getPlayersData() {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession.createQuery("from PlayersEntity",
					PlayersEntity.class);
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersData() ::"+e);
		}
		return list;
	}

	@Override
	public List<PlayersEntity> getPlayersDataBySearchDetails(PlayersEntity entity) {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession
					.createQuery("from PlayersEntity p where p.FNAME=:FNAME and p.LNAME=:LNAME and p.RANK_LEVEL=:RANK_LEVEL and p.WINS=:WINS or "
							+ "p.NUMOFMATCHES=:NUMOFMATCHES or p.ATTITUDE=:ATTITUDE ", PlayersEntity.class);
			query.setParameter("FNAME", entity.getFirstName());
			query.setParameter("LNAME", entity.getLastName());
			query.setParameter("RANK_LEVEL", entity.getRankLevel());
			query.setParameter("WINS", entity.getWins());
			query.setParameter("NUMOFMATCHES", entity.getNumOfMatches());
			query.setParameter("ATTITUDE", entity.getAttitude());
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersDataBySearchDetails() :: "+e);
		}
		return list;
	}

	@Override
	public List<PlayersEntity> getPlayersDataByFirstName(String fname) {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession
					.createQuery("from PlayersEntity p where p.firstName=:FNAME", PlayersEntity.class);
			query.setParameter("FNAME", fname);
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersDataBySearchDetails() :: "+e);
		}
		return list;
	}

	@Override
	public List<PlayersEntity> getPlayersDataByLastName(String lName) {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession
					.createQuery("from PlayersEntity p where p.lastName=:LNAME", PlayersEntity.class);
			query.setParameter("LNAME", lName);
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersDataBySearchDetails() :: "+e);
		}
		return list;
	}

	@Override
	public List<PlayersEntity> getPlayersDataByWins(String wins) {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession
					.createQuery("from PlayersEntity p where p.wins=:WINS ", PlayersEntity.class);
			query.setParameter("WINS", wins);
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersDataBySearchDetails() :: "+e);
		}
		return list;
	}

	@Override
	public List<PlayersEntity> getPlayersDataByRanklevel(String ranklevel) {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession
					.createQuery("from PlayersEntity p where p.rankLevel>=:RANK_LEVEL", PlayersEntity.class);
			query.setParameter("RANK_LEVEL", ranklevel);
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersDataBySearchDetails() :: "+e);
		}
		return list;
	}

	@Override
	public List<PlayersEntity> getPlayersDataByAttitude(String attitude) {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession
					.createQuery("from PlayersEntity p where p.attitude=:ATTITUDE ", PlayersEntity.class);
			query.setParameter("ATTITUDE", attitude);
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersDataBySearchDetails() :: "+e);
		}
		return list;
	}

	@Override
	public List<PlayersEntity> getPlayersDataByNumOfMatches(String numOfMatches) {
		List<PlayersEntity> list = null;
		try {
			Session currentSession = entityManager.unwrap(Session.class);
			Query<PlayersEntity> query = currentSession
					.createQuery("from PlayersEntity p where p.numOfMatches >=:NUMOFMATCHES", PlayersEntity.class);
			query.setParameter("NUMOFMATCHES", numOfMatches);
			System.out.println(query.getQueryString());
			list = query.getResultList();
			System.out.println("DAOImpl::" + list.toString());
		} catch (Exception e) {
			System.out.println("Exception in PlayersDAOImpl :: getPlayersDataBySearchDetails() :: "+e);
		}
		return list;
	}

}
