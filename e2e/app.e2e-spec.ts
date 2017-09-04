import { ConsulConfigurationPage } from './app.po';

describe('consul-configuration App', () => {
  let page: ConsulConfigurationPage;

  beforeEach(() => {
    page = new ConsulConfigurationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
