'use strict';

var chai = require('chai');
var expect = chai.expect;
var Game = require('../game');

describe('Game', function() {
	var subject = new Game(20);
	
	
	var y; 
	  describe('#goUp', function() {
	    context('with an initialized board', function() {
	      it('decreases the y position unless it is already on ZERO', function() {
			if (subject.currentPosition().y===0) { 
				y=0;
			}
	        else {
				y = subject.currentPosition().y-1;
			}
			subject.goUp();		
			return expect(subject.currentPosition().y).to.eq(y);			
	      });
	    });
		
		/*context('with an invalid airport code', function() {
			it('returns invalid airport code', function() {
				airport_code = 'PUNKYBREWSTER';
				return expect(subject.requestAirportStatus(airport_code)).to.be.rejectedWith(Error);
			});
		});
		
	describe('#formatAirportStatus', function() {
		var status = {
	      'delay': 'true',
	      'name': 'Hartsfield-Jackson Atlanta International',
	      'ICAO': 'KATL',
	      'city': 'Atlanta',
	      'weather': {
	        'visibility': 5.00,
	        'weather': 'Light Snow',
	        'meta': {
	          'credit': 'NOAA\'s National Weather Service',
	          'updated': '3:54 PM Local',
	          'url': 'http://weather.gov/'
	        },
	        'temp': '36.0 F (2.2 C)',
	        'wind': 'Northeast at 9.2mph'
	      },
	      'status': {
	        'reason': 'AIRLINE REQUESTED DUE TO DE-ICING AT AIRPORT / DAL AND DAL SUBS ONLY',
	        'closureBegin': '',
	        'endTime': '',
	        'minDelay': '',
	        'avgDelay': '57 minutes',
	        'maxDelay': '',
	        'closureEnd': '',
	        'trend': '',
	        'type': 'Ground Delay'
	      }
	    };
		context('with a status containing no delay', function() {
	      it('formats the status as expected', function() {
	        status.delay = 'false';
	        expect(subject.formatAirportStatus(status)).to.eq('There is currently no delay at Hartsfield-Jackson Atlanta International. The current weather conditions are Light Snow, 36.0 F (2.2 C) and wind Northeast at 9.2mph.');
	      });
	    });
	
	    context('with a status containing a delay', function() {
			it('formats the status as expected', function() {
				status.delay = 'true';
				expect(subject.formatAirportStatus(status)).to.eq(
	          'There is currently a delay for Hartsfield-Jackson Atlanta International. The average delay time is 57 minutes. Delay is because of the following: AIRLINE REQUESTED DUE TO DE-ICING AT AIRPORT / DAL AND DAL SUBS ONLY. The current weather conditions are Light Snow, 36.0 F (2.2 C) and wind Northeast at 9.2mph.'	
			);
		});
	});
	});*/
	});	
});