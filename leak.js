const fs = require('fs');
const mongo = require('mongodb');
const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const { argv } = require('process');
const { connect } = require('http2');

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
async function piano(argv) {
    try {
        var param = "piano/"+argv;
		var driver = new webdriver.Builder().forBrowser('chrome').build();
        // Navigate to Url
        fs.writeFileSync("links.txt","");
        await driver.get('https://www.8notes.com/'+param);
        let element = await driver.findElement(By.css('.table-responsive'));
        let pag = await element.findElements(By.tagName("li"));
        let lastone = await pag[pag.length-2].getText();
        console.log(lastone);
        let searchArray = [];
        searchArray.length = lastone;
        fs.appendFile("links.txt","\n"+param.toUpperCase()+"\n",function(err){
            if(err) console.log(err);
        });
        for(let i=1;i<searchArray.length+1;i++){
            await driver.get('https://www.8notes.com/'+param+"/?page="+i);
            console.log("Sayfa ::"+i);
            let body = await driver.findElement(By.tagName('tbody'));
            let local_pieces = await body.findElements(By.tagName("tr"));
            fs.appendFile("links.txt","Sayfa: "+i+"\n",function(err){
                if(err) console.log(err);
            });
            for (let e of local_pieces) {
                let link = await e.getAttribute("onclick");
                let link_split = link.split("'")[1];
                let text = await e.getText();
                console.log(text + ": " + link_split);
                fs.appendFile("links.txt",text+":"+link_split+"\n",function(err){
                    if(err) console.log(err);
                });
            }
            setTimeout(()=>{},1000);
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
async function cc(){
    try{
        let arr = datas().enstruman;
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        fs.writeFileSync("links.txt","");
        Artist = [];
        Titles = [];
        Difficulties = [];
        AllLinks = [];
        MIDILinks = [];
        photoLinks1 = [];
        photoLinks2 = [];
        sheetDesc = [];
        for(let i of arr)
        {
            let param = i;
            await driver.get('https://www.8notes.com/'+i+'/classical/sheet_music/');
            //let element = await driver.findElement(By.css('.table-responsive'));
            let body = await driver.findElement(By.tagName('tbody'));
            let local_pieces = await body.findElements(By.tagName("tr"));
            for(let e of local_pieces){
                let link = await e.getAttribute("onclick");
                let artistName = await e.findElement(By.css('.artname')).getText();
                let pTitle = await e.findElement(By.css('.fsmtitle')).getText();
                let pDif = await (await (await e.findElement(By.className('level_type'))).findElement(By.className('difflevel'))).getAttribute('title');
                let link_split = link.split("'")[1];
                let text = await e.getText();
                console.log(artistName+'  '+pTitle+'    '+pDif+'    '+link_split);
                Artist.push(artistName); Titles.push(pTitle); Difficulties.push(pDif); AllLinks.push(link_split);
            }
            for(let x of AllLinks){
                await driver.get('https://www.8notes.com'+x)
                let midi1 = await driver.findElement(By.id('midi_container'));
                let midi2 = await midi1.findElements(By.tagName('a'));
                let midi3 = await midi2[1].getAttribute('href')
                let img_link = await driver.findElement(By.id('score'));
                let img_linkx = await driver.findElement(By.id('score2'));
                let img_link2 = await img_link.getAttribute('src');
                let img_link2x = await img_linkx.getAttribute('src');
                let desc1 = await driver.findElement(By.id('infobox'))
                let desc2 = await desc1.findElement(By.className('comp_table'))
                let desc3 = await desc2.getText();
                MIDILinks.push(midi3);
                photoLinks1.push(img_link2);
                photoLinks2.push(img_link2x);
                sheetDesc.push(desc3);
            }
            fs.writeFileSync('all.json','',(err)=>{
                if(err) console.log(err);
            }); //Temizlik
            for(let i=0;i<Artist.length;i++){
                let Features = {
                    Artist:Artist[i],
                    Titles:Titles[i],
                    Difficulties:Difficulties[i],
                    AllLinks:AllLinks[i],
                    MIDILinks:MIDILinks[i],
                    photoLinks1:photoLinks1[i],
                    photoLinks2:photoLinks2[i],
                    sheetDesc:sheetDesc[i]
                }
                let Data = JSON.stringify(Features);
                fs.appendFileSync('all.json',Data,function(err){
                    if(err) console.log(err);
                });
            }
            const MongoClient = require('mongodb').MongoClient;
            const URL = 'mongodb+srv://user:159357357@nodejsmongodb.rsdgr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

            MongoClient.connect(URL, (err, client) => {
                if (err) throw err;
                const db = client.db('NodejsMongoDB');
                console.log('MongoDB veritabanı bağlantısı başarıyla gerçekleştirildi.');
                db.createCollection('pieces', (err, result) =>{
                    if (err) throw err;
                    console.log('Koleksiyon oluşturuldu.');
                });
                let data = fs.readFileSync('all.json');
                let jData = JSON.parse(data);
                db.collection('pieces').insertOne(jData, (err, result) =>{
                    if (err) throw err;
                    console.log('Bir başarılı...');
                    client.close();
                });
            });
            MongoClient.connect(URL, (err, client) => {
                if (err) throw err;
                const db = client.db('NodejsMongoDB');
                db.collection('pieces').find({}).toArray((err, result) =>{
                    if (err) throw err;
                    console.log(result[0]);
                });
            });
        }
    }catch(error){
        console.log(error);
    }finally{
        driver.quit();
        client.close();
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
    all:all,
    cc:cc
}
