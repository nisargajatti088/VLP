const {test,expect,request} = require('@playwright/test');
const loginpayload={email: "sandeshd@ekfrazo.in", password: "1234"}
let token;

test.beforeAll(async () =>
{
    const apiContext = await request.newContext();
    const response = await apiContext.post("https://vlp.thestorywallcafe.com/api-vlp/login/",
    {
        data: loginpayload
    });
    expect(response.ok()).toBeTruthy();
    const responseJson = await response.json();
    token = responseJson.token;
    console.log(token);

});

test('Page PLaywright test',async ({page})=>
{
  page.addInitScript(value => 
    {
        window.sessionStorage.setItem('token', value);
    }, token);

});
