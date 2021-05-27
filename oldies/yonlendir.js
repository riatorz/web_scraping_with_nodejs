const open = require('open')
const fs = require('fs')
const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const { argv } = require('process');
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
var IsInData = (data)=>{
    //-----------------------------
    const dataBuffer = fs.readFileSync('check.json')
    //const dataJson = dataBuffer.toString
    const datasx = JSON.parse(dataBuffer)
    for(i =0;i<datasx.style.length;i++)
    {
        if(data===datasx.style[i])
        {
            return true;
        }
    }
    

}
// const datas =()=>{
//     const dataBuffer = fs.readFileSync('check.json')
//     //const dataJson = dataBuffer.toString
//     return JSON.parse(dataBuffer)
// }
// async function piano(argv1=''){
//     var piano_ = argv1;
//     if(piano_ === '')
//     {
//         var piano_ = 'piano/';
//         try{
            
//             var driver = new webdriver.Builder().forBrowser('chrome').build();
//             await driver.get('https://www.8notes.com/'+piano_);
//             let body = await driver.findElement(By.css('.full_width_display'));
//             let xs = await body.findElements(By.tagName("a"));
//             // let href = await xs.getAttribute("href");
//             // console.log(href);
//             var hrefs = new Array(xs.length);
//             var counter = 0;
//             for(let e of xs)
//             {
//                 let href = await e.getAttribute("href");
//                 hrefs[counter] = href;
//                 counter++;
//             }
//             console.log(hrefs);
//         }
//         catch(error){
//             console.log(error);
//         }
//         finally{
//             driver.quit();
//         }
//     }
//     else{
//         var piano_ = 'piano/';
//         console.log(piano_);
//         try{
            
//             var driver = new webdriver.Builder().forBrowser('chrome').build();
//             await driver.get('https://www.8notes.com/'+piano_);
//             let body = await driver.findElement(By.css('.full_width_display'));
//             let xs = await body.findElements(By.tagName("a"));
//             for(let e of xs)
//             {
                
//                 let href = await e.getAttribute("href");
//                 let x = await href.split("piano/")[1];
//                 await driver.findElement(By.css('.cc-compliance')).click();
//                 //await driver.switchTo().frame(await driver.findElement(By.id('ad_position_box')))
                
//                 try{
//                     if(argv1 == x.split("/")[0])
//                     {
//                         console.log("Ben şu sayfaya gideceğim:"+href);
//                         console.log("click edcem");
//                         //await driver.findElement(By.id('dismiss-button')).click();
//                         await href.click();
                        
//                         console.log("click eddim geldi mi")
//                         //clicklemiyo yeni hata
//                         //driver ile yapabilirim ama yine hataaa
                        
//                     }
//                 }catch(e){}
//             }
//         }
//         catch(error){
//             console.log(error);
//         }
//         finally{
//             driver.quit();
//         }
//     }
// };
async function piano() {
    try {
        var param = "piano";
		var driver = new webdriver.Builder().forBrowser('chrome').build();
        // Navigate to Url
        await driver.get('https://www.8notes.com/'+param+"/classical/sheet_music/");
		let element = await driver.findElement(By.css('.table-responsive'));
		let body = await driver.findElement(By.tagName('tbody'));
		let local_pieces = await body.findElements(By.tagName("tr"));
		for (let e of local_pieces) {
			let link = await e.getAttribute("onclick");
			let link_split = link.split("'")[1];
			let text = await e.getText();
            console.log(text + ": " + link_split);
        }

    } catch (error){
		console.log(error);
	}
    finally{
        driver.quit();
    }
}
  
async function another(){
    var ssssh = 'piano/classical/sheet_music'
    try{
        var strrr= [];
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        await driver.get('https://www.8notes.com/'+ssssh);
		let element = await driver.findElement(By.css('.table-responsive'));
        let divpos = await element.findElement(By.css('.pagination'));
        let xd = await divpos.findElements(By.tagName('a'));
        //!(xd[9].getAttribute("class") == "prevnext disablelink")
        while(await !(xd[9].getAttribute("class") == "prevnext disablelink")){
            let body = await driver.findElement(By.tagName('tbody'));
            let local_pieces = await body.findElements(By.tagName("tr"));
            for (let e of local_pieces) {
            	let link = await e.getAttribute("onclick");
            	let link_split = link.split("'")[1];
            	let text = await e.getText();
                console.log(text + ": " + link_split);
            }
            await driver.findElement(By.css('.cc-compliance')).click();//cookies kapadık
            await  xd[9].click();
            
            
        }
        //await xd[9].getAttribute("class")
		//çıkan reklamlar
    }
    catch(error){
        console.log(error);
    }
    finally{
        //driver.quit();
    }
};
//all için yapılacak olan kısım next e basıyor fakat reklam çıkıyor önüne
function style(child){
    if(child==="classical"||child==="jazz"||child==="traditional"||child==="christmas"||child==="world")  open('https://www.8notes.com/all/'+child)
    else if(child==="pop and rock") open('https://www.8notes.com/all/pop_and_rock')
    else{
        open('https://www.8notes.com/styles')
        console.log("Yanlış girdi")
    } 
}
function enstruman(child){
    const datasx = datas();
    for(i =0;i<datasx.enstruman.length;i++)
    {
        console.log(datasx.enstruman[i])
    }
    // if(child==='piano') open('https://www.8notes.com/piano/')
    // else if(child==='guitar') open('https://www.8notes.com/guitar/')
    // else if(child==='violin') open('https://www.8notes.com/violin/')
    // else if(child==='flute') open('https://www.8notes.com/flute/')
    // else if(child==='saxophone') open('https://www.8notes.com/saxophone/')
    // else if(child==='voice') open('https://www.8notes.com/voice/')
    // else if(child==='clarinet') open('https://www.8notes.com/clarinet/')
    // else if(child==='trumpet') open('https://www.8notes.com/trumpet/')
    // else if(child==='instruments') open('https://www.8notes.com/instruments/')
    // else console.log('Cant find your child.')
}
function bestekar(child){
    if(child==="bach"||"beethoven"||"mozart"||"tchaikovsky"||"joplin"||"chopin") open('https://www.8notes.com/'+child)
    else open('https://www.8notes.com/artists/')
}
module.exports = {
    style:style,
    enstruman:enstruman,
    bestekar:bestekar,
    piano:piano,
    IsInData:IsInData,
    another:another
}