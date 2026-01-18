var locationData = {
    "Algeria": {
        "Algiers": {
            "Algiers City": {
                "Sidi M'Hamed": ["Center", "Didouche Mourad", "Grande Poste"],
                "Bab El Oued": ["Beach Side", "Place des Martyrs", "Popular District"],
                "Bologhine": ["Historic", "Notre Dame d'Afrique", "Coastal"],
                "Hydra": ["Embassy District", "Hydra Center", "Ben Aknoun"],
                "Dely Ibrahim": ["Residential", "Commercial", "University Area"],
                "El Biar": ["Residential District", "Shopping Area"],
                "Kouba": ["Commercial Center", "Residential"],
                "Hussein Dey": ["Industrial Area", "Residential"],
                "El Harrach": ["Industrial Zone", "Port Area"],
                "Bir Mourad Raïs": ["Residential District"],
                "Birkhadem": ["Residential Area"],
                "El Madania": ["Residential District"],
                "Belouizdad": ["Residential Area"],
                "Bouzareah": ["Mountain District", "Residential"]
            },
            "Tipaza": { "Center": ["Roman Ruins", "Beach Area"], "Cherchell": ["Historic Port", "Beach"] },
            "Blida": { "Center": ["Downtown", "Chrea Mountain Area"] },
            "Boumerdes": { "Center": ["Beach Area", "University District"] }
        },
        "Oran": {
            "Oran City": {
                "Es Sénia": ["Airport Area", "University Area", "Residential"],
                "Bir El Djir": ["Commercial District", "Millennium", "New Development"],
                "Akid Lotfi": ["Business District", "Promenade"],
                "Sidi El Houari": ["Old City", "Historic Port"],
                "El Hamri": ["Residential District"],
                "Medina Jedida": ["Downtown", "Commercial"],
                "Hai El Yasmine": ["Residential Area"],
                "Hai Essalem": ["Residential District"]
            },
            "Arzew": { "Port Area": ["Industrial Zone", "Beach"] },
            "Bethioua": { "Center": ["Residential District"] }
        },
        "Constantine": {
            "Constantine City": {
                "Hamma Bouziane": ["Central", "Industrial", "Residential"],
                "El Khroub": ["Residential Area 1", "District A", "New City"],
                "Zouaghi": ["New City", "Commercial"],
                "Sidi Mabrouk": ["Residential District", "University Area"],
                "Bellevue": ["Downtown", "Historic"],
                "Kitouni": ["Residential Area"]
            }
        },
        "Annaba": {
            "Annaba City": {
                "Center": ["Sidi Brahim", "Tabacoop", "Downtown"],
                "Annaba Port": ["Harbor Area", "Industrial"],
                "Seraïdi": ["Mountain View", "Beach Resort"],
                "El Bouni": ["Residential District", "Industrial Area"]
            }
        },
        "Sétif": {
            "Sétif City": {
                "Center": ["Park Mall Area", "Ain El Fouara", "Downtown"],
                "El Eulma": ["Market District", "Residential"],
                "Bel Air": ["Residential Area"]
            }
        },
        "Batna": {
            "Batna City": { "Center": ["Downtown", "Commercial District"], "Residential": ["New Batna", "Old City"] },
            "Timgad": { "Archaeological Site": ["Roman Ruins"] }
        },
        "Béjaïa": {
            "Béjaïa City": { "Port Area": ["Harbor", "Commercial"], "Sidi Ahmed": ["Beach Area", "Residential"], "Center": ["Downtown", "Old City"] }
        },
        "Biskra": {
            "Biskra City": { "Center": ["Downtown", "Oasis Area"], "Chetma": ["Palm Grove", "Residential"] }
        },
        "Tlemcen": {
            "Tlemcen City": { "Medina": ["Old City", "Great Mosque"], "Imama": ["Residential"], "Center": ["Downtown", "Commercial"] },
            "Maghnia": { "Border Area": ["Commercial District"] }
        },
        "Tiaret": {
            "Tiaret City": { "Center": ["Downtown", "Market Area"], "Residential": ["New District"] }
        },
        "Tizi Ouzou": {
            "Tizi Ouzou City": { "Center": ["Downtown", "Market"], "Boukhalfa": ["Residential District"] },
            "Azazga": { "Center": ["Main District"] }
        },
        "Djelfa": {
            "Djelfa City": { "Center": ["Downtown", "Market Area"], "Residential": ["New Djelfa"] }
        },
        "Jijel": {
            "Jijel City": { "Port Area": ["Harbor", "Beach"], "Center": ["Downtown", "Commercial"] }
        },
        "Skikda": {
            "Skikda City": { "Port Area": ["Harbor", "Industrial Zone"], "Center": ["Downtown", "Beach Area"] }
        },
        "Mostaganem": {
            "Mostaganem City": { "Beach Area": ["Salamandre Beach", "Sablettes"], "Center": ["Downtown", "Port"] }
        },
        "Médéa": {
            "Médéa City": { "Center": ["Downtown", "Market Area"], "Berrouaghia": ["Agricultural District"] }
        },
        "Mascara": {
            "Mascara City": { "Center": ["Downtown", "Historic District"], "Sig": ["Agricultural Area"] }
        },
        "Ouargla": {
            "Ouargla City": { "Center": ["Downtown", "Oasis"], "Hassi Messaoud": ["Oil Field Area", "Industrial"] }
        },
        "Ghardaïa": {
            "Ghardaïa City": { "M'Zab Valley": ["Old City", "UNESCO Area"], "Center": ["Downtown"] },
            "Beni Isguen": { "Historic City": ["Old Town"] }
        },
        "Saïda": {
            "Saïda City": { "Center": ["Downtown", "Market Area"] }
        },
        "Bordj Bou Arréridj": {
            "Bordj Bou Arréridj City": { "Center": ["Downtown", "Commercial District"] }
        },
        "Bouira": {
            "Bouira City": { "Center": ["Downtown", "Market"], "Lakhdaria": ["Residential District"] }
        },
        "Chlef": {
            "Chlef City": { "Center": ["Downtown", "Residential"], "Oued Sly": ["Agricultural Area"] }
        },
        "Tamanrasset": {
            "Tamanrasset City": { "Center": ["Downtown", "Sahara Gateway"], "Assekrem": ["Mountain Area"] }
        },
        "Tébessa": {
            "Tébessa City": { "Center": ["Downtown", "Border Area"], "Archaeological Site": ["Roman Ruins"] }
        },
        "El Oued": {
            "El Oued City": { "Center": ["Downtown", "Thousand Domes City"], "Oasis": ["Palm Grove"] }
        },
        "Khenchela": {
            "Khenchela City": { "Center": ["Downtown", "Market Area"] }
        },
        "Souk Ahras": {
            "Souk Ahras City": { "Center": ["Downtown", "Border Area"] }
        },
        "Guelma": {
            "Guelma City": { "Center": ["Downtown", "Thermal Baths"], "Hammam Debagh": ["Hot Springs"] }
        },
        "Laghouat": {
            "Laghouat City": { "Center": ["Downtown", "Oasis"], "Sahara Gateway": ["Desert Area"] }
        },
        "M'Sila": {
            "M'Sila City": { "Center": ["Downtown", "Market Area"], "Bou Saâda": ["Oasis City"] }
        },
        "Oum El Bouaghi": {
            "Oum El Bouaghi City": { "Center": ["Downtown", "Residential"] }
        },
        "El Bayadh": {
            "El Bayadh City": { "Center": ["Downtown", "Steppe Area"] }
        },
        "Illizi": {
            "Illizi City": { "Center": ["Downtown", "Sahara"], "Djanet": ["Tassili N'Ajjer", "Tourist Area"] }
        },
        "Bordj Badji Mokhtar": {
            "Bordj Badji Mokhtar City": { "Center": ["Border Town", "Sahara"] }
        },
        "Béni Abbès": {
            "Béni Abbès City": { "Oasis": ["Palm Grove", "Sahara Gateway"] }
        },
        "Timimoun": {
            "Timimoun City": { "Red Oasis": ["Historic Ksour", "Palm Grove"] }
        },
        "Touggourt": {
            "Touggourt City": { "Center": ["Downtown", "Oasis"], "Témacine": ["Palm Grove"] }
        },
        "Djanet": {
            "Djanet City": { "Tassili": ["Rock Art", "Desert"], "Center": ["Oasis Town"] }
        },
        "In Salah": {
            "In Salah City": { "Center": ["Sahara Crossroads", "Oasis"] }
        },
        "In Guezzam": {
            "In Guezzam City": { "Border Area": ["Niger Border", "Sahara"] }
        },
        "Relizane": {
            "Relizane City": { "Center": ["Downtown", "Agricultural Area"] }
        },
        "Aïn Defla": {
            "Aïn Defla City": { "Center": ["Downtown", "Agricultural District"] }
        },
        "Aïn Témouchent": {
            "Aïn Témouchent City": { "Center": ["Downtown", "Beach Area"], "Beni Saf": ["Port", "Beach"] }
        },
        "Tissemsilt": {
            "Tissemsilt City": { "Center": ["Downtown", "Mountain Area"] }
        },
        "El Tarf": {
            "El Tarf City": { "Center": ["Downtown"], "El Kala": ["Beach", "National Park"] }
        },
        "Naâma": {
            "Naâma City": { "Center": ["Downtown", "Steppe Area"] }
        },
        "Mila": {
            "Mila City": { "Center": ["Downtown", "Historic Area"] }
        },
        "Aïn Salah": {
            "Aïn Salah City": { "Center": ["Sahara Hub", "Oasis"] }
        }
    },
    "Australia": {
        "New South Wales": { "Sydney": { "City Center": ["The Rocks", "Paddy's Markets", "Darling Harbour"], "East": ["Bondi", "Coogee", "Paddington"], "North": ["Manly", "Mosman"], "Inner West": ["Newtown"] } },
        "Victoria": { "Melbourne": { "CBD": ["Southbank", "Docklands", "Federation Square"], "East": ["Richmond", "Camberwell", "South Yarra"], "St Kilda": ["Beach Area"], "Fitzroy": ["Brunswick St"] } },
        "Queensland": { "Brisbane": { "CBD": ["South Brisbane", "Fortitude Valley"], "New Farm": ["River Side"] }, "Gold Coast": { "Central": ["Surfers Paradise", "Broadbeach"] } },
        "Western Australia": { "Perth": { "City": ["CBD", "Northbridge"], "Coast": ["Fremantle", "Cottesloe"] } },
        "South Australia": { "Adelaide": { "City": ["City Center", "North Adelaide"] } }
    },
    "Austria": {
        "Vienna": { "Vienna City": { "Innere Stadt": ["Stephansplatz", "Hofburg"], "Leopoldstadt": ["Prater"], "Landstraße": ["Belvedere"], "Mariahilf": ["Shopping District"] } },
        "Salzburg": { "Salzburg City": { "Altstadt": ["Mozart Area"], "Neustadt": ["Mirabell"] } }
    },
    "Bahrain": {
        "Capital": { "Manama": { "Juffair": ["Building A", "Building B", "Al Shabab Rd"], "Seef": ["Seef Mall Area", "Reef Island", "Financial District"], "Adliya": ["Block 338", "Block 336", "Shawarma Alley"], "Hoora": ["Exhibition Avenue", "Marina"], "Zinj": ["Old Zinj", "New Zinj"] } },
        "Muharraq": { "Muharraq City": { "Amwaj Islands": ["Floating City", "Tala Island", "Meena 7"], "Diyar Al Muharraq": ["Deerata", "Bareeq", "Dragon City Area"], "Busaiteen": ["University Area", "Coast"], "Galali": ["Residential"] } },
        "Northern": { "Hamad Town": { "Roundabout 1": ["Area 1", "Area 2"], "Roundabout 22": ["Area X", "Area Y"], "Roundabout 7": ["Residential Area"] }, "Saar": { "Saar Center": ["Saraya 1", "Saraya 2"], "Janabiya": ["Jardin District"] }, "Budaiya": ["Coastal", "Residential"] },
        "Southern": { "Riffa": { "East Riffa": ["Bukowara", "Hajiyat", "Reem District"], "West Riffa": ["Riffa Views", "Sakhir", "Clock Tower Area"] }, "Zallaq": ["Sofitel Area", "Beach Side"] }
    },
    "Belgium": {
        "Brussels": { "Brussels City": { "City Center": ["Grand Place", "Sablon"], "Ixelles": ["Avenue Louise"], "Saint-Gilles": ["Art Nouveau District"], "European Quarter": ["Schuman"] } },
        "Flanders": { "Antwerp": { "City Center": ["Meir", "Het Zuid"], "Zurenborg": ["Art Nouveau"] }, "Ghent": { "City Center": ["Gravensteen"] } }
    },
    "Brazil": {
        "São Paulo": { "São Paulo City": { "Avenida Paulista": ["Jardins", "Bela Vista"], "Itaim Bibi": ["Vila Olimpia"], "Pinheiros": ["Modern Area"], "Vila Madalena": ["Bohemian Area"], "Moema": ["Near Park"] } },
        "Rio de Janeiro": { "Rio de Janeiro City": { "South Zone": ["Copacabana", "Ipanema", "Leblon", "Botafogo"], "Barra da Tijuca": ["Beach Area"], "Santa Teresa": ["Hillside"] } },
        "Distrito Federal": { "Brasília": { "Plano Piloto": ["Asa Sul", "Asa Norte"], "Lago Sul": ["Residential"] } }
    },
    "Canada": {
        "Ontario": {
            "Toronto": { "Downtown": ["Entertainment District", "Financial District", "Liberty Village", "Distillery District", "Yorkville", "Queen West"], "North York": ["Willowdale", "Bayview Village", "Don Mills"], "Mississauga": ["Square One", "City Centre", "Port Credit"], "Ottawa": ["ByWard Market", "Glebe", "Rockcliffe Park", "Kanata"], "Hamilton": ["Downtown", "Westdale"], "London": ["Downtown", "Richmond Row"] },
        },
        "British Columbia": {
            "Vancouver": { "Downtown": ["West End", "Gastown", "Yaletown", "Coal Harbour"], "Richmond": ["Steveston", "Brighouse"], "Burnaby": ["Metrotown", "Brentwood"], "Surrey": ["City Centre", "Guildford"], "Victoria": ["Inner Harbour", "Fairfield"] }
        },
        "Quebec": {
            "Montreal": { "Ville-Marie": ["Old Montreal", "Plateau Mont-Royal", "Downtown", "Griffintown"], "Côte-des-Neiges": ["NDG"], "Laval": ["Chomedey"] },
            "Quebec City": { "Old Quebec": ["Upper Town", "Lower Town"], "Sainte-Foy": ["University Area"] }
        },
        "Alberta": { "Calgary": { "Downtown": ["Eau Claire", "Beltline", "East Village"], "NW": ["Kensington"] }, "Edmonton": { "Downtown": ["Ice District"], "Strathcona": ["Whyte Ave"], "West Edmonton": ["Mall Area"] } },
        "Manitoba": { "Winnipeg": { "Downtown": ["The Forks", "Exchange District"], "St. Vital": ["Mall Area"] } },
        "Nova Scotia": { "Halifax": { "Downtown": ["Waterfront", "Spring Garden"], "Dartmouth": ["Correctional Area"] } },
        "Saskatchewan": { "Saskatoon": { "Downtown": ["River Landing"], "Nutana": ["Broadway"] }, "Regina": { "Downtown": ["Wascana Centre"] } }
    },
    "China": {
        "Beijing": { "Beijing City": { "Chaoyang": ["Sanlitun", "CBD", "Wangjing", "798 Art District"], "Haidian": ["Zhongguancun", "Wudaokou", "Summer Palace Area"], "Dongcheng": ["Wangfujing", "Forbidden City Area", "Gulou"], "Xicheng": ["Financial Street", "Xidan"] } },
        "Shanghai": { "Shanghai City": { "Pudong": ["Lujiazui", "Zhangjiang", "Expo Area"], "Jing'an": ["Nanjing Road", "Jing'an Temple"], "Xuhui": ["French Concession", "Xujiahui", "West Bund"], "Huangpu": ["The Bund", "People's Square", "Xintiandi"], "Changning": ["Hongqiao"] } },
        "Guangdong": { "Guangzhou": { "Tianhe": ["Zhujiang New Town", "Tianhe Sports Center"], "Yuexiu": ["Beijing Road"], "Haizhu": ["Canton Tower Area"] }, "Shenzhen": { "Nanshan": ["Science Park", "Shekou", "OCT"], "Futian": ["CBD", "Huaqiangbei"], "Luohu": ["Dongmen"] } },
        "Sichuan": { "Chengdu": { "Jinjiang": ["Chunxi Road", "Taikoo Li"], "Wuhou": ["Jinli"] } },
        "Zhejiang": { "Hangzhou": { "West Lake": ["Hubin", "Nanshan Road"], "Binjiang": ["Tech City"] } }
    },
    "Egypt": {
        "Cairo Governorate": {
            "Cairo City": {
                "New Cairo": ["Tagamoa El Khamis", "Al Rehab City", "Madinaty", "University District", "Lotus", "Choueifat", "South Investors", "Narges"],
                "Nasr City": ["Abbas El Akkad", "Makram Ebeid", "The 10th District", "Zahraa Nasr City", "Rabaa Al-Adawiya", "El Sfarat"],
                "Maadi": ["Degla", "Sarayat El Maadi", "Zahraa El Maadi", "Old Maadi", "New Maadi", "Corniche El Maadi"],
                "Heliopolis": ["Korba", "Merryland", "Sheraton Heliopolis", "El Nozha", "Ard El Golf", "Roxy"],
                "Downtown": ["Tahrir", "Garden City", "Zamalek", "Abdeen", "Qasr El Nil"],
                "Shoubra": ["Rod El Farag", "Agha Khan", "Khalafawy", "Saintat"],
                "New Administrative Capital": ["R7", "R8", "Financial District", "Baron City", "Downtown", "Expo City"]
            }
        },
        "Giza Governorate": {
            "Giza City": {
                "Sheikh Zayed": ["District 1", "District 10", "Allegria", "Beverly Hills", "Greens", "Casa", "Etapa"],
                "6th of October": ["Al Motamayez", "West Somid", "Hosary", "Industrial Zone", "Dreamland", "Palm Hills"],
                "Mohandessin": ["Lebanon Square", "Syria Street", "Gamat El Dowal", "Sudan Street"],
                "Dokki": ["Messaha Square", "Tahrir Street", "Shooting Club Area"],
                "Haram": ["Faisal", "Maryotia", "Hadayek Al Ahram", "Remaya"]
            }
        },
        "Alexandria Governorate": {
            "Alexandria City": {
                "North Coast": ["Marina", "Marassi", "Hacienda", "Sidi Abdel Rahman", "Alamein"],
                "City Center": ["Smouha", "Sidi Gaber", "Kafr Abdo", "Roushdy", "Sporting"],
                "Corniche": ["San Stefano", "Gleem", "Stanley", "Shatby", "Montaza", "Maamoura"],
                "West Alex": ["Agami", "Borg El Arab", "King Mariout"]
            }
        },
        "Red Sea": {
            "Hurghada": { "El Gouna": ["Marina", "Golf", "West Golf"], "Sahl Hasheesh": ["Resorts", "Old Town"], "Makadi Bay": ["Hotels"] },
            "Marsa Alam": { "Port Ghalib": ["Marina"], "Marsa Alam City": ["Center"] }
        },
        "South Sinai": {
            "Sharm El Sheikh": { "Naama Bay": ["Center"], "Nabq Bay": ["Resorts"], "Hadaba": ["Residential"], "Soho Square": ["Center"] },
            "Dahab": { "Lagoon": ["Kite Area"], "Lighthouse": ["Center"] }
        },
        "Dakahlia": { "Mansoura": { "Gamaa District": ["University Area"], "Mashaya": ["Nile Side"], "Toriel": ["Historic"], "Godeila": ["Residential"] } },
        "Gharbia": { "Tanta": { "El-Gaish St": ["Commercial"], "Saeed St": ["Residential"], "El-Nahhas": ["Main St"] } },
        "Sharqia": { "Zagazig": { "El-Qawmia": ["Villas"], "El-Mohafza": ["Center"] }, "10th of Ramadan": { "Industrial Zone": ["A", "B", "C"] } },
        "Qalyubia": { "Benha": { "El-Vilal": ["River Side"], "El-Manshia": ["Center"] } },
        "Port Said": { "Port Said City": { "Port Fouad": ["Villas"], "El-Sharq": ["Historic"] } }
    },
    "France": {
        "Île-de-France": { "Paris": { "Le Marais": ["3rd Arrondissement", "4th Arrondissement"], "Montmartre": ["18th Arrondissement"], "Saint-Germain-des-Prés": ["6th Arrondissement"], "Champs-Élysées": ["8th Arrondissement"], "Latin Quarter": ["5th Arrondissement"], "La Défense": ["Business District"] } },
        "Provence-Alpes-Côte d'Azur": { "Nice": { "Old Town": ["Promenade des Anglais", "Cimiez"] }, "Marseille": { "Vieux Port": ["Le Panier", "La Joliette"], "Prado": ["Beach Area"] }, "Cannes": { "Croisette": ["Luxury Area"], "Le Suquet": ["Old Town"] } },
        "Auvergne-Rhône-Alpes": { "Lyon": { "Presqu'île": ["Bellecour"], "Vieux Lyon": ["Saint-Jean"], "Part-Dieu": ["Business District"] } },
        "Nouvelle-Aquitaine": { "Bordeaux": { "Golden Triangle": ["Luxury Shops"], "Chartrons": ["Wine District"], "Saint-Pierre": ["Historic"] } },
        "Occitanie": { "Toulouse": { "Capitole": ["Center"], "Saint-Cyprien": ["Left Bank"] } },
        "Grand Est": { "Strasbourg": { "Petite France": ["Historic"], "European Quarter": ["EU Institutions"] } }
    },
    "Germany": {
        "Berlin": { "Berlin City": { "Mitte": ["Alexanderplatz", "Tiergarten", "Prenzlauer Berg", "Museum Island"], "Charlottenburg": ["Kurfürstendamm", "Westend"], "Kreuzberg": ["Friedrichshain", "Bergmannkiez"], "Neukölln": ["Trendy Area"] } },
        "Bavaria": { "Munich": { "Altstadt-Lehel": ["Marienplatz", "Odeonsplatz"], "Schwabing": ["English Garden", "Maxvorstadt"], "Glockenbachviertel": ["Nightlife"] }, "Nuremberg": { "Old Town": ["Castle Area"] } },
        "Hamburg": { "Hamburg City": { "Altona": ["Ottensen"], "Mitte": ["Hafencity", "St. Pauli"], "Eimsbüttel": ["Residential"] } },
        "Hesse": { "Frankfurt": { "Innenstadt": ["Zeil", "Römer"], "Bankenviertel": ["Financial District"], "Sachsenhausen": ["Museum Embankment"] } },
        "North Rhine-Westphalia": { "Cologne": { "Altstadt": ["Cathedral Area"], "Belgisches Viertel": ["Trendy"] }, "Düsseldorf": { "Altstadt": ["Longest Bar"], "MedienHafen": ["Modern Architecture"] } },
        "Baden-Württemberg": { "Stuttgart": { "Mitte": ["Schlossplatz"], "Bad Cannstatt": ["Mercedes Museum Area"] } }
    },
    "India": {
        "Maharashtra": { "Mumbai": { "South Mumbai": ["Colaba", "Marine Drive", "Fort", "Malabar Hill"], "Suburbs": ["Andheri", "Bandra", "Juhu", "Powai", "Versova"], "Navi Mumbai": ["Vashi", "Nerul"] }, "Pune": { "East": ["Koregaon Park", "Viman Nagar"], "West": ["Aundh", "Baner"] } },
        "Delhi": { "New Delhi": { "Central Delhi": ["Connaught Place", "Lutyens' Delhi"], "South Delhi": ["Hauz Khas", "Saket", "Vasant Kunj", "Defence Colony", "GK1", "GK2"], "Gurgaon (NCR)": ["Cyber City", "Golf Course Road", "Sohna Road"], "Noida (NCR)": ["Sector 18", "Sector 62"] } },
        "Karnataka": { "Bangalore": { "Central": ["MG Road", "Indiranagar", "Koramangala"], "East": ["Whitefield", "Marathahalli"], "South": ["Jayanagar", "JP Nagar", "HSR Layout"], "North": ["Hebbal"] } },
        "Tamil Nadu": { "Chennai": { "Central": ["T Nagar", "Nungambakkam", "Mylapore"], "South": ["Adyar", "Velachery", "Besant Nagar"] } },
        "Telangana": { "Hyderabad": { "West": ["Hitech City", "Gachibowli"], "Central": ["Banjara Hills", "Jubilee Hills", "Begumpet"] } },
        "West Bengal": { "Kolkata": { "Central": ["Park Street", "New Market"], "South": ["Ballygunge", "Alipore"], "North": ["Salt Lake", "New Town"] } },
        "Rajasthan": { "Jaipur": { "Pink City": ["Hawa Mahal Area"], "Modern": ["C Scheme", "Vaishali Nagar"] } },
        "Gujarat": { "Ahmedabad": { "West": ["Satellite", "Vastrapur"], "Old City": ["Manek Chowk"] } },
        "Kerala": { "Kochi": { "Fort Kochi": ["Heritage Area"], "Ernakulam": ["City Center"] } }
    },
    "Indonesia": {
        "Jakarta": { "Central Jakarta": { "Menteng": ["Residential"], "Thamrin": ["Business District"] }, "South Jakarta": { "Kebayoran Baru": ["Senopati"], "Kemang": ["Expat Area"] }, "Bali": { "Denpasar": ["Sanur"], "Badung": ["Kuta", "Seminyak", "Canggu", "Uluwatu"], "Gianyar": ["Ubud"] } }
    },
    "Italy": {
        "Lazio": { "Rome": { "Centro Storico": ["Trastevere", "Testaccio", "Prati", "Monti", "Trevi", "Navona"] } },
        "Lombardy": { "Milan": { "Centro": ["Brera", "Navigli", "Porta Nuova", "Isola", "Quadrilatero della Moda"] } },
        "Campania": { "Naples": { "Centro Storico": ["Vomero", "Posillipo", "Spaccanapoli"] } },
        "Tuscany": { "Florence": { "Duomo Area": ["Uffizi"], "Oltrarno": ["Santo Spirito"] } },
        "Veneto": { "Venice": { "San Marco": ["Rialto"], "Cannaregio": ["Ghetto"] } },
        "Piedmont": { "Turin": { "Centro": ["Piazza Castello"], "San Salvario": ["Nightlife"] } },
        "Emilia-Romagna": { "Bologna": { "Centro": ["University Area", "Maggiore Plaza"] } }
    },
    "Japan": {
        "Tokyo": { "Tokyo City": { "Shibuya": ["Harajuku", "Ebisu", "Daikanyama", "Yoyogi"], "Shinjuku": ["Kabukicho", "West Shinjuku", "Shinjuku Gyoen", "Kagurazaka"], "Minato": ["Roppongi", "Akasaka", "Aoyama", "Azabu-Juban", "Odaiba"], "Chuo": ["Ginza", "Nihonbashi", "Tsukiji"], "Chiyoda": ["Marunouchi", "Otemachi", "Akihabara"], "Taito": ["Asakusa", "Ueno"], "Meguro": ["Nakameguro"] } },
        "Osaka": { "Osaka City": { "Chuo": ["Namba", "Shinsaibashi", "Dotonbori"], "Kita": ["Umeda", "Kitashinchi"], "Tennoji": ["Tennoji Park"], "Naniwa": ["Nippombashi"] } },
        "Kyoto": { "Kyoto City": { "Higashiyama": ["Gion", "Kiyomizu", "Sannenzaka"], "Nakagyo": ["Nishiki Market", "Pontocho"], "Arashiyama": ["Bamboo Grove"], "Fushimi": ["Inari"] } },
        "Hokkaido": { "Sapporo": { "Chuo": ["Odori Park", "Susukino"], "Kita": ["Sapporo Station"] } },
        "Aichi": { "Nagoya": { "Naka": ["Sakae"], "Nakamura": ["Nagoya Station Area"] } },
        "Fukuoka": { "Fukuoka City": { "Hakata": ["Station Area"], "Chuo": ["Tenjin", "Daimyo"] } }
    },
    "Jordan": {
        "Amman": {
            "Amman City": {
                "Abdoun": ["North Abdoun", "South Abdoun", "Circle 4", "Abdoun Bridge Area"],
                "Sweifieh": ["Wakalat Street", "Barakat District", "Galleria Area", "Cozmo Area"],
                "Khalda": ["Area 1", "Area 2", "Dabuq", "Sports City"],
                "Jabal Amman": ["Rainbow Street", "Webdeh", "First Circle", "Second Circle", "Third Circle"],
                "Tla' Al-Ali": ["University Rd", "Gardens St", "Mecca Mall Area"],
                "Deir Ghbar": ["Residential Area", "Commercial District"],
                "Shmeisani": ["Business District", "Housing Bank Area", "Baraka Mall Area"],
                "Jabal Al-Hussein": ["Downtown Area", "King Hussein Mosque Area"],
                "Jabal Al-Weibdeh": ["Art Galleries District", "Rainbow Street Extension"],
                "Umm Uthaina": ["Residential 1", "Residential 2", "Safeway Area"],
                "Marj Al-Hamam": ["New Marj", "Old Marj", "Highway Area"],
                "Marka": ["Airport Area", "Marka North", "Marka South"],
                "Tabarbour": ["Industrial Area", "Residential Area"],
                "Sahab": ["Industrial City", "Residential Area"],
                "Al-Jandaweel": ["Residential District"],
                "Wadi Saqra": ["Residential Area"],
                "Abu Nseir": ["Residential 1", "Residential 2"],
                "Sweileh": ["University Area", "Residential District", "Sweileh Center"],
                "Jubaiha": ["University of Jordan Area", "Residential"],
                "Al-Zarqa Highway": ["Commercial Strip"]
            }
        },
        "Irbid": {
            "Irbid City": {
                "University District": ["Yarmouk University Area", "Student Housing", "University Street"],
                "Al-Huson": ["Center", "Northern District", "Southern District"],
                "Downtown Irbid": ["Al-Hashemi Street", "Municipality Circle", "Old City"],
                "Al-Naseem": ["Residential Area 1", "Residential Area 2"],
                "Princess Basma": ["Hospital Area", "Residential"],
                "Al-Hay Al-Sharqi": ["Eastern Neighborhood"],
                "Al-Hay Al-Janubi": ["Southern Neighborhood"],
                "Beit Ras": ["Archaeological Site", "Center"]
            },
            "Ramtha": { "Center": ["Border Area", "Commercial District", "Residential"] }
        },
        "Zarqa": {
            "Zarqa City": {
                "New Zarqa": ["Block 1", "Block 2", "Block 3", "Block 4"],
                "Free Zone": ["Industrial Area", "Logistics Hub"],
                "Russeifa": ["Main District", "Residential Area"],
                "Hashemite University Area": ["Campus District", "Student Housing"],
                "Downtown Zarqa": ["Old City", "Commercial Center"],
                "Al-Zarqa Al-Jadida": ["New Development Area"]
            }
        },
        "Aqaba": {
            "Aqaba City": {
                "Tala Bay": ["Resorts Area", "Beach Front"],
                "Ayla": ["Marina District", "Golf Course", "Residential"],
                "City Center": ["Souq Area", "Corniche", "Downtown"],
                "South Beach": ["Hotels Strip", "Beach Clubs"],
                "Industrial Area": ["Port Area", "Free Zone"]
            }
        },
        "Madaba": {
            "Madaba City": {
                "Center": ["Mosaic Map Area", "Church Street", "Old City"],
                "Mount Nebo Area": ["Tourist Area", "Religious Sites"],
                "New Madaba": ["Residential District"]
            }
        },
        "Balqa": {
            "Salt City": { "Center": ["Old Salt", "Abu Jaber Street", "Historic District"], "New Salt": ["Residential Area"] },
            "Fuheis": { "Center": ["Main Street", "Church Area"] },
            "Ain Al-Basha": { "Center": ["Residential District"] }
        },
        "Karak": {
            "Karak City": { "Castle Area": ["Old City", "Historic District"], "Center": ["Commercial District", "Residential"] },
            "Mazar": { "Center": ["Main District"] }
        },
        "Mafraq": {
            "Mafraq City": { "Center": ["Downtown", "Commercial Area"], "Highway Area": ["Border Road"] },
            "Zaatari": { "Refugee Camp Area": ["Camp District"] }
        },
        "Tafilah": {
            "Tafilah City": { "Center": ["Main District", "Old City"] },
            "Dana": { "Nature Reserve Area": ["Eco-Tourism District"] }
        },
        "Ma'an": {
            "Ma'an City": { "Center": ["Downtown", "Residential"] },
            "Petra": { "Archaeological Site": ["Wadi Musa", "Tourist Area", "Hotels District"] }
        },
        "Ajloun": {
            "Ajloun City": { "Castle Area": ["Historic District", "Forest Area"], "Center": ["Downtown"] }
        },
        "Jerash": {
            "Jerash City": { "Archaeological Site": ["Roman Ruins Area", "South Gate"], "Center": ["Modern City", "Commercial District"] }
        }
    },
    "Kuwait": {
        "Al Asimah": { "Kuwait City": { "Sharq": ["Area 1", "Area 2", "Dasmān", "Al-Mirqāb"], "Bneid Al-Gar": ["Gulf Road Area", "Internal Area"], "Dasman": ["Palace Area", "Embassy District"], "Shuwaikh": ["Industrial 1", "Industrial 2", "Administrative Area"], "Rawda": ["Block 1", "Block 3"], "Abdullah Al-Salem": ["Residential 1", "Residential 2"] } },
        "Hawalli": { "Salmiya": { "Block 1": ["Salem Al-Mubarak St", "Gulf Road"], "Block 10": ["Residential", "Commercial"], "Block 12": ["Area A", "Area B"], "Block 4": ["Residential District"] }, "Hawalli City": { "Block 1": ["Tunis St", "Beirut St"], "Block 7": ["Bin Khaldoun St"] }, "Jabriya": ["Block 1", "Block 3", "Block 9"], "Mishref": ["Exhibition Area", "Residential"] },
        "Farwaniya": { "Farwaniya City": { "Block 1": ["Airport Rd Area"], "Block 4": ["Central Area"] }, "Khaitan": { "Block 1": ["Residential"], "Block 2": ["Commercial"] }, "Riggai": ["Residential Hub"], "Ardiya": ["Industrial Area", "Residential Area"] },
        "Mubarak Al-Kabeer": { "Sabah Al-Salem": { "Block 1": ["Villas"], "Block 2": ["Apartments"], "Block 10": ["Residential"] }, "Qurain": ["Block 1", "Block 2"] },
        "Ahmadi": { "Fahaheel": { "Coastal Area": ["Malls Area", "Sea Side"], "Industrial": ["Fahaheel Industrial"] }, "Eqaila": { "Block 1": ["New Area"], "Block 2": ["The Gate Mall Area"] }, "Mangaf": ["Block 1", "Block 4"], "Mahboula": ["Block 1", "Block 2"] },
        "Jahra": { "Jahra City": { "Center": ["Commercial District"], "Industrial": ["Factories Area"] }, "Saad Al-Abdullah": ["Residential Area"] }
    },
    "Lebanon": {
        "Beirut": {
            "Beirut City": {
                "Hamra": ["Main St", "Side Streets", "Bliss St", "AUB Area"],
                "Achrafieh": ["Sassine Square", "ABC Area", "Mar Mitr", "Sodeco"],
                "Verdun": ["Shopping Area", "Dunnes District", "Verdun Street"],
                "Raouche": ["Pigeon Rocks Area", "Corniche", "Beach Front"],
                "Downtown": ["Solidere", "Saifi Village", "Martyrs Square", "Nejmeh Square"],
                "Ain El Mreisseh": ["Manara", "Sporting Club"],
                "Ras Beirut": ["Manara", "Rawche"],
                "Bachoura": ["Basta", "Mazraa"],
                "Rmeil": ["Gemmayze", "Mar Mikhael"],
                "Medawar": ["Port Area", "Charles Helou"]
            }
        },
        "Mount Lebanon": {
            "Jounieh": {
                "Kaslik": ["Commercial St", "USEK Area", "Highway"],
                "Harissa Area": ["Telepherique District", "Our Lady Statue"],
                "Maameltein": ["Coastal", "Residential"],
                "Sarba": ["Residential District"]
            },
            "Byblos (Jbeil)": {
                "Old Town": ["Souq Area", "Port District", "Crusader Castle"],
                "New Jbeil": ["Residential", "Commercial"]
            },
            "Baabda": {
                "Baabda Center": ["Presidential Palace Area", "Residential"],
                "Hazmieh": ["Commercial District", "Residential"],
                "Sin El Fil": ["Commercial Area", "Residential"]
            },
            "Aley": {
                "Aley City": ["Mountain Town", "Summer Resort"],
                "Bhamdoun": ["Mountain Resort", "Train Station Area"]
            },
            "Metn": {
                "Jdeideh": ["Commercial District", "Residential"],
                "Dora": ["Highway Area", "Commercial"],
                "Dbayeh": ["Coastal", "Commercial"],
                "Antelias": ["Residential", "Commercial"]
            },
            "Keserwan": {
                "Jounieh City": ["Bay Area", "Maameltein"],
                "Faraya": ["Ski Resort", "Mountain Area"]
            },
            "Chouf": {
                "Beiteddine": ["Palace Area", "Historic"],
                "Deir El Qamar": ["Historic Town", "Old City"]
            }
        },
        "North Lebanon": {
            "Tripoli": {
                "Al-Mina": ["Port Area", "Coastal"],
                "El-Tall": ["Clock Tower Area", "Souks"],
                "Abu Samra": ["Residential District"],
                "Zahrieh": ["Residential Area"],
                "Bab Al-Raml": ["Commercial District"]
            },
            "Zgharta": {
                "Zgharta City": ["Center", "Residential"],
                "Ehden": ["Mountain Resort", "Summer Town"]
            },
            "Batroun": {
                "Batroun City": ["Old Town", "Beach Area", "Phoenician Wall"]
            },
            "Koura": {
                "Amioun": ["Center", "Residential"]
            },
            "Bcharreh": {
                "Bcharreh Town": ["Cedars Area", "Mountain District"]
            },
            "Minieh-Danniyeh": {
                "Minieh": ["Coastal Area", "Agricultural"]
            }
        },
        "South Lebanon": {
            "Saida (Sidon)": {
                "Coastal": ["Sea Castle Area", "Corniche"],
                "Market": ["Old Souq", "Khan El Franj"],
                "Ain El Helweh": ["Residential Area"]
            },
            "Tyre (Sour)": {
                "Old City": ["Harbor Area", "Souks"],
                "Beach Side": ["Resorts Area", "Archaeological Site"],
                "Al Bass": ["Roman Hippodrome", "Necropolis"]
            },
            "Nabatieh": {
                "Nabatieh City": ["Center", "Market Area"]
            },
            "Jezzine": {
                "Jezzine Town": ["Waterfall Area", "Mountain Resort"]
            }
        },
        "Bekaa": {
            "Zahle": {
                "Zahle City": ["Bardouni Area", "Wine District", "Center"],
                "Wadi El Arayesh": ["Restaurant Street"]
            },
            "Baalbek": {
                "Baalbek City": ["Roman Temples", "Old City", "Center"]
            },
            "Rashaya": {
                "Rashaya City": ["Castle Area", "Historic Town"]
            },
            "West Bekaa": {
                "Joub Jannine": ["Agricultural Area"]
            }
        },
        "Nabatieh": {
            "Nabatieh City": { "Center": ["Market Area", "Residential"], "Kfar Roummane": ["Residential District"] }
        },
        "Akkar": {
            "Halba": { "Center": ["Downtown", "Market Area"] },
            "Akkar El Atika": { "Coastal": ["Beach Area", "Agricultural"] }
        },
        "Baalbek-Hermel": {
            "Baalbek City": { "Temples Area": ["Roman Ruins", "UNESCO Site"], "Center": ["Downtown", "Souks"] },
            "Hermel": { "Center": ["Border Area", "Residential"] }
        }
    },
    "Libya": {
        "Tripoli": {
            "Tripoli City": {
                "Hay Al Andalus": ["Area 1", "Area 2", "Regatta"],
                "Gargaresh": ["Business District", "Shopping Area", "Beach Road"],
                "Ben Ashour": ["Embassy District", "Commercial", "Residential"],
                "Al-Sarraj": ["Residential", "Commercial"],
                "Green Belt": ["Modern Area", "Residential"],
                "Soug Al-Juma": ["Market District", "Residential"],
                "Ain Zara": ["Residential Area", "Commercial"],
                "Tajoura": ["Coastal Area", "Residential"],
                "Fashloum": ["Residential District"],
                "Abu Salim": ["Residential Area"]
            }
        },
        "Benghazi": {
            "Benghazi City": {
                "Al Fuwayhat": ["Residential 1", "Residential 2", "Commercial"],
                "Al-Sabri": ["Coastal Area", "Beach Front"],
                "Center": ["Freedom Square Area", "Downtown"],
                "Al-Keesh": ["Residential District"],
                "Sidi Hussein": ["Residential Area"],
                "Benina": ["Airport Area", "Residential"]
            }
        },
        "Misrata": {
            "Misrata City": {
                "Center": ["Commercial District", "Downtown"],
                "Industrial": ["Port Area", "Free Zone"],
                "Residential": ["New Misrata", "Old City"]
            }
        },
        "Zawiya": {
            "Zawiya City": {
                "Center": ["Downtown", "Market Area"],
                "Refinery Area": ["Industrial Zone"],
                "Beach Area": ["Coastal District"]
            }
        },
        "Bayda": {
            "Bayda City": { "Green Mountain": ["Mountain District", "Agricultural"], "Center": ["Downtown", "Residential"] }
        },
        "Gharyan": {
            "Gharyan City": { "Mountain Area": ["Cave Houses", "Historic"], "Center": ["Downtown", "Market"] }
        },
        "Khoms": {
            "Khoms City": { "Leptis Magna": ["Roman Ruins", "Archaeological Site"], "Center": ["Downtown", "Port Area"] }
        },
        "Zliten": {
            "Zliten City": { "Center": ["Downtown", "Market Area"], "Beach Area": ["Coastal District"] }
        },
        "Marj": {
            "Marj City": { "Center": ["Downtown", "Agricultural Area"] }
        },
        "Tobruk": {
            "Tobruk City": { "Port Area": ["Harbor", "Historic"], "Center": ["Downtown", "War Cemetery Area"] }
        },
        "Ajdabiya": {
            "Ajdabiya City": { "Center": ["Downtown", "Oil District"] }
        },
        "Derna": {
            "Derna City": { "Center": ["Downtown", "Valley Area"], "Beach Area": ["Coastal District"] }
        },
        "Sirte": {
            "Sirte City": { "Center": ["Downtown", "Coastal"], "Ouagadougou Conference Hall": ["Historic Area"] }
        },
        "Sabha": {
            "Sabha City": { "Center": ["Downtown", "Sahara Gateway"], "Old Town": ["Historic District"] }
        },
        "Murzuq": {
            "Murzuq City": { "Oasis": ["Palm Grove", "Old Fort"], "Sahara": ["Desert Area"] }
        },
        "Ubari": {
            "Ubari City": { "Lakes Area": ["Sahara Lakes", "Tourist District"], "Center": ["Downtown", "Oasis"] }
        },
        "Ghat": {
            "Ghat City": { "Old Town": ["Historic Ksour", "Sahara"], "Akakus": ["Rock Art Area", "UNESCO Site"] }
        },
        "Nalut": {
            "Nalut City": { "Mountain Area": ["Berber Villages", "Granaries"], "Center": ["Downtown"] }
        },
        "Jadu": {
            "Jadu City": { "Mountain District": ["Berber Town", "Historic"] }
        },
        "Bani Walid": {
            "Bani Walid City": { "Center": ["Downtown", "Mountain Area"] }
        },
        "Tarhuna": {
            "Tarhuna City": { "Center": ["Downtown", "Agricultural District"] }
        },
        "Sabratha": {
            "Sabratha City": { "Archaeological Site": ["Roman Ruins", "UNESCO"], "Center": ["Downtown", "Beach"] }
        }
    },
    "Malaysia": {
        "Kuala Lumpur": { "KL City": { "KLCC": ["Petronas Towers Area"], "Bukit Bintang": ["Shopping District"], "Bangsar": ["Residential"], "Mont Kiara": ["Expat Area"] } },
        "Selangor": { "Petaling Jaya": { "Damansara": ["Uptown"], "Bandar Sunway": ["Resort City"] } },
        "Penang": { "George Town": { "Heritage Zone": ["Armenian St"], "Gurney Drive": ["Coastal"] } }
    },
    "Morocco": {
        "Casablanca-Settat": {
            "Casablanca": {
                "Maarif": ["Shopping District", "Twin Center Area", "Boulevard Zerktouni"],
                "Anfa": ["Casablanca Finance City", "Ain Diab", "Beach Front"],
                "Sidi Maarouf": ["Business Park", "Tech City", "Zenata"],
                "Bouskoura": ["Golf City", "Green Town"],
                "Gauthier": ["Downtown", "Commercial District"],
                "Bourgogne": ["Residential Area", "Shopping"],
                "Hay Hassani": ["Residential District"],
                "Sidi Bernoussi": ["Industrial Area", "Residential"]
            },
            "Settat": { "Center": ["Downtown", "Market Area"] },
            "El Jadida": { "Portuguese City": ["UNESCO Site", "Old Medina"], "Beach Area": ["Coastal District"] },
            "Mohammedia": { "Port Area": ["Harbor", "Beach"], "Center": ["Downtown"] }
        },
        "Rabat-Salé-Kénitra": {
            "Rabat": {
                "Agdal": ["High End", "Train Station Area", "Residential"],
                "Hay Riad": ["Business Hub", "Prestigia", "Mahaj Riad"],
                "Souissi": ["Embassy Area", "Villas", "Diplomatic Quarter"],
                "Hassan": ["Royal Palace Area", "Medina"],
                "Yacoub El Mansour": ["Residential District"],
                "Hay Nahda": ["Residential Area"]
            },
            "Salé": {
                "Marina": ["River Side", "Bouregreg"],
                "Hay Salam": ["Residential", "Commercial"],
                "Medina": ["Old City", "Souks"],
                "Tabriquet": ["Residential District"]
            },
            "Kénitra": {
                "Center": ["Downtown", "Market Area"],
                "Mehdia": ["Beach Area", "Plage"]
            },
            "Témara": { "Center": ["Residential District", "Beach Area"] }
        },
        "Marrakech-Safi": {
            "Marrakech": {
                "Gueliz": ["Modern", "European Quarter", "Plaza Area", "Avenue Mohammed V"],
                "Medina": ["Old City", "Jemaa el-Fnaa", "Souks", "Koutoubia"],
                "Hivernage": ["Luxury Hotels", "Nightlife"],
                "Palmeraie": ["Resort Area", "Golf Courses", "Luxury Villas"],
                "Agdal": ["Residential District", "Gardens"],
                "Targa": ["Residential Area", "Commercial"]
            },
            "Safi": { "Port Area": ["Harbor", "Fishing Port"], "Medina": ["Old City", "Pottery District"] },
            "Essaouira": { "Medina": ["UNESCO Site", "Old Port"], "Beach Area": ["Windsurfing", "Coastal"] }
        },
        "Fez-Meknes": {
            "Fez": {
                "Fes El Bali": ["Old City", "UNESCO Site", "Medina", "Souks"],
                "Ville Nouvelle": ["Modern District", "Commercial", "Avenue Hassan II"],
                "Fes El Jdid": ["Royal Palace Area", "Mellah"]
            },
            "Meknes": {
                "Hamria": ["Business Center", "Residential"],
                "Medina": ["Old City", "Bab Mansour"],
                "Ville Nouvelle": ["Modern District"]
            },
            "Ifrane": { "Center": ["Mountain Resort", "Al Akhawayn University"] }
        },
        "Tangier-Tetouan-Al Hoceima": {
            "Tangier": {
                "Malabata": ["Beach Front", "Coastal"],
                "Ville Nouvelle": ["Boulevard Mohammed V", "Commercial"],
                "Medina": ["Kasbah Area", "Old City", "Souks"],
                "Boubana": ["Residential District"],
                "Cap Spartel": ["Cape Area", "Lighthouse"]
            },
            "Tetouan": { "Medina": ["UNESCO Site", "Old City"], "Ensanche": ["Spanish Quarter"] },
            "Al Hoceima": { "Beach Area": ["Mediterranean Coast", "Quemado Beach"] }
        },
        "Agadir-Souss Massa": {
            "Agadir": {
                "Agadir Bay": ["Beach Hotels", "Promenade"],
                "Talborjt": ["Historic", "Kasbah"],
                "Nouveau Talborjt": ["Modern District", "Shopping"],
                "Marina": ["Port Area", "Yacht Club"]
            },
            "Taroudant": { "Medina": ["Old City", "Ramparts"] },
            "Tiznit": { "Medina": ["Silver City", "Old Town"] }
        },
        "Oriental": {
            "Oujda": { "Center": ["Downtown", "Market Area"], "Medina": ["Old City"] },
            "Nador": { "Port Area": ["Harbor", "Beach"], "Center": ["Downtown"] },
            "Berkane": { "Center": ["Agricultural Area", "Citrus Region"] }
        },
        "Drâa-Tafilalet": {
            "Errachidia": { "Center": ["Downtown", "Oasis"], "Ziz Valley": ["Palm Groves"] },
            "Ouarzazate": { "Center": ["Film Studios", "Kasbah"], "Ait Benhaddou": ["UNESCO Site", "Ksar"] },
            "Zagora": { "Desert Gateway": ["Sahara", "Palm Grove"] }
        },
        "Souss-Massa": {
            "Agadir City": { "Beach Front": ["Hotels Strip", "Marina"], "Center": ["Downtown", "Souks"] },
            "Inezgane": { "Market Area": ["Commercial District"] }
        },
        "Guelmim-Oued Noun": {
            "Guelmim": { "Center": ["Camel Market", "Desert Gateway"] },
            "Tan-Tan": { "Beach Area": ["Atlantic Coast", "Plage Blanche"] }
        },
        "Laâyoune-Sakia El Hamra": {
            "Laâyoune": { "Center": ["Downtown", "Sahara Capital"] },
            "Boujdour": { "Coastal Area": ["Atlantic Coast"] }
        },
        "Dakhla-Oued Ed-Dahab": {
            "Dakhla": { "Lagoon Area": ["Kite Surfing", "Water Sports"], "Center": ["Downtown", "Port"] }
        },
        "Béni Mellal-Khénifra": {
            "Béni Mellal": { "Center": ["Downtown", "Ain Asserdoun"], "Ouzoud": ["Waterfalls Area"] },
            "Khénifra": { "Center": ["Downtown", "Atlas Mountains"] }
        }
    },
    "Netherlands": {
        "North Holland": { "Amsterdam": { "Centrum": ["Dam Square", "Red Light District", "Jordaan"], "Zuid": ["De Pijp", "Museum Quarter"], "Oost": ["Oosterpark"] } },
        "South Holland": { "Rotterdam": { "Centrum": ["Markthal"], "Kop van Zuid": ["Modern"] }, "The Hague": { "Centrum": ["Binnenhof"], "Scheveningen": ["Beach"] } }
    },
    "Oman": {
        "Muscat": { "Muscat City": { "Al Mouj": ["The Wave", "Marina", "Golf District"], "Madinat Al Sultan Qaboos": ["Residential Hub", "The Village Area"], "Al Qurum": ["Shatti Al Qurum", "PDO Area", "Al Qurum 16"], "Bousher": ["Al Ghubra", "Al Azaiba", "Gala"], "Muttrah": ["Corniche", "Souq Area", "Old Muscat"] }, "Seeb": { "Al Khoudh": ["University St", "Commercial", "New Khoudh"], "Al Maabelah": ["Block 1", "Block 4", "South Maabelah"] } },
        "Dhofar": { "Salalah": { "Dahariz": ["Beach Side", "North Dahariz"], "Saada": ["North Saada", "South Saada", "New Saada"], "Salalah Center": ["Central Market Area", "Haffa Souq"] } },
        "Al Batinah North": { "Sohar": { "Falaj Al Moala": ["Industrial Area"], "Sohar Waterfront": ["Coastal Road", "Al Hambar"] } },
        "Al Batinah South": { "Barka": { "Barka Center": ["Area 1", "Resorts Area"] } },
        "Ad Dakhiliyah": { "Nizwa": { "Nizwa Souq": ["Historic District", "Firq"] } },
        "Ash Sharqiyah South": { "Sur": { "Coastal Area": ["Sur Port Area", "Al Ayjah"] } }
    },
    "Portugal": {
        "Lisbon": { "Lisbon City": { "Baixa": ["Chiado", "Rossio"], "Alfama": ["Historic"], "Belém": ["Tower Area"], "Parque das Nações": ["Expo Area"] }, "Cascais": { "Center": ["Beach Area"] } },
        "Porto": { "Porto City": { "Ribeira": ["River Side"], "Baixa": ["Clerigos"], "Foz do Douro": ["Coastal"] } },
        "Algarve": { "Faro": { "Center": ["Marina"] }, "Lagos": { "Center": ["Old Town"] }, "Albufeira": { "Old Town": ["The Strip"] } }
    },
    "Qatar": {
        "Doha": {
            "Doha City": {
                "The Pearl": ["Porto Arabia", "Viva Bahriya", "Qanat Quartier", "Abraj Quartier", "Floresta Gardens"],
                "West Bay": ["Diplomatic Area", "West Bay Lagoon", "Zig Zag Towers", "Al Dafna"],
                "Lusail": ["Marina District", "Fox Hills", "Waterfront", "Entertainment City", "Energy City"],
                "Msheireb": ["Downtown Doha", "Heritage Quarter"],
                "Al Waab": ["Baaya", "Al Aziziya", "Villaggio Area"],
                "Al Sadd": ["Al Sadd Metro Area", "Commercial"],
                "Bin Mahmoud": ["North", "South"]
            }
        },
        "Al Rayyan": {
            "Al Rayyan City": {
                "Education City": ["University Area", "Qatar Foundation"],
                "Aspire Zone": ["Villaggio Area", "Khalifa Stadium Area"],
                "Muaither": ["North Muaither", "South Muaither"],
                "Gharafa": ["North", "South"]
            }
        },
        "Al Wakrah": { "Al Wakrah City": { "Ezdan Village": ["Area A", "Area B", "Area C"], "Coastal": ["Souq Al Wakrah Area", "Al Wakrah Beach"] } },
        "Al Khor": { "Al Khor City": { "Al Khor Community": ["Blue Area", "Red Area"], "Coastal": ["Corniche Area", "Al Thakira"] } }
    },
    "Russia": {
        "Moscow": { "Moscow City": { "Central": ["Arbat", "Tverskoy", "Kitay-Gorod"], "Presnensky": ["Moscow City District", "Patriarch Ponds"], "Zamoskvorechye": ["Tretyakov Area"] } },
        "Saint Petersburg": { "Saint Petersburg City": { "Tsentralny": ["Nevsky Prospect", "Hermitage Area"], "Vasileostrovsky": ["Island"], "Petrogradsky": ["Fortress Area"] } }
    },
    "Saudi Arabia": {
        "Riyadh Region": {
            "Riyadh City": {
                "North Riyadh": ["Al-Hittin", "Al-Malqa", "Al-Yasmin", "Al-Sahafa", "Al-Narjis", "Al-Qirawan", "Al-Aqiq", "Al-Nakheel", "Al-Ghadir", "Al-Rabie"],
                "East Riyadh": ["Al-Rawdah", "Al-Rayyan", "Al-Munsiyah", "Al-Qadisiyah", "Al-Yarmouk", "Al-Hamra", "Gharnatah", "Ishbiliyah", "Al-Nahda"],
                "Center Riyadh": ["Al-Olaya", "Al-Sulaimaniyah", "Al-Wizarat", "Al-Murabba", "Al-Malaz", "Al-Ma'ther"],
                "West Riyadh": ["Al-Maazar", "Labn", "Tuwaiq", "Al-Arid", "Al-Zahra", "Al-Badia"],
                "South Riyadh": ["Al-Shifa", "Al-Aziziyah", "Al-Dar Al-Baida", "Badr", "Al-Suwaidi", "Al-Uraija"]
            },
            "Al-Kharj": { "Center": ["Al-Khalidiyah", "Al-Andalus", "Al-Nahda"] },
            "Ad-Dawadimi": { "Center": ["Main District"] }
        },
        "Makkah Region": {
            "Jeddah City": {
                "North Jeddah": ["Al-Basatin", "Al-Mohammadiyah", "Al-Shati", "Obhur Al-Shamaliyah", "Al-Naeem", "Al-Zahra", "Al-Bawadi", "Al-Salamah"],
                "East Jeddah": ["Al-Samer", "Al-Waha", "Al-Fahd", "Al-Musaid", "Al-Ajwad"],
                "Center Jeddah": ["Al-Rawdah", "Al-Hamraa", "Al-Andalus", "Al-Mushrifah", "Al-Faisaliyah", "Al-Rehab"],
                "South Jeddah": ["Al-Balad", "Al-Waziriyah", "Al-Thaghr", "Al-Khandra"]
            },
            "Makkah City": {
                "Central Area": ["Haram District", "Ash-Shishah", "Al-Aziziyah"],
                "Al-Shouqiyah": ["District 1", "District 2"],
                "Al-Awali": ["Residential 1", "Residential 2"],
                "Al-Zahir": ["Main Area"]
            },
            "Taif City": { "Resorts": ["Al-Shafa Area", "Al-Hada Area"], "Center": ["Al-Hawiyah", "Al-Qamariyah"] }
        },
        "Eastern Province": {
            "Dammam City": { "North Dammam": ["Al-Shati", "Al-Zohour"], "West Dammam": ["Al-Faisaliyah", "Al-Fursan"] },
            "Khobar City": { "North Khobar": ["Al-Khuzama", "Al-Rakah"], "South Khobar": ["Al-Hizam", "Al-Aziziyah"] },
            "Dhahran": { "Residential": ["Aramco District", "Al-Dana", "Al-Doha"] },
            "Al-Ahsa (Hofuf)": { "Center": ["Al-Mubarraz", "Koot District"] }
        },
        "Madinah Region": {
            "Madinah City": { "Central": ["Al-Haram Area", "Bada'ah"], "North": ["Al-Azhari", "Al-Nasr"] },
            "Yanbu": { "Yanbu Al-Sinaiyah": ["Sultan District", "Royal Commission"], "Yanbu Al-Bahr": ["Center"] }
        },
        "Qassim Region": { "Buraidah": { "Center": ["Al-Fayziyah", "Al-Isala"] }, "Unaizah": { "Center": ["Main District"] } },
        "Asir Region": { "Abha": { "Resorts": ["Al-Soudah", "Al-Sahab"], "Center": ["Al-Muftaha"] }, "Khamis Mushait": { "Center": ["Al-Hussam"] } },
        "Tabuk Region": { "Tabuk City": { "Center": ["Al-Murouj", "Al-Qadisiyah"], "NEOM Area": ["Dubba District"] } },
        "Hail Region": { "Hail City": { "Center": ["Ajja", "Salma"] } },
        "Jazan Region": { "Jazan City": { "Corniche": ["North Corniche", "South Corniche"] } },
        "Najran Region": { "Najran City": { "Center": ["Main District"] } },
        "Al Bahah Region": { "Al Bahah City": { "Center": ["Main Area"] } },
        "Al Jawf Region": { "Sakaka": { "Center": ["Al-Qurayyat Road Area"] } },
        "Northern Borders": { "Arar": { "Center": ["Main District"] } }
    },
    "Singapore": {
        "Singapore": { "Central Region": { "Marina Bay": ["Sands Area"], "Orchard": ["Shopping Belt"], "Chinatown": ["Historic"], "Sentosa": ["Resort Island"] } }
    },
    "South Korea": {
        "Seoul": { "Seoul City": { "Gangnam": ["Teheranno", "Apgujeong"], "Jongno": ["Historic"], "Hongdae": ["University Area"], "Itaewon": ["Expat District"], "Myeongdong": ["Shopping"] } },
        "Busan": { "Busan City": { "Haeundae": ["Beach Area"], "Seomyeon": ["Central"] } }
    },
    "South Africa": {
        "Gauteng": { "Johannesburg": { "Sandton": ["Bryanston", "Morningside", "Sandhurst"], "Rosebank": ["Mall Area"], "Soweto": ["Vilakazi Street"] }, "Pretoria": { "Hatfield": ["Arcadia"], "Menlyn": ["Shopping District"] } },
        "Western Cape": { "Cape Town": { "City Bowl": ["Sea Point", "Green Point", "Gardens", "V&A Waterfront"], "Atlantic Seaboard": ["Camps Bay", "Clifton"], "Southern Suburbs": ["Constantia", "Claremont"] } }
    },
    "Spain": {
        "Community of Madrid": { "Madrid": { "Salamanca": ["Recoletos", "Goya", "Castellana"], "Centro": ["Malasaña", "Chueca", "Retiro", "La Latina"], "Chamberí": ["Almagro"] } },
        "Catalonia": { "Barcelona": { "Eixample": ["Gràcia", "Sagrada Família"], "Ciutat Vella": ["Gothic Quarter", "El Born", "Barceloneta"], "Sarrià-Sant Gervasi": ["Pedralbes"], "Poblenou": ["Tech District"] } },
        "Andalusia": { "Seville": { "Casco Antiguo": ["Santa Cruz"], "Triana": ["Betis St Area"] }, "Malaga": { "Center": ["Malagueta", "Soho"] } },
        "Valencian Community": { "Valencia": { "Ciutat Vella": ["Carmen"], "Ruzafa": ["Hipster Area"], "Arts & Sciences": ["Modern"] } },
        "Basque Country": { "Bilbao": { "Abando": ["Guggenheim Area"], "Casco Viejo": ["Seven Streets"] } }
    },
    "Sudan": {
        "Khartoum State": {
            "Khartoum City": {
                "Khartoum Center": ["Al-Riyadh", "Al-Manshiya", "Al-Amarat", "Garden City", "Burri", "Al-Mugran", "Al-Manshiya"],
                "Khartoum South": ["Al-Giraif West", "Al-Kalakla", "Al-Azhari", "Al-Sahafa", "Al-Mamoura"],
                "Khartoum North (Bahri)": ["Kafouri", "Al-Sababi", "Al-Mazad", "Al-Danagla", "Shambat", "Al-Droshab", "Halfayat Al-Muluk"],
                "Omdurman City": ["Al-Muhandiseen", "Al-Urdah", "Al-Thawra (All Blocks)", "Bait Al-Mal", "Al-Fitaihab", "Al-Nakhil", "Al-Mulazmin"]
            }
        },
        "Red Sea State": { "Port Sudan City": { "Central Port Sudan": ["Al-Matar", "Al-Markazi", "Al-Shati", "Al-Ingaz", "Salalab"], "Suakin Area": ["Suakin Port", "Historic Area"] } },
        "Gezira State": { "Wad Madani City": { "Wad Madani Center": ["Al-Madiba", "Al-Zamalek", "Al-Daraga", "Al-Nasr", "Marangan"] }, "Al-Hasaheisa": { "Center": ["Locality 1", "Locality 2"] } },
        "River Nile State": { "Atbara": { "Center": ["Railway District", "District 1", "District 2"] }, "Ad-Damir": { "Center": ["Main District"] }, "Shendi": { "Center": ["Area A", "Area B"] } },
        "Northern State": { "Dongola": { "Center": ["District 1", "District 2"] }, "Wadi Halfa": { "Border Area": ["Customs District"] }, "Merowe": { "Dam Area": ["Residential Area 1"] } },
        "North Kordofan": { "Al-Ubayyid City": { "Center": ["Main Market", "Al-Nasr", "Al-Salam"] } },
        "South Kordofan": { "Kadugli City": { "Center": ["Main District"] } },
        "West Kordofan": { "Al-Fulah City": { "Center": ["Central Area"] } },
        "North Darfur": { "Al-Fashir City": { "Center": ["District 1", "District 2"] } },
        "South Darfur": { "Nyala City": { "Center": ["Airport Area", "Main Market"] } },
        "West Darfur": { "Geneina": { "Center": ["Main Area"] } },
        "Central Darfur": { "Zalingei": { "Center": ["Central District"] } },
        "East Darfur": { "Ad-Du'ayn": { "Center": ["Main District"] } },
        "White Nile": { "Rabak City": { "Center": ["Area 1"] }, "Kosti": { "River Port Area": ["Main Market"] } },
        "Blue Nile": { "Ad-Damazin": { "Center": ["Main District"] } },
        "Sennar State": { "Sennar City": { "Center": ["Old Sennar", "New Sennar"] }, "Singa": { "Center": ["Main Area"] } },
        "Kassala State": { "Kassala City": { "Center": ["West Gash", "East Gash", "Al-Shorouq"] } },
        "Al Qadarif State": { "Al Qadarif City": { "Center": ["As-Salam", "Al-Ikhlas", "Commercial District"] } }
    },
    "Sweden": {
        "Stockholm": { "Stockholm City": { "Norrmalm": ["City Center"], "Södermalm": ["Hipster Area"], "Östermalm": ["Luxury"], "Gamla Stan": ["Old Town"] } },
        "Västra Götaland": { "Gothenburg": { "Centrum": ["Avenyn"], "Majorna": ["Residential"] } },
        "Skåne": { "Malmö": { "Centrum": ["Old Town"], "Västra Hamnen": ["Turning Torso Area"] } }
    },
    "Switzerland": {
        "Zurich": { "Zurich City": { "Altstadt": ["Niederdorf"], "Seefeld": ["Lake Side"], "Zurich West": ["Industrial Chic"] } },
        "Geneva": { "Geneva City": { "Cité-Centre": ["Old Town"], "Pâquis": ["Nightlife"], "Eaux-Vives": ["Jet d'Eau"] } }
    },
    "Thailand": {
        "Bangkok": { "Bangkok City": { "Sukhumvit": ["Asok", "Thong Lo", "Ekkamai"], "Silom": ["Business District"], "Siam": ["Shopping Center"], "Old City": ["Khaosan"] } },
        "Phuket": { "Phuket City": { "Patong": ["Beach Road", "Bangla Road"], "Old Town": ["Heritage Street"] } },
        "Chiang Mai": { "Chiang Mai City": { "Old City": ["Moat Area"], "Nimman": ["Trendy Area"] } }
    },
    "Tunisia": {
        "Tunis": {
            "Tunis City": {
                "Les Berges du Lac": ["Lac 1", "Lac 2", "Lac 3"],
                "La Marsa": ["Beach Front", "Sidi Bou Said Area", "Gammarth", "Marsa Corniche"],
                "Carthage": ["Historic Area", "Amphitheatre District", "Presidential Palace Area"],
                "Centre Urbain Nord": ["Business District", "Commercial Area"],
                "Ennasr": ["Ennasr 1", "Ennasr 2"],
                "El Menzah": ["Menzah 5", "Menzah 6", "Menzah 7", "Menzah 8", "Menzah 9"],
                "Manar": ["Manar 1", "Manar 2", "Manar 3"],
                "Ariana": ["Ariana Center", "Ariana Ville", "Soukra"],
                "Medina": ["Old City", "Zitouna Mosque Area", "Souks"],
                "Lafayette": ["Downtown", "Avenue Habib Bourguiba"],
                "Mutuelleville": ["Residential District"]
            }
        },
        "Ariana": {
            "Ariana City": { "Center": ["Ariana Essoughra", "Borj Louzir"], "Soukra": ["Residential Area"], "Raoued": ["Beach Area", "Residential"] },
            "La Soukra": { "Center": ["Main District"] }
        },
        "Ben Arous": {
            "Ben Arous City": { "Center": ["Downtown", "Industrial Area"] },
            "Hammam Lif": { "Beach Area": ["Corniche", "Thermal Baths"] },
            "Rades": { "Port Area": ["Industrial Zone", "Residential"] },
            "Megrine": { "Center": ["Residential District"] }
        },
        "Manouba": {
            "Manouba City": { "Center": ["Downtown", "University Area"] },
            "Oued Ellil": { "Center": ["Residential District"] },
            "Douar Hicher": { "Center": ["Main Area"] }
        },
        "Nabeul": {
            "Nabeul City": { "Center": ["Medina", "Beach Area", "Pottery District"] },
            "Hammamet": { "Yasmine Hammamet": ["Tourist Zone", "Marina"], "Old Hammamet": ["Medina", "Beach"], "North Hammamet": ["Hotels Strip"] },
            "Kelibia": { "Fort Area": ["Historic District", "Beach"] },
            "Korba": { "Center": ["Agricultural Area"] }
        },
        "Zaghouan": {
            "Zaghouan City": { "Center": ["Water Temple Area", "Mountain District"] },
            "Bir Mcherga": { "Center": ["Main District"] }
        },
        "Bizerte": {
            "Bizerte City": { "Old Port": ["Medina", "Kasbah"], "Corniche": ["Beach Area"], "Center": ["Downtown"] },
            "Menzel Bourguiba": { "Center": ["Main District"] },
            "Ras Jebel": { "Beach Area": ["Coastal District"] }
        },
        "Beja": {
            "Beja City": { "Center": ["Downtown", "Agricultural Market"] },
            "Medjez el-Bab": { "Center": ["Main District"] },
            "Testour": { "Center": ["Historic Town"] }
        },
        "Jendouba": {
            "Jendouba City": { "Center": ["Downtown", "Market Area"] },
            "Tabarka": { "Beach Area": ["Coral Coast", "Marina", "Fort Area"] },
            "Ain Draham": { "Mountain Area": ["Forest District", "Tourist Area"] }
        },
        "Kef": {
            "Kef City": { "Kasbah Area": ["Historic District", "Old City"], "Center": ["Downtown"] },
            "Dahmani": { "Center": ["Main District"] }
        },
        "Siliana": {
            "Siliana City": { "Center": ["Downtown", "Agricultural Area"] },
            "Makthar": { "Archaeological Site": ["Roman Ruins Area"] }
        },
        "Sousse": {
            "Sousse City": {
                "Port El Kantaoui": ["Resort Area", "Golf Course Area", "Marina"],
                "Hammam Sousse": ["Coastal Area", "Hotels Strip"],
                "Sousse Medina": ["Historic Old City", "Ribat Area"],
                "Sousse Ville": ["Downtown", "Commercial District"],
                "Khezama": ["Residential Area"]
            }
        },
        "Monastir": {
            "Monastir City": {
                "Skanes": ["Resorts Area", "Beach Front"],
                "Marina": ["Port Area", "Yacht Club"],
                "Medina": ["Old City", "Ribat"],
                "Dkhila": ["Beach Area"]
            }
        },
        "Mahdia": {
            "Mahdia City": { "Old City": ["Medina", "Skifa Kahla"], "Beach Area": ["Corniche", "Hotels Zone"] },
            "El Jem": { "Amphitheatre Area": ["Roman Colosseum District"] }
        },
        "Sfax": {
            "Sfax City": {
                "Sakiet Ezzit": ["Residential Area 1", "Residential Area 2"],
                "Sfax Port": ["Harbor Area", "Industrial Zone"],
                "Medina": ["Old City", "Souks"],
                "Sfax Ville": ["Downtown", "Commercial Center"],
                "Thyna": ["Beach Area"]
            }
        },
        "Kairouan": {
            "Kairouan City": { "Medina": ["Great Mosque Area", "Old City"], "Center": ["Downtown"], "Aghlabid Basins": ["Historic Area"] },
            "Haffouz": { "Center": ["Main District"] }
        },
        "Kasserine": {
            "Kasserine City": { "Center": ["Downtown", "Market Area"] },
            "Sbeitla": { "Archaeological Site": ["Roman Ruins"] },
            "Thala": { "Mountain Area": ["Highland District"] }
        },
        "Sidi Bouzid": {
            "Sidi Bouzid City": { "Center": ["Downtown", "Market Area"] },
            "Regueb": { "Center": ["Main District"] }
        },
        "Gabes": {
            "Gabes City": { "Oasis Area": ["Palm Grove", "Chenini"], "Port": ["Harbor District"], "Center": ["Downtown"] },
            "Matmata": { "Troglodyte Area": ["Underground Houses", "Tourist District"] }
        },
        "Medenine": {
            "Medenine City": { "Center": ["Ksar Area", "Downtown"] },
            "Djerba": { "Houmt Souk": ["Main Town", "Market"], "Midoun": ["Beach Area", "Hotels"], "Guellala": ["Pottery Village"] },
            "Zarzis": { "Beach Area": ["Coastal District", "Port"] }
        },
        "Tataouine": {
            "Tataouine City": { "Center": ["Downtown", "Ksar District"] },
            "Chenini": { "Mountain Village": ["Berber Village", "Historic Area"] },
            "Ksar Ouled Soltane": { "Historic Area": ["Fortified Granaries"] }
        },
        "Gafsa": {
            "Gafsa City": { "Center": ["Downtown", "Oasis Area"], "Roman Pools": ["Historic Baths"] },
            "Metlaoui": { "Mining Area": ["Phosphate District"], "Lezard Rouge": ["Tourist Train Area"] }
        },
        "Tozeur": {
            "Tozeur City": { "Medina": ["Old City", "Palm Grove"], "Tourist Zone": ["Hotels Area"] },
            "Nefta": { "Oasis Area": ["Corbeille", "Palm Grove"] },
            "Douz": { "Sahara Gateway": ["Desert Area", "Market"] }
        },
        "Kebili": {
            "Kebili City": { "Oasis Area": ["Palm Grove", "Center"] },
            "Douz": { "Desert Area": ["Sahara District", "Camel Market"] },
            "Souk Lahad": { "Center": ["Main District"] }
        }
    },
    "Turkiye": {
        "Adana": { "Adana City": { "Seyhan": ["Central"], "Yüreğir": ["Central"], "Çukurova": ["Güzelyalı"], "Sarıçam": ["Central"], "Ceyhan": ["Central"] } },
        "Adıyaman": { "Adıyaman City": { "Merkez": ["Central"], "Kahta": ["Central"], "Besni": ["Central"] } },
        "Afyonkarahisar": { "Afyon City": { "Merkez": ["Central"], "Sandıklı": ["Central"], "Dinar": ["Central"] } },
        "Ağrı": { "Ağrı City": { "Merkez": ["Central"], "Patnos": ["Central"], "Doğubayazıt": ["Central"] } },
        "Aksaray": { "Aksaray City": { "Merkez": ["Central"], "Eskil": ["Central"], "Ortaköy": ["Central"] } },
        "Amasya": { "Amasya City": { "Merkez": ["Central"], "Merzifon": ["Central"], "Suluova": ["Central"] } },
        "Ankara": {
            "Ankara City": {
                "Çankaya": ["Kızılay", "Bahçelievler", "Çukurambar", "Oran", "Balgat", "Yıldız", "Söğütözü", "Mustafa Kemal", "Çinnah", "Kavaklıdere", "Gaziosmanpaşa", "Ayrancı", "Dikmen", "Emek", "Aşağı Öveçler", "Yukarı Öveçler", "Çayyolu", "Ümitköy", "Yaşamkent", "Konutkent", "Mesa", "Bilkent", "Üniversiteler", "Beytepe", "Ahlatlıbel", "Akköprü", "Akpınar", "Alacaatlı", "Anıttepe", "Aşağı Eğlence", "Aşağıayrancı", "Barbaros", "Birlik", "Bölge", "Büyükesat", "Cebeci", "Cinnah", "Çamlıca", "Çankaya", "Dikimevi", "Esat", "Esertepe", "Farabi", "Gazi", "Güvenevler", "Hilal", "İlkadım", "İlker", "İlkiz", "İncirli", "Keklikpınarı", "Kırkkonaklar", "Kolej", "Kültür", "Maltepe", "Meşrutiyet", "Milli Müdafaa", "Öveçler", "Remzi Oğuz Arık", "Seyranbağları", "Şehit Adem Yavuz", "Şehit Cevdet Özdemir", "Tahran", "Talatpaşa", "Telsizler", "Topraklık", "Tunus", "Türközü", "Ufuktepe", "Uğur Mumcu", "Yukarı Eğlence", "Yukarıayrancı", "Yücetepe", "Yükseltepe"],
                "Yenimahalle": ["Batıkent", "Çayyolu", "Demetevler", "İvedik", "Ostim", "Macunköy", "Şentepe", "Demetlale", "Aydınlıkevler", "Ergazi", "Güzelkent", "İlkyerleşim", "Kardelen", "Karşıyaka", "Pamuklar", "Susuz", "Turgut Özal", "Yenibatı", "Yenidoğan", "Yıldırım Beyazıt", "Aktepe", "Aşağı Yahyalar", "Bağlıca", "Birlik", "Çiğdemtepe", "Demet", "Esenboğa", "Gazi", "Göksu", "Güneşevler", "Kalaba", "Karapürçek", "Karayolları", "Kızılcaşar", "Köşk", "Mehmet Akif Ersoy", "Önder", "Özevler", "Plevne", "Ragıp Tüzün", "Sancak", "Şeker", "Şenlik", "Şenyuva", "Turgut Reis", "Yakacık", "Yenidoğan", "Yunus Emre"],
                "Keçiören": ["Etlik", "İncirli", "Bağlum", "Aktepe", "Atapark", "Bağlarbaşı", "Esertepe", "Güneşevler", "Kalaba", "Karşıyaka", "Ovacık", "Pınarbaşı", "Şentepe", "Tepebaşı", "Yakacık", "Yeşilöz", "Akşemsettin", "Aşağı Eğlence", "Bademlik", "Çaldıran", "Eserci", "Etiler", "Gümüşdere", "Hasköy", "Kalecik", "Karargahtepe", "Kuşcağız", "Küçükesat", "Pınarbaşı", "Sancaktepe", "Subayevleri", "Şenlik", "Şenyuva", "Tepeüstü", "Uyanış", "Ufuktepe", "Yakacık", "Yenibağlar"],
                "Mamak": ["Akdere", "Boğaziçi", "Ege", "Şafak", "Tuzluçayır", "Ulus", "Anayurt", "Araplar", "Bahçelievler", "Başpınar", "Bostancık", "Çağlayan", "Derebağ", "Derbent", "Durali Alıç", "Dutluk", "Ege", "Ekin", "Gülseren", "Güzeltepe", "Harman", "Hüseyingazi", "İstasyon", "Karaağaç", "Kayaş", "Kırkkonaklar", "Koyunpazarı", "Kusunlar", "Misket", "Mutlu", "Ortaköy", "Pamuklar", "Şahintepe", "Şeker", "Şenlik", "Türközü", "Yağmurlu", "Yayla"],
                "Etimesgut": ["Elvankent", "Eryaman", "Atatürk", "Bağlıca", "Fatih", "Güzelkent", "Karakusunlar", "Saray", "Şeker", "Tunahan", "Anadolu", "Atayurt", "Aşağıeğlence", "Bağlıca", "Çiğdem", "Eryaman 1. Etap", "Eryaman 2. Etap", "Eryaman 3. Etap", "Eryaman 4. Etap", "Eryaman 5. Etap", "Göksu", "Güven", "İstasyon", "Köy", "Piyade", "Sanatoryum", "Şehit Osman Avcı", "Türközü", "Ulubey", "Yenibatı"],
                "Sincan": ["Fatih", "Yenikent", "Akpınar", "Atatürk", "Bahçelievler", "Çamlık", "Cumhuriyet", "Fevzi Çakmak", "Gökçek", "Güzelkent", "Hacılar", "Hürriyet", "İnönü", "Karacaören", "Karşıyaka", "Organize Sanayi", "Pazar", "Sanayi", "Sarıkız", "Selçuklu", "Sincan Organize Sanayi", "Şehit Kubilay", "Törekent", "Ulubey", "Yenikent", "Yunus Emre"],
                "Altındağ": ["Aktepe", "Atıfbey", "Bentderesi", "Çandarlı", "Dedeköy", "Doğantepe", "Dışkapı", "Gültepe", "Hacettepe", "Hamamönü", "İncesu", "Karacakaya", "Karapürçek", "Kayabaşı", "Önder", "Örnek", "Parmakkapı", "Solfasol", "Şentepe", "Ulubey", "Yenidoğan", "Yenimahalle"],
                "Pursaklar": ["Saraycık", "Şahinler", "Yunus Emre", "Akpınar", "Altınova", "Fatih", "Hürriyet", "İstiklal", "Kızılcaşar", "Malazgirt", "Mehmet Akif Ersoy", "Ovacık", "Saray", "Tepekent"],
                "Gölbaşı": ["İncek", "Karşıyaka", "Eymir", "Hacılar", "Kızılcaşar", "Mogan", "Soğulcak", "Şafak", "Türközü", "Yavrucuk"],
                "Polatlı": ["Cumhuriyet", "Dumlupınar", "Fatih", "İsmetpaşa", "Karaağaç", "Lütfiye", "Malazgirt", "Yunus Emre"],
                "Akyurt": ["Yenikent", "Çeşmebaşı", "Fatih", "Hürriyet", "İstiklal", "Yenidoğan"],
                "Çubuk": ["Akpınar", "Atatürk", "Bahçelievler", "Cumhuriyet", "Fatih", "Gazi", "Hacıbey", "Kale", "Karacaören", "Karşıyaka", "Yeşilöz"],
                "Elmadağ": ["Cumhuriyet", "Fatih", "Hacıbektaş", "Karaşar", "Kızılcahamam Yolu", "Yenidoğan"],
                "Evren": ["Merkez", "Fatih", "Gazi", "Yenikent"],
                "Haymana": ["Cumhuriyet", "Fatih", "Gazi", "Hacıbey", "İstiklal", "Kale", "Yenikent"],
                "Kalecik": ["Atatürk", "Cumhuriyet", "Fatih", "Gazi", "Hacıbey"],
                "Kazan": ["Akpınar", "Atatürk", "Cumhuriyet", "Fatih", "Gazi", "Hacıbey", "Yenikent"],
                "Kızılcahamam": ["Atatürk", "Bahçelievler", "Cumhuriyet", "Fatih", "Gazi", "Hacıbey"],
                "Nallıhan": ["Atatürk", "Cumhuriyet", "Fatih", "Gazi", "Yenikent"],
                "Beypazarı": ["Atatürk", "Cumhuriyet", "Fatih", "Gazi", "Hacıbey", "Hürriyet", "İstiklal"],
                "Ayaş": ["Atatürk", "Cumhuriyet", "Fatih", "Gazi", "Yenikent"],
                "Bala": ["Atatürk", "Cumhuriyet", "Fatih", "Gazi", "Yenikent"],
                "Çamlıdere": ["Atatürk", "Cumhuriyet", "Fatih", "Yenikent"],
                "Güdül": ["Atatürk", "Cumhuriyet", "Fatih", "Yenikent"],
                "Şereflikoçhisar": ["Atatürk", "Cumhuriyet", "Fatih", "Gazi", "Hacıbey", "Yenikent"]
            }
        },
        "Antalya": { "Antalya City": { "Muratpaşa": ["Lara", "Kaleiçi", "Meydan", "Güzeloba"], "Konyaaltı": ["Beach Area", "Uncalı", "Hurma", "Liman"], "Alanya": ["Kargıcak", "Mahmutlar", "Oba", "Castle Area"], "Manavgat": ["Side", "Sorgun"], "Kepez": ["Dokuma", "Varsak"], "Serik": ["Belek", "Kadriye"], "Döşemealtı": ["Yeniköy"], "Kemer": ["Göyük", "Beldibi"] } },
        "Ardahan": { "Ardahan City": { "Merkez": ["Central"], "Göle": ["Central"] } },
        "Artvin": { "Artvin City": { "Merkez": ["Central"], "Hopa": ["Central"], "Arhavi": ["Central"] } },
        "Aydın": { "Aydın City": { "Efeler": ["Central"], "Kuşadası": ["Davutlar"], "Didim": ["Altınkum"], "Nazilli": ["Central"], "Söke": ["Central"] } },
        "Balıkesir": { "Balıkesir City": { "Karesi": ["Central"], "Altıeylül": ["Central"], "Bandırma": ["Central"], "Edremit": ["Akçay", "Altınoluk"], "Ayvalık": ["Cunda"] } },
        "Bartın": { "Bartın City": { "Merkez": ["Central"], "Amasra": ["Central"] } },
        "Batman": { "Batman City": { "Merkez": ["Central"], "Kozluk": ["Central"] } },
        "Bayburt": { "Bayburt City": { "Merkez": ["Central"] } },
        "Bilecik": { "Bilecik City": { "Merkez": ["Central"], "Bozüyük": ["Central"] } },
        "Bingöl": { "Bingöl City": { "Merkez": ["Central"], "Genç": ["Central"] } },
        "Bitlis": { "Bitlis City": { "Merkez": ["Central"], "Tatvan": ["Central"], "Ahlat": ["Central"] } },
        "Bolu": { "Bolu City": { "Merkez": ["Central"], "Gerede": ["Central"], "Mudurnu": ["Central"] } },
        "Burdur": { "Burdur City": { "Merkez": ["Central"], "Bucak": ["Central"] } },
        "Bursa": { "Bursa City": { "Nilüfer": ["Özlüce", "FSM", "Beşevler"], "Osmangazi": ["City Center", "Çekirge"], "Yıldırım": ["Central"], "Mudanya": ["Güzelyalı"], "İnegöl": ["Central"], "Gemlik": ["Central"] } },
        "Çanakkale": { "Çanakkale City": { "Merkez": ["Central"], "Gelibolu": ["Central"], "Biga": ["Central"], "Çan": ["Central"], "Ayvacık": ["Assos"] } },
        "Çankırı": { "Çankırı City": { "Merkez": ["Central"] } },
        "Çorum": { "Çorum City": { "Merkez": ["Central"], "Sungurlu": ["Central"], "Osmancık": ["Central"] } },
        "Denizli": { "Denizli City": { "Pamukkale": ["Central"], "Merkezefendi": ["Central"], "Çivril": ["Central"] } },
        "Diyarbakır": { "Diyarbakır City": { "Kayapınar": ["Diclekent", "Peyas", "Mezopotamya"], "Bağlar": ["Bağcılar", "Mevlana"], "Yenişehir": ["Ofis", "Vilayet"], "Sur": ["Historic Center", "Hevsel Gardens"], "Ergani": ["Central"] } },
        "Düzce": { "Düzce City": { "Merkez": ["Kalıcı Konutlar", "Konuralp"], "Akçakoca": ["Beach Area"] } },
        "Edirne": { "Edirne City": { "Merkez": ["Karaağaç", "Kaleiçi"], "Keşan": ["Erikli", "Yayla"] } },
        "Elazığ": { "Elazığ City": { "Merkez": ["Abdullah Paşa", "Sürsürü"], "Keban": ["Dam Area"] } },
        "Erzincan": { "Erzincan City": { "Merkez": ["Cumhuriyet", "Fatih"] } },
        "Erzurum": { "Erzurum City": { "Yakutiye": ["Central"], "Palandöken": ["Ski Resort Area", "Yıldızkent"], "Aziziye": ["Dadaşkent"] } },
        "Eskişehir": { "Eskişehir City": { "Odunpazarı": ["Historic Houses", "Vişnelik", "Gültepe"], "Tepebaşı": ["Batıkent", "Espark Area", "Bağlar"] } },
        "Gaziantep": { "Gaziantep City": { "Şehitkamil": ["İbrahimli", "Batıkent", "Güvenevler"], "Şahinbey": ["Karataş", "Yeditepe", "Akkent"] } },
        "Giresun": { "Giresun City": { "Merkez": ["Gedikkaya", "Teyyaredüzü"] } },
        "Gümüşhane": { "Gümüşhane City": { "Merkez": ["Hasanbey"] } },
        "Hakkari": { "Hakkari City": { "Merkez": ["Central"], "Yüksekova": ["Central"] } },
        "Hatay": { "Hatay City": { "Antakya": ["Saraykent", "Odabaşı", "Old Town"], "İskenderun": ["Sahil", "Karaağaç"], "Defne": ["Harbiye"] } },
        "Iğdır": { "Iğdır City": { "Merkez": ["Söğütlü"] } },
        "Isparta": { "Isparta City": { "Merkez": ["Fatih", "Davraz"] } },
        "İstanbul": {
            "İstanbul City": {
                "Adalar": ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada", "Sedef Adası", "Yassıada", "Sivriada", "Kaşık Adası", "Tavşan Adası"],
                "Arnavutköy": ["Hadımköy", "Bolluca", "Taşoluk", "Durusu", "Haraççı", "İmrahor", "Yeşilbayır", "Anadolu", "Dursunköy", "Karlıktepe"],
                "Ataşehir": ["Batı Ataşehir", "Barbaros", "Küçükbakkalköy", "Örnek", "Yenisahra", "Atatürk", "Ferhatpaşa", "İçerenköy", "Kayışdağı", "Küçükbakkalköy", "Mevlana", "Mustafa Kemal", "Yeni Çamlıca"],
                "Avcılar": ["Denizköşkler", "Ambarlı", "Firuzköy", "Cihangir", "Merkez", "Gümüşpala", "Yeşilkent", "Üniversite", "Tahtakale", "Mustafa Kemal Paşa"],
                "Bağcılar": ["Güneşli", "Yenimahalle", "Kirazlı", "Bağlar", "Mahmutbey", "Demirkapı", "Evren", "Fatih", "Göztepe", "İnönü", "Kazım Karabekir", "Kemalpaşa", "Merkez", "Yıldıztepe"],
                "Bahçelievler": ["Şirinevler", "Yenibosna", "Kocasinan", "Soganli", "Çobançeşme", "Bahçelievler", "Cumhuriyet", "Fevzi Çakmak", "Hürriyet", "Siyavuşpaşa", "Zafer", "Yenibosna Merkez"],
                "Bakırköy": ["Ataköy", "Florya", "Yeşilköy", "Yeşilyurt", "Kartaltepe", "Basınköy", "Cevizlik", "Osmaniye", "Sakızağacı", "Şenlikköy", "Zuhuratbaba", "İncirli"],
                "Başakşehir": ["Bahçeşehir", "Kayaşehir", "Metrokent", "Başak", "Ziya Gökalp", "Altınşehir", "Başakşehir", "Güvercintepe", "Şahintepe", "Şamlar"],
                "Bayrampaşa": ["Yıldırım", "Muratpaşa", "Cevatpaşa", "Vatan", "Kocatepe", "Altıntepsi", "Ispartakule", "Kartaltepe", "Ortamahalle", "Terazidere", "Yenidoğan"],
                "Beşiktaş": ["Bebek", "Etiler", "Levent", "Ortaköy", "Arnavutköy", "Ulus", "Dikilitaş", "Abbasağa", "Akatlar", "Balmumcu", "Gayrettepe", "Konaklar", "Kuruçeşme", "Mecidiye", "Muradiye", "Nisbetiye", "Sinanpaşa", "Türkali", "Vişnezade", "Yıldız"],
                "Beykoz": ["Çubuklu", "Anadoluhisarı", "Paşabahçe", "Polonezköy", "Riva", "Acarlar", "Akbaba", "Alibahadır", "Anadolufeneri", "Bozhane", "Cumhuriyet", "Dereseki", "Göksu", "Göllü", "Göztepe", "İncirköy", "Kanlıca", "Kavacık", "Merkez", "Örnekköy", "Paşamandıra", "Rüzgarlıbahçe", "Soğuksu", "Tokatköy", "Yalıköy", "Yavuz Selim"],
                "Beylikdüzü": ["Yaşam Vadisi", "Adnan Kahveci", "Yakuplu", "Gürpınar", "Beykent", "Marmara", "Barış", "Büyükşehir", "Cumhuriyet", "Dereağzı", "Kavakli", "Kavaklı", "Sahil"],
                "Beyoğlu": ["Cihangir", "Galata", "Karaköy", "Taksim", "İstiklal", "Asmalımescit", "Tarlabaşı", "Bereketzade", "Bülbül", "Camiikebir", "Çatma Mescit", "Evliya Çelebi", "Fetihtepe", "Firuzağa", "Gümüşsuyu", "Hacıahmet", "Hacımimi", "Halıcıoğlu", "Hasköy", "Hüseyinağa", "Kadimehmet", "Kamerhatun", "Katip Mustafa Çelebi", "Keçecipiri", "Kemankeş", "Kılıçalipaşa", "Kocatepe", "Kulaksız", "Kuloğlu", "Müeyyedzade", "Ömeravni", "Piri Paşa", "Piyalepaşa", "Sütlüce", "Şahkulu", "Şehitmuhtar", "Tomtom", "Yenişehir"],
                "Büyükçekmece": ["Mimarsinan", "Pınartepe", "Kumburgaz", "Silivri Yolu", "Alkent", "Bahçelievler", "Celaliye", "Cumhuriyet", "Dizdariye", "Fatih", "Güzelce", "Hürriyet", "Karaağaç", "Kumburgaz Merkez", "Mimar Sinan", "Tepecik", "Ulus", "Yakuplu"],
                "Çatalca": ["Merkez", "Karacaköy", "Ferhatpaşa", "Elbasan", "Atatürk", "Bahşayiş", "Belgrat", "Dağyenice", "Fatih", "Gökçeali", "Hallaçlı", "İhsaniye", "Kaleiçi", "Karacaköy", "Muratbey", "Nakkaş", "Örencik", "Yazlık"],
                "Çekmeköy": ["Taşdelen", "Ömerli", "Alemdağ", "Ekşioğlu", "Çamlık", "Hamidiye", "Huzur", "Kirazlıdere", "Koçullu", "Mehmet Akif", "Mimar Sinan", "Nişantepe", "Reşadiye", "Safa", "Soğukpınar", "Sultançiftliği"],
                "Esenler": ["Havaalanı", "Tuna", "Kemer", "Oruçreis", "Menderes", "Atışalanı", "Birlik", "Çiftehavuzlar", "Davutpaşa", "Fatih", "Fevzi Çakmak", "Kazım Karabekir", "Mimarsinan", "Nenehatun", "Nine Hatun", "Oruç Reis", "Turgutreis", "Yavuz Selim"],
                "Esenyurt": ["Cumhuriyet", "Piri Reis", "Güzelyurt", "Yeşilkent", "Koza", "Akevler", "Akören", "Ardıçlı", "Avcılar", "Bahçeşehir 1. Kısım", "Bahçeşehir 2. Kısım", "Barbaros", "Bağlarçeşme", "Çınar", "Esenkent", "Fatih", "Firuzköy", "Göktürk Merkez", "Gümüşpala", "Haramidere", "Hoşdere", "İnönü", "İstiklal", "Kıraç", "Mehterçeşme", "Oruçreis", "Pınar", "Saadetdere", "Sultaniye", "Talatpaşa", "Turgut Özal", "Yenikent", "Zafer"],
                "Eyüpsultan": ["Eyüp", "Rami", "Alibeyköy", "Göktürk", "Kemerburgaz", "Akşemsettin", "Çırçır", "Defterdar", "Düğmeciler", "Emniyettepe", "Esentepe", "Güzeltepe", "İslambey", "Karadolap", "Merkez", "Mithatpaşa", "Nişanca", "Odayeri", "Pirinççi", "Sakarya", "Silahtarağa", "Topçular", "Yeşilpınar"],
                "Fatih": ["Sultanahmet", "Eminönü", "Balat", "Fener", "Aksaray", "Karagümrük", "Akşemsettin", "Ali Kuşçu", "Atikali", "Ayvansaray", "Balabanağa", "Balat", "Beyazıt", "Binbirdirek", "Cankurtaran", "Cerrahpaşa", "Cibali", "Demirtaş", "Derviş Ali", "Emin Sinan", "Hırka-i Şerif", "Hoca Gıyasettin", "Hocapaşa", "İskenderpaşa", "Kalenderhane", "Karagümrük", "Katip Kasım", "Kemalpaşa", "Koca Mustafapaşa", "Küçük Ayasofya", "Mesihpaşa", "Mevlanakapı", "Mimar Hayrettin", "Mimar Kemalettin", "Molla Fenari", "Molla Gürani", "Molla Hüsrev", "Muhsine Hatun", "Nişanca", "Rüstempaşa", "Saraç İshak", "Seyyid Ömer", "Silivrikapı", "Süleymaniye", "Şehremini", "Şehsuvar Bey", "Tahtakale", "Taya Hatun", "Topkapı", "Yavuz Sinan", "Yedikule", "Zeyrek"],
                "Gaziosmanpaşa": ["Yenimahalle", "Karadeniz", "Merkez", "Küçükköy", "Yıldıztabya", "Bağlarbaşı", "Barbaros Hayrettin Paşa", "Fevzi Çakmak", "Hürriyet", "Karayolları", "Kazım Karabekir", "Mevlana", "Sarıgöl", "Yeni Mahalle", "Yenidoğan"],
                "Güngören": ["Merkez", "Tozkoparan", "Güneştepe", "Akıncılar", "Abdurrahman Nafiz Gürman", "Gençosman", "Güneşli", "Haznedar", "Mareşal Çakmak", "Mehmet Nesih Özmen", "Sanayi"],
                "Kadıköy": ["Caddebostan", "Suadiye", "Fenerbahçe", "Moda", "Göztepe", "Erenköy", "Bostancı", "Acıbadem", "19 Mayıs", "Aksemsettin", "Caferağa", "Cevizlik", "Dumlupınar", "Eğitim", "Feneryolu", "Fikirtepe", "Göztepe", "Hasanpaşa", "Koşuyolu", "Kozyatağı", "Merdivenköy", "Osmanağa", "Rasimpaşa", "Sahrayıcedit", "Zühtüpaşa"],
                "Kağıthane": ["Çağlayan", "Gültepe", "Seyrantepe", "Harmantepe", "Yahya Kemal", "Çeliktepe", "Emniyet Evleri", "Gürsel", "Hamidiye", "Merkez", "Nurtepe", "Ortabayır", "Sanayi", "Şirintepe", "Talatpaşa", "Telsizler", "Yeşilce"],
                "Kartal": ["Sahil", "Atalar", "Soğanlık", "Yakacık", "Orhantepe", "Cevizli", "Çavuşoğlu", "Esentepe", "Gümüşpınar", "Hürriyet", "Karlıktepe", "Kordonboyu", "Orta", "Petrol İş", "Topselvi", "Uğur Mumcu", "Yalı", "Yukarı", "Yunus"],
                "Küçükçekmece": ["Halkalı", "Atakent", "Cennet", "Kanarya", "İnönü", "Atatürk", "Beşyol", "Cumhuriyet", "Fatih", "Fevzi Çakmak", "Gültepe", "İstasyon", "Kartaltepe", "Kemalpaşa", "Mehmet Akif", "Söğütlü", "Tevfikbey", "Yarımburgaz", "Yenimahalle", "Yeşilova"],
                "Maltepe": ["Küçükyalı", "Dragos", "İdealtepe", "Bağlarbaşı", "Zümrütevler", "Altayçeşme", "Altıntepe", "Aydınevler", "Başıbüyük", "Büyükbakkalköy", "Cevizli", "Esenkent", "Feyzullah", "Fındıklı", "Girne", "Gülsuyu", "Gülensu", "Yalı"],
                "Pendik": ["Kurtköy", "Yenişehir", "Velibaba", "Kavakpınar", "Esenyalı", "Ahmet Yesevi", "Bahçelievler", "Batı", "Çamlik", "Doğu", "Dumlupınar", "Esenler", "Fevzi Çakmak", "Göçbeyli", "Güllübağlar", "Harmandere", "Kaynarca", "Orta", "Ramazanoğlu", "Sanayi", "Sapanbağları", "Şeyhli", "Yenişehir", "Yeşilbağlar"],
                "Sancaktepe": ["Sarıgazi", "Samandıra", "Mevlana", "Akpınar", "Osmangazi", "Abdullahhoca", "Atatürk", "Emek", "Eyüp Sultan", "Fatih", "Havaalanı", "Hikmet", "İnönü", "Kemal Türkler", "Merve", "Paşaköy", "Veysel Karani"],
                "Sarıyer": ["Tarabya", "Yeniköy", "İstinye", "Emirgan", "Zekeriyaköy", "Maslak", "Büyükdere", "Ayazağa", "Bahçeköy", "Baltalimanı", "Çayırbaşı", "Darüşşafaka", "Demirciköy", "Derbent", "Fatih", "Ferahevler", "Garipçe", "Gümüşdere", "Hacıosman", "Huzur", "İstiinye", "Kireçburnu", "Kısırkaya", "Kumköy", "Merkez", "Pınar", "Poligon", "Reşitpaşa", "Rumelihisarı", "Rumeli Kavağı", "Uskumruköy", "Yeniköy"],
                "Silivri": ["Selimpaşa", "Semizkum", "Gümüşyaka", "Fenerköy", "Merkez", "Alibey", "Beyciler", "Büyük Sinekli", "Çanta", "Çayırdere", "Danamandıra", "Fener", "Gazitepe", "Kadıköy", "Kavaklı", "Küçük Sinekli", "Ortaköy", "Pınarhisar", "Sayalar", "Yolçatı"],
                "Sultanbeyli": ["Abdurrahmangazi", "Hasanpaşa", "Mecidiye", "Yavuz Selim", "Adil", "Ahmet Yesevi", "Akşemsettin", "Battalgazi", "Fatih", "Hamidiye", "Mimar Sinan", "Necip Fazıl", "Orhangazi"],
                "Sultangazi": ["Cebeci", "Uğur Mumcu", "Zübeyde Hanım", "75. Yıl", "Sultançiftliği", "50. Yıl", "Cumhuriyet", "Esentepe", "Gazi", "Habibler", "İsmetpaşa", "Yayla"],
                "Şile": ["Merkez", "Ağva", "Kumbaba", "Kabakoz", "Ahmetli", "Alacalı", "Balibey", "Bucaklı", "Çataklı", "Çavuş", "Değirmençayırı", "Dereköy", "Doğancılı", "Erenler", "Esenceli", "Göçe", "Gökmaslı", "Göksu", "Hacıllı", "Hasanlı", "İmrendere", "Kalem", "Karabeyli", "Karakiraz", "Kızılca", "Korucu", "Kurna", "Meşrutiyet", "Oruçoğlu", "Ovacık", "Satmazlı", "Sofular", "Teke", "Üvezli", "Yazımanayır", "Yeşilvadi"],
                "Şişli": ["Nişantaşı", "Bomonti", "Mecidiyeköy", "Teşvikiye", "Kurtuluş", "Esentepe", "Osmanbey", "19 Mayıs", "Ayazağa", "Cumhuriyet", "Duatepe", "Ergenekon", "Eskişehir", "Feriköy", "Fulya", "Gülbahar", "Halaskargazi", "Halide Edip Adıvar", "Halil Rıfat Paşa", "Harbiye", "İnönü", "İzzetpaşa", "Kaptanpaşa", "Kuştepe", "Mahmut Şevket Paşa", "Meşrutiyet", "Paşa", "Şişli"],
                "Tuzla": ["Marina", "Aydınlı", "İçmeler", "Postane", "Evliya Çelebi", "Aydıntepe", "Cami", "Fatih", "İstasyon", "Mescit", "Orhanli", "Şifa", "Tepeören", "Yayla"],
                "Ümraniye": ["Şerifali", "Çakmak", "Atatürk", "Tantavi", "Parseller", "Adem Yavuz", "Armağanevler", "Aşağı Dudullu", "Atakent", "Cemil Meriç", "Dumlupınar", "Esenevler", "Esatpaşa", "Fatih Sultan Mehmet", "Finans Merkezi", "Hekimbaşı", "Huzur", "İnkılap", "İstiklal", "Kazım Karabekir", "Madenler", "Mehmet Akif", "Merkez", "Namık Kemal", "Necip Fazıl", "Saray", "Site", "Tatlısu", "Tepeüstü", "Topağacı", "Yamanevler", "Yukarı Dudullu"],
                "Üsküdar": ["Kuzguncuk", "Beylerbeyi", "Çengelköy", "Altunizade", "Acıbadem", "Bağlarbaşı", "Ahmediye", "Aziz Mahmut Hüdai", "Barbaros", "Bulgurlu", "Burhaniye", "Cumhuriyet", "Güzeltepe", "Kandilli", "Kaptan Paşa", "Kısıklı", "Kirazlıtepe", "Kuleli", "Küçük Çamlıca", "Küplüce", "Küçüksu", "Libadiye", "Mimar Sinan", "Murat Reis", "Salacak", "Selami Ali", "Selimiye", "Sultantepe", "Şemsipaşa", "Uncular", "Valide-i Atik", "Zeynep Kamil"],
                "Zeytinburnu": ["Merkezefendi", "Yenidoğan", "Kazlıçeşme", "Veliefendi", "Telsiz", "Beştelsiz", "Çırpıcı", "Gökalp", "Nuripaşa", "Seyitnizam", "Sümer"]
            }
        },
        "İzmir": {
            "İzmir City": {
                "Konak": ["Alsancak", "Güzelyalı", "Pasaport", "Kordon", "Basmane"],
                "Karşıyaka": ["Bostanlı", "Mavişehir", "Aksoy", "Donanmacı"],
                "Bornova": ["Özkanlar", "Küçükpark", "Evka 3"],
                "Buca": ["Şirinyer", "Tınaztepe"],
                "Çeşme": ["Alaçatı", "Ilıca", "Boyalık", "Dalyan"],
                "Urla": ["İskele", "Kekliktepe", "Çeşmealtı"],
                "Seferihisar": ["Sığacık"],
                "Foça": ["Eski Foça", "Yeni Foça"],
                "Güzelbahçe": ["Yalı", "Siteler"],
                "Bayraklı": ["Manavkuyu", "Mansuroğlu"]
            }
        },
        "Kahramanmaraş": { "Kahramanmaraş City": { "Onikişubat": ["Haydarbey", "Binevler", "Yirmiikigün"], "Dulkadiroğlu": ["Doğukent"] } },
        "Karabük": { "Karabük City": { "Merkez": ["100. Yıl", "Safranbolu"] } },
        "Karaman": { "Karaman City": { "Merkez": ["Gevher Hatun"] } },
        "Kars": { "Kars City": { "Merkez": ["Ortakapı"] } },
        "Kastamonu": { "Kastamonu City": { "Merkez": ["Kuzeykent"] } },
        "Kayseri": { "Kayseri City": { "Melikgazi": ["Köşk", "Alpaslan", "Talas"], "Kocasinan": ["Erkilet"] } },
        "Kırıkkale": { "Kırıkkale City": { "Merkez": ["Yahşihan"] } },
        "Kırklareli": { "Kırklareli City": { "Merkez": ["Karakaş"], "Lüleburgaz": ["Central"] } },
        "Kırşehir": { "Kırşehir City": { "Merkez": ["Ahi Evran"] } },
        "Kilis": { "Kilis City": { "Merkez": ["Central"] } },
        "Kocaeli": { "Kocaeli City": { "İzmit": ["Yahya Kaptan", "Yenişehir"], "Gebze": ["Center"], "Başiskele": ["Yuvacık"], "Kartepe": ["Maşukiye"], "Darıca": ["Bayramoğlu"] } },
        "Konya": { "Konya City": { "Selçuklu": ["Bosna Hersek", "Yazır"], "Meram": ["Havzan"], "Karatay": ["Fetih"] } },
        "Kütahya": { "Kütahya City": { "Merkez": ["Meydan"] } },
        "Malatya": { "Malatya City": { "Battalgazi": ["Center"], "Yeşilyurt": ["Tecde", "Bostanbaşı"] } },
        "Manisa": { "Manisa City": { "Yunusemre": ["Güzelyurt"], "Şehzadeler": ["Center"], "Turgutlu": ["Center"], "Akhisar": ["Center"] } },
        "Mardin": { "Mardin City": { "Artuklu": ["Old Mardin", "Yenişehir"], "Midyat": ["Estel", "Old Town"] } },
        "Mersin": { "Mersin City": { "Yenişehir": ["Pozcu", "Kushimoto"], "Mezitli": ["Viranşehir", "Soli"], "Toroslar": ["Akbelen"], "Akdeniz": ["Station"] } },
        "Muğla": { "Muğla City": { "Bodrum": ["Yalıkavak", "Türkbükü", "Gümüşlük", "Bitez", "Ortakent"], "Marmaris": ["Siteler", "İçmeler"], "Fethiye": ["Ölüdeniz", "Göcek", "Calis"], "Datça": ["Palamutbükü"] } },
        "Muş": { "Muş City": { "Merkez": ["Central"], "Bulanık": ["Central"] } },
        "Nevşehir": { "Nevşehir City": { "Merkez": ["Central"], "Ürgüp": ["Cappadocia", "Mustafapaşa"], "Avanos": ["Pottery District"], "Goreme": ["Cave Hotels", "Sunset Point"], "Uçhisar": ["Castle Area"] } },
        "Niğde": { "Niğde City": { "Merkez": ["Central"], "Bor": ["Central"] } },
        "Ordu": { "Ordu City": { "Altınordu": ["Sahil", "Boztepe"], "Ünye": ["Çamlık"], "Fatsa": ["Dolunay"] } },
        "Osmaniye": { "Osmaniye City": { "Merkez": ["Central"], "Kadirli": ["Central"] } },
        "Rize": { "Rize City": { "Merkez": ["Central"], "Çayeli": ["Central"], "Ardeşen": ["Fırtına Valley"], "Çamlıhemşin": ["Ayder Plateau"] } },
        "Sakarya": { "Sakarya City": { "Adapazarı": ["Çark Caddesi", "Şeker"], "Serdivan": ["Mavi Durak", "AVM Area", "Kampüs"], "Sapanca": ["Kırkpınar", "Lake Side"], "Karasu": ["Beach"], "Hendek": ["Central"] } },
        "Samsun": { "Samsun City": { "Atakum": ["Türkiş", "Denizevleri", "Sahil"], "İlkadım": ["Çiftlik", "Mecidiye"], "Canik": ["Piazza Area"], "Bafra": ["Central"], "Çarşamba": ["Central"] } },
        "Şanlıurfa": { "Urfa City": { "Haliliye": ["Bahçelievler"], "Eyyübiye": ["Balıklıgöl"], "Karaköprü": ["New City"], "Siverek": ["Central"] } },
        "Siirt": { "Siirt City": { "Merkez": ["Central"] } },
        "Sinop": { "Sinop City": { "Merkez": ["Karakum", "Ada"], "Gerze": ["Central"] } },
        "Sivas": { "Sivas City": { "Merkez": ["İstasyon Caddesi", "Eğri Köprü"] } },
        "Şırnak": { "Şırnak City": { "Merkez": ["Central"], "Cizre": ["Central"] } },
        "Tekirdağ": { "Tekirdağ City": { "Süleymanpaşa": ["Sahil", "Hürriyet"], "Çorlu": ["Orion Area", "Emlak Konutları"], "Çerkezköy": ["Tepe Emlak"], "Kapaklı": ["Central"] } },
        "Tokat": { "Tokat City": { "Merkez": ["Yeşilırmak"], "Erbaa": ["Central"], "Turhal": ["Central"] } },
        "Trabzon": { "Trabzon City": { "Ortahisar": ["Meydan", "Beşirli", "Boztepe"], "Akçaabat": ["Söğütlü"], "Yomra": ["Kaşüstü"], "Of": ["Central"] } },
        "Tunceli": { "Tunceli City": { "Merkez": ["Munzur"] } },
        "Uşak": { "Uşak City": { "Merkez": ["Central"] } },
        "Van": { "Van City": { "İpekyolu": ["Cumhuriyet Caddesi"], "Edremit": ["Sahil"], "Tuşba": ["Campus Area"], "Erciş": ["Central"] } },
        "Yalova": { "Yalova City": { "Merkez": ["Sahil", "Yürüyen Köşk"], "Çınarcık": ["Resort Area"], "Termal": ["Hot Springs"], "Çiftlikköy": ["Sahil"] } },
        "Yozgat": { "Yozgat City": { "Merkez": ["Central"] } },
        "Zonguldak": { "Zonguldak City": { "Merkez": ["Central"], "Ereğli": ["Sahil"], "Çaycuma": ["Central"] } }
    },
    "United Arab Emirates": {
        "Dubai": {
            "Dubai City": {
                "Marina & Coast": ["Dubai Marina", "JBR", "Bluewaters Island", "Dubai Harbour"],
                "Downtown & Business": ["Downtown Dubai", "Business Bay", "DIFC", "City Walk"],
                "Palm & Islands": ["Palm Jumeirah", "The World Islands"],
                "Jumeirah & Umm Suqeim": ["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim 1", "Umm Suqeim 2", "Umm Suqeim 3"],
                "Al Barsha & Heights": ["Al Barsha 1", "Al Barsha South", "Barsha Heights (TECOM)", "Greens"],
                "Emirates Living": ["Emirates Hills", "The Meadows", "The Springs", "The Lakes"],
                "Arabian Ranches & Sports City": ["Arabian Ranches", "Dubai Sports City", "Motor City", "Dubai Studio City"]
            }
        },
        "Abu Dhabi": {
            "Abu Dhabi City": {
                "Reem & Maryah Islands": ["Al Reem Island", "Marina Square", "Shams Abu Dhabi", "Al Maryah Island"],
                "Saadiyat & Yas Islands": ["Saadiyat Island", "Yas Island", "Yas Acres"],
                "Khalifa & Masdar Cities": ["Khalifa City A", "Khalifa City B", "Masdar City"],
                "Corniche & Al Khalidiyah": ["Corniche Road", "Al Khalidiyah", "Al Bateen"],
                "Al Raha": ["Al Raha Beach", "Al Raha Gardens"]
            },
            "Al Ain City": { "Central": ["Al Jimi", "Al Maqam", "Al Muwaiji"], "East": ["Zakher", "Al Ain Square"] }
        },
        "Sharjah": {
            "Sharjah City": {
                "Al Majaz & Waterfront": ["Al Majaz 1", "Al Majaz 2", "Al Majaz 3", "Al Khan"],
                "Al Nahda & Border": ["Al Nahda Sharjah", "Al Taawun"],
                "University City Area": ["Muwaileh Commercial", "Al Zahia", "University City"]
            }
        },
        "Ajman": { "Ajman City": { "Corniche Area": ["Ajman Corniche", "Al Rumailah"], "Residential": ["Al Mowaihat", "Al Jurf"] } },
        "Ras Al Khaimah": { "Ras Al Khaimah City": { "Islands": ["Al Marjan Island", "Mina Al Arab"], "Mainland": ["Al Hamra Village", "RAK City Center"] } },
        "Fujairah": { "Fujairah City": { "Coastal": ["Fujairah Beach", "Al Aqah"], "Center": ["Dibba Area", "Fujairah City Center"] } },
        "Umm Al Quwain": { "Umm Al Quwain City": { "Center": ["Old Town", "New Sector"] } }
    },
    "United Kingdom": {
        "England": {
            "London": {
                "Central London": ["Mayfair", "Marylebone", "Soho", "Bloomsbury", "Covent Garden", "Fitzrovia"],
                "Kensington & Chelsea": ["Chelsea", "Knightsbridge", "South Kensington", "Notting Hill", "Earls Court"],
                "Westminster": ["Belgravia", "Pimlico", "St James's", "Victoria"],
                "Canary Wharf": ["Isle of Dogs", "Greenwich Area", "Docklands"],
                "Camden": ["Camden Town", "Primrose Hill", "Hampstead"],
                "Islington": ["Angel", "Highbury"],
                "Shoreditch": ["Hoxton", "Old Street", "Brick Lane"]
            },
            "Manchester": { "City Center": ["Spinningfields", "Deansgate", "Northern Quarter", "Ancoats", "Castlefield"], "Salford": ["MediaCityUK"], "Trafford": ["Old Trafford"] },
            "Birmingham": { "City Center": ["Jewellery Quarter", "Digbeth", "Colmore Row"], "Edgbaston": ["Residential"] },
            "Liverpool": { "City Center": ["Albert Dock", "Baltic Triangle", "Ropewalks"] },
            "Leeds": { "City Center": ["Trinity", "The Calls"], "Headingley": ["Student Area"] },
            "Bristol": { "City Center": ["Harbourside"], "Clifton": ["Village", "Suspension Bridge Area"] }
        },
        "Scotland": { "Edinburgh": { "Old Town": ["Royal Mile", "Grassmarket"], "New Town": ["Princes Street", "Stockbridge", "George Street"], "Leith": ["The Shore"] }, "Glasgow": { "West End": ["Hillhead", "Byres Road"], "Merchant City": ["Center"], "Finnieston": ["The Strip"] } },
        "Wales": { "Cardiff": { "City Center": ["Castle Quarter"], "Cardiff Bay": ["Mermaid Quay"], "Pontcanna": ["Residential"] } },
        "Northern Ireland": { "Belfast": { "City Center": ["Cathedral Quarter", "Titanic Quarter"], "Queens Quarter": ["University Area"] } }
    },
    "United States": {
        "New York": {
            "New York City": {
                "Manhattan": ["Upper East Side", "Upper West Side", "Tribeca", "Chelsea", "SoHo", "Greenwich Village", "Harlem", "Midtown"],
                "Brooklyn": ["Williamsburg", "Brooklyn Heights", "DUMBO", "Park Slope", "Bushwick", "Bed-Stuy"],
                "Queens": ["Astoria", "Long Island City", "Flushing", "Forest Hills", "Jackson Heights"],
                "Bronx": ["Riverdale", "Fordham", "Pelham Bay"],
                "Staten Island": ["St. George", "Todt Hill"]
            },
            "Albany": { "Center": ["Downtown", "Pine Hills"] },
            "Buffalo": { "Center": ["Elmwood Village", "Allentown"] }
        },
        "California": {
            "Los Angeles": { "Hollywood": ["Sunset Strip", "West Hollywood"], "Santa Monica": ["Beach Front", "Venice Beach"], "Beverly Hills": ["90210 Area", "Trousdale"], "Downtown LA": ["Arts District", "Financial District"], "Pasadena": ["Old Town"], "Malibu": ["Beach Side"] },
            "San Francisco": { "SoMa": ["Silicon Valley Hub", "Mission Bay"], "Nob Hill": ["Residential", "Pacific Heights"], "Marina": ["Cow Hollow"], "Mission District": ["Valencia St"], "Haight-Ashbury": ["Historic"] },
            "San Diego": { "Downtown": ["Gaslamp Quarter", "Little Italy"], "La Jolla": ["Coastal"], "Pacific Beach": ["Boardwalk"] },
            "San Jose": { "Downtown": ["Santana Row"], "Silicon Valley": ["Palo Alto", "Mountain View", "Cupertino"] }
        },
        "Florida": {
            "Miami": { "South Beach": ["Ocean Drive", "Art Deco District"], "Brickell": ["Financial District", "Mary Brickell"], "Coral Gables": ["Main Area"], "Wynwood": ["Arts District"], "Little Havana": ["Calle Ocho"] },
            "Orlando": { "Lake Nona": ["Residential"], "Disney Area": ["Celebration"], "Downtown": ["Lake Eola"], "Winter Park": ["Park Avenue"] },
            "Tampa": { "Downtown": ["Riverwalk"], "Ybor City": ["Historic"] },
            "Jacksonville": { "Downtown": ["River City"], "Beaches": ["Ponte Vedra"] }
        },
        "Texas": {
            "Houston": { "Downtown": ["Midtown", "Museum District"], "Galleria": ["Uptown"], "The Woodlands": ["Residential"] },
            "Austin": { "Downtown": ["Zilker", "Rainey Street"], "South Congress": ["SoCo"] },
            "Dallas": { "Downtown": ["Deep Ellum", "Uptown"], "Fort Worth": ["Stockyards"] },
            "San Antonio": { "Downtown": ["River Walk", "Alamo Heights"] }
        },
        "Illinois": {
            "Chicago": { "Loop": ["Mag Mile", "Millennium Park"], "Lincoln Park": ["Old Town"], "West Loop": ["Fulton Market"], "Wicker Park": ["Bucktown"], "River North": ["Gallery District"] }
        },
        "Massachusetts": {
            "Boston": { "Back Bay": ["Newbury Street"], "Beacon Hill": ["Historic"], "South End": ["Victorian Area"], "Cambridge": ["Harvard Square", "MIT Area"], "Seaport": ["Innovation District"] }
        },
        "Georgia": {
            "Atlanta": { "Midtown": ["Piedmont Park"], "Buckhead": ["Lenox"], "Downtown": ["Centennial Park"], "Old Fourth Ward": ["Beltline"] }
        },
        "Washington": {
            "Seattle": { "Downtown": ["Pike Place", "Belltown"], "Capitol Hill": ["Broadway"], "Queen Anne": ["Kerry Park"], "Ballard": ["Old Ballard"] }
        },
        "Pennsylvania": {
            "Philadelphia": { "Center City": ["Rittenhouse Square", "Old City"], "South Philly": ["Passyunk"], "University City": ["UPenn Area"] }
        },
        "Arizona": {
            "Phoenix": { "Downtown": ["Roosevelt Row"], "Scottsdale": ["Old Town", "Fashion Square"], "Camelback": ["Mountain View"] }
        },
        "Colorado": {
            "Denver": { "LoDo": ["Union Station"], "RiNo": ["Arts District"], "Cherry Creek": ["Shopping Area"], "Capitol Hill": ["Historic"] }
        },
        "District of Columbia": {
            "Washington DC": { "Georgetown": ["Waterfront", "M St"], "Capitol Hill": ["Eastern Market"], "Dupont Circle": ["Embassy Row"], "Adams Morgan": ["Nightlife"] }
        },
        "Nevada": {
            "Las Vegas": { "The Strip": ["North Strip", "South Strip"], "Downtown": ["Fremont St"], "Summerlin": ["Residential"] }
        },
        "Hawaii": {
            "Honolulu": { "Waikiki": ["Resorts", "Beach"], "Downtown": ["Chinatown"], "North Shore": ["Haleiwa"] }
        }
    }
};

