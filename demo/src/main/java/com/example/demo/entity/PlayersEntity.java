package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PLAYERS")
public class PlayersEntity {
	
	@Id
	@Column(name="SNO")
	private int sno;
	
	@Column(name="FNAME")
	private String firstName;
	
	@Column(name="LNAME")
	private String lastName;
	
	@Column(name="MNAME")
	private String middleName;
	
	@Column(name="wins")
	private String wins;
	
	@Column(name="NUM_OF_MATCHES")
	private String numOfMatches;
	
	@Column(name="rank_level")
	private String rankLevel;
	
	@Column(name="attitude")	
	private String attitude;

	
	// getters and setters
	
	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getWins() {
		return wins;
	}

	public void setWins(String wins) {
		this.wins = wins;
	}

	
	public String getRankLevel() {
		return rankLevel;
	}

	public void setRankLevel(String rankLevel) {
		this.rankLevel = rankLevel;
	}

	public String getAttitude() {
		return attitude;
	}

	public void setAttitude(String attitude) {
		this.attitude = attitude;
	}

	public String getNumOfMatches() {
		return numOfMatches;
	}

	public void setNumOfMatches(String numOfMatches) {
		this.numOfMatches = numOfMatches;
	}
	
	
	
}
