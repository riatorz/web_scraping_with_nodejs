const yargs = require('yargs')
const yonlendir = require('./leak.js')
yargs.command({
    command:'deneme',
    handler(argv){
        yonlendir.sos('');
    }
})
yargs.command({
    command:'piano',
    describe:'Piano hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List piano sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.piano();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.piano(argv.style)
    }
})
yargs.command({
    command:'guitar',
    describe:'Gitar hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List guitar sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.guitar();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.guitar(argv.style)
    }
})
yargs.command({
    command:'violin',
    describe:'Keman hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List violin sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.violin();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.violin(argv.style)
    }
})
yargs.command({
    command:'flute',
    describe:'flüt hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List flute sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.flute();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.flute(argv.style)
    }
})
yargs.command({
    command:'saxophone',
    describe:'Saksafon hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List saxophone sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.saxophone();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.saxophone(argv.style)
    }
})
yargs.command({
    command:'voice',
    describe:'Ses hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List voice sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.voice();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.voice(argv.style)
    }
})
yargs.command({
    command:'clarinet',
    describe:'Klarnet hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List clarinet sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.clarinet();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.clarinet(argv.style)
    }
})
yargs.command({
    command:'trumpet',
    describe:'Trampet hakkında tüm bilgileri getirir.',
    builder:{
        style:{
            describe:'List trumpet sheet music styles',
            default:''
        }
    },
    handler(argv){
        if(argv.style=="")
            yonlendir.trumpet();
        else 
            if(yonlendir.IsInData(argv.style))
                yonlendir.trumpet(argv.style)
    }
})
yargs.command({
    command:'deneme',
    handler(){
        yonlendir.another();
    }
})
yargs.command({
    command:'enstruman',
    describe:'Tüm enstrüman stillerinin gösterilmesi.',
    builder: yargs => {
        yargs.option('all', {
            type: 'string',
            describe: 'Tüm enstrüman stillerinin gösterilmesi.',
            demandOption:true
        });
    },
    handler(){
        yonlendir.all();
    }
})
//SORULAR:

//sağ alttaki butona tıklandığında cookieleri aktif ediyoruz.
//bu cookieleri silmenin yolu var mı?

//aşağıda çıkan usb handle errorlarını nasıl gideririz
//
yargs.parse();