package com.example.demo.controller;


import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Util.HelpLineKSUUtility;
import com.example.demo.Util.PlayersUtil;
import com.example.demo.json.HelpLineKSUJSON;
import com.example.demo.service.PlayersDataServiceInterface;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/KSUAPI")
public class PlayersMatchingController {
	
	private static final Logger LOGGER = LogManager.getLogger(PlayersMatchingController.class);

	@Autowired(required=true)
	private PlayersDataServiceInterface serviceInterface;	
	
	
	@SuppressWarnings("unused")
	@RequestMapping(value = "/players", method = { RequestMethod.GET },produces = "application/json")
	public String getPlayersData() {
		String jsonval = null;
		System.out.println("from getPlayersData");
		List<PlayersUtil> list=serviceInterface.getPlayersData();
		ObjectMapper objectMapper = new ObjectMapper();		
		try {
			if(null!=list) {				
				jsonval=objectMapper.writeValueAsString(list);
			}
		} catch (JsonProcessingException e) {
			LOGGER.error("exception in PlayersMatchingController :: getPlayersData() json parsing"+jsonval.toString());
		}catch(Exception e) {
			LOGGER.error(e);
		}		
		
		return jsonval;	
	
	}
	
	
	@SuppressWarnings("unused")
	@PostMapping(value = "/playersbySearch", consumes = "application/json",produces = "application/json")
	public String getPlayersBySearch(@RequestBody  PlayersUtil util) {
		String jsonval = null;	
		System.out.println("getPlayersBySearch");
	    List<PlayersUtil> list=serviceInterface.getPlayersDataBySearchDetails(util);
	    System.out.println("utilList "+list.toString());
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			jsonval=objectMapper.writeValueAsString(list);	
			 System.out.println("JSONval "+jsonval.toString());
			return jsonval;			
		} catch (JsonProcessingException e) {
			System.out.println("exception in PlayersMatchingController :: getPlayersBySearch() json parsing"+jsonval);
		}catch(Exception e) {
			System.out.println(e);
		}	
		 System.out.println("outside JSONval "+jsonval.toString());
		return jsonval;
	} 
	
}