var translations = {
    en: {
        anyCountry: "Any Country",
        anyState: "Any State",
        anyCity: "Any City",
        anyLocality: "Any Locality",
        anyNeighborhood: "Any Neighborhood"
    },
    ar: {
        anyCountry: "كل الدول",
        anyState: "كل الولايات",
        anyCity: "كل المدن",
        anyLocality: "كل المناطق",
        anyNeighborhood: "كل الأحياء"
    },
    tr: {
        anyCountry: "Tüm Ülkeler",
        anyState: "Tüm İller",
        anyCity: "Tüm Şehirler",
        anyLocality: "Tüm Semtler",
        anyNeighborhood: "Tüm Mahalleler"
    }
};

var nameTranslations = {
    ar: {
        "Algeria": "الجزائر", "Algiers": "الجزائر العاصمة", "Oran": "وهران", "Constantine": "قسنطينة", "Annaba": "عنابة", "Sétif": "سطيف",
        "Australia": "أستراليا", "New South Wales": "نيو ساوث ويلز", "Victoria": "فيكتوريا", "Queensland": "كوينزلاند", "Western Australia": "غرب أستراليا", "South Australia": "جنوب أستراليا",
        "Bahrain": "البحرين", "Capital": "العاصمة", "Muharraq": "المحرق", "Northern": "الشمالية", "Southern": "الجنوبية",

        "Sudan": "السودان",
        "Khartoum State": "ولاية الخرطوم",
        "Khartoum City": "الخرطوم",
        "Khartoum Center": "وسط الخرطوم",
        "Khartoum South": "جنوب الخرطوم",
        "Khartoum North (Bahri)": "الخرطوم بحري",
        "Omdurman City": "أم درمان",
        "Red Sea State": "ولاية البحر الأحمر",
        "Port Sudan City": "بورتسودان",
        "Gezira State": "ولاية الجزيرة",
        "Wad Madani City": "ود مدني",
        "Al-Hasaheisa": "الحصاحيصا",
        "River Nile State": "ولاية نهر النيل",
        "Atbara": "عطبرة",
        "Ad-Damir": "الدامر",
        "Shendi": "شندي",
        "Northern State": "الولاية الشمالية",
        "Dongola": "دنقلا",
        "Wadi Halfa": "وادي حلفا",
        "Merowe": "مروي",
        "North Kordofan": "شمال كردفان",
        "Al-Ubayyid City": "الأبيض",
        "South Kordofan": "جنوب كردفان",
        "Kadugli City": "كادوقلي",
        "West Kordofan": "غرب كردفان",
        "Al-Fulah City": "الفولة",
        "North Darfur": "شمال دارفور",
        "Al-Fashir City": "الفاشر",
        "South Darfur": "جنوب دارفور",
        "Nyala City": "نيالا",
        "West Darfur": "غرب دارفور",
        "Geneina": "الجنينة",
        "Central Darfur": "وسط دارفور",
        "Zalingei": "زالنجي",
        "East Darfur": "شرق دارفور",
        "Ad-Du'ayn": "الضعين",
        "White Nile": "النيل الأبيض",
        "Rabak City": "ربك",
        "Kosti": "كوستي",
        "Blue Nile": "النيل الأزرق",
        "Ad-Damazin": "الدمازين",
        "Sennar State": "ولاية سنار",
        "Sennar City": "سنار",
        "Singa": "سنجة",
        "Kassala State": "ولاية كسلا",
        "Kassala City": "كسلا",
        "Al Qadarif State": "ولاية القضارف",
        "Al Qadarif City": "القضارف",

        "Brazil": "البرازيل",
        "Canada": "كندا",
        "China": "الصين",
        "Egypt": "مصر",
        "France": "فرنسا",
        "Germany": "ألمانيا",
        "India": "الهند",
        "Italy": "إيطاليا",
        "Japan": "اليابان",
        "Jordan": "الأردن",
        "Kuwait": "الكويت",
        "Lebanon": "لبنان",
        "Libya": "ليبيا",
        "Morocco": "المغرب",
        "Oman": "عمان",
        "Qatar": "قطر",
        "Russia": "روسيا",
        "Saudi Arabia": "المملكة العربية السعودية",
        "South Africa": "جنوب أفريقيا",
        "Spain": "إسبانيا",
        "Sudan": "السودان",
        "Tunisia": "تونس",
        "Turkiye": "تركيا",
        "United Arab Emirates": "الإمارات العربية المتحدة",
        "United Kingdom": "المملكة المتحدة",
        "United States": "الولايات المتحدة",
        "Austria": "النمسا", "Belgium": "بلجيكا", "Indonesia": "إندونيسيا", "Malaysia": "ماليزيا", "Netherlands": "هولندا",
        "Portugal": "البرتغال", "Singapore": "سنغافورة", "South Korea": "كوريا الجنوبية", "Sweden": "السويد", "Switzerland": "سويسرا", "Thailand": "تايلاند",
        "Cairo": "القاهرة", "Alexandria": "الإسكندرية", "Giza": "الجيزة", "Luxor": "الأقصر", "Aswan": "أسوان",
        "Riyadh": "الرياض", "Jeddah": "جدة", "Makkah": "مكة المكرمة", "Madinah": "المدينة المنورة", "Dammam": "الدمام",
        "Dubai": "دبي", "Abu Dhabi": "أبو ظبي", "Sharjah": "الشارقة", "Ajman": "عجمان", "Fujairah": "الفجيرة",
        "Istanbul": "إسطنبول", "Ankara": "أنقرة", "Izmir": "إزمير", "Antalya": "أنطاليا", "Bursa": "بورصة",
        "Khartoum": "الخرطوم", "Omdurman": "أم درمان", "Port Sudan": "بورتسودان", "Wad Madani": "ود مدني",
        "Dubai City": "دبي", "Abu Dhabi City": "أبو ظبي", "Sharjah City": "الشارقة", "Ajman City": "عجمان", "Fujairah City": "الفجيرة", "Ras Al Khaimah City": "رأس الخيمة", "Umm Al Quwain City": "أم القيوين",
        "Riyadh City": "الرياض", "Jeddah City": "جدة", "Makkah City": "مكة المكرمة", "Madinah City": "المدينة المنورة", "Dammam City": "الدمام", "Khobar City": "الخبر",
        "Istanbul City": "إسطنبول", "Ankara City": "أنقرة", "Izmir City": "إزمير", "Antalya City": "أنطاليا", "Bursa City": "بورصة",
        "Al-Riyadh": "الرياض", "Al-Manshiya": "المنشية", "Al-Amarat": "العمارات", "Garden City": "جاردن سيتي", "Burri": "بري", "Al-Mugran": "المقرن",
        "Al-Giraif West": "الجريف غرب", "Al-Kalakla": "الكلاكلة", "Al-Azhari": "الأزهري", "Al-Sahafa": "الصحافة", "Al-Mamoura": "المعمورة",
        "Kafouri": "كافوري", "Al-Sababi": "الصبابي", "Al-Mazad": "المزاد", "Al-Danagla": "الدناقلة", "Shambat": "شمبات", "Al-Droshab": "الدروشاب", "Halfayat Al-Muluk": "حلفاية الملوك",
        "Al-Muhandiseen": "المهندسين", "Al-Urdah": "العرضة", "Al-Thawra (All Blocks)": "الثورة (كل الحارات)", "Bait Al-Mal": "بيت المال", "Al-Fitaihab": "الفتيحاب", "Al-Nakhil": "النخيل", "Al-Mulazmin": "الملازمين",
        "Central Port Sudan": "وسط بورتسودان", "Al-Matar": "المطار", "Al-Markazi": "المركزي", "Al-Shati": "الشاطئ", "Al-Ingaz": "الإنقاذ", "Salalab": "سلالاب", "Suakin Area": "منطقة سواكن", "Suakin Port": "ميناء سواكن", "Historic Area": "المنطقة التاريخية",
        "Wad Madani Center": "وسط ود مدني", "Al-Madiba": "المديبة", "Al-Zamalek": "الزمالك", "Al-Daraga": "الدرجة", "Al-Nasr": "النصر", "Marangan": "مارنجان",

        "Khartoum Center": "وسط الخرطوم", "Khartoum South": "جنوب الخرطوم", "Khartoum North (Bahri)": "الخرطوم بحري", "Omdurman City": "أم درمان",

        "Tunisia": "تونس",
        "Tunis": "تونس (ولاية)",
        "Tunis City": "مدينة تونس",
        "Les Berges du Lac": "ضفاف البحيرة", "La Marsa": "المرسى", "Carthage": "قرطاج", "Centre Urbain Nord": "المركز العمراني الشمالي", "Ennasr": "النصر", "El Menzah": "المنزه", "Manar": "المنار", "Ariana": "أريانة", "Medina": "المدينة العتيقة", "Lafayette": "لافيات", "Mutuelleville": "ميتيال فيل",
        "Ariana City": "مدينة أريانة", "Raoued": "رواد", "La Soukra": "سكرة",
        "Ben Arous": "بن عروس", "Ben Arous City": "مدينة بن عروس", "Hammam Lif": "حمام الأنف", "Rades": "رادس", "Megrine": "مقرين",
        "Manouba": "منوبة", "Manouba City": "مدينة منوبة", "Oued Ellil": "وادي الليل", "Douar Hicher": "دوار هيشر",
        "Nabeul": "نابل", "Nabeul City": "مدينة نابل", "Hammamet": "الحمامات", "Kelibia": "قليبية",
        "Zaghouan": "زغوان", "Zaghouan City": "مدينة زغوان",
        "Bizerte": "بنزرت", "Bizerte City": "مدينة بنزرت", "Menzel Bourguiba": "منزل بورقيبة",
        "Beja": "باجة", "Beja City": "مدينة باجة",
        "Jendouba": "جندوبة", "Jendouba City": "مدينة جندوبة", "Tabarka": "طبرقة",
        "Kef": "الكاف", "Kef City": "مدينة الكاف",
        "Siliana": "سليانة", "Siliana City": "مدينة سليانة",
        "Sousse": "سوسة", "Sousse City": "مدينة سوسة", "Hammam Sousse": "حمام سوسة", "Kantaoui": "القنطاوي",
        "Monastir": "المنستير", "Monastir City": "مدينة المنستير",
        "Mahdia": "المهدية", "Mahdia City": "مدينة المهدية",
        "Sfax": "صفاقس", "Sfax City": "مدينة صفاقس",
        "Kairouan": "القيروان", "Kairouan City": "مدينة القيروان",
        "Kasserine": "القصرين", "Kasserine City": "مدينة القصرين",
        "Sidi Bouzid": "سيدي بوزيد", "Sidi Bouzid City": "مدينة سيدي بوزيد",
        "Gabes": "قابس", "Gabes City": "مدينة قابس",
        "Medenine": "مدنين", "Medenine City": "مدينة مدنين", "Djerba": "جربة", "Zarzis": "جرجيس",
        "Tataouine": "تطاوين", "Tataouine City": "مدينة تطاوين",
        "Gafsa": "قفصة", "Gafsa City": "مدينة قفصة",
        "Tozeur": "توزر", "Tozeur City": "مدينة توزر",
        "Kebili": "قبلي", "Kebili City": "مدينة قبلي",
        "Cairo City": "القاهرة", "Giza City": "الجيزة", "Alexandria City": "الإسكندرية",

        /* --- Egypt --- */
        "Cairo Governorate": "محافظة القاهرة",
        "New Cairo": "القاهرة الجديدة", "Tagamoa El Khamis": "التجمع الخامس", "Al Rehab City": "مدينة الرحاب", "Madinaty": "مدينتي", "Lotus": "اللوتس", "Choueifat": "الشويفات", "South Investors": "المستثمرين الجنوبية", "Narges": "النرجس",
        "Nasr City": "مدينة نصر", "Abbas El Akkad": "عباس العقاد", "Makram Ebeid": "مكرم عبيد", "The 10th District": "الحي العاشر", "Zahraa Nasr City": "زهراء مدينة نصر", "Rabaa Al-Adawiya": "رابعة العدوية", "El Sfarat": "حي السفارات",
        "Maadi": "المعادي", "Degla": "دجلة", "Sarayat El Maadi": "سرايات المعادي", "Zahraa El Maadi": "زهراء المعادي", "Old Maadi": "المعادي القديمة", "New Maadi": "المعادي الجديدة", "Corniche El Maadi": "كورنيش المعادي",
        "Heliopolis": "مصر الجديدة", "Korba": "الكوربة", "Merryland": "ميريلاند", "Sheraton Heliopolis": "شيراتون المطار", "El Nozha": "النزهة", "Ard El Golf": "أرض الجولف", "Roxy": "روكسي",
        "Downtown": "وسط البلد", "Tahrir": "التحرير", "Garden City": "جاردن سيتي", "Zamalek": "الزمالك", "Abdeen": "عابدين", "Qasr El Nil": "قصر النيل",
        "Shoubra": "شبرا", "Rod El Farag": "روض الفرج", "Agha Khan": "أغاخان", "Khalafawy": "الخلفاوي", "Saintat": "السانت تريز",
        "New Administrative Capital": "العاصمة الإدارية الجديدة", "R7": "الحي السكني السابع", "R8": "الحي السكني الثامن", "Financial District": "حي المال والأعمال", "Baron City": "مدينة البارون", "Expo City": "مدينة المعارض",
        "Giza Governorate": "محافظة الجيزة",
        "Sheikh Zayed": "الشيخ زايد", "District 1": "الحي الأول", "District 10": "الحي العاشر", "Allegria": "أليجريا", "Beverly Hills": "بيفرلي هيلز", "Greens": "جرينز", "Casa": "كازا", "Etapa": "إيتابا",
        "6th of October": "6 أكتوبر", "Al Motamayez": "حي المتميز", "West Somid": "غرب سوميد", "Hosary": "الحصري", "Industrial Zone": "المنطقة الصناعية", "Dreamland": "دريم لاند", "Palm Hills": "بالم هيلز",
        "Mohandessin": "المهندسين", "Lebanon Square": "ميدان لبنان", "Syria Street": "شارع سوريا", "Gamat El Dowal": "جامعة الدول العربية", "Sudan Street": "شارع السودان",
        "Dokki": "الدقي", "Messaha Square": "ميدان المساحة", "Tahrir Street": "شارع التحرير", "Shooting Club Area": "منطقة نادي الصيد",
        "Haram": "الهرم", "Faisal": "فيصل", "Maryotia": "المريوطية", "Hadayek Al Ahram": "حدائق الأهرام", "Remaya": "الرماية",
        "Alexandria Governorate": "محافظة الإسكندرية",
        "North Coast": "الساحل الشمالي", "Marina": "مارينا", "Marassi": "مراسي", "Hacienda": "هاسيندا", "Sidi Abdel Rahman": "سيدي عبد الرحمن", "Alamein": "العلمين",
        "City Center": "وسط المدينة", "Smouha": "سموحة", "Sidi Gaber": "سيدي جابر", "Kafr Abdo": "كفر عبده", "Roushdy": "رشدي", "Sporting": "سبورتنج",
        "Corniche": "الكورنيش", "San Stefano": "سان ستيفانو", "Gleem": "جليم", "Stanley": "ستانلي", "Shatby": "الشاطبي", "Montaza": "المنتزه", "Maamoura": "المعمورة",
        "West Alex": "غرب الإسكندرية", "Agami": "العجمي", "Borg El Arab": "برج العرب", "King Mariout": "كينج مريوط",
        "Red Sea": "البحر الأحمر", "Hurghada": "الغردقة", "El Gouna": "الجونة", "Sahl Hasheesh": "سهل حشيش", "Makadi Bay": "خليج مكادي",
        "Marsa Alam": "مرسى علم", "Port Ghalib": "بورت غالب",
        "South Sinai": "جنوب سيناء", "Sharm El Sheikh": "شرم الشيخ", "Naama Bay": "خليج نعمة", "Nabq Bay": "خليج نبق", "Hadaba": "الهضبة", "Soho Square": "سوهو سكوير",
        "Dahab": "دهب", "Lagoon": "اللاجونا", "Lighthouse": "اللايت هاوس",
        "Dakahlia": "الدقهلية", "Mansoura": "المنصورة", "Toriel": "توريل", "Godeila": "جديلة", "Gamaa District": "حي الجامعه",
        "Gharbia": "الغربية", "Tanta": "طنطا",
        "Sharqia": "الشرقية", "Zagazig": "الزقازيق", "10th of Ramadan": "العاشر من رمضان",
        "Qalyubia": "القليوبية", "Benha": "بنها",
        "Port Said": "بورسعيد", "Port Said City": "مدينة بورسعيد", "Port Fouad": "بورفؤاد",

        /* --- Jordan --- */
        "Amman": "عمان", "Amman City": "مدينة عمان",
        "Abdoun": "عبدون", "Sweifieh": "الصويفية", "Khalda": "خلدا", "Jabal Amman": "جبل عمان", "Tla' Al-Ali": "تلاع العلي", "Deir Ghbar": "دير غبار", "Shmeisani": "الشميساني",
        "Jabal Al-Hussein": "جبل الحسين", "Jabal Al-Weibdeh": "جبل اللويبدة", "Umm Uthaina": "أم أذينة", "Marj Al-Hamam": "مرج الحمام", "Marka": "ماركا", "Tabarbour": "طبربور",
        "Sahab": "سحاب", "Al-Jandaweel": "الجندويل", "Wadi Saqra": "وادي صقرة", "Abu Nseir": "أبو نصير", "Sweileh": "صويلح", "Jubaiha": "الجبيهة", "Al-Zarqa Highway": "أوتوستراد الزرقاء",
        "Irbid": "إربد", "Irbid City": "مدينة إربد", "University District": "حي الجامعة", "Al-Huson": "الحصن", "Downtown Irbid": "وسط البلد", "Al-Naseem": "النسيم", "Princess Basma": "الأميرة بسمة", "Al-Hay Al-Sharqi": "الحي الشرقي", "Al-Hay Al-Janubi": "الحي الجنوبي", "Beit Ras": "بيت راس", "Ramtha": "الرمثا",
        "Zarqa": "الزرقاء", "Zarqa City": "مدينة الزرقاء", "New Zarqa": "الزرقاء الجديدة", "Free Zone": "المنطقة الحرة", "Russeifa": "الرصيفة", "Hashemite University Area": "منطقة الجامعة الهاشمية", "Downtown Zarqa": "وسط البلد", "Al-Zarqa Al-Jadida": "الزرقاء الجديدة",
        "Aqaba": "العقبة", "Aqaba City": "مدينة العقبة", "Tala Bay": "تالا باي", "Ayla": "أيلة", "South Beach": "الشاطئ الجنوبي",
        "Madaba": "مأدبا", "Madaba City": "مدينة مأدبا", "Mount Nebo Area": "منطقة جبل نيبو",
        "Balqa": "البلقاء", "Salt City": "السلط", "Fuheis": "الفحيص", "Ain Al-Basha": "عين الباشا",
        "Karak": "الكرك", "Karak City": "مدينة الكرك", "Castle Area": "منطقة القلعة", "Mazar": "المزار",
        "Mafraq": "المفرق", "Mafraq City": "مدينة المفرق", "Zaatari": "الزعتري",
        "Tafilah": "الطفيلة", "Tafilah City": "مدينة الطفيلة", "Dana": "ضانا",
        "Ma'an": "معان", "Ma'an City": "مدينة معان", "Petra": "البتراء", "Wadi Musa": "وادي موسى",
        "Ajloun": "عجلون", "Ajloun City": "مدينة عجلون",
        "Jerash": "جرش", "Jerash City": "مدينة جرش",

        /* --- Lebanon --- */
        "Beirut": "بيروت", "Beirut City": "مدينة بيروت",
        "Hamra": "الحمرا", "Achrafieh": "الأشرفية", "Verdun": "فردان", "Raouche": "الروشة", "Ain El Mreisseh": "عين المريسة", "Ras Beirut": "رأس بيروت", "Bachoura": "الباشورة", "Rmeil": "الرميل", "Medawar": "المدور", "Gemmayze": "الجميزة", "Mar Mikhael": "مار مخايل",
        "Mount Lebanon": "جبل لبنان", "Jounieh": "جونيه", "Kaslik": "الكسليك", "Harissa Area": "حريصا", "Maameltein": "المعاملتين", "Sarba": "صربا",
        "Byblos (Jbeil)": "جبيل", "Old Town": "المدينة القديمة", "New Jbeil": "جبيل الجديدة",
        "Baabda": "بعبدا", "Hazmieh": "الحازمية", "Sin El Fil": "سن الفيل",
        "Aley": "عاليه", "Aley City": "مدينة عاليه", "Bhamdoun": "بحمدون",
        "Metn": "المتن", "Jdeideh": "الجديدة", "Dora": "الدورة", "Dbayeh": "ضبية", "Antelias": "انطلياس",
        "Keserwan": "كسروان", "Faraya": "فاريا",
        "Chouf": "الشوف", "Beiteddine": "بيت الدين", "Deir El Qamar": "دير القمر",
        "North Lebanon": "شمال لبنان", "Tripoli": "طرابلس", "Al-Mina": "الميناء", "El-Tall": "التح", "Abu Samra": "أبي سمراء", "Zahrieh": "الزاهرية", "Bab Al-Raml": "باب الرمل",
        "Zgharta": "زغرتا", "Ehden": "إهدن",
        "Batroun": "البترون", "Koura": "الكورة", "Amioun": "أميون", "Bcharreh": "بشري", "Minieh-Danniyeh": "المنية الضنية", "Minieh": "المنية",
        "South Lebanon": "جنوب لبنان", "Saida (Sidon)": "صيدا", "Tyre (Sour)": "صور", "Jezzine": "جزين",
        "Bekaa": "البقاع", "Zahle": "زحلة", "Baalbek": "بعلبك", "Rashaya": "راشيا", "West Bekaa": "البقاع الغربي", "Joub Jannine": "جب جنين",
        "Nabatieh": "النبطية", "Nabatieh City": "مدينة النبطية", "Kfar Roummane": "كفر رمان",
        "Akkar": "عكار", "Halba": "حلبا", "Akkar El Atika": "عكار العتيقة",
        "Baalbek-Hermel": "بعلبك الهرمل", "Hermel": "الهرمل",

        /* --- Algeria --- */
        "Algeria": "الجزائر", "Algiers": "الجزائر العاصمة", "Algiers City": "مدينة الجزائر",
        "Sidi M'Hamed": "سيدي امحمد", "Bab El Oued": "باب الوادي", "Bologhine": "بولوغين", "Hydra": "حيدرة", "Dely Ibrahim": "دالي ابراهيم", "El Biar": "الأبيار", "Hussein Dey": "حسين داي", "El Harrach": "الحراش", "Bir Mourad Raïs": "بئر مراد رايس", "Birkhadem": "بئر خادم", "El Madania": "المدنية", "Belouizdad": "بلوزداد", "Bouzareah": "بوزريعة",
        "Tipaza": "تيبازة", "Cherchell": "شرشال", "Blida": "البليدة", "Boumerdes": "بومرداس",
        "Oran": "وهران", "Oran City": "مدينة وهران", "Es Sénia": "السانية", "Bir El Djir": "بئر الجير", "Akid Lotfi": "العقيد لطفي", "Sidi El Houari": "سيدي الهواري", "El Hamri": "الحمري", "Medina Jedida": "المدينة الجديدة", "Hai El Yasmine": "حي الياسمين", "Hai Essalem": "حي السلام", "Arzew": "أرزيو", "Bethioua": "بطيوة",
        "Constantine": "قسنطينة", "Constantine City": "مدينة قسنطينة", "Hamma Bouziane": "حامة بوزيان", "El Khroub": "الخروب", "Zouaghi": "زواغي", "Sidi Mabrouk": "سيدي مبروك", "Bellevue": "بلفو",
        "Annaba": "عنابة", "Annaba City": "مدينة عنابة", "Sidi Brahim": "سيدي ابراهيم", "Seraïdi": "سرايدي", "El Bouni": "البوني",
        "Sétif": "سطيف", "Sétif City": "مدينة سطيف", "Ain El Fouara": "عين الفوارة", "El Eulma": "العلمة", "Bel Air": "بل إير",
        "Batna": "باتنة", "Timgad": "تيمقاد", "Béjaïa": "بجاية", "Biskra": "بسكرة", "Chetma": "شتمة",
        "Tlemcen": "تلمسان", "Maghnia": "مغنية", "Tiaret": "تيارت", "Tizi Ouzou": "تيزي وزو", "Azazga": "عزازقة",
        "Djelfa": "الجلفة", "Jijel": "جيجل", "Skikda": "سكيكدة", "Mostaganem": "مستغانم", "Médéa": "المدية", "Berrouaghia": "البرواقية",
        "Mascara": "معسكر", "Ouargla": "ورقلة", "Hassi Messaoud": "حاسي مسعود", "Ghardaïa": "غرداية", "Beni Isguen": "بني يزقن", "M'Zab Valley": "وادي ميزاب",
        "Saïda": "سعيدة", "Bordj Bou Arréridj": "برج بوعريريج", "Bouira": "البويرة", "Lakhdaria": "الأخضرية", "Chlef": "الشلف", "Oued Sly": "وادي سلي",
        "Tamanrasset": "تامنراست", "Assekrem": "الأسكرام", "Tébessa": "تبسة", "El Oued": "الوادي", "Khenchela": "خنشلة", "Souk Ahras": "سوق أهراس", "Guelma": "قالمة", "Hammam Debagh": "حمام دباغ",
        "Laghouat": "الأغواط", "M'Sila": "المسيلة", "Bou Saâda": "بوسعادة", "Oum El Bouaghi": "أم البواقي", "El Bayadh": "البيض", "Illizi": "إليزي", "Djanet": "جانت",
        "Bordj Badji Mokhtar": "برج باجي مختار", "Béni Abbès": "بني عباس", "Timimoun": "تيميمون", "Touggourt": "تقرت", "In Salah": "عين صالح", "In Guezzam": "عين قزام",
        "Relizane": "غليزان", "Aïn Defla": "عين الدفلى", "Aïn Témouchent": "عين تموشنت", "Beni Saf": "بني صاف", "Tissemsilt": "تيسمسيلت", "El Tarf": "الطارف", "El Kala": "القالة", "Naâma": "النعامة", "Mila": "ميلة",

        /* --- Libya --- */
        "Libya": "ليبيا",
        "Tripoli": "طرابلس", "Tripoli City": "مدينة طرابلس", "Hay Al Andalus": "حي الأندلس", "Gargaresh": "قرجي", "Ben Ashour": "بن عاشور", "Al-Sarraj": "السراج", "Soug Al-Juma": "سوق الجمعة", "Ain Zara": "عين زارة", "Tajoura": "تاجوراء", "Fashloum": "فشلوم", "Abu Salim": "أبو سليم",
        "Benghazi": "بنغازي", "Benghazi City": "مدينة بنغازي", "Al Fuwayhat": "الفويهات", "Al-Sabri": "الصابري", "Al-Keesh": "الكيش", "Sidi Hussein": "سيدي حسين", "Benina": "بنينا",
        "Misrata": "مصراتة", "Misrata City": "مدينة مصراتة",
        "Zawiya": "الزاوية", "Zawiya City": "مدينة الزاوية",
        "Bayda": "البيضاء", "Bayda City": "مدينة البيضاء", "Green Mountain": "الجبل الأخضر",
        "Gharyan": "غريان", "Khoms": "الخمس", "Leptis Magna": "لبدة الكبرى", "Zliten": "زليتن", "Marj": "المرج", "Tobruk": "طبرق", "Ajdabiya": "أجدابيا", "Derna": "درنة", "Sirte": "سرت", "Sabha": "سبها", "Murzuq": "مرزق", "Ubari": "أوباري", "Ghat": "غات", "Akakus": "أكاكوس", "Nalut": "نالوت", "Jadu": "جادو", "Bani Walid": "بني وليد", "Tarhuna": "ترهونة", "Sabratha": "صبراتة",

        /* --- Morocco --- */
        "Morocco": "المغرب",
        "Casablanca-Settat": "الدار البيضاء - سطات", "Casablanca": "الدار البيضاء", "Maarif": "المعاريف", "Anfa": "أنفا", "Ain Diab": "عين الذئب", "Sidi Maarouf": "سيدي معروف", "Bouskoura": "بوسكورة", "Gauthier": "غوتيي", "Bourgogne": "بوركون", "Hay Hassani": "حي الحسني", "Sidi Bernoussi": "سيدي البرنوصي",
        "Settat": "سطات", "El Jadida": "الجديدة", "Mohammedia": "المحمدية",
        "Rabat-Salé-Kénitra": "الرباط - سلا - القنيطرة", "Rabat": "الرباط", "Agdal": "أكدال", "Hay Riad": "حي الرياض", "Souissi": "السويسي", "Hassan": "حسان", "Yacoub El Mansour": "يعقوب المنصور", "Hay Nahda": "حي النهضة",
        "Salé": "سلا", "Hay Salam": "حي السلام", "Tabriquet": "تابريكت", "Kénitra": "القنيطرة", "Mehdia": "المهدية", "Témara": "تمارة",
        "Marrakech-Safi": "مراكش - آسفي", "Marrakech": "مراكش", "Gueliz": "جليز", "Hivernage": "الحي الشتوي", "Palmeraie": "النخيل", "Targa": "تارغة", "Safi": "آسفي", "Essaouira": "الصويرة",
        "Fez-Meknes": "فاس - مكناس", "Fez": "فاس", "Fes El Bali": "فاس البالي", "Ville Nouvelle": "المدينة الجديدة", "Fes El Jdid": "فاس الجديد", "Meknes": "مكناس", "Hamria": "حمرية", "Ifrane": "إفران",
        "Tangier-Tetouan-Al Hoceima": "طنجة - تطوان - الحسيمة", "Tangier": "طنجة", "Malabata": "مالاباطا", "Boubana": "بوبانة", "Cap Spartel": "رأس سبارطيل", "Tetouan": "تطوان", "Al Hoceima": "الحسيمة",
        "Agadir-Souss Massa": "أكادير - سوس ماسة", "Agadir": "أكادير", "Agadir Bay": "خليج أكادير", "Talborjt": "تالبورجت", "Taroudant": "تارودانت", "Tiznit": "تيزنيت", "Inezgane": "إنزكان",
        "Oriental": "الشرق", "Oujda": "وجدة", "Nador": "الناظور", "Berkane": "بركان",
        "Drâa-Tafilalet": "درعة - تافيلالت", "Errachidia": "الرشيدية", "Ouarzazate": "ورزازات", "Ait Benhaddou": "آيت بن حدو", "Zagora": "زاكورة",
        "Guelmim-Oued Noun": "كلميم - واد نون", "Guelmim": "كلميم", "Tan-Tan": "طانطان",
        "Laâyoune-Sakia El Hamra": "العيون - الساقية الحمراء", "Laâyoune": "العيون", "Boujdour": "بوجدور",
        "Dakhla-Oued Ed-Dahab": "الداخلة - وادي الذهب", "Dakhla": "الداخلة",
        "Béni Mellal-Khénifra": "بني ملال - خنيفرة", "Béni Mellal": "بني ملال", "Ouzoud": "أوزود", "Khénifra": "خنيفرة",
        "North Riyadh": "شمال الرياض", "East Riyadh": "شرق الرياض", "Center Riyadh": "وسط الرياض", "West Riyadh": "غرب الرياض", "South Riyadh": "جنوب الرياض",
        "North Jeddah": "شمال جدة", "East Jeddah": "شرق جدة", "Center Jeddah": "وسط جدة", "South Jeddah": "جنوب جدة",

        /* --- Saudi Arabia Neighborhoods --- */
        "Al-Hittin": "حطين", "Al-Malqa": "الملقا", "Al-Yasmin": "الياسمين", "Al-Sahafa": "الصحافة", "Al-Narjis": "النرجس", "Al-Qirawan": "القيروان", "Al-Aqiq": "العقيق", "Al-Nakheel": "النخيل", "Al-Ghadir": "الغدير", "Al-Rabie": "الربيع",
        "Al-Rawdah": "الروضة", "Al-Rayyan": "الريان", "Al-Munsiyah": "المونسية", "Al-Qadisiyah": "القادسية", "Al-Yarmouk": "اليرموك", "Al-Hamra": "الحمراء", "Gharnatah": "غرناطة", "Ishbiliyah": "إشبيلية", "Al-Nahda": "النهضة",
        "Al-Olaya": "العليا", "Al-Sulaimaniyah": "السليمانية", "Al-Wizarat": "الوزارات", "Al-Murabba": "المربع", "Al-Malaz": "الملز", "Al-Ma'ther": "المعذر",
        "Al-Suwaidi": "السويدي", "Al-Shifa": "الشفاء", "Al-Aziziyah": "العزيزية", "Al-Dar Al-Baida": "الدار البيضاء", "Al-Mansourah": "المنصورة", "Al-Khalidiyyah": "الخالدية",
        "Labang": "لبن", "Al-Arja": "العرجاء", "Al-Badiyah": "البديعة", "Dhahrat Al-Badiyah": "ظهرة البديعة", "Al-Uraija": "العريجاء", "Al-Tuwaiq": "طويق",
        "Al-Shati": "الشاطئ", "Al-Murjan": "المرجان", "Al-Basatin": "البساتين", "Al-Mohammediyah": "المحمدية", "Al-Naeem": "النعيم", "Al-Nahda": "النهضة", "Al-Bawadi": "البوادي", "Al-Zahra": "الزهراء", "Al-Salamah": "السلامة",
        "Al-Safa": "الصفا", "Al-Marwah": "المروة", "Al-Faisaliyah": "الفيصلية", "Al-Rawdah": "الروضة", "Al-Rehab": "الرحاب", "Al-Mushrifah": "مشرفة", "Al-Aziziyah": "العزيزية",
        "Al-Balad": "البلد", "Al-Hindawiyah": "الهنداوية", "Al-Kandarah": "الكندرة", "Al-Baghdadiyah": "البغدادية", "Al-Ammariyah": "العمارية", "Al-Sahifa": "الصحيفة",
        "Al-Thaghr": "الثغر", "Al-Fayha": "الفيحاء", "Al-Nuzlah": "النزلة", "Al-Ghulail": "غليل", "Al-Mahjar": "المحجر",
        "North Dammam": "شمال الدمام", "East Dammam": "شرق الدمام", "West Dammam": "غرب الدمام", "Central Dammam": "وسط الدمام", "South Dammam": "جنوب الدمام",
        "Al-Faisaliyah": "الفيصلية", "Al-Mubarakiyah": "المباركية", "Al-Mazruiyyah": "المزروعية", "Al-Glumeh": "الجلوية", "Al-Badiyah": "البادية", "Al-Adamah": "العدامة",
        "Al-Shatea": "الشاطئ", "Al-Jamiyin": "الجامعيين", "Al-Nuzha": "النزهة", "Al-Fakhriyah": "الفاخرية", "Al-Uhud": "أحد", "Al-Manar": "المنار",
        "Al-Khobar News": "الخبر الشمالية", "Al-Khobar Al-Janubiyah (Bayonia)": "الخبر الجنوبية (البايونية)", "Al-Aqrabiya": "العقربية", "Al-Hizam Al-Thahabi": "الحزام الذهبي", "Al-Hizam Al-Akhdar": "الحزام الأخضر", "Al-Rakah": "الراكة",
        "North Khobar": "شمال الخبر", "South Khobar": "جنوب الخبر",

        /* --- Kuwait --- */
        "Al Asimah": "العاصمة", "Kuwait City": "مدينة الكويت",
        "Sharq": "شرق", "Dasmān": "دسمان", "Al-Mirqāb": "المرقاب", "Bneid Al-Gar": "بنيد القار", "Shuwaikh": "الشويخ", "Abdullah Al-Salem": "عبدالله السالم",
        "Hawalli": "حولي", "Salmiya": "السالمية", "Jabriya": "الجابرية", "Mishref": "مشرف",
        "Farwaniya": "الفروانية", "Farwaniya City": "مدينة الفروانية", "Khaitan": "خيطان", "Riggai": "الرقعي", "Ardiya": "العارضية",
        "Mubarak Al-Kabeer": "مبارك الكبير", "Sabah Al-Salem": "صباح السالم", "Qurain": "القرين",
        "Ahmadi": "الأحمدي", "Fahaheel": "الفحيحيل", "Eqaila": "العقيلة", "Mangaf": "المنقف", "Mahboula": "المهبولة",
        "Jahra": "الجهراء", "Jahra City": "مدينة الجهراء", "Saad Al-Abdullah": "سعد العبدالله",

        /* --- Bahrain --- */
        "Manama": "المنامة", "Juffair": "الجفير", "Seef": "السيف", "Adliya": "العدلية", "Hoora": "الحورة", "Zinj": "الزنج",
        "Muharraq City": "مدينة المحرق", "Amwaj Islands": "جزر أمواج", "Diyar Al Muharraq": "ديار المحرق", "Busaiteen": "البسيتين", "Galali": "قلال",
        "Hamad Town": "مدينة حمد", "Saar": "سار", "Janabiya": "الجنبية", "Budaiya": "البديع",
        "Riffa": "الرفاع", "East Riffa": "الرفاع الشرقي", "West Riffa": "الرفاع الغربي", "Zallaq": "الزلاق",

        /* --- Qatar --- */
        "Doha": "الدوحة", "Doha City": "مدينة الدوحة",
        "The Pearl": "اللؤلؤة", "West Bay": "الدفنة (ويست باي)", "Lusail": "لوسيل", "Msheireb": "مشيرب", "Al Waab": "الوعب", "Al Sadd": "السد", "Bin Mahmoud": "بن محمود",
        "Al Rayyan": "الريان", "Al Rayyan City": "مدينة الريان", "Al Wajbah": "الوجبة", "Muaither": "معيذر",
        "Al Wakrah": "الوكرة", "Al Wakrah City": "مدينة الوكرة", "Al Wukair": "الوكير",
        "Al Khor": "الخور", "Al Khor City": "مدينة الخور",
        "Al Daayen": "الظعاين", "Umm Salal": "أم صلال", "Umm Salal Ali": "أم صلال علي", "Umm Salal Mohammed": "أم صلال محمد",

        /* --- UAE --- */
        "Dubai Marina": "دبي مارينا", "Jumeirah Beach Residence (JBR)": "جي بي آر", "Palm Jumeirah": "نخلة جميرا", "Downtown Dubai": "وسط مدينة دبي", "Business Bay": "الخليج التجاري", "DIFC": "مركز دبي المالي العالمي",
        "Jumeirah": "جميرا", "Umm Suqeim": "أم سقيم", "Al Barsha": "البرشاء", "Arabian Ranches": "المرابع العربية", "Dubai Hills Estate": "دبي هيلز", "Emirates Hills": "تلال الإمارات",
        "Deira": "ديرة", "Bur Dubai": "بر دبي", "Al Rigga": "الرقة", "Al Muraqqabat": "المرقبات", "Al Karama": "الكرامة", "Al Mankhool": "المنخول",
        "Corniche Area": "منطقة الكورنيش", "Al Khalidiya": "الخالدية", "Al Reem Island": "جزيرة الريم", "Al Maryah Island": "جزيرة المارية", "Saadiyat Island": "جزيرة السعديات", "Yas Island": "جزيرة ياس",
        "Al Raha Beach": "شاطئ الراحة", "Khalifa City": "مدينة خليفة", "Masdar City": "مدينة مصدر", "Mohammed Bin Zayed City": "مدينة محمد بن زايد",
        "Al Majaz": "المجاز", "Al Nahda": "النهضة", "Al Taawun": "التعاون", "Al Qasimia": "القاسمية", "Muwaileh": "مويلح",
        "Al Nuaimia": "النعيمية", "Al Rashidiya": "الراشدية", "Al Jurf": "الجرف", "Ajman Corniche": "كورنيش عجمان",
        "Dibba": "دبا", "Al Aqah": "العقة",
        "Al Hamra Village": "قرية الحمراء", "Mina Al Arab": "ميناء العرب", "Al Marjan Island": "جزيرة المرجان",

        /* --- Oman --- */
        "Muscat": "مسقط", "Muscat City": "مدينة مسقط",
        "Al Mouj": "الموج", "Madinat Al Sultan Qaboos": "مدينة السلطان قابوس", "Al Qurum": "القرم", "Bousher": "بوشر", "Muttrah": "مطرح",
        "Seeb": "السيب", "Al Khoudh": "الخوض", "Al Maabelah": "المعبيلة",
        "Dhofar": "ظفار", "Salalah": "صلالة", "Dahariz": "الدهاريز", "Saada": "السعادة",
        "Al Batinah North": "شمال الباطنة", "Sohar": "صحار", "Falaj Al Moala": "فلج المعلا",
        "Al Batinah South": "جنوب الباطنة", "Barka": "بركاء",
        "Ad Dakhiliyah": "الداخلية", "Nizwa": "نزوى", "Firq": "فرق",
        "Ash Sharqiyah South": "جنوب الشرقية", "Sur": "صور", "Al Ayjah": "العيجة",
        "London": "لندن", "Manchester": "مانشستر", "Birmingham": "برمنغهام", "Edinburgh": "إدنبرة", "Glasgow": "غلاسكو", "Liverpool": "ليفربول", "Leeds": "ليدز", "Bristol": "بريستول", "Cardiff": "كارديف", "Belfast": "بلفاست",
        "New York": "نيويورك", "New York City": "مدينة نيويورك", "Los Angeles": "لوس أنجلوس", "San Francisco": "سان فرانسيسكو", "Miami": "ميامي", "Houston": "هيوستن",
        "Chicago": "شيكاغو", "Boston": "بوسطن", "Seattle": "سياتل", "Atlanta": "أتلانتا", "Philadelphia": "فيلادلفيا", "Denver": "دنفر", "Las Vegas": "لاس فيغاس", "Honolulu": "هونولولو", "Washington DC": "واشنطن العاصمة",
        "Paris": "باريس", "Nice": "نيس", "Lyon": "ليون", "Marseille": "مارسيليا", "Bordeaux": "بوردو", "Toulouse": "تولوز", "Strasbourg": "ستراسبورغ",
        "Berlin": "برلين", "Munich": "ميونخ", "Hamburg": "هامبورغ", "Frankfurt": "فرانكفورت", "Cologne": "كولونيا", "Stuttgart": "شتوتغارت", "Düsseldorf": "دوسفلدورف",
        "Rome": "روما", "Milan": "ميلانو", "Naples": "نابولي", "Venice": "البندقية", "Florence": "فلورنسا", "Turin": "تورينو", "Bologna": "بولونيا",
        "Madrid": "مدريد", "Barcelona": "برشلونة", "Seville": "إشبيلية", "Malaga": "مالقة", "Valencia": "فالنسيا", "Bilbao": "بلباو",
        "Toronto": "تورونتو", "Vancouver": "فانكوفر", "Montreal": "مونتريال", "Ottawa": "أوتاوا", "Calgary": "كالجاري",
        "Beijing": "بكين", "Shanghai": "شانغهاي", "Guangzhou": "غوانزو", "Shenzhen": "شنتشن", "Chengdu": "تشنغدو", "Hangzhou": "هانغتشو",
        "Mumbai": "مومباي", "Delhi": "دلهي", "Bangalore": "بنغالور", "Chennai": "تشيناي", "Hyderabad": "حيدر أباد", "Kolkata": "كولكاتا", "Jaipur": "جايبور",
        "Tokyo": "طوكيو", "Osaka": "أوساكا", "Kyoto": "كيوتو", "Sapporo": "سابورو", "Nagoya": "ناغويا", "Fukuoka": "فوكوكا",
        "Moscow": "موسكو", "Saint Petersburg": "سانت بطرسبرغ",
        "São Paulo": "ساو باولو", "Rio de Janeiro": "ريو دي جانيرو", "Brasília": "برازيليا",
        "Johannesburg": "جوهانسبرغ", "Cape Town": "كيب تاون", "Pretoria": "بريتوريا",
        "Sydney": "سيدني", "Melbourne": "ملبورن", "Brisbane": "بريزبان", "Perth": "بيرث",
        "Vienna": "فيينا", "Salzburg": "سالزبورغ", "Brussels": "بروكسل", "Antwerp": "أنتويرب", "Amsterdam": "أمستردام", "Rotterdam": "روتردام", "Zurich": "زيورخ", "Geneva": "جنيف",
        "Stockholm": "ستوكهولم", "Gothenburg": "غوتنبرغ", "Lisbon": "لشبونة", "Porto": "بورتو",
        "Jakarta": "جاكرتا", "Bali": "بالي", "Kuala Lumpur": "كوالالمبور", "Bangkok": "بانكوك", "Phuket": "بوكيت", "Seoul": "سيول", "Busan": "بوسان",
        "Manhattan": "مانهاتن", "Brooklyn": "بروكلين", "Queens": "كوينز", "Hollywood": "هوليوود", "Beverly Hills": "بيفرلي هيلز",
        "Manhattan": "مانهاتن", "Brooklyn": "بروكلين", "Queens": "كوينز", "Hollywood": "هوليوود", "Beverly Hills": "بيفرلي هيلز",
        "Downtown": "وسط المدينة", "City Center": "مركز المدينة", "Old Town": "المدينة القديمة", "South Zone": "المنطقة الجنوبية"
    },
    tr: {
        "Algeria": "Cezayir", "Algiers": "Cezayir", "Oran": "Oran", "Constantine": "Konstantin", "Annaba": "Annaba", "Sétif": "Setif",
        "Australia": "Avustralya", "New South Wales": "Yeni Güney Galler", "Victoria": "Viktorya", "Queensland": "Queensland", "Western Australia": "Batı Avustralya", "South Australia": "Güney Avustralya",
        "Bahrain": "Bahreyn", "Capital": "Başkent", "Muharraq": "Muharraq", "Northern": "Kuzey", "Southern": "Güney",

        "Brazil": "Brezilya",
        "Canada": "Kanada",
        "China": "Çin",
        "Egypt": "Mısır",
        "France": "Fransa",
        "Germany": "Almanya",
        "India": "Hindistan",
        "Italy": "İtalya",
        "Japan": "Japonya",
        "Jordan": "Ürdün",
        "Kuwait": "Kuveyt",
        "Lebanon": "Lübnan",
        "Libya": "Libya",
        "Morocco": "Fas",
        "Oman": "Umman",
        "Qatar": "Katar",
        "Russia": "Rusya",
        "Saudi Arabia": "Suudi Arabistan",
        "South Africa": "Güney Afrika",
        "Spain": "İspanya",
        "Sudan": "Sudan",
        "Tunisia": "Tunus",
        "Turkiye": "Türkiye",
        "United Arab Emirates": "Birleşik Arap Emirlikleri",
        "United Kingdom": "Birleşik Krallık",
        "United States": "Amerika Birleşik Devletleri",
        "Austria": "Avusturya", "Belgium": "Belçika", "Indonesia": "Endonezya", "Malaysia": "Malezya", "Netherlands": "Hollanda",
        "Portugal": "Portekiz", "Singapore": "Singapur", "South Korea": "Güney Kore", "Sweden": "İsveç", "Switzerland": "İsviçre", "Thailand": "Tayland",
        "Cairo": "Kahire", "Alexandria": "İskenderiye", "Giza": "Gize",
        "Riyadh": "Riyad", "Jeddah": "Cidde", "Makkah": "Mekke", "Madinah": "Medine",
        "Dubai": "Dubai", "Abu Dhabi": "Abu Dabi", "Sharjah": "Şarika",
        "Khartoum City": "Hartum", "Omdurman City": "Omdurman", "Port Sudan City": "Port Sudan",
        "Riyadh City": "Riyad", "Jeddah City": "Cidde", "Makkah City": "Mekke", "Madinah City": "Medine",
        "Dubai City": "Dubai", "Abu Dhabi City": "Abu Dabi", "Sharjah City": "Şarika",
        "London": "Londra", "Manchester": "Manchester", "Birmingham": "Birmingham", "Edinburgh": "Edinburgh", "Glasgow": "Glasgow", "Liverpool": "Liverpool", "Leeds": "Leeds", "Bristol": "Bristol",
        "New York": "New York", "Los Angeles": "Los Angeles", "San Francisco": "San Francisco", "Miami": "Miami", "Houston": "Houston", "Chicago": "Chicago", "Boston": "Boston",
        "Paris": "Paris", "Nice": "Nice", "Lyon": "Lyon", "Marseille": "Marsilya", "Strasbourg": "Strazburg",
        "Berlin": "Berlin", "Munich": "Münih", "Hamburg": "Hamburg", "Frankfurt": "Frankfurt", "Cologne": "Köln", "Stuttgart": "Stuttgart",
        "Rome": "Roma", "Milan": "Milano", "Naples": "Napoli", "Venice": "Venedik", "Florence": "Floransa", "Turin": "Torino",
        "Madrid": "Madrid", "Barcelona": "Barselona", "Seville": "Sevilla", "Malaga": "Malaga", "Valencia": "Valensiya",
        "Toronto": "Toronto", "Vancouver": "Vancouver", "Montreal": "Montreal", "Ottawa": "Ottawa",
        "Beijing": "Pekin", "Shanghai": "Şanghay",
        "Mumbai": "Mumbai", "Delhi": "Delhi", "Bangalore": "Bangalore",
        "Tokyo": "Tokyo", "Osaka": "Osaka", "Kyoto": "Kyoto",
        "Moscow": "Moskova", "Saint Petersburg": "Sankt Petersburg",
        "São Paulo": "Sao Paulo", "Rio de Janeiro": "Rio de Janeiro",
        "Johannesburg": "Johannesburg", "Cape Town": "Cape Town",
        "Sydney": "Sidney", "Melbourne": "Melbourne",
        "Vienna": "Viyana", "Brussels": "Brüksel", "Antwerp": "Anvers", "Amsterdam": "Amsterdam", "Rotterdam": "Rotterdam", "Zurich": "Zürih", "Geneva": "Cenevre",
        "Stockholm": "Stokholm", "Lisbon": "Lizbon",
        "Jakarta": "Cakarta", "Kuala Lumpur": "Kuala Lumpur", "Bangkok": "Bangkok", "Seoul": "Seul"
    }
};

