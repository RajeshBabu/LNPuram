var config = {
        container: "#basic-example",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    aakasam = {
        text: {
            name: "పొలమరశెట్టి ఆకాశం",
            title: "లక్ష్మీనారాయణపురం"
        },
        image: "placeholders/family/m.png"
    },

    aakasambandaappanna = {
        parent: aakasam,
        text:{
            name: " పొలమరశెట్టి  బండ అప్పన్న ",
            title: "లక్ష్మీనారాయణపురం",
        },
        stackChildren: true,
        image: "placeholders/family/m.png"
    },
    aakasamerraappanna = {
        parent: aakasam,
        text:{
            name: " పొలమరశెట్టి ఎర్ర అప్పన్న",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
    aakasamjatalaappanna = {
        parent: aakasam,
        stackChildren: true,
        text:{
            name: "పొలమరశెట్టి జఠల అప్పన్న ",
            title: "లక్ష్మీనారాయణపురం",
        },
        image: "placeholders/family/m.png"
    },
   
    chart_config = [
        config,
        aakasam,
        aakasambandaappanna, 
	aakasamerraappanna,    
	aakasamjatalaappanna
	
  
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
