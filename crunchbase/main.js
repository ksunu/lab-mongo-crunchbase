const MongoDB = require('mongodb');
const mongoClient = MongoDB.MongoClient;
const clear = require('clear');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const url = `mongodb://localhost:27017/crunchbase`

mongoClient.connect(url, (error, db) => {

    if (error) {
        console.log('Error trying to connect to the Database');
        console.log(error);
    } else {
        console.log('Connection established correctly!! 😬');

        function mainMenu() {
            clear();
            printMenu();
            rl.question('Type an option: ', (option) => {
                switch (option) {
                    case "1":
                        db.collection('companies').find({}, {
                            name: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "2":
                        db.collection('companies').count((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "3":
                        db.collection('companies').find({
                            founded_year: 2004
                        }).count((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "4":
                        db.collection('companies').find({
                            $and: [{
                                founded_year: 2004
                            }, {
                                founded_month: 2
                            }]
                        }, {
                            name: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "5":
                        db.collection('companies').find({
                            $and: [{
                                founded_year: 2004
                            }, {
                                founded_month: {
                                    $gt: 3
                                }
                            }, {
                                founded_month: {
                                    $lt: 7
                                }
                            }]
                        }, {
                            name: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "6":
                        db.collection('companies').find({
                            "offices.city": 'Barcelona'
                        }, {
                            name: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "7":
                        db.collection('companies').find({}, {
                            number_of_employees: 1,
                            name: 1,
                            _id: 0
                        }).sort({
                            number_of_employees: -1
                        }).limit(10).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "8":
                        db.collection('companies').find({
                            name: 'Facebook'
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "9":
                        db.collection('companies').find({
                            name: 'Facebook'
                        }, {
                            name: 1,
                            number_of_employees: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "10":
                        db.collection('companies').find({
                            name: 'Facebook'
                        }, {
                            "products.name": 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                result[0].products.forEach((product) =>
                                    console.log(product.name));
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "11":
                        db.collection('companies').find({
                            name: 'Facebook'
                        }, {
                            relationships: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                result[0].relationships.forEach(employee =>
                                    employee.is_past === false && console.log(employee.person.first_name));
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "12":
                        db.collection('companies').find({
                            name: 'Facebook'
                        }, {
                            relationships: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                let newArray = []
                                result[0].relationships.forEach(employee =>
                                    employee.is_past === true && newArray.push(employee))
                                console.log(newArray.length);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "13":
                        db.collection('companies').find({
                            "relationships.person.permalink": "david-ebersman",
                        }, {
                            name: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "14":
                        db.collection('companies').find({
                            name: 'Facebook'
                        }, {
                            competitions: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                result[0].competitions.forEach(elm =>
                                    console.log(elm.competitor.name));
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "15":
                        db.collection('companies').find({
                            tag_list: {
                                $all: ["social-networking"]
                            }
                        }, {
                            name: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "16":
                        // db.collection('companies').find({
                        //     $and: [{
                        //         founded_year: {
                        //             $gt: '2001'
                        //         }
                        //     }, {
                        //         founded_year: {
                        //             $lt: '2017'
                        //         }}
                        //     ], {
                        //         tag_list: {
                        //             $all: ["social-network"]
                        //         }

                        // }, {
                        //     name: 1,
                        //     _id: 0
                        // }).toArray((error, result) => {
                        //     if (error) {
                        //         console.log(error);
                        //         rl.question(`\nType enter to continue: `, (answer) => {
                        //             mainMenu()
                        //         });
                        //     } else {
                        //         console.log(result);
                        //         rl.question(`\nType enter to continue: `, (answer) => {
                        //             mainMenu()
                        //         });
                        //     }
                        // })
                        break;
                    case "17":
                        db.collection('companies').find({
                            "offices.city": 'London'
                        }, {
                            name: 1,
                            location: 1,
                            _id: 0
                        }).toArray((error, result) => {
                            if (error) {
                                console.log(error);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            } else {
                                console.log(result);
                                rl.question(`\nType enter to continue: `, (answer) => {
                                    mainMenu()
                                });
                            }
                        })
                        break;
                    case "0":
                        console.log(`👋👋👋👋 😞 \n`);
                        db.close((error) => {
                            process.exit(0)
                        });
                        break;
                    default:
                        mainMenu();
                        break;
                }
            });
        }

        mainMenu();

    }
});




function printMenu() {
    console.log(`
0.- Exit
1.- List by name all companies.
2.- How many companies are there?
3.- How many companies were founded in 2004?
4.- List by name all companies founded in february of 2004.
5.- List by name all companies founded in the summer of 2004 (april to june) sorted by date.
6.- What companies have offices in "Barcelona".
7.- List the 10 companies with more employees sorted ascending (show name and employees).
8.- Find the company with the name "Facebook"
9.- How many employees has Facebook?
10.- List the name of all the products of Facebook
11.- List the people that are working at Facebook right now (check relationships field)
12.- How many people are not working anymore at Facebook
13.- List all the companies where "david-ebersman" has worked.
14.- List by name the competitors of Facebook
15.- Names of the companies that has "social-networking" in tag-list (be aware that the value of field is a string check regex operators)
16.- How many companies that has "social-network" in tag-list and founded between 2002 and 2016 inclusive
17.- Names and locations of companies that have offices in London
18.- How many companies that has "social-network" in tag-list and founded between 2002 and 2016 inclusive and has offices in New York
`);
}