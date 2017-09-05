import {PosServer} from './pos-server';

describe('PosServerList', () => {
  it('should create an instance', () => {
    expect(new PosServer()).toBeTruthy();
  });

  it('should accept values in the construtor', () => {
  	let config = new PosServer({
  		country: 'AUS',
		  company: 'Harvey Norman',
		  store: '020',
		  name: 'Auburn',
		  hostname: 'AUBUTPU2',
		  instanceVersion: '2017.3.3819.0',
		  dataset: 'd:\\data1\\pos\\'
  	});
  	expect(config.country).toEqual('AUS');
  	expect(config.company).toEqual('Harvey Norman');
  	expect(config.store).toEqual('020');
  	expect(config.name).toEqual('Auburn');
  	expect(config.hostname).toEqual('AUBUTPU2');
  	expect(config.instanceVersion).toEqual('2017.3.3819.0');
  	expect(config.dataset).toEqual('d:\\data1\\pos\\');
  });

});
