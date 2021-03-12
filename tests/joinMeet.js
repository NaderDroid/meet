const url = "https://site.meet.sa/#Q73FF/R9DCF8HQFJNTHF/ZMqXejYAaWM_4u-dSK118A";
const roomName = url.substr(25 , 5);
const userName = "NaderFromAutomation"

module.exports = {
    "Confirming form page title in the join room" : (client) => {
        client.url(url)
        .waitForElementVisible("body")
       // .verify.title("Meet - " + roomName)
    },
    "Join meeting room" : (browser) => {
        browser.useXpath()
        //.click('//*[@id="root"]/div/div/div/div/div[1]/div/div/div[3]/div[1]/div/div/div')
        browser.setValue("//input[@data-testid='inputName']" , userName)
        browser.click("//div[@data-testid='joinRoom']")
        //browser.updateNetwork('GPRS')
        .pause(30000)
    }
};