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
async function piano() {
    try {
        var param = argv1;
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
async function guitar() {
    try {
        var param = "guitar";
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
async function violin() {
    try {
        var param = "violin";
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
async function flute() {
    try {
        var param = "flute";
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
async function saxophone() {
    try {
        var param = "saxophone";
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
async function voice() {
    try {
        var param = "voice";
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
async function clarinet() {
    try {
        var param = "clarinet";
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
async function trumpet() {
    try {
        var param = "trumpet";
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
async function sos(argv1=''){
    var piano_ = argv1;
    if(piano_ === '')
    {
        var piano_ = 'piano/';
        try{
            
            var driver = new webdriver.Builder().forBrowser('chrome').build();
            await driver.get('https://www.8notes.com/'+piano_);
            let body = await driver.findElement(By.css('.full_width_display'));
            let xs = await body.findElements(By.tagName("a"));
            // let href = await xs.getAttribute("href");
            // console.log(href);
            var hrefs = new Array(xs.length);
            var counter = 0;
            for(let e of xs)
            {
                let href = await e.getAttribute("href");
                hrefs[counter] = href;
                counter++;
            }
            console.log(hrefs);
        }
        catch(error){
            console.log(error);
        }
        finally{
            driver.quit();
        }
    }
} 
const datas =()=>{
        const dataBuffer = fs.readFileSync('check.json')
        //const dataJson = dataBuffer.toString
        return JSON.parse(dataBuffer)
    }
async function all(){
    try{
        let arr = datas().enstruman;
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        fs.writeFileSync("links.txt","");
        for(let i of arr)
        {
            let param = i;
            await driver.get('https://www.8notes.com/'+param+"/classical/sheet_music/");
            let element = await driver.findElement(By.css('.table-responsive'));
            let body = await driver.findElement(By.tagName('tbody'));
            let local_pieces = await body.findElements(By.tagName("tr"));
            fs.appendFile("links.txt","\n"+param.toUpperCase()+"\n",function(err){
                if(err) console.log(err);
            });
            for(let e of local_pieces){
                let link = await e.getAttribute("onclick");
                let link_split = link.split("'")[1];
                let text = await e.getText();
                fs.appendFile("links.txt",text+":"+link_split+"\n",function(err){
                    if(err) console.log(err);
                });
            }
        }
    }catch(error){
        console.log(error);
    }finally{
        driver.quit();
    }
} 
module.exports = {
    piano:piano,
    guitar:guitar,
    violin:violin,
    flute:flute,
    saxophone:saxophone,
    voice:voice,
    clarinet:clarinet,
    trumpet:trumpet,
    IsInData:IsInData,
    sos:sos,
    all:all
}