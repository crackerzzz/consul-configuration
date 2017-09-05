import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { PosServer } from './pos-server';

@Injectable()
export class PosListingService {
	posServers: PosServer[] = [];

	csvUrl: string = 'pos-servers.csv';
	csvData: any[] = [];

	constructor(private http : Http) { }

	addServer(posServer: PosServer): PosListingService {
		this.posServers.push(posServer);
		return this;		
	}

	getAll(): PosServer[] {
		return this.posServers;
	}

	readCsvData() : string[] {
	    this.http.get(this.csvUrl)
	    .subscribe(
	      data => this.extractData(data),
	      err => this.handleError(err)
	    );
	    return this.csvData;
  	}

	private extractData(res: Response) {
		let csvData = res['_body'] || '';
		let allTextLines = csvData.split(/\r\n|\n/);
		let lines = [];

		for ( let i = 0; i < allTextLines.length; i++) {
			// split content based on comma
			let data = allTextLines[i].split(',');
			let tarr = [];
			for (let j = 0; j < data.length; j++) {
				tarr.push(data[j]);
			}
			lines.push(tarr);			
		}
		this.csvData = lines;
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return errMsg;
	}

}
