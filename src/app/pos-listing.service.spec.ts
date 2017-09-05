import { TestBed, inject } from '@angular/core/testing';

import { PosServer } from './pos-server';
import { PosListingService } from './pos-listing.service';

	describe('PosListingService', () => {
	  beforeEach(() => {
	    TestBed.configureTestingModule({
	      providers: [PosListingService]
	    });
	  });

	it('should be created', inject([PosListingService], (service: PosListingService) => {
		expect(service).toBeTruthy();
	}));

	describe('#getAll()', () => {
	  it('should return an empty array by default', inject([PosListingService], (service: PosListingService) => {	  	
	  	expect(service.getAll()).toEqual([]);
	  }));

	  it('should return all pos servers', inject([PosListingService], (service: PosListingService) => {
	  	let posServer1 = new PosServer({
	  		country: 'AUS',
			  company: 'Harvey Norman',
			  store: '020',
			  name: 'Auburn',
			  hostname: 'AUBUTPU2',
			  instanceVersion: '2017.3.3819.0',
			  dataset: 'd:\\data1\\pos\\'
	  	});

	  	let posServer2 = new PosServer({
	  		country: 'AUS',
			  company: 'Domayne',
			  store: '020',
			  name: 'Penrith',
			  hostname: 'AUPRTPU2',
			  instanceVersion: '2017.3.3819.0',
			  dataset: 'd:\\data2\\pos\\'
	  	});

	  	service.addServer(posServer1);
		service.addServer(posServer2);

		expect(service.getAll()).toEqual([posServer1, posServer2]);
	  }));
	});

	describe('csv file ()', () => {
	  it('should read csv data', inject([PosListingService], (service: PosListingService) => {
	  	let rows = service.readCsvData();
	  	expect(rows).toBeGreaterThan(0);
	  }));	
	});
	
});
