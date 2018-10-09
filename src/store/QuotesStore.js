import { observable, action } from "mobx";

export default class QuotesStore {
	@observable isLoader = false;
	@observable isError = false;
    @observable quotesList = [];

    @action async getQuotes() {
    	try {
    		this.isError = false;
    		this.isLoader = true;

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
	        this.isLoader = false;

	        setInterval(() => {
	        	this.updateQuotesList();
			}, 5000);
    	} catch (error) {
    		this.isError = true;
    		console.log(error);

    		setInterval(() => {
	        	this.updateQuotesList();
			}, 5000);
    	}
    }

    @action async updateQuotesList() {
    	try {
    		this.isError = false;
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

    	} catch (error) {
    		this.isError = true;
    		console.log(error);
    	}
    }
}