function getLang() {
    var lang = $('html').attr('lang');
    if (!lang) return 'en';
    if (lang.indexOf('ar') !== -1) return 'ar';
    if (lang.indexOf('tr') !== -1) return 'tr';
    return 'en';
}

function tName(name) {
    var lang = getLang();
    if (lang === 'en') return name;
    if (nameTranslations[lang] && nameTranslations[lang][name]) {
        return nameTranslations[lang][name];
    }
    return name;
}

$(document).ready(function () {
    var t = translations[getLang()];
    var $country = $('#select-country');
    var $state = $('#select-state');
    var $city = $('#select-city');
    var $locality = $('#select-locality');
    var $neighborhood = $('#select-neighborhood');

    if (!$country.length) return;

    // Populate Countries
    function initCountries() {
        $country.append('<option value="">' + t.anyCountry + '</option>');
        var countries = Object.keys(locationData).sort();
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            $country.append('<option value="' + country + '">' + tName(country) + '</option>');
        }
    }

    $country.on('change', function () {
        var countryVal = $(this).val();
        $state.empty().append('<option value="">' + t.anyState + '</option>');
        $city.empty().append('<option value="">' + t.anyCity + '</option>');
        $locality.empty().append('<option value="">' + t.anyLocality + '</option>');
        $neighborhood.empty().append('<option value="">' + t.anyNeighborhood + '</option>');

        if (countryVal && locationData[countryVal]) {
            for (var state in locationData[countryVal]) {
                $state.append('<option value="' + state + '">' + tName(state) + '</option>');
            }
        }
    });

    $state.on('change', function () {
        var countryVal = $country.val();
        var stateVal = $(this).val();
        $city.empty().append('<option value="">' + t.anyCity + '</option>');
        $locality.empty().append('<option value="">' + t.anyLocality + '</option>');
        $neighborhood.empty().append('<option value="">' + t.anyNeighborhood + '</option>');

        if (countryVal && stateVal && locationData[countryVal][stateVal]) {
            for (var city in locationData[countryVal][stateVal]) {
                $city.append('<option value="' + city + '">' + tName(city) + '</option>');
            }
        }
    });

    $city.on('change', function () {
        var countryVal = $country.val();
        var stateVal = $state.val();
        var cityVal = $(this).val();
        $locality.empty().append('<option value="">' + t.anyLocality + '</option>');
        $neighborhood.empty().append('<option value="">' + t.anyNeighborhood + '</option>');

        if (countryVal && stateVal && cityVal && locationData[countryVal][stateVal][cityVal]) {
            for (var locality in locationData[countryVal][stateVal][cityVal]) {
                $locality.append('<option value="' + locality + '">' + tName(locality) + '</option>');
            }
        }
    });

    $locality.on('change', function () {
        var countryVal = $country.val();
        var stateVal = $state.val();
        var cityVal = $city.val();
        var localityVal = $(this).val();
        $neighborhood.empty().append('<option value="">' + t.anyNeighborhood + '</option>');

        if (countryVal && stateVal && cityVal && localityVal && locationData[countryVal][stateVal][cityVal][localityVal]) {
            var neighborhoods = locationData[countryVal][stateVal][cityVal][localityVal];
            for (var i = 0; i < neighborhoods.length; i++) {
                $neighborhood.append('<option value="' + neighborhoods[i] + '">' + tName(neighborhoods[i]) + '</option>');
            }
        }
    });

    initCountries();
});

