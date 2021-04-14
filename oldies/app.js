const { demandOption } = require('yargs')
const yargs = require('yargs')
const yonlendir = require('./yonlendir.js')

yargs.command({
    command:'stil',
    describe:'Stile gider',
    builder:{
        child:{
            describe:'Specify style',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        yonlendir.style(argv.child)
    }
    
})
yargs.command({
    command:'enstruman',
    describe:'Enstrümanlar içerir.',
    builder:{
        child:{
            describe:'Enstrümanı belirt.',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        yonlendir.enstruman(argv.child)
    }
})
yargs.command({
    command:'bestekar',
    describe:'Bestekarlar içerir.',
    builder:{
        child:{
            describe:'Bestekarı belirt.',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        yonlendir.bestekar(argv.child)
    }
})
//console.log(process.argv[3])
//console.log(string(yargs.argv[3]))
yargs.parse()
//node app.js yazınca piano çıkıyo process.argv[3] zorunlu kıl ya da node app.js yazınca helpe gönder
