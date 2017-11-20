import { ServerSideRenderingPage } from './app.po';

describe('server-side-rendering App', () => {
  let page: ServerSideRenderingPage;

  beforeEach(() => {
    page = new ServerSideRenderingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
