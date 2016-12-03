var config = {
        container: "#basic-example",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    origin = {
        text: {
            name: "ఎవరు ?",
            title: "మీకు తెలుసా? ",
            contact: "వాట్సాప్  :9490570720",
        },
        image: "placeholders/family/m.png"
    },

    narayudu = {
        parent: origin,
        text:{
            name: "నారాయుడు",
            title: "",
        },
        stackChildren: true,
        image: "placeholders/family/m.png"
    },
    mahalaxmiend = {
        parent: origin,
        text:{
            name: "మహాలక్ష్మీ బొడ్డేటి",
            title: " ",
            contact: "",
        },
        image: "placeholders/family/f.png"
    },
    bapanayya = {
        parent: origin,
        stackChildren: true,
        text:{
            name: "బాపనయ్య ",
            title: "",
        },
        image: "placeholders/family/m.png"
    },
   
    narayuduadammaend = {
        parent: narayudu,
        text:{
            name: "ఆదమ్మ  మళ్ల",
            title: "Anakapalli"
        },
        image: "placeholders/family/f.png"
    },
    narayuduramulu = {
        parent: narayudu,
        text:{
            name: "రాములు",
            title: "Achamma"
        },
        image: "placeholders/family/m.png"
    },
    narayudujaggayya = {
        parent: narayudu,
        text:{
            name: "జగ్గయ్య",
            title: "Maha Lakshmi",
        },
        image: "placeholders/family/m.png"
    },
    narayuduappanna = {
        parent: narayudu,
        text:{
            name: "అప్పన్న",
            title: "Nukalamma"
        },
        image: "placeholders/family/polamarasetti/appanna.png"
    },
    
   narayuduramuluoneend = {
        parent: narayuduramulu,
        text:{
            name: "లక్ష్మీకాంత మారిశెట్టి ",
            title: "శ్రీరంగపట్నం  "
        },
        image: "placeholders/family/f.png"
    }
   narayuduramulutwoend = {
        parent: narayuduramulu,
        text:{
            name: "చెల్లమ్మ  దొడ్డి ",
            title: "దగ్గులూరు"
        },
        image: "placeholders/family/f.png"
    }
   narayuduramuluthreeend = {
        parent: narayuduramulu,
        text:{
            name: "మంగమ్మ     బుద్దా",
            title: ""
        },
        image: "placeholders/family/f.png"
    }
    narayuduramulufourend = {
        parent: narayuduramulu,
        text:{
            name: "అప్పాయమ్మ కర్రి",
            title: "అనకాపల్లి"
        },
        image: "placeholders/family/f.png"
    }
    narayuduramulufiveend = {
        parent: narayuduramulu,
        text:{
            name: "మహలచ్చమ్మ చదరం",
            title: "రేలంగి  "
        },
        image: "placeholders/family/f.png"
    }
    narayuduramuluvenkatramayya = {
        parent: narayuduramulu,
        text:{
            name: "వెంకట్రామయ్య",
            title: "భార్య నరసమ్మ "
        },
        image: "placeholders/family/polamarasetti/rajeshtata.png"
    },
    narayuduramuluadiyya = {
        parent: narayuduramulu,
        stackChildren: true,
        text:{
            name: "ఆదియ్య",
            title: "భార్య  మంగమ్మ "
        },
        image: "placeholders/family/m.png"
    }
    narayuduramuluadiyyaone = {
        parent: narayuduramuluadiyya,
        text:{
            name: "సత్యవతి సూరిశెట్టి ",
            title: "లక్ష్మీనారాయణపురం"
        },
        image: "placeholders/family/f.png"
    }
   narayuduramuluadiyyatwo = {
        parent: narayuduramuluadiyya,
        text:{
            name: "శకుంతల రాజగిరి  (లేటు )",
            title: "వైజాగ్ "
        },
        image: "placeholders/family/f.png"
    }
    narayuduramuluadiyyathree = {
        parent: narayuduramuluadiyya,
        text:{
            name: "అచ్చికుమారి  రాజగిరి",
            title: "వైజాగ్"
        },
        image: "placeholders/family/f.png"
    }
    narayuduramuluadiyyafour = {
        parent: narayuduramuluadiyya,
        text:{
            name: "లక్ష్మీ తులసి  వేగి ",
            title: "విజయవాడ"
        },
        image: "placeholders/family/f.png"
    }
   narayuduramuluadiyyafive = {
        parent: narayuduramuluadiyya,
        text:{
            name: "సరస్వతి పెంటకోటి ",
            title: "మల్లిపూడి"
        },
        image: "placeholders/family/f.png"
    }
   narayuduramulusambayya = {
        parent: narayuduramulu,
        text:{
            name: "సాంబయ్య",
            title: "భార్య  రమణమ్మ "
        },
        image: "placeholders/family/m.png"
    },
    narayuduramulusambayyaoneend = {
        parent: narayuduramulusambayya,
        text:{
            name: "అచ్చికుమారి చదరం",
            title: "రేలంగి"
        },
        image: "placeholders/family/f.png"
    },
    narayuduramulusambayyanageswarao = {
        parent: narayuduramulusambayya,
        text:{
            name: "నాగేశ్వర రావు ",
            title: "Zonal Manager Kakinada at APIIC Ltd",
            contact:"Phone: 096666 29894"
        },
        image: "placeholders/family/polamarasetti/nageswar.png"
    },
    narayuduramulusambayyanageswaraoone = {
        parent: narayuduramulusambayyanageswarao,
        text:{
            name: "? ",
        },
        image: "placeholders/family/m.png"
    },
    narayuduramulusambayyanageswaraotwo = {
        parent: narayuduramulusambayyanageswarao,
        text:{
            name: "?",
        },
        image: "placeholders/family/m.png"
    },
    narayuduramulusambayyatwoend = {
        parent: narayuduramulusambayya,
        text:{
            name: "ధనమ్మ ఆళ్ల",
            title: "పాలకోడేరు "
        },
        image: "placeholders/family/f.png"
    },
    narayuduramulusambayyarambabu = {
        parent: narayuduramulusambayya,
        text:{
            name: "రాంబాబు (లేటు )",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
  
   narayuduramuluvenkatramayyasuri = {
        parent: narayuduramuluvenkatramayya,
        text:{
            name: "సూర్యనారాయణ,పొలమరశెట్టి ",
            title: "భార్య: Mani",
            desc: "లక్ష్మీనారాయణపురం",
            contact:"Phone: 9490279433"
        },
        image: "placeholders/family/polamarasetti/suri_venkatra.png",
        wifeimage: "placeholders/family/polamarasetti/mani.png"
    },
   narayuduramuluvenkatramayyasurimohan = {
        parent: narayuduramuluvenkatramayyasuri,
        text:{
            name: "మోహన్  బాబు ",
            title: "Teacher@ Sri Chaitanya",
            contact: "Phone: 8008605846"
        },
        image: "placeholders/family/polamarasetti/mohanbabu.png",
        wifeimage: "placeholders/family/polamarasetti/mohanwife.png"
    },
   narayuduramuluvenkatramayyasuriend = {
        parent: narayuduramuluvenkatramayyasuri,
        text:{
            name: "మీనా ",
            desc:"W/O.Balaji,కొణతాల",
            title: "ఏలూరు "
        },
        image: "placeholders/family/polamarasetti/meena.png",
        wifeimage: "placeholders/family/polamarasetti/meenabalaji.png"
    },
  narayuduramuluvenkatramayyaoneend = {
        parent: narayuduramuluvenkatramayya,

        text:{
            name: "సత్యవతి  పెనగట ",
            title: "దగ్గులూరు"
        },
        image: "placeholders/family/polamarasetti/venkatraendone.png"
    },
   narayuduramuluvenkatramayyatwoend = {
        parent: narayuduramuluvenkatramayya,
        text:{
            name: "కృష్ణ వేణి  ఆళ్ల  ",
            title: "పాలకోడేరు "
        },
        image: "placeholders/family/polamarasetti/krishnaveni.png"
    },
    narayuduramuluvenkatramayyadhanarao = {
        parent: narayuduramuluvenkatramayya,
        text:{
            name: "ధనరావు,పొలమరశెట్టి",
            title: "భార్య:Lakshmamma",
            desc: "లక్ష్మీనారాయణపురం",
            contact:"Phone: 9490279433"
        },
        image: "placeholders/family/polamarasetti/dhanarao.png",
        wifeimage: "placeholders/family/polamarasetti/dhanaraolakshmi.png"
    },
    narayuduramuluvenkatramayyadhanaraosatya = {
        parent: narayuduramuluvenkatramayyadhanarao,
        text:{
            name: "వెంకటసత్యనారాయణ,పొలమరశెట్టి   ",
            title: "Working @ CMR Shopping Mall - Gajuwaka",
            contact: "Phone: 9642288693"
        },
        image: "placeholders/family/polamarasetti/satyanarayana.png",
        wifeimage: "placeholders/family/polamarasetti/jagadeswari.png"
    },
   narayuduramuluvenkatramayyadhanaraorajesh = {
        parent: narayuduramuluvenkatramayyadhanarao,
        text:{
            name: "రాజేష్,బాబు,పొలమరశెట్టి  ", 
            desc:"భార్య:Geetha Lakshmi",
            title: "Software Engineer - Vizag",
            contact: "Phone: 9490570720",

        },   
        image: "placeholders/family/polamarasetti/rajesh.png",
        wifeimage: "placeholders/family/polamarasetti/geetha.png"
    },
   narayuduramuluvenkatramayyadhanaraorajeshritvik = {
        parent: narayuduramuluvenkatramayyadhanaraorajesh,
        text:{
            name: "రిత్విక్ ", 
            title: "లక్ష్మీనారాయణపురం",
            contact: {val: "ritvik.polamarasetti@gmail.com", href: "mailto:ritvik.polamarasetti@gmail.com"}

        },   
        image: "placeholders/family/polamarasetti/ritvik.png"
    },
    narayuduramuluvenkatramayyathreeend = {
        parent: narayuduramuluvenkatramayya,
        text:{
            name: "సీతమ్మ   కొణతాల ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/polamarasetti/sitamma.png"
    },
/// Narayudu gari Appanna Family
narayuduappannaapparao = {
        parent: narayuduappanna,
        text:{
            name: "అప్పారావు  (లేటు)",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaramurthy = {
        parent: narayuduappanna,
        text:{
            name: "రాంమూర్తి  (లేటు) ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },narayuduappannasambhaya = {
        parent: narayuduappanna,
        text:{
            name: "సాంబయ్య (లేటు)",
            contact: "భార్య పద్మావతి ",
            title: "లక్ష్మీనారాయణపురం "
            
        },
        image: "placeholders/family/polamarasetti/appannasambayya.png"
    },
narayuduappannaparvathi = {
        parent: narayuduappanna,
        text:{
            name: "పార్వతి బొడ్డేటి ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannanarayana = {
        parent: narayuduappanna,
        text:{
            name: "నారాయణ(లేటు)  ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaapparaosatya = {
        parent: narayuduappannaapparao,
        text:{
            name: "సత్యనారాయణ   ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaapparaogovind = {
        parent: narayuduappannaapparao,
        text:{
            name: "గోవిందు   ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaapparaoramanamma = {
        parent: narayuduappannaapparao,
        text:{
            name: "రమణమ్మ  ",
            title: "దగ్గులూరు "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaapparaodhanamma = {
        parent: narayuduappannaapparao,
        text:{
            name: "ధనమ్మ  ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaapparaokumari = {
        parent: narayuduappannaapparao,
        text:{
            name: "కుమారి  ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/f.png"
    },

narayuduappannaapparaosatyasrinu = {
        parent: narayuduappannaapparaosatya,
        text:{
            name: "శ్రీనివాసరావు    ",
            contact: "పంచాయితీ ప్రెసిడెంట్ ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaapparaosatyasrinusunil = {
        parent: narayuduappannaapparaosatyasrinu,
        text:{
            name: "సునీల్    ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaapparaosatyasrinuend = {
        parent: narayuduappannaapparaosatyasrinu,
        text:{
            name: "?",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/f.png"
    },

narayuduappannaapparaosatyaone = {
        parent: narayuduappannaapparaosatya,
        text:{
            name: "పద్మ   ",
            title: "ఏలూరు "
        },
        image: "placeholders/family/f.png"
    },

narayuduappannaapparaosatyatwo = {
        parent: narayuduappannaapparaosatya,
        text:{
            name: "జగదీశ్వరి   ",
            title: "కర్ణాటక "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaapparaosatyathree = {
        parent: narayuduappannaapparaosatya,
        text:{
            name: "వరలక్ష్మి ",
            title: "విజయవాడ"
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaapparaogovindvenkatesh = {
        parent: narayuduappannaapparaogovind,
        text:{
            name: "వెంకటేష్   ",
            title: "Software Engineer",
            contact: "Chennai"
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaapparaogovindsuri = {
        parent: narayuduappannaapparaogovind,
        text:{
            name: "సూర్యనారాయణ ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
    narayuduappannaapparaogovindsurikidone = {
        parent: narayuduappannaapparaogovindsuri,
        text:{
            name: "Tarun Sai ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/cm.png"
    },
    narayuduappannaapparaogovindsuriend = {
        parent: narayuduappannaapparaogovindsuri,
        text:{
            name: "Niharika ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/cf.png"
    },
narayuduappannaapparaogovindvenkateshone = {
        parent: narayuduappannaapparaogovindvenkatesh,
        text:{
            name: "Asrita",
            title: "లక్ష్మీనారాయణపురం"
        },
        image: "placeholders/family/cf.png"
    },
narayuduappannasambhayasatya = {
        parent: narayuduappannasambhaya,
        text:{
            name: "సత్యనారాయణ ",
            title: "వైజాగ్ "            
        },
        image: "placeholders/family/polamarasetti/satyanarayananapadmavathi.png",

    },
narayuduappannasambhayaoneend = {
        parent: narayuduappannasambhaya,
        text:{
            name: "శాంతమ్మ ",
            title: "వైజాగ్ "            
        },
        image: "placeholders/family/f.png"
    },narayuduappannasambhayatwoend = {
        parent: narayuduappannasambhaya,
        text:{
            name: "గోవిందమ్మ ",
            title: "దగ్గులూరు "            
        },
        image: "placeholders/family/f.png"
    },narayuduappannasambhayathreeend = {
        parent: narayuduappannasambhaya,
        text:{
            name: "ధనమ్మ ",
            title: "దగ్గులూరు "            
        },
        image: "placeholders/family/f.png"
    },
narayuduappannasambhayasatyaend = {
        parent: narayuduappannasambhayasatya,
        text:{
            name: "వరలక్ష్మి బొడ్డేటి  ",
            title: "లక్ష్మీనారాయణపురం "            
        },
        image: "placeholders/family/f.png"
    },
narayuduappannasambhayasatyasiva = {
        parent: narayuduappannasambhayasatya,
        text:{
            name: "శివ ",
            contact: "Designation ? ",            
            title: "కొచ్చిన్ "            
        },
        image: "placeholders/family/polamarasetti/siva.png"
    },
narayuduappannasambhayasatyasivaone = {
        parent: narayuduappannasambhayasatyasiva,
        text:{
            name: "new born kid ",
            title: "కొచ్చిన్ "            
        },
        image: "placeholders/family/polamarasetti/sivasonkochin.png"
    },
narayuduappannanarayanavenkanna = {
        parent: narayuduappannanarayana,
        text:{
            name: "వెంకన్న",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannanarayanavenkatesh = {
        parent: narayuduappannanarayana,
        text:{
            name: "వెంకటేశ్వర రావు (నాని)",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannanarayanavenkateshone = {
        parent: narayuduappannanarayanavenkatesh,
        text:{
            name: "?",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannanarayanavenkateshtwo = {
        parent: narayuduappannanarayanavenkatesh,
        text:{
            name: "?",
            title: "కొణితివాడ  "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannanarayanagovind = {
        parent: narayuduappannanarayana,
        text:{
            name: "గోవిందు",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannanarayanagovindone = {
        parent: narayuduappannanarayanagovind,
        text:{
            name: "?",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/cm.png"
    },
narayuduappannanarayanagovindtwo = {
        parent: narayuduappannanarayanagovind,
        text:{
            name: "?",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/cm.png"
    },
narayuduappannanarayanaend = {
        parent: narayuduappannanarayana,
        text:{
            name: "రవణమ్మ",
            title: "దగ్గులూరు "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaramurthyvenkat = {
        parent: narayuduappannaramurthy,
        text:{
            name: "వెంకట్రావు",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaramurthyendone = {
        parent: narayuduappannaramurthy,
        text:{
            name: "Tulasamma Buddha",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaramurthyendtwo = {
        parent: narayuduappannaramurthy,
        text:{
            name: "Satyavathi petakamsetti",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaramurthyendthree = {
        parent: narayuduappannaramurthy,
        text:{
            name: "Parvathi Adari",
            title: "కొణితివాడ  "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaramurthydhanarao = {
        parent: narayuduappannaramurthy,
        text:{
            name: "ధనరావు ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaramurthyvenkatappalaraju = {
        parent: narayuduappannaramurthyvenkat,
        text:{
            name: "అప్పలరాజు",
            title: "లక్ష్మీనారాయణపురం ",
           contact:"Designation ?"
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaramurthyvenkataend = {
        parent: narayuduappannaramurthyvenkat,
        text:{
            name: "జగదీశ్వరి  బొడ్డేటి ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/f.png"
    },
narayuduappannaramurthydhanaraorambabu = {
        parent: narayuduappannaramurthydhanarao,
        text:{
            name: "రాంబాబు ",
            title: "లక్ష్మీనారాయణపురం "
        },
        image: "placeholders/family/m.png"
    },
narayuduappannaramurthyvenkatappalarajuone = {
        parent: narayuduappannaramurthyvenkatappalaraju,
        text:{
            name: "Priyanka",
            title: "లక్ష్మీనారాయణపురం "

        },
        image: "placeholders/family/cf.png"
    },
narayuduappannaramurthyvenkatappalarajutwo = {
        parent: narayuduappannaramurthyvenkatappalaraju,
        text:{
            name: "Varun Sai",
            title: "లక్ష్మీనారాయణపురం "

        },
        image: "placeholders/family/cm.png"
    },

//Narayudu Jaggayya Family
narayudujaggayyasambhayya = {
        parent: narayudujaggayya,
        text:{
            name: "సాంబయ్య (లేటు)",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyamaha = {
        parent: narayudujaggayya,
        text:{
            name: "మహాలక్ష్మినాయుడు (లేటు)",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },

narayudujaggayyaravanamma = {
        parent: narayudujaggayya,
        text:{
            name: "రవణమ్మ  Boddeti",
            title: "Potuluru",
        },
        image: "placeholders/family/f.png"
    },
narayudujaggayyamangamma = {
        parent: narayudujaggayya,
        text:{
            name: "మంగమ్మ malla",
            title: "Konithiwada",
        },
        image: "placeholders/family/f.png"
    },
narayudujaggayyasambhayyagopal = {
        parent: narayudujaggayyasambhayya,
        text:{
            name: "గోపాలకృష్ణ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    narayudujaggayyasambhayyanarayana= {
        parent: narayudujaggayyasambhayya,
        text:{
            name: "నారాయణ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },narayudujaggayyasambhayyaappalaraju = {
        parent: narayudujaggayyasambhayya,
        text:{
            name: "అప్పలరాజు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyasambhayyaappalarajuoneend = {
        parent: narayudujaggayyasambhayyaappalaraju,
        text:{
            name: "?",
            title: "దగ్గులూరు",
        },
        image: "placeholders/family/f.png"
    },
narayudujaggayyasambhayyaappalarajutwoend = {
        parent: narayudujaggayyasambhayyaappalaraju,
        text:{
            name: "?",
            title: "?",
        },
        image: "placeholders/family/f.png"
    },
    narayudujaggayyasambhayyaoneend = {
        parent: narayudujaggayyasambhayya,
        text:{
            name: "Dhanamma ulluri",
            title: "Lnpuram",
        },
        image: "placeholders/family/f.png"
    },
 narayudujaggayyasambhayyaend = {
        parent: narayudujaggayyasambhayya,
        text:{
            name: "Maha Lakshmi Boddeti",
            title: "Potunuru",
        },
        image: "placeholders/family/f.png"
    },
 narayudujaggayyasambhayyanarayanaplus= {
        parent: narayudujaggayyasambhayyanarayana,
        text:{
            name: "?",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyasambhayyanarayanaendone= {
        parent: narayudujaggayyasambhayyanarayana,
        text:{
            name: "?",
            title: "?",
        },
        image: "placeholders/family/f.png"
    },

narayudujaggayyasambhayyagopalappalaraju = {
        parent: narayudujaggayyasambhayyagopal,
        text:{
            name: "అప్పలరాజు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyasambhayyagopalsamba = {
        parent: narayudujaggayyasambhayyagopal,
        text:{
            name: "సాంబ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyasambhayyagopalend = {
        parent: narayudujaggayyasambhayyagopal,
        text:{
            name: "సత్యవతి బొడ్డేటి",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },

narayudujaggayyamahasatya = {
        parent: narayudujaggayyamaha,
        text:{
            name: "సత్యనారాయణ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyamahagovindu = {
        parent: narayudujaggayyamaha,
        text:{
            name: "గోవిందు",
            title: "కర్ణాటక",
            contact: "Moved to కర్ణాటక, so not giving more details.",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyamahavenkanna = {
        parent: narayudujaggayyamaha,
        text:{
            name: "వెంకటేశ్వర రావు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
narayudujaggayyamahavenkannaone = {
        parent: narayudujaggayyamahavenkanna,
        text:{
            name: "నాయుడు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyamahaend = {
        parent: narayudujaggayyamaha,
        text:{
            name: "కృష్ణవేణి బొడ్డేటి",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyamahasiva = {
        parent: narayudujaggayyamaha,
        text:{
            name: "శివ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyamahasivaone = {
        parent: narayudujaggayyamahasiva,
        text:{
            name: "?",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
narayudujaggayyamahasivatwo = {
        parent: narayudujaggayyamahasiva,
        text:{
            name: "?",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
narayudujaggayyamahasatyarambabu = {
        parent: narayudujaggayyamahasatya,
        text:{
            name: "రాంబాబు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
narayudujaggayyamahasatyaend = {
        parent: narayudujaggayyamahasatya,
        text:{
            name: " బొడ్డేటి",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },

//Bapanayya

 bapanayyajaggayya = {
        parent: bapanayya,
        text:{
            name: "జగ్గయ్య ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyajaggayyaadiya = {
        parent: bapanayyajaggayya,
        text:{
            name: "ఆదియ్య ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyajaggayyapaidamma = {
        parent: bapanayyajaggayya,
        text:{
            name: "Paidamma ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyajaggayyapending = {
        parent: bapanayyajaggayya,
        text:{
            name: "Maha Lakshmi ",
            title: "Dhagguluru",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayya = {
        parent: bapanayya,
        text:{
            name: "Lachayya ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyavenkatramayya = {
        parent: bapanayya,
        text:{
            name: "వెంకట్రామయ్య ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyavenkatramayyagovindu = {
        parent: bapanayyavenkatramayya,
        text:{
            name: "గోవిందు ",
            title: "Paluru",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasambayya = {
        parent: bapanayyalachayya,
        text:{
            name: "సాంబయ్య ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaramakrishna = {
        parent: bapanayyalachayya,
        text:{
            name: "Rama Krishna ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaapparao = {
        parent: bapanayyalachayya,
        text:{
            name: "అప్పారావు ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasitamaha = {
        parent: bapanayyalachayya,
        text:{
            name: "సీత మహాలక్ష్మీ ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
bapanayyalachayyasambayyaraju = {
        parent: bapanayyalachayyasambayya,
                    stackChildren: true,
        text:{
            name: "రాజు ",
            contact:"Mike Set Raju",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasambayyarajusamba = {
        parent: bapanayyalachayyasambayyaraju,
        text:{
            name: "సాంబ ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasambayyarajuharish = {
        parent: bapanayyalachayyasambayyaraju,
        text:{
            name: "Harish ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasambayyapandu = {
        parent: bapanayyalachayyasambayya,
                    stackChildren: true,
        text:{
            name: "Pandu ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasambayyapandusecond = {
        parent: bapanayyalachayyasambayyapandu,
        text:{
            name: "? ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasambayyapandusai = {
        parent: bapanayyalachayyasambayyapandu,
        text:{
            name: "Sai ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyasambayyaend = {
        parent: bapanayyalachayyasambayya,
        text:{
            name: "Tulasamma",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
bapanayyalachayyaapparaoprasad = {
        parent: bapanayyalachayyaapparao,
        text:{
            name: "Prasad ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaapparaosatya= {
        parent: bapanayyalachayyaapparao,
        text:{
            name: "సత్యనారాయణ ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaapparaoend= {
        parent: bapanayyalachayyaapparao,
        text:{
            name: "? ",
            title: "SriRangapatnam",
        },
        image: "placeholders/family/f.png"
    },
bapanayyalachayyaapparaoprasadone = {
        parent: bapanayyalachayyaapparaoprasad,
        text:{
            name: "? ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaapparaoprasadtwo = {
        parent: bapanayyalachayyaapparaoprasad,
        text:{
            name: "? ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaramakrishnalaxman = {
        parent: bapanayyalachayyaramakrishna,
        stackChildren: true,
        text:{
            name: "Lakshmana Murthy ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaramakrishnalaxmanone = {
        parent: bapanayyalachayyaramakrishnalaxman,
        text:{
            name: "? ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
bapanayyalachayyaramakrishnalaxmantwo = {
        parent: bapanayyalachayyaramakrishnalaxman,
        text:{
            name: "? ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
bapanayyalachayyaramakrishnalaxmansiva = {
        parent: bapanayyalachayyaramakrishna,
        stackChildren: true,
        text:{
            name: "Siva ",
            title: "makkinavari gudem",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaramakrishnalaxmantodayya = {
        parent: bapanayyalachayyaramakrishna,
        stackChildren: true,
        text:{
            name: "Todayya ",
            title: "makkinavari gudem",
        },
        image: "placeholders/family/m.png"
    },
bapanayyalachayyaramakrishnasrinu = {
        parent: bapanayyalachayyaramakrishna,
        text:{
            name: "Srinu ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    chart_config = [
        config,
        origin,
        narayudu,
        mahalaxmiend,
        bapanayya,
        narayuduramulu,
        narayuduadammaend,
        narayuduappanna,  
        narayudujaggayya,              
        narayuduramuluoneend,
        narayuduramulutwoend,
        narayuduramuluadiyya,
        narayuduramuluthreeend,
        narayuduramulufourend,
        narayuduramuluvenkatramayya,
        narayuduramulufiveend,
        narayuduramulusambayya,
        narayuduramuluvenkatramayyasuri,
        narayuduramuluvenkatramayyaoneend,
        narayuduramuluvenkatramayyatwoend,
        narayuduramuluvenkatramayyathreeend,
        narayuduramuluvenkatramayyadhanarao,
        narayuduramuluvenkatramayyasuriend,
        narayuduramuluvenkatramayyasurimohan,
        narayuduramuluvenkatramayyadhanaraosatya,
        narayuduramuluvenkatramayyadhanaraorajesh,
        narayuduramuluadiyyaone,
        narayuduramuluadiyyatwo,
        narayuduramuluadiyyathree,
        narayuduramuluadiyyafour,
        narayuduramuluadiyyafive,
        narayuduramuluvenkatramayyadhanaraorajeshritvik,
        narayuduramulusambayyanageswarao,
        narayuduramulusambayyaoneend,
        narayuduramulusambayyatwoend,
        narayuduramulusambayyarambabu,
        narayuduramulusambayyanageswaraoone,
        narayuduramulusambayyanageswaraotwo,
       ///narayudu -> appanna
       narayuduappannaapparao,
       narayuduappannaramurthy,
       narayuduappannaparvathi,
       narayuduappannasambhaya,
       narayuduappannanarayana,
       narayuduappannaapparaosatya,
	narayuduappannaapparaoramanamma,
	narayuduappannaapparaodhanamma,
	narayuduappannaapparaogovind,
	narayuduappannaapparaokumari,
	narayuduappannaapparaosatyatwo,
	narayuduappannaapparaosatyaone,
	narayuduappannaapparaosatyasrinu,
	narayuduappannaapparaosatyathree,
	narayuduappannaapparaogovindvenkatesh,
	narayuduappannaapparaogovindsuri,
	narayuduappannaapparaogovindsurikidone,
	narayuduappannaapparaogovindsuriend,
        narayuduappannaapparaogovindvenkateshone,
	narayuduappannaapparaosatyasrinusunil,
	narayuduappannaapparaosatyasrinuend,
	narayuduappannasambhayasatya,
	narayuduappannasambhayaoneend,
	narayuduappannasambhayatwoend,
	narayuduappannasambhayathreeend,
	narayuduappannasambhayasatyaend,
	narayuduappannasambhayasatyasiva,
	narayuduappannasambhayasatyasivaone,
	narayuduappannanarayanavenkanna,
	narayuduappannanarayanavenkatesh,
	narayuduappannanarayanaend,
	narayuduappannanarayanagovind,
	narayuduappannanarayanavenkateshone,
	narayuduappannanarayanavenkateshtwo,
	narayuduappannanarayanagovindone,
	narayuduappannanarayanagovindtwo,
        narayuduappannaramurthyvenkat,
	narayuduappannaramurthyendone,
	narayuduappannaramurthyendtwo,
        narayuduappannaramurthyendthree,
	narayuduappannaramurthydhanarao,
	narayuduappannaramurthydhanaraorambabu,
	narayuduappannaramurthyvenkatappalaraju,
	narayuduappannaramurthyvenkataend,
	narayuduappannaramurthyvenkatappalarajuone,
	narayuduappannaramurthyvenkatappalarajutwo,
	narayudujaggayyasambhayya,
	narayudujaggayyamaha,
	narayudujaggayyaravanamma,
	narayudujaggayyamangamma,
	narayudujaggayyasambhayyaend,
	narayudujaggayyasambhayyagopal,
	narayudujaggayyasambhayyanarayana,
	narayudujaggayyasambhayyaappalaraju,
	narayudujaggayyasambhayyaappalarajuoneend,
	narayudujaggayyasambhayyaappalarajutwoend,
	narayudujaggayyasambhayyanarayanaplus,
	narayudujaggayyasambhayyanarayanaendone,
	narayudujaggayyasambhayyagopalappalaraju,
	narayudujaggayyasambhayyagopalend,
	narayudujaggayyasambhayyagopalsamba,
	narayudujaggayyamahasatya,
	narayudujaggayyamahagovindu,
	narayudujaggayyamahavenkanna,
	narayudujaggayyamahaend,
	narayudujaggayyamahasiva,
	narayudujaggayyamahasatyarambabu,
	narayudujaggayyamahasatyaend,
        narayudujaggayyamahavenkannaone,
	narayudujaggayyamahasivaone,
        narayudujaggayyamahasivatwo,
	bapanayyajaggayya,
	bapanayyalachayya,
	bapanayyavenkatramayya,
	bapanayyajaggayyaadiya,
	bapanayyajaggayyapaidamma,
	bapanayyajaggayyapending,
	bapanayyalachayyasambayya,
	bapanayyalachayyaramakrishna,
	bapanayyalachayyaapparao,
	bapanayyalachayyasitamaha,
	bapanayyalachayyasambayyaraju,
	bapanayyalachayyasambayyapandu,
	bapanayyalachayyasambayyaend,
	bapanayyalachayyasambayyarajusamba,
	bapanayyalachayyasambayyarajuharish,
	bapanayyalachayyasambayyapandusai,
	bapanayyalachayyasambayyapandusecond,
	bapanayyalachayyaapparaoprasad,
	bapanayyalachayyaapparaosatya,
	bapanayyalachayyaapparaoend,
	bapanayyalachayyaapparaoprasadone,
	bapanayyalachayyaapparaoprasadtwo,
	bapanayyalachayyaramakrishnalaxman,
	bapanayyalachayyaramakrishnasrinu,
	bapanayyalachayyaramakrishnalaxmanone,
	bapanayyalachayyaramakrishnalaxmantwo,
	bapanayyavenkatramayyagovindu,
        narayudujaggayyasambhayyaoneend,
	bapanayyalachayyaramakrishnalaxmansiva,
	bapanayyalachayyaramakrishnalaxmantodayya





        
    ];




    // Antoher approach, same result
    // JSON approach

/*
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            image: "../headshots/2.jpg",
            children: [
                {
                    text:{
                        name: "Joe Linux",
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    image: "../headshots/1.jpg",
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                            image: "../headshots/8.jpg"
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                            image: "../headshots/9.jpg"
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    image: "../headshots/5.jpg",
                    children: [
                        {
                            parent: cbo,
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                            image: "../headshots/7.jpg"
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                            image: "../headshots/4.jpg"
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                            image: "../headshots/11.jpg"
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    image: "../headshots/6.jpg",
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                            image: "../headshots/10.jpg"
                        }
                    ]
                }
            ]
        }
    };

*/