// Emergency Fix for Turkish Dropdown (Applied by AI)
if (document.documentElement.lang === 'tr' || document.documentElement.lang === 'tr-TR') {
    document.addEventListener("DOMContentLoaded", function () {
        var selectCountry = document.getElementById("select-country");
        if (selectCountry) {
            setTimeout(function () {
                if (typeof locationData !== 'undefined') {
                    var items = [];
                    for (var key in locationData) {
                        if (locationData.hasOwnProperty(key)) {
                            var name = key;
                            if (typeof nameTranslations !== 'undefined' && nameTranslations.tr && nameTranslations.tr[key]) {
                                name = nameTranslations.tr[key];
                            }
                            items.push({ key: key, name: name });
                        }
                    }
                    items.sort(function (a, b) { return a.name.localeCompare(b.name); });

                    selectCountry.innerHTML = '<option value="">Tüm Ülkeler</option>';
                    items.forEach(function (item) {
                        var option = document.createElement("option");
                        option.value = item.key;
                        option.textContent = item.name;
                        selectCountry.appendChild(option);
                    });

                    if (window.jQuery && window.jQuery.fn.niceSelect) {
                        window.jQuery(selectCountry).niceSelect('update');
                        window.jQuery(selectCountry).next('.nice-select').find('.current').text("Tüm Ülkeler");
                    }
                }
            }, 100);
        }
    });
}
