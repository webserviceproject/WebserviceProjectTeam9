package com.example.demo.Util;

import org.springframework.stereotype.Component;

@Component
public class PlayersUtil {
	
	private String firstName;
	private String lastName;
	private String wins;
	private String numOfMatches;
	private String rankLevel;
	private String attitude;
	private String middleName;
	private int sno;
	
	// getters and setters	
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
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getNumOfMatches() {
		return numOfMatches;
	}
	public void setNumOfMatches(String numOfMatches) {
		this.numOfMatches = numOfMatches;
	}
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	@Override
	public String toString() {
		return "PlayersUtil [firstName=" + firstName + ", lastName=" + lastName + ", wins=" + wins + ", numOfMatches="
				+ numOfMatches + ", rankLevel=" + rankLevel + ", attitude=" + attitude + ", middleName=" + middleName
				+ ", sno=" + sno + "]";
	}
	

}
