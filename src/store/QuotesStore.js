import { observable, action } from "mobx";
import {Alert } from 'react-native';

export default class QuotesStore {
	@observable isLoader = false;
	@observable isError = false;
    @observable quotesList = [];

    @action async getQuotes(isShowSpinner) {
    	try {
    		this.isError = false;
    		if (isShowSpinner) {
	    		this.isLoader = true;
	    	}

	    	const params = {
	            method: 'GET',
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json',
	            }
	        }

	        const response = await fetch(`https://poloniex.com/public?command=returnTicker`, params);

	        if (!response) {
	            throw response
	        }

	        const responseJson = await response.json();

	        this.quotesList = Object.entries(responseJson);

	        if (isShowSpinner) {
	    		this.isLoader = false;
	    	}

	  //       setInterval(() => {
	  //       	this.getQuotes(false);
			// }, 5000);
    	} catch (error) {
    		this.isError = true;
    		console.log(error);

   //  		setInterval(() => {
	  //       	this.getQuotes(false);
			// }, 5000);
    	}
    }
}