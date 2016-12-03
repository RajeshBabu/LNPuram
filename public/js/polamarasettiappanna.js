var config = {
        container: "#basic-example",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    appanna = {
        text: {
            name: "పొలమరశెట్టి అప్పన్న",
            title: "లక్ష్మీనారాయణపురం"
        },
        image: "placeholders/family/m.png"
    },

    appannapedaappanna = {
        parent: appanna,
        text:{
            name: " పొలమరశెట్టి పెద్ద అప్పన్న ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    appanavenkataswami = {
        parent: appanna,
        text:{
            name: " పొలమరశెట్టి వెంకట స్వామి",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    appannavenkanna = {
        parent: appanna,
        text:{
            name: "పొలమరశెట్టి వెంకన్న ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
   
    appannasitayya = {
        parent: appanna,
        text:{
            name: "పొలమరశెట్టి సీతయ్య",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    appannapedaappannaone = {
        parent: appannapedaappanna,
        text:{
            name: "మహాలక్ష్మి",
            title: "దగ్గులూరు",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannatwo = {
        parent: appannapedaappanna,
        text:{
            name: "మళ్ల ఆదమ్మ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannathree = {
        parent: appannapedaappanna,
        text:{
            name: "బొడ్డేటి అచ్చమ్మ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannafour = {
        parent: appannapedaappanna,
        text:{
            name: "గంగమ్మ",
            title: "పాలకోడేరు",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannakanakayya = {
        parent: appannapedaappanna,
        text:{
            name: "పొలమరశెట్టి కనకయ్య",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    appannapedaappannaapparao = {
        parent: appannapedaappanna,
        text:{
            name: "పొలమరశెట్టి అప్పారావు",
            desc:"భార్య: అచ్చమ్మ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
  appannapedaappannaapparaoappalaraju = {
        parent: appannapedaappannaapparao,
        text:{
            name: "పొలమరశెట్టి అప్పారావు",
            desc:"భార్య: అచ్చమ్మ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannapedaappannaapparaoone = {
        parent: appannapedaappannaapparao,
        text:{
            name: "మల్ల ధనలక్ష్మి",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
appannapedaappannaapparaotwo = {
        parent: appannapedaappannaapparao,
        text:{
            name: "బొడ్డేటి సత్యవతి",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
 appannapedaappannaapparaothree = {
        parent: appannapedaappannaapparao,
        text:{
            name: "ఆళ్ల రవణమ్మ",
            title: "పాలకోడేరు",
        },
        image: "placeholders/family/f.png"
    }
appannapedaappannaapparaofour = {
        parent: appannapedaappannaapparao,
        text:{
            name: "మళ్ల మంగమ్మ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannaapparaosivanarayana = {
        parent: appannapedaappannaapparao,
        text:{
            name: "పొలమరశెట్టి శివన్నారాయణ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },appannapedaappannaapparaopedaapparao = {
        parent: appannapedaappannaapparao,
        text:{
            name: "పొలమరశెట్టి పెద్ద అప్పారావు (తాతబ్బాయి)",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    appannapedaappannakanakayyanarasimham = {
        parent: appannapedaappannakanakayya,
        text:{
            name: "పొలమరశెట్టి నరసింహమూర్తి ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    appannapedaappannakanakayyaone = {
        parent: appannapedaappannakanakayya,
        text:{
            name: "లక్ష్మీకాంత",
            title: "పాలూరు",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannakanakayyatwo = {
        parent: appannapedaappannakanakayya,
        text:{
            name: "దాక్షా ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannakanakayyathree = {
        parent: appannapedaappannakanakayya,
        text:{
            name: "కళావతి",
            title: "అనకాపల్లి",
        },
        image: "placeholders/family/f.png"
    },
    appannapedaappannakanakayyaprakasam = {
        parent: appannapedaappannakanakayya,
        text:{
            name: "ప్రకాశం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiveranna = {
        parent: appanavenkataswami,
        text:{
            name: " పొలమరశెట్టి వీరన్న",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannaapparao = {
        parent: appanavenkataswamiveranna,
        text:{
            name: " పొలమరశెట్టి అప్పారావు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannasambayya = {
        parent: appanavenkataswamiveranna,
        text:{
            name: " పొలమరశెట్టి సాంబయ్య",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannaone = {
        parent: appanavenkataswamiveranna,
        text:{
            name: "మళ్ల కనకమ్మ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },
appanavenkataswamiverannatatabai = {
        parent: appanavenkataswamiveranna,
        text:{
            name: " పొలమరశెట్టి తాతబ్బాయి (వెంకటస్వామి)",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannanarayana = {
        parent: appanavenkataswamiveranna,
        text:{
            name: " పొలమరశెట్టి నారాయణ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannanageswarao = {
        parent: appanavenkataswamiveranna,
        text:{
            name: " పొలమరశెట్టి నాగేశ్వర రావు ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannatwo = {
        parent: appanavenkataswamiveranna,
        text:{
            name: "సీతమ్మ",
            title: "కొణితివాడ ",
        },
        image: "placeholders/family/f.png"
    },
appanavenkataswamiverannathree = {
        parent: appanavenkataswamiveranna,
        text:{
            name: "సుభద్ర",
            title: "కేదావరం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannathreemurthulu = {
        parent: appanavenkataswamiveranna,
        text:{
            name: " పొలమరశెట్టి త్రీమూర్తులు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appanavenkataswamiverannafour = {
        parent: appanavenkataswamiveranna,
        text:{
            name: "?",
            title: "?",
        },
        image: "placeholders/family/f.png"
    },
appannavenkannaone = {
        parent: appannavenkanna,
        text:{
            name: "మళ్ల అప్పాయమ్మ    ",
            desc: "భర్త : మళ్ల అప్పన్న (ఇక్కన్న)",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/f.png"
    },

appannavenkannaachanna = {
        parent: appannavenkanna,
        text:{
            name: "పొలమరశెట్టి అచ్చన్న ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannavenkannaramurthy = {
        parent: appannavenkanna,
        text:{
            name: "పొలమరశెట్టి రాంమూర్తి ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannavenkannatwo = {
        parent: appannavenkanna,
        text:{
            name: "అన్నపూర్ణ ",
            title: "దగ్గులూరు",
        },
        image: "placeholders/family/f.png"
    },
appannasitayyaappanna = {
        parent: appannasitayya,
        text:{
            name: "పొలమరశెట్టి అప్పన్న",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannasitayyaappannasimhachalam = {
        parent: appannasitayyaappanna,
        text:{
            name: "పొలమరశెట్టి సింహాచలం",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannasitayyaappannasatyanarayana = {
        parent: appannasitayyaappanna,
        text:{
            name: "పొలమరశెట్టి సత్యనారాయణ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannasitayyaappannakasi = {
        parent: appannasitayyaappanna,
        text:{
            name: "పొలమరశెట్టి కాశీలు",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannasitayyaappannasitaramayya = {
        parent: appannasitayyaappanna,
        text:{
            name: "పొలమరశెట్టి సీతారామయ్య ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
appannasitayyaappannaone = {
        parent: appannasitayyaappanna,
        text:{
            name: "పొలమరశెట్టి  ?",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    chart_config = [
        config,
        appanna,
        appannapedaappanna, 
	appanavenkataswami,    
	appannavenkanna,
	appannasitayya,
        appannapedaappannaapparao,
        appannapedaappannaone,
        appannapedaappannatwo,
        appannapedaappannathree,
        appannapedaappannafour,
        appannapedaappannakanakayya,
        appannapedaappannaapparaoappalaraju,
        appannapedaappannaapparaoone,
        appannapedaappannaapparaotwo,
        appannapedaappannaapparaothree,
        appannapedaappannaapparaofour,
        appannapedaappannaapparaosivanarayana,
        appannapedaappannaapparaopedaapparao,
        appannapedaappannakanakayyanarasimham,
        appannapedaappannakanakayyaone,
        appannapedaappannakanakayyatwo,
        appannapedaappannakanakayyathree,
        appannapedaappannakanakayyaprakasam,
        appanavenkataswamiveranna,
        appanavenkataswamiverannaapparao,
        appanavenkataswamiverannasambayya,
        appanavenkataswamiverannaone,
        appanavenkataswamiverannatatabai,
        appanavenkataswamiverannanarayana,
        appanavenkataswamiverannanageswarao,
	appanavenkataswamiverannathreemurthulu,
	appanavenkataswamiverannatwo,
	appanavenkataswamiverannathree,
        appanavenkataswamiverannafour,
	appannavenkannaone,
	appannavenkannaachanna,
	appannavenkannaramurthy,
	appannavenkannatwo,
        appannasitayyaappanna,
        appannasitayyaappannasimhachalam,
	appannasitayyaappannasatyanarayana,
	appannasitayyaappannakasi,
	appannasitayyaappannasitaramayya,
	appannasitayyaappannaone

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